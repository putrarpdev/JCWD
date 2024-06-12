'use client'

import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react'

// interface NavItem {
//     label: string
//     subLabel?: string
//     children?: Array<NavItem>
//     href?: string
// }

// const NAV_ITEMS: Array<NavItem> = [
//     {
//         label: 'Inspiration',
//     },
// ]

export default function NavBar() {
    return (
        <Box position={'absolute'} w={'100%'}>
            <Flex
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                    justifyContent={'center'}>
                    {/* <Box>
                        <DesktopNav />
                    </Box> */}
                    <Text
                        fontSize='2xl'
                        fontWeight={'bold'}
                        color={'lightblue'}>
                        putrarp
                    </Text>
                    <Text
                        fontWeight={'bold'}
                        color={'white'}>
                        dev
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

// const DesktopNav = () => {
//     const linkColor = 'white'
//     const linkHoverColor = 'blue'

//     return (
//         <Stack
//             direction={'row'}
//             spacing={4}>
//             {NAV_ITEMS.map((navItem) => (
//                 <Box key={navItem.label}>
//                     <Box
//                         as="a"
//                         p={2}
//                         href={navItem.href ?? '#'}
//                         fontSize={'sm'}
//                         fontWeight={500}
//                         color={linkColor}
//                         _hover={{
//                             textDecoration: 'none',
//                             color: linkHoverColor,
//                         }}>
//                         {navItem.label}
//                     </Box>
//                 </Box>
//             ))}
//         </Stack>
//     )
// }