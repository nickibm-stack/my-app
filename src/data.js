    // data.js

    export const useCaseList = [
  {
    key: 0,
    label: 'Manual QA',
    description: 'Use this assistant to generate manual test cases and steps from requirements or user stories.',
    prompt: 'You are a QA Analyst.'

  },
  {
    key: 1,
    label: 'Gherkin Tests',
    description: 'This assistant will generate the Test cases and steps in Gherkin format taking CTD Test Scenario.',
    prompt: 'You are a QA Analyst.'
  },
  {
    key: 2,
    label: 'Performance Testing',
    description: 'Generate a response time analysis and comparison report across test run on a set of transactions.This is helpful for multiple rounds of test run we do for load/stress/volume testing on a certain application.Input is a XLS/TXT file.',
    prompt: 'You are a QA Analyst.'
  },
  {
    key: 3,
    label: 'UI Testing(Swift)',
    description: 'Generate the User Interface test cases built using XCUITest framework for testing iOS application (Swift)',
    prompt: 'You are a QA Analyst.'
  },

]

  export const modelList = [
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

    

