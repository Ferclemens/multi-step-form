import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Info from './components/info'

function App() {

  return (
    <ChakraProvider>
      <Box className='app--container'>
        <Info/>
      </Box>
    </ChakraProvider>
  )
}

export default App
