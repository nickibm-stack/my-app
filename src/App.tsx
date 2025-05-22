import React from 'react';
import './App.scss';
import { CustomHeader } from './Components/CustomHeader';
import { Box } from './Components/Box';
import { Heading, Section, StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from '@carbon/react';


const qaHelperData = {

}
function App() {
  return (
    <div className="App">
      <CustomHeader />

      <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
        {/* <Box content='TEXT' boldText='QE Assist'/> */}
        <Section style={{ padding: 60, justifyContent: "center" }}>
          <div style={{ padding: 30 }}>
            <Heading>QE Experiments</Heading>
            <div style={{padding:20}}>
              <text> Choose a QA Scenario. Per scenario we can select a certain local LLM to help with our task.</text>
            </div>

          </div>

        </Section>

        <Section style={{ padding: 60, justifyContent: "center" }}>

          <StructuredListWrapper
          >
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head>
                  Domain/ Task
                </StructuredListCell>
                <StructuredListCell head>
                  Description
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell noWrap>
                  Manual Test Design
                </StructuredListCell>
                <StructuredListCell>
                  Use this assistant to generate manual test cases and steps from requirements or user stories.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Gherkin Tests
                </StructuredListCell>
                <StructuredListCell>
                 This assistant will generate the Test cases and steps in Gherkin format taking CTD Test Scenario.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Performance Testing
                </StructuredListCell>
                <StructuredListCell>
                 Generate a response time analysis and comparison report across test run on a set of transactions.This is helpful for multiple rounds of test run we do for load/stress/volume testing on a certain application.Input is a XLS/TXT file.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  UI Testing(Swift)
                </StructuredListCell>
                <StructuredListCell>
                 Generate the User Interface test cases built using XCUITest framework for testing iOS application (Swift)
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

        </Section>

      </div>



    </div>
  );
}

export default App;
