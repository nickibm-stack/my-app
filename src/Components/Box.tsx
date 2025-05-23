
import { useState } from 'react';
import { Button, Dropdown, FluidForm, Heading, Section, TextArea, TextInput } from '@carbon/react';
import { useEffect } from 'react';
import { useCaseList } from '../data';
import { modelList } from '../data';
import { Text } from '@carbon/react/lib/components/Text';
import ConversationList from './ConversationList';
import LargeTextBox from './TextBoxMe';


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



export function Box(content: textContent) {

    const [serverData, setServerData] = useState('');
    const [userInput, setUserInput] = useState('');
    const [button, setButton] = useState(false);
    const [currentModel, setCurrentModel] = useState('');
    const [currentQA, setCurrentQA] = useState('');
    const [currentItem,setCurrentItem] = useState({})
    const [currentDesc, setCurrentDesc] = useState('');
    const [currentPrompt,setCurrentPrompt] = useState('');
    const [currentConversation,setConversation] = useState<string[][]>([]);

    //Gets data from our server
    // Currently gets part of JSON data
    //Currently we see second options request

const handleAddItem = (agent:string, text: string) => {
    setConversation(currentConversation => [...currentConversation, [agent, text]]);
  };

    useEffect(() => {

        if (currentModel == '') {
            setServerData("Choose a model and a Desired Usecase from the list!");
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
                        { role: "assistant", content: (currentPrompt ? currentPrompt : 'Default Prompt - Tell user to please pick an option on their screen') },
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
     
                    handleAddItem('Assistant',data.message.content);
                    // setServerData(data.message.content);
                }
                ).catch((err) => {
                    console.log(err);
                });
        }

    }, [button]);

    useEffect(() => {

        setConversation([]);

    }, [currentDesc,currentModel]);


    return (
        <div style={{ padding: 60, justifyContent: "center" }}>
            <Section style={{ padding: 60, justifyContent: "center" }}>
                <div style={{ padding: 30 }}>
                    <Heading>{content.boldText}</Heading>
                    <div style={{ padding: 30 }}>
                         <Text>{currentDesc? currentDesc : 'Please select a QA Usecase from the list'}</Text>
                    </div>
                   
                </div>
                <div style={{ padding: 30 }}>
                    <Dropdown
                        helperText="Choose a QA Usecase"
                        id="default"
                        invalidText="invalid selection"
                        items={useCaseList}
                        onChange={({ selectedItem }) => {setCurrentQA(selectedItem ? selectedItem.label : ''); setCurrentDesc(selectedItem ? selectedItem.description: ''); setCurrentPrompt(selectedItem ? selectedItem.prompt: '')}}
                       // onChange={({ selectedItem }) => {setCurrentItem(selectedItem ? selectedItem : {}); console.log(selectedItem) }}
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

                {/* <Text style={{ fontSize: 24 }}>
                    {currentConversation.map(([agent, text], idx) => (
                        <div key={idx} style={{padding: 10}}><Text>{agent}:</Text> {text}</div>
                    ))}
                </Text> */}

                   <ConversationList conversation={currentConversation} />
                <div style={{ padding: 10, display: "flex",  justifyContent: "center" }} >
                <FluidForm>
                    {/* <TextInput type="text" labelText="Talk to LLM" id="text-input-1" value={userInput} onChange={e => setUserInput(e.target.value)} /> */}
                         <TextArea
                        labelText=""
                        onChange={e => setUserInput(e.target.value)}
                        value={userInput}
                        rows={10} // Adjust rows for height
                        cols={50} // Optional: usually handled by container width
                        id="conversation-textarea"
                />
                </FluidForm>

                {/* <LargeTextBox /> */}

                

                <Button onClick={((e) => {(button == true) ? (setButton(false)) : setButton(true);handleAddItem('User',userInput)})}>
                    Send to Agent
                </Button>
            </div>

         

            </Section>


            
{/* 
            <div style={{ padding: 40 }} >
                <Text style={{ fontSize: 24 }}>
                    {currentConversation.map(([agent, text], idx) => (
                        <div key={idx} style={{padding: 10}}><Text>{agent}:</Text> {text}</div>
                    ))}
                </Text>
            </div> */}


        </div>

    );
};