import { Box, Button, Collapse, Divider, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";
import { BsChevronDown } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const InputText = ({ children }) => (
    <Text mb={'0.5rem'} fontSize={'1.1rem'} fontWeight={'bold'} color={'white'} w={'100%'} textAlign={'start'}>
        {children}
    </Text>
)

export default function VideeoTax() {
    const { isOpen, onToggle } = useDisclosure();
    const [selectedTax, setSelectedTax] = useState('Select your tax classfications');
    return (
        <MainTemplate>
            <Box p={8} border={'1px solid #55DF01'}>
                <Heading mb={'2rem'} size={'lg'} color={'#55DF01'}>Get Started</Heading>

                <InputText>What is your tax classifications</InputText>
                <HStack mb={'1rem'} justifyContent={'flex-start'}>
                    <Button w={['50%', '20%']}>Individual</Button>
                    <Button w={['50%', '20%']} variant={'outline'}>Business</Button>
                </HStack>

                <Text mb={'0.5rem'}>"Individual" includes sole propertors or single-member LLCs where the owner is an individual</Text>

                <div onClick={onToggle}>
                    <Text color={'#55DF01'} as={'a'} cursor={'pointer'}>
                        Learn about tax classification
                        <Icon ml={'1rem'} as={BsChevronDown} />
                    </Text>
                    <Collapse mt={4} in={isOpen} animateOpacity>
                        <ul >
                            <li>Poor</li>
                            <li>Middle Class</li>
                            <li>Rich</li>
                            <li>Elite</li>
                        </ul>
                    </Collapse>
                </div>

                <Divider my={'2rem'} />

                <InputText>
                    Are you a united states (US) citizen, US permanent resident (green card holder), or other US resident alien?</InputText>

                <Stack mb={'1rem'} direction={['column', 'row']} w={'100%'} justifyContent={'space-between'} spacing={4}>
                    <HStack w={['100%', '40%']} spacing={4}>
                        <Button w={'100%'}>Yes</Button>
                        <Button w={'100%'} variant={'outline'}>No</Button>
                    </HStack>
                    <Button w={['100%', '60%']} variant={'outline'}>I'm not sure if I'm a US resident alien</Button>
                </Stack>

                <div onClick={onToggle}>
                    <Text color={'#55DF01'} as={'a'} cursor={'pointer'}>
                        Learn about tax classification
                        <Icon ml={'1rem'} as={BsChevronDown} />
                    </Text>
                    <Collapse mt={4} in={isOpen} animateOpacity>
                        <ul >
                            <li>Poor</li>
                            <li>Middle Class</li>
                            <li>Rich</li>
                            <li>Elite</li>
                        </ul>
                    </Collapse>
                </div>

                <Divider my={'2rem'} />

                <InputText>Federal Tax Classifications</InputText>
                <Menu>
                    <MenuButton color={'#9c9c9c'} border={'1px solid #414141 '} w={'100%'} p={2} borderRadius={'5px'} bg={'#414141'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            {selectedTax}
                            <Icon as={ChevronDownIcon} />
                        </Flex>
                    </MenuButton>
                    <MenuList onSelect={(value) => setSelectedTax(value)}>
                        <MenuItem onClick={() => setSelectedTax('C corporation')} value="C corporation">
                            C corporation
                        </MenuItem>
                        <MenuItem onClick={() => setSelectedTax('S corporation')} value="S corporation">
                            S corporation
                        </MenuItem>
                        <MenuItem
                            onClick={() => setSelectedTax('Partnership')} value="Partnership">
                            Partnership
                        </MenuItem>
                        <MenuItem
                            onClick={() => setSelectedTax('Trust/Estate')} value="Trust/Estate">
                            Trust / Estate
                        </MenuItem>
                        <MenuItem
                            onClick={() => setSelectedTax('Limited liability Company')} value="Limited liability Company">
                            Limited liability Company
                        </MenuItem>
                        <MenuItem
                            onClick={() => setSelectedTax('Others')} value="Others">
                            Others
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </MainTemplate>
    )
}