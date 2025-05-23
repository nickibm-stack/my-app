import './App.scss';
import { CustomHeader } from './Components/CustomHeader';
import { Heading, Section, StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from '@carbon/react';
import { useCaseList } from './data';
import { QABox } from './Components/QABox';
import { Text } from '@carbon/react/lib/components/Text';



function App() {
  return (
    <div className="App">
      <CustomHeader />

      <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
        {/* <Box content='TEXT' boldText='QE Assist'/> */}
        <Section style={{ padding: 60, justifyContent: "center" }}>
          <div style={{ padding: 30 }}>
            <Heading>QE Experiments</Heading>
            <div style={{ padding: 20 }}>
              <Text>Choose a QA Scenario. Per scenario we can select a certain local LLM to help with our task.</Text>
            </div>

          </div>

        </Section>

        <Section style={{ padding: 60, justifyContent: "center" }}>
          <Heading style={{fontSize:20}}>Current Capabilities</Heading>
          <QABox />

        </Section>

      </div>



    </div>
  );
}

export default App;
