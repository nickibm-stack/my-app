
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


export function Box(content: textContent) {

    const [serverData, setServerData] = useState('');
    const [userInput, setUserInput] = useState('');
    const [button, setButton] = useState(false);
    const [currentModel, setCurrentModel] = useState('');

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
                        { role: "user", content: "d" },
                        { role: "assistant", content: "You are a QA agent - " },
                        { role: "assistant", content: userInput }
                    ],
                    stream: false,
                }),
            })
                .then((res) => {
                    // return res.json();
                    // console.log(res.text())
                    return res.json();


                }).then((data) => {
                    // console.log(data);
                    console.log(data);
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
                </div>
                <div style={{ padding: 30 }}>
                    <Dropdown
                        helperText="Choose an LLM to use"
                        id="default"
                        invalidText="invalid selection"
                        // itemToString={() => {}}
                        items={modelList}
                        onChange={({ selectedItem }) => setCurrentModel(selectedItem ? selectedItem.label : '')}
                        label="models"
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