
import { useState } from 'react';
import { Button, Dropdown, FluidForm, Heading, Section, TextInput } from '@carbon/react';
import { useEffect } from 'react';

/**
 * @typedef {object} textContent
 * textContent is a type to define some text we want to format for our page in some way
 * @property {string} content - Main text content
 * @property {string}  boldText - The bolded text we want
 */
type textContent = {
    content: string;
    boldText: string;
};


const modelList = [
    {
        label: 'gemma3:latest'
    },
    {
        label: 'deepseek-r1:32b'
    },
    {
        label: 'qwen3:0.6b'
    },
    {
        label: 'granite3.2:latest'
    },
    {
        label: 'deepseek-r1:latest'
    },
    {
        label: 'starcoder2:latest'
    },

]

const useCaseList = [
    {
        label:'Manual QA',
        description: 'Use this assistant to generate manual test cases and steps from requirements or user stories.',
        prompt: 'You are a QA Analyst.'

    },
    {
        label: 'Gherkin Tests',
        description: 'This assistant will generate the Test cases and steps in Gherkin format taking CTD Test Scenario.',
        prompt: 'You are a QA Analyst.'
    },
    {
        label: 'Performance Testing',
        description: 'Generate a response time analysis and comparison report across test run on a set of transactions.This is helpful for multiple rounds of test run we do for load/stress/volume testing on a certain application.Input is a XLS/TXT file.',
        prompt: 'You are a QA Analyst.'
    },
    {
        label: 'UI Testing(Swift)',
        description: 'Generate the User Interface test cases built using XCUITest framework for testing iOS application (Swift)',
        prompt: 'You are a QA Analyst.'
    },

]


export function Box(content: textContent) {

    const [serverData, setServerData] = useState('');
    const [userInput, setUserInput] = useState('');
    const [button, setButton] = useState(false);
    const [currentModel, setCurrentModel] = useState('');
    const [currentQA, setCurrentQA] = useState('');
    const [currentDesc, setCurrentDesc] = useState('');
    const [currentPrompt,setCurrentPrompt] = useState('');

    //Gets data from our server
    // Currently gets part of JSON data
    //Currently we see second options request
    useEffect(() => {

        if (currentModel == '') {
            setServerData("Choose a LLM!");
        }
        else {
            fetch('http://localhost:11434/api/chat', {
                method: "POST",
                mode: 'cors',
                referrerPolicy: 'no-referrer',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: currentModel,
                    messages: [
                        { role: "assistant", content: (currentPrompt? currentPrompt : 'Default Prompt - Tell user to please pick an option on their screen') },
                        { role: "user", content: userInput }
                    ],
                    stream: false,
                }),
            })
                .then((res) => {
                    // return res.json();
                    // console.log(res.text())
                    return res.json();


                }).then((data) => {
     
                    setServerData(data.message.content);
                }
                ).catch((err) => {
                    console.log(err);
                });
        }

    }, [button]);
    return (
        <div style={{ padding: 60, justifyContent: "center" }}>
            <Section style={{ padding: 60, justifyContent: "center" }}>
                <div style={{ padding: 30 }}>
                    <Heading>{content.boldText}</Heading>
                    <div style={{ padding: 30 }}>
                         <text>{currentDesc? currentDesc : 'Please select a QA Usecase from the list'}</text>
                    </div>
                   
                </div>
                <div style={{ padding: 30 }}>
                    <Dropdown
                        helperText="Choose a QA Usecase"
                        id="default"
                        invalidText="invalid selection"
                        items={useCaseList}
                        onChange={({ selectedItem }) => {setCurrentQA(selectedItem ? selectedItem.label : ''); setCurrentDesc(selectedItem ? selectedItem.description: ''); setCurrentPrompt(selectedItem ? selectedItem.prompt: '')}}
                        label="Select a Usecase"
                        titleText="QA Functions"
                        type="default"
                        warnText="please notice the warning"
                    />
                </div>

                   <div style={{ padding: 30 }}>
                    <Dropdown
                        helperText="Choose an LLM to use"
                        id="default"
                        invalidText="invalid selection"
                        items={modelList}
                        onChange={({ selectedItem }) => setCurrentModel(selectedItem ? selectedItem.label : '')}
                        label="Select a model"
                        titleText="Models"
                        type="default"
                        warnText="please notice the warning"
                    />
                </div>

            </Section>


            <div style={{ padding: 10, display: "flex", }} >
                <FluidForm>
                    <TextInput type="text" labelText="Text input label" id="text-input-1" value={userInput} onChange={e => setUserInput(e.target.value)} />
                </FluidForm>

                <Button onClick={e => (button == true) ? (setButton(false)) : setButton(true)}>
                    Send to Agent
                </Button>
            </div>

            <div style={{ padding: 40 }} >
                <text style={{ fontSize: 24 }}> {serverData}</ text>
            </div>


        </div>

    );
};