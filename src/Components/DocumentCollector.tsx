
import { useState } from 'react';
import { Button, Dropdown, FileUploader, FluidForm, Heading, Section, TextArea, TextInput } from '@carbon/react';
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



export function DocumentCollector(content: textContent) {

    const [serverData, setServerData] = useState('');
    const [userInput, setUserInput] = useState('');
    const [button, setButton] = useState(false);
    const [currentModel, setCurrentModel] = useState('');
    const [currentQA, setCurrentQA] = useState('');
    const [currentItem, setCurrentItem] = useState({})
    const [currentDesc, setCurrentDesc] = useState('');
    const [currentPrompt, setCurrentPrompt] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [currentConversation, setConversation] = useState<string[][]>([]);

    //Gets data from our server
    // Currently gets part of JSON data
    //Currently we see second options request


    const handleFileUpload = async () => {
        if (!uploadedFile) {
            alert("Please select a PDF file to upload.");
            return;
        }
        const formData = new FormData();
        formData.append('file', uploadedFile);

        try {
            const response = await fetch('http://localhost:8000/upload/', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('File upload failed');
            }
            const data = await response.json();
            alert('File uploaded successfully!');
            // Optionally handle response data here
        } catch (error) {
            alert('Error uploading file');
            console.error(error);
        }
    };

    const handleAddItem = (agent: string, text: string) => {
        setConversation(currentConversation => [...currentConversation, [agent, text]]);
    };

    useEffect(() => {

        if (currentModel == '') {
            setServerData("Choose a model and a Desired Usecase from the list!");
        }
        else {
            const askForm = new FormData();
            askForm.append('question', userInput);
            askForm.append('model', currentModel);
              askForm.append('system_prompt', currentPrompt);
            fetch('http://127.0.0.1:8000/ask/', {
                method: "POST",
                mode: 'cors',
                referrerPolicy: 'no-referrer',
                body: askForm,
            })
                .then((res) => {
                    // return res.json();
                    // console.log(res.text())
                    return res.json()
                    // return res.json();


                }).then((data) => {
                    // return res.json();
                    // console.log(res.text())

                    handleAddItem('Assistant', data['answer']);
                    // return res.json();


                })

                .catch((err) => {
                    console.log(err);
                });
        }

    }, [button]);

    useEffect(() => {

        setConversation([]);

    }, [currentDesc, currentModel]);


    return (
        <div style={{ padding: 60, justifyContent: "center" }}>
            <Section style={{ padding: 60, justifyContent: "center" }}>
                <div style={{ padding: 30 }}>
                    <Heading>{content.boldText}</Heading>
                    <div style={{ padding: 30 }}>
                        <Text>Upload documents to get insights with relation to these</Text>
                        <br />
                        <Text>{currentDesc ? currentDesc : 'Please select a QA Usecase from the list'}</Text>
                    </div>

                </div>

                <div className="cds--file__container">
                    <FileUploader
                        accept={['.pdf']}
                        buttonKind="primary"
                        buttonLabel="Add file"
                        filenameStatus="edit"
                        iconDescription="Delete file"
                        labelDescription="Max file size is 500 MB. Only .pdf files are supported."
                        labelTitle="Upload files"
                        multiple={false}
                        name="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setUploadedFile(file);
                        }}
                        size="md"
                    />
                    <Button
                        kind="secondary"
                        onClick={handleFileUpload}
                        disabled={!uploadedFile}
                        style={{ marginLeft: 16 }}
                    >
                        Upload PDF
                    </Button>
                </div>
                <div style={{ padding: 30 }}>
                    <Dropdown
                        helperText="Choose a QA Usecase"
                        id="default"
                        invalidText="invalid selection"
                        items={useCaseList}
                        onChange={({ selectedItem }) => { setCurrentQA(selectedItem ? selectedItem.label : ''); setCurrentDesc(selectedItem ? selectedItem.description : ''); setCurrentPrompt(selectedItem ? selectedItem.prompt : '') }}
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
                <div style={{ padding: 10, display: "flex", justifyContent: "center" }} >
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



                    <Button onClick={((e) => { (button == true) ? (setButton(false)) : setButton(true); handleAddItem('User', userInput) })}>
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