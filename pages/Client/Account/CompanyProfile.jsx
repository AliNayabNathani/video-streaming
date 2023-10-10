import { Box, Button, Divider, Flex, HStack, Heading, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack } from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const InputText = ({ children }) => (
    <Text fontWeight={'bold'} color={'white'} w={'100%'} textAlign={'start'}>
        {children}
    </Text>
)

const CountryDropdown = ({ countryValue, setCountryValue }) => (
    <Menu>
        <MenuButton color={''} border={'1px solid #414141 '} w={'100%'} p={2} borderRadius={'5px'} bg={'#414141'}>
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

const StateDropdown = ({ stateValue, setStateValue }) => (
    <Menu>
        <MenuButton color={''} border={'1px solid #414141 '} w={'100%'} p={2} borderRadius={'5px'} bg={'#414141'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                {stateValue}
                <Icon as={ChevronDownIcon} />
            </Flex>
        </MenuButton>
        <MenuList onSelect={(value) => setStateValue(value)}>
            <MenuItem onClick={() => setStateValue('California')} value="California">
                California
            </MenuItem>
            <MenuItem onClick={() => setStateValue('Los Angeles')} value="Los Angeles">
                Los Angeles
            </MenuItem>
            <MenuItem onClick={() => setStateValue('Florida')} value="Florida">
                Florida
            </MenuItem>
        </MenuList>
    </Menu>
);

const CityDropdown = ({ cityValue, setCityValue }) => (
    <Menu>
        <MenuButton color={'414141'} border={'1px solid #414141 '} w={'100%'} p={2} borderRadius={'5px'} bg={'#414141'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                {cityValue}
                <Icon as={ChevronDownIcon} />
            </Flex>
        </MenuButton>
        <MenuList onSelect={(value) => setCityValue(value)}>
            <MenuItem onClick={() => setCityValue('Chicago')} value="Chicago">
                Chicago
            </MenuItem>
            <MenuItem onClick={() => setCityValue('New York City')} value="New York City">
                New York City
            </MenuItem>
            <MenuItem onClick={() => setCityValue('Boston')} value="Boston">
                Boston
            </MenuItem>
        </MenuList>
    </Menu>
);

export default function CompanyProfile() {
    const [countryValue, setCountryValue] = useState('Select Country/Region');
    const [stateValue, setStateValue] = useState('Select State/Region');
    const [cityValue, setCityValue] = useState('Select City');
    return (
        <MainTemplate>
            <Heading mb={'1rem'} size={'lg'}>Company Profile</Heading>
            <Text>Please enter your primary address wjere your company currently operates</Text>

            <Box bg={'#232323'} p={[8, 10]} mb={'2rem'} borderRadius={'5px'}>
                <Stack direction={['column', 'row']} spacing={8}>
                    <VStack w={['100%', '50%']}>
                        <InputText>Country/Region</InputText>
                        <CountryDropdown countryValue={countryValue} setCountryValue={setCountryValue} />

                        <InputText>Email</InputText>
                        <Input w={'100%'} bg={'#414141'} placeholder="john@gmail.com" />

                        <InputText>Phone Number</InputText>
                        <Input w={'100%'} type="number" bg={'#414141'} placeholder="00" />

                        <InputText>Address Line 1</InputText>
                        <Input w={'100%'} bg={'#414141'} placeholder="Enter your address" />

                        <InputText>State/Province/Region</InputText>
                        <StateDropdown stateValue={stateValue} setStateValue={setStateValue} />
                    </VStack>
                    <VStack w={['100%', '50%']}>
                        <InputText>Company Name</InputText>
                        <Input bg={'#414141'} w={'100%'} />

                        <InputText>Postal Code</InputText>
                        <Input w={'100%'} bg={'#414141'} />

                        <InputText>City</InputText>
                        <CityDropdown cityValue={cityValue} setCityValue={setCityValue} />

                        <InputText>Address Line 02</InputText>
                        <Input w={'100%'} bg={'#414141'} />
                    </VStack>
                </Stack>
            </Box>

            <Box border={'1px solid #55DF01'} p={4} borderRadius={'5px'}>
                <Text mb={'2rem'}>Please keep your company profile up-to-date. You must complete a company profile even if you`re not part of an organization. If you are setting up as an individual, enter your first and last name as the company name</Text>
                <Divider mb={'2rem'} />
                <Stack direction={['column', 'row']} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Heading color={'#55DF01'} size={'sm'}>Change Company Profile: </Heading>
                        <Text>To make changes, click on the entry you want to change, and then when done, click save.</Text>
                    </Box>
                    <Button>Save</Button>
                </Stack>
            </Box>
        </MainTemplate>
    );
}