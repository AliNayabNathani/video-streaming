import { Box, Button, Checkbox, Collapse, Container, Flex, FormLabel, HStack, Heading, Icon, Input, InputGroup, InputRightElement, List, ListItem, Stack, Text, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaCcVisa } from "react-icons/fa";
import { useRouter } from "next/router";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { AiOutlineCalendar } from "react-icons/ai";
import Nav from "../../../components/Client/Bars/DetailsNavbar";
import Footer from "../../../components/Client/Bars/Footer";
import MainTemplate from "../../../components/Client/Templates/Main";

export default function CompleteSetup() {

    const [startDate, setStartDate] = useState(new Date());
    const router = useRouter();
    const { isOpen, onToggle } = useDisclosure()
    const [cardNumber, setCardNumber] = useState(['', '', '', '']);
    console.log(cardNumber);
    const handleInputChange = (index, value) => {
        const newCardNumber = [...cardNumber];
        newCardNumber[index] = value;
        setCardNumber(newCardNumber);
    };
    const handleClear = () => {
        // setStartDate(new Date());
        updateSearchQuery("");
    };
    const QuestionContainer = ({ children }) => (
        <Box my={5} bg={'#232323'} border={'2px solid black'}>
            <VStack p={5} mx={5} alignItems={'start'}>
                {children}
            </VStack>
        </Box>
    );

    const handleRoute = (to) => {
        router.push(to);
    }

    return (
        <MainTemplate>
            <Box mx={'20%'}>
                <Heading textAlign={'start'} size={'lg'}>Complete Account Setup</Heading>
                <QuestionContainer>
                    <FormLabel>Which Country do you live in?</FormLabel>
                    <Input width={{ base: '100%', md: '40%' }} size={'sm'} />
                    <div onClick={onToggle}>
                        <Text textDecor={'underline'}>
                            Countries Not Supported
                            <Icon ml={'1rem'} as={BsChevronDown} />
                        </Text>
                        <Collapse mt={4} in={isOpen} animateOpacity>
                            <ul >
                                <li>Iran</li>
                                <li>Afghanistan</li>
                                <li>North Korea</li>
                                <li>China</li>
                            </ul>
                        </Collapse>
                    </div>
                    <Text>Add your banking information where do you want your money sent?</Text>
                    <Text>Too see the questions, tell us where you live</Text>
                </QuestionContainer>

                <QuestionContainer>
                    <Text>TAX Information</Text>
                    <Collapse in={isOpen} animateOpacity>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis saepe voluptate, ipsa porro cumque dolorem eos. Corrupti ad minima, fugit alias voluptate quisquam quos pariatur harum. Blanditiis, eum. Velit, sapiente.
                    </Collapse>
                </QuestionContainer>
                <QuestionContainer>
                    <Text>Billing Preferences</Text>
                </QuestionContainer>
                <Heading size={'md'}>Assesment Questions</Heading>
                <QuestionContainer>
                    <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={['center', 'space-between']}>
                        <Text mr={'3rem'}>Tax Classification</Text>
                        <div>
                            <Button w={32}>Individual</Button>
                            <Button w={32} variant={'outline'} mt={['1rem', '0']} ml={['0', '1rem']}>Business</Button>
                        </div>
                    </Stack>
                </QuestionContainer>
                <QuestionContainer>
                    <Text fontSize={'md'} textDecor={'underline'}>If Individual</Text>
                    <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
                        <Text mr={'2rem'}>US Citizen, US Permanent Resident</Text>
                        <div>
                            <Button w={32}>Yes</Button>
                            <Button w={32} variant={'outline'} mt={['1rem', '0']} ml={['0', '1rem']}>No</Button>
                        </div>
                    </Stack>
                </QuestionContainer>
                <QuestionContainer>
                    <Text fontSize={'md'}>Tax Identity Info</Text>
                    <VStack width={'100%'} alignItems={'start'}>
                        <Text >Name on Return</Text>
                        <Input bg={'whiteAlpha.400'} mb={3} width={{ base: '100%', md: '50%' }} />
                        <Text >Address</Text>
                        <Input bg={'whiteAlpha.400'} mb={3} width={{ base: '100%', md: '50%' }} />

                        <HStack mb={3} width={{ base: '100%', md: '50%' }} justifyContent={'space-between'}>
                            <Text>T/N</Text>
                            <Button width={'100%'} >SSN</Button>
                            <Button width={'100%'} variant={'outline'}>TIN</Button>
                        </HStack>
                        <Stack mb={3} width={{ base: '100%', md: '50%' }} direction={['column', 'row']} >
                            <Icon as={FaCcVisa} boxSize={10} />
                            <HStack>
                                {cardNumber.map((value, index) => (
                                    <Input
                                        key={index}
                                        p={[0, 2]}
                                        type={index < 3 ? 'password' : 'text'}
                                        maxLength={4}
                                        value={value}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                ))}
                            </HStack>
                        </Stack>
                        <Stack width={'100%'} direction={['column', 'row']} justifyContent={'space-between'} alignItems={'center'}>
                            <Checkbox mb={3} colorScheme='green'>TAX info submitted immediately upon elec sign</Checkbox>
                            <Button mb={3}>Continue</Button>
                        </Stack>
                    </VStack>

                </QuestionContainer>
                <Text>2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quisquam iure laudantium delectus iste quis amet in mollitia placeat nobis. Ratione, rem obcaecati. Maiores neque recusandae temporibus, animi consequatur consequuntur facere atque dicta nesciunt quas, suscipit, hic porro cum. Esse architecto ipsa, facilis minima nulla perferendis eius asperiores similique nesciunt!</Text>
                <br />
                <Text mb={2} textDecor={'underline'}>Certification Instructions</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non alias unde quam earum saepe fugit quod quibusdam, quia eius. Molestias, dicta unde reprehenderit dolore quidem iste dolorem nam facere consequatur sequi? Vitae voluptas reprehenderit illo consequuntur perspiciatis fugit numquam facilis laboriosam aut laudantium, magni a quos odit delectus voluptate.</Text>
                <br />
                <FormLabel>Signature</FormLabel>
                <Input width={{ base: '100%', md: '25%' }} placeholder="Type full name" />
                <Text mb={3}>By typing my name on given date, I am signing the TAX form under penalties of perjury</Text>
                <FormLabel>Date</FormLabel>

                <Flex width={'25%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                    <DatePicker
                        className="datepicker"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <Icon as={AiOutlineCalendar} />
                </Flex>

                <Stack direction={{ base: 'column', md: 'row' }} py={10} justifyContent={{ base: 'center', md: 'flex-end' }}>
                    <Button>Make Changes</Button>
                    <Button variant={'outline'} onClick={() => handleRoute('/Client/Signature')}>
                        Submit for review
                    </Button>
                </Stack>
            </Box>
        </MainTemplate>
    );
}