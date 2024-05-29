import { Box, Center, Divider, Grid, Text } from '@chakra-ui/react';
import { useState, FormEvent } from 'react';
import './App.css';
import ListItem from './components/list';
import Form from './components/form';

interface Task {
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { text: 'sapien nec sagittis aliquam malesuada bibendum', completed: false },
    { text: 'nullam ac tortor vitae purus faucibus', completed: false },
    { text: 'fringilla phasellus faucibus scelerisque eleifend donec', completed: false },
    { text: 'neque egestas congue quisque egestas diam', completed: false },
  ]);

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter(task => task.text !== taskToDelete));
  };

  const toggleTaskCompletion = (taskToToggle: string) => {
    setTasks(tasks.map(task =>
      task.text === taskToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = formData.get('task') as string;
    if (newTask.trim()) {
      addTask(newTask);
      event.currentTarget.reset();
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <>
      <Center>
        <Box p='1rem'>
          <Grid templateColumns='repeat(1, 1fr)' gap={3} w='100%'>
            <Box>
              <Text color='white' align='center' fontWeight='bold'>Chores ToDo List</Text>
            </Box>
            <Box>
              {tasks.map((task, index) => (
                <ListItem
                  key={index}
                  text={task.text}
                  completed={task.completed}
                  onDelete={deleteTask}
                  onToggle={toggleTaskCompletion}
                />
              ))}
            </Box>
            <Divider w='100%' />
            <Box>
              <Text color='white' fontWeight='bold' textAlign='center'>Done: {completedCount}</Text>
            </Box>
            <Box>
              <form onSubmit={handleFormSubmit}>
                <Form />
              </form>
            </Box>
          </Grid>
        </Box>
      </Center>
    </>
  );
}

export default App;
