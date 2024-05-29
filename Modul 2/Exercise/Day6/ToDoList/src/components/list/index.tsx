import { DeleteIcon } from "@chakra-ui/icons";
import { Center, Checkbox, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  completed: boolean;
  onDelete: (task: string) => void;
  onToggle: (task: string) => void;
}

function ListItem({ text, completed, onDelete, onToggle }: Props) {

  const handleDelete = () => {
    onDelete(text);
  };

  const handleToggle = () => {
    onToggle(text);
  };

  return (
    <>
      <Center>
        <Grid templateColumns='95% 5%' gap={3} w='100%' alignItems='center'>
          <GridItem>
            <Checkbox p='0.5rem' isChecked={completed} onChange={handleToggle}>
              <Text pr='1rem' pl='1rem' color='white'>
                {text}
              </Text>
            </Checkbox>
          </GridItem>
          <GridItem>
            <IconButton
              size='xs'
              variant='outline'
              colorScheme='red'
              aria-label='Send email'
              icon={<DeleteIcon />}
              onClick={handleDelete}
            />
          </GridItem>
        </Grid>
      </Center>
    </>
  )
}

export default ListItem;