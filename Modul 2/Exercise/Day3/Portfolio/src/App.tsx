import { Box } from '@chakra-ui/layout'
import './App.css'
import NavBar from './components/navbar'
import Jumbotron from './components/jumbotron'

function App() {

  return (
    <>
      <Box bg={'black'}>
        {/* Navbar */}
        <Box>
          <NavBar />
        </Box>
        {/* Jumbotron */}
        <Box>
          <Jumbotron />
        </Box>
        <Box id='profile'>
          <Box
            backgroundColor={'blue'}
            h={'100vh'}>

          </Box>
        </Box>
        <Box>
          <Box
            backgroundColor={'green'}
            h={'100vh'}>

          </Box>
        </Box>
        <Box>
          <Box
            backgroundColor={'purple'}
            h={'100vh'}>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
