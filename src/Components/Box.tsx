
import {  useState } from 'react';
import { Heading,Section } from '@carbon/react';
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

    //Gets data from our server
    // Currently gets part of JSON data
    //Currently we see second options request
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/test', { method: "GET", mode: 'cors', referrerPolicy: 'no-referrer' })
    //         .then((res) => {
    //             return res.json();

    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setServerData(data['Hello']); // Data is of type Object here 

    //         });
    // }, []);
    return (
        <div>
            <Section>
                <Heading>{content.boldText}</Heading>
             
            </Section>
            {/* <text>
                {content.content}
            </text> */}
            {/* <br /> */}
            {/* <b>{content.boldText}</b> */}
            {/* <text> {serverData}</ text> */}
            
        </div>
      
      );
  };