import { Box, Button, Input, Text } from "@chakra-ui/react";

function Form() {
  return (
    <>
      <Box p='0.35rem'><Text mb='8px' color='white' textAlign='left'>Value:</Text></Box>
      <Box p='0.35rem'><Input name='task' textColor='white'/></Box>
      <Box p='0.35rem'><Button type='submit' bg='#9BCFF7'>Add Task</Button></Box>
    </>
  )
}

export default Form;