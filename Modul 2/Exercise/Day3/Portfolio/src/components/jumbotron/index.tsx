import { Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';

function Jumbotron() {
    return (
        <Box
            className="jtbg">
            <Grid
                pos={'relative'}
                h={'100vh'}
                w={'100%'}
                templateColumns={'20% 20% 35% 25%'}
                templateRows={'31% 31% 31% 7%'}
                gap={0}>
                <GridItem
                    colSpan={2}
                    rowSpan={2}
                    alignContent={'end'}
                    pl={'10rem'}>
                    <Box>
                        <Text
                            fontSize='4rem'
                            whiteSpace="pre-line"
                            color={'white'}>
                            <Typewriter
                                options={{
                                    strings: ['Hello\nI\'m Putra.'],
                                    autoStart: true,
                                    loop: false,
                                    deleteSpeed: 99999999,
                                }}
                            />
                        </Text>
                    </Box>
                </GridItem>
                <GridItem
                    pt={'5rem'}
                    rowSpan={3}
                    alignContent={'center'}>
                    <Image
                        src='happy-full-body-boy.png'
                        alt='Memoji' />
                </GridItem>
                <GridItem
                    pt={'5rem'}
                    rowSpan={3}
                    alignContent={'center'}
                    pr={'10rem'}>
                    <Text
                        fontSize='2xl'
                        whiteSpace="pre-line"
                        color={'lightgray'}
                        align={'right'} >
                        Years of
                        <br />
                        Experience
                    </Text>
                    <Text
                        fontSize='8xl'
                        color={'white'}
                        align={'right'}>
                        6+
                    </Text>
                    <Text
                        fontSize='2xl'
                        color={'lightgray'}
                        align={'right'} >
                        Completed
                        <br />
                        Projects
                    </Text>
                    <Text
                        fontSize='8xl'
                        color={'white'}
                        align={'right'}>
                        100+
                    </Text>
                    <Text
                        fontSize='2xl'
                        color={'lightgray'}
                        align={'right'} >
                        Happy
                        <br />
                        Clients
                    </Text>
                    <Text
                        fontSize='8xl'
                        color={'white'}
                        align={'right'}>
                        20+
                    </Text>
                </GridItem>
                <GridItem
                    fontSize='1rem'
                    colSpan={2}
                    pl={'10rem'} >
                    <Text color={'gray'}>
                        Hi, I'm Putra Rizki Pradana, a passionate Software Application Engineer Manager at OONA Insurance in Jakarta, Indonesia. With over five years at OONA, I've developed and managed projects like MyOONA.id and the KahOONA agency platform. I excel in creating innovative solutions and leading rebranding efforts for our mobile apps. 🌟

                        My technical expertise spans .Net, React, Node.js, and Flutter. I love working in collaborative environments and driving high-quality solutions forward. Feel free to connect with me to discuss technology, software development, or potential collaborations! 🚀
                    </Text>
                </GridItem>
                <GridItem
                    fontSize='1rem'
                    colSpan={4}
                    alignContent={'baseline'}>
                    <Link href='#profile'>
                        <Text color={'white'} align={'center'} fontWeight={'bold'}>
                            My Profile
                        </Text>
                    </Link>
                </GridItem>
            </Grid >
        </Box>
    )
}

export default Jumbotron