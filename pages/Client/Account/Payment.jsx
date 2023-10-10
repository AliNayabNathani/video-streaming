import {
    Box, Button, Checkbox, Flex, HStack, Heading, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Stack, Text, VStack, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Tfoot,
} from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

const InputText = ({ children }) => (
    <Text fontWeight={'bold'} color={'white'} w={'100%'} mb={'0.5rem'} textAlign={'start'}>
        {children}
    </Text>
)

const accountData = [
    {
        accountNumber: 1234567890,
        paymentDetails: 'You will be paid in: USD ($)',
        collapseDetails: '',
    },
    {
        accountNumber: 9876543210,
        paymentDetails: 'You will be paid in: EUR (€)',
        collapseDetails: '',
    }
]

const accountColumns = ['Bank Account', 'Payment Details', 'Collapse Details']

const PaymentTable = () => {
    var num = 0;
    return (
        <TableContainer mb={'2rem'}
            mt={"1rem"}
            borderRadius={"10px"}
            borderWidth={"2px"}
            borderColor={"blackAlpha.600"}
            bg={"#232323"}
            p={[4, 8]}>
            <Table colorScheme='gray'>
                <Thead bg={"#181818"}>
                    <Tr>
                        {accountColumns.map((c, index) => (
                            <Th
                                key={index}
                                textAlign={"center"}
                                maxWidth={"10rem"}
                                px={"10px"}
                                border={0}
                                borderTop={'1px solid RGBA(255, 255, 255, 0.48)'}
                                color="white">{c}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {accountData.map((item, index) => {
                        { num++ }
                        return (
                            <>
                                <Tr style={num % 2 === 1 ?
                                    { background: 'RGBA(0, 0, 0, 0.05)' } :
                                    { background: 'RGBA(255, 255, 255, 0.15)' }}
                                    key={index}>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                        {item.accountNumber}
                                    </Td>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                        {item.paymentDetails}
                                    </Td>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                        {item.collapseDetails}
                                    </Td>
                                </Tr>

                                <Tr style={num % 2 === 1 ?
                                    { background: 'RGBA(0, 0, 0, 0.05)' } :
                                    { background: 'RGBA(255, 255, 255, 0.15)' }}
                                    key={index}>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}
                                        color={'red'}
                                    >
                                        Delete Account
                                    </Td>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                        For Customer trasactions made in: all martketplaces
                                    </Td>
                                    <Td textAlign={"center"}
                                        border={0}
                                        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                        {item.collapseDetails}
                                    </Td>
                                </Tr>
                            </>
                        )
                    })}
                </Tbody>
                <Tfoot mt={'2rem'} w={'100%'} >
                    <HStack w={'100%'} alignItems={'center'} justifyContent={'space-around'}>
                        <Text color={'#55DF01'} textDecor={'underline'}>VideeO.com</Text>
                        <Text color={'#55DF01'} textDecor={'underline'}>VideeO.co.uk</Text>
                        <Text color={'#55DF01'} textDecor={'underline'}>VideeO.eu</Text>
                        <Text color={'#55DF01'} textDecor={'underline'}>VideeO.co.jp</Text>
                    </HStack>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

const CountryDropdown = ({ countryValue, setCountryValue }) => (
    <Menu>
        <MenuButton color={'#9c9c9c'} border={'1px solid #414141 '} w={'100%'} p={2} borderRadius={'5px'} bg={'#414141'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                {countryValue}
                <Icon as={ChevronDownIcon} />
            </Flex>
        </MenuButton>
        <MenuList onSelect={(value) => setCountryValue(value)}>
            <MenuItem onClick={() => setCountryValue('US')} value="US">
                US
            </MenuItem>
            <MenuItem onClick={() => setCountryValue('Africa')} value="Africa">
                Africa
            </MenuItem>
            <MenuItem onClick={() => setCountryValue('UK')} value="UK">
                UK
            </MenuItem>
        </MenuList>
    </Menu>
)

export default function Payment() {
    const [countryValue, setCountryValue] = useState('Select Country/Region');
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (value) => {
        setSelectedValue(value);
    };
    return (
        <MainTemplate>
            <Box w={'100%'} p={4} border={'1px solid #55DF01'}>
                <Heading size={'md'} color={'#55DF01'}>Add your bank account</Heading>
                <Text>
                    Videeo customers can purchase your videos in their local currency, but you can get paid in your preferred currencies. Most content providers only need one bank account to get paid for all of their sales, but we do support more advanced payment configurations.
                </Text>

                <Box my={'2rem'} p={8} bg={'#232323'} borderRadius={'5px'}>
                    <Stack direction={['column', 'row']} spacing={8}>
                        <VStack w={['100%', '50%']}>
                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Where is your bank?</InputText>
                                <CountryDropdown countryValue={countryValue} setCountryValue={setCountryValue} />
                            </Box>

                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Type of Account</InputText>
                                <RadioGroup onChange={handleChange} value={selectedValue}>
                                    <Radio borderRadius={'3px'} value="Checking">Checking</Radio>
                                    <Radio borderRadius={'3px'} ml={'3rem'} value="Savings">Savings</Radio>
                                </RadioGroup>
                            </Box>

                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Verify Account Number</InputText>
                                <Input w={'100%'} bg={'#414141'} placeholder="Enter your account number" />
                            </Box>
                        </VStack>
                        <VStack w={['100%', '50%']}>
                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Account Holder Name</InputText>
                                <Input w={'100%'} bg={'#414141'} placeholder="Enter your account number" />
                            </Box>
                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Account Number</InputText>
                                <Input w={'100%'} bg={'#414141'} placeholder="Enter your account number" />
                            </Box>
                            <Box mb={'1rem'} w={'100%'}>
                                <InputText>Routing Number</InputText>
                                <Input w={'100%'} bg={'#414141'} placeholder="Enter your account number" />
                            </Box>
                            <HStack justifyContent={'flex-end'}>
                                <Button px={8} justifyContent={'flex-end'}>Add</Button>
                                <Button variant={'outline'} px={8} justifyContent={'flex-end'}>Cancel</Button>
                            </HStack>
                        </VStack>
                    </Stack>
                </Box>

                <Text>Videeo customers can purchase your videos in their local currency, but you can get paid in your preferred currencies. Most content providers only need one bank account to get paid for all of their sales, but we do support more advanced payment configurations.</Text>

                <Box bg={'#232323'} my={'2rem'} py={4} px={8} border={'1px solid #55DF01'}>
                    <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={['center', 'space-between']}>
                        <Icon as={AiOutlineCheck} rounded={'full'} p={4} bg={'black'} color={'#55DF01'} boxSize={16} />
                        <VStack ml={['0', '2rem']} >
                            <Heading w={'100%'} textAlign={'start'} size={'md'} color={'#55DF01'}>You are setup to receive payments for all videeo marketplaces</Heading>
                            <Text>Customer transactions made in all marktplaces across videeo will be paid in USD ($) according to payment details below. we will notify you by email if there are any issues paying to your bank account.</Text>
                        </VStack>
                    </Stack>
                </Box>

                <Flex my={'1rem'} justifyContent={'flex-end'}>
                    <Button px={'2rem'} textAlign={'end'} leftIcon={<BiPlus />}>Add Another Account</Button>
                </Flex>

                <PaymentTable />
            </Box>
        </MainTemplate>
    );
}