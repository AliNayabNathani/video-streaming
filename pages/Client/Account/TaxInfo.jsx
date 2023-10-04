import { Box, Button, Checkbox, Divider, Flex, HStack, Heading, Icon, Input, Stack, Text, VStack } from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
export default function TaxInfo() {
    const [startDate, setStartDate] = useState(new Date());

    const InputText = ({ children }) => (
        <Text mb={'0.5rem'} fontWeight={'semibold'} fontSize={'1rem'} color={'white'} w={['100%', '35%']} textAlign={'start'}>
            {children}
        </Text>
    )

    const VInputText = ({ children }) => (
        <Text mb={'0.5rem'} fontWeight={'semibold'} fontSize={'1rem'} color={'white'} w={'100%'} textAlign={'start'}>
            {children}
        </Text>
    )
    return (
        <MainTemplate>
            <Box p={8} m={4} borderRadius={'5px'} border={'1px solid #55DF01'}>
                <Heading color={'#55DF01'} size={'lg'} mb={'2rem'}>Tax Information Interview</Heading>
                <InputText>What is your tax classifications</InputText>
                <HStack>
                    <Button px={'3rem'} variant={'outline'}>Individual</Button>
                    <Button px={'3rem'} >Business</Button>
                </HStack>

                <Divider my={'2rem'} />

                <Box mb={'1rem'}>
                    <InputText>What is your legal name used for tax purposes</InputText>
                    <Input bg='#414141' w={'100%'} placeholder="Enter your name" />
                </Box>

                <Box>
                    <InputText>Disregarded entity name (optional)</InputText>
                    <Input bg='#414141' w={'100%'} placeholder="Enter your name" />
                </Box>

                <Divider my={'2rem'} />

                <Box>
                    <Stack direction={['column', 'row']} mb={'2rem'} justifyContent={'space-between'}>
                        <Heading color={'#55DF01'} size={'lg'}>Permanent Address</Heading>
                        <Checkbox>Is your mailing address same as your email address</Checkbox>
                    </Stack>

                    <Stack direction={['column', 'row']} spacing={4} justifyContent={'flex-start'}>
                        <VStack w={['100%', '50%']}>
                            <Stack direction={['column', 'row']} w={'100%'} justifyContent={'space-between'}>
                                <InputText>Country/Region</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="United States" />
                            </Stack>
                            <Stack direction={['column', 'row']} w={'100%'}>
                                <InputText>Street Number</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your Street Number" />
                            </Stack>
                            <Stack direction={['column', 'row']} w={'100%'}>
                                <InputText>State</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your State" />
                            </Stack>
                        </VStack>

                        <VStack w={['100%', '50%']}>
                            <Stack direction={['column', 'row']} w={'100%'}>
                                <InputText>Apartment</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter Apartment Name" />
                            </Stack>
                            <Stack direction={['column', 'row']} w={'100%'}>
                                <InputText>City / Town</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your City or Town" />
                            </Stack>
                            <Stack direction={['column', 'row']} w={'100%'}>
                                <InputText>Zip Code</InputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your Zip Code" />
                            </Stack>
                        </VStack>
                    </Stack>
                    <HStack w={'100%'} justifyContent={['center', 'flex-end']}>
                        <Button w={'20%'} mt={'1rem'} variant={'outline'} >Done</Button>
                    </HStack>
                </Box>

                <Divider my={'2rem'} />

                <Box>
                    <Stack direction={['column', 'row']} mb={'2rem'} justifyContent={'space-between'}>
                        <Heading color={'#55DF01'} size={'lg'} >Permanent Address</Heading>
                        <Checkbox>Is your mailing address same as your email address</Checkbox>
                    </Stack>

                    <Stack direction={['column', 'row']} spacing={4} justifyContent={'flex-start'}>
                        <VStack w={['100%', '50%']}>
                            <VStack w={'100%'} justifyContent={'space-between'}>
                                <VInputText>Select your country or region of tax residence</VInputText>
                                <Input bg='#414141' w={'100%'} placeholder="Select one" />
                            </VStack>
                            <VStack w={'100%'}>
                                <VInputText>What is your country of organization?</VInputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your Street Number" />
                            </VStack>
                            <VStack w={'100%'}>
                                <VInputText>Select your classification type</VInputText>
                                <Input bg='#414141' w={'100%'} placeholder='Select one' />
                            </VStack>
                            <VStack w={'100%'}>
                                <VInputText>Are you an agent acting as an intermediary </VInputText>
                                <HStack w={'100%'}>
                                    <Button w={'50%'}>Yes</Button>
                                    <Button variant={'outline'} w={'50%'}>No</Button>
                                </HStack>
                            </VStack>
                        </VStack>

                        <VStack w={['100%', '50%']}>
                            <VStack w={'100%'}>
                                <VInputText>What is your entity type for U.S tax purposes </VInputText>
                                <Input bg='#414141' w={'100%'} placeholder="Film copyrights" />
                            </VStack>
                            <VStack w={'100%'}>
                                <VInputText>What type of rights are you licensing to Videeo?</VInputText>
                                <Input bg='#414141' w={'100%'} placeholder="Enter your City or Town" />
                            </VStack>
                            <VStack w={'100%'}>
                                <VInputText>Are you taxable for VAT purposes? </VInputText>
                                <HStack w={'100%'}>
                                    <Button w={'50%'}>Yes</Button>
                                    <Button w={'50%'} variant={'outline'}>No</Button>
                                </HStack>                            </VStack>
                        </VStack>
                    </Stack>
                </Box>

                <Divider my={'2rem'} />

                <Box p={4} borderRadius={'5px'} bg={'#232323'}>
                    <Stack direction={['column', 'row']} w={'100%'} spacing={'3rem'} justifyContent={['center', 'space-between']}>
                        <VStack w={['100%', '50%']}>
                            <VInputText>Signature(Type your full name)</VInputText>
                            <Input w={'100%'} bg={'#414141'} />
                            <Text>By typing my name on the given date, I acknowledge I am signing the tax of documentation under penalties of perjury.</Text>
                        </VStack>
                        <VStack w={['100%', '50%']}>
                            <VInputText>Date</VInputText>
                            <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <DatePicker
                                    className="datepicker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <Icon as={AiOutlineCalendar} />
                            </Flex>
                        </VStack>
                    </Stack>
                </Box>

                <HStack mt={'2rem'} w={'100%'} justifyContent={['center', 'flex-end']}>
                    <Button w={['40%', '20%']}>Submit</Button>
                </HStack>
            </Box>
        </MainTemplate>
    );
}