import { Flex, Box } from '@chakra-ui/react';
import './App.css';
import CurrencyConverter from "./components/CurrencyConverter"
import CurrencyInformation from './components/CurrencyInformation';

function App() {
  return (
    <div className="App">
      <Box 
        position = 'absolute'
        top = '0px'
        width = '100%'
        height = '410px'
        maxHeight = '100%'
        backgroundColor = '#0a146e'>
      </Box>
      <Flex justify='center' paddingTop='50px'>
        <CurrencyConverter/>
      </Flex>
      <Flex justify = 'center'>
        <CurrencyInformation/>
      </Flex>
    </div>
  );
}

export default App;
