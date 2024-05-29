import { Box, Container, Text } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Container mx="auto" textAlign="center" p="0.5rem">
        <Box borderWidth={"2px"} border={"solid"} borderRadius={"0.375rem"}  borderColor={"lightblue"}>
          <Text>This is Chakra UI</Text>
        </Box>
      </Container>
    </>
  )
}

export default App
