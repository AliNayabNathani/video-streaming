import {
    Box,
    Heading,
    Select,
    HStack,
    Stack,
    Button,
    Flex,
    VStack,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { forwardRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css'
const SearchBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button style={{ border: '1px solid teal' }} onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    return (
        <Box mx={5} borderRadius={'5px'} border={'2px'} borderColor={'blackAlpha.600'}>
            <VStack my={5}>
                <HStack width={'100%'} px={{ base: '5', md: '10' }} justifyContent={'space-between'}>
                    <Stack direction={{ base: 'column', md: 'row' }} alignItems={'center'} >
                        <Heading textAlign={'center'} size={'md'}>Sort By</Heading>
                        <FormLabel>From</FormLabel>
                        <DatePicker
                            className='custom-datepicker'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <FormLabel >To</FormLabel>
                        <DatePicker
                            className='custom-datepicker'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} />
                    </Stack>
                    <Stack direction={{ base: 'column', md: 'row' }} textAlign={'center'}>
                        <FormLabel textAlign={'center'}> Search all columns</FormLabel>
                        <Input mb={3} />
                        <Button colorScheme='teal' size={{ base: 'sm', md: 'md' }} >Apply</Button>
                        <Button colorScheme='teal' size={{ base: 'sm', md: 'md' }} >Clear </Button>
                    </Stack>
                </HStack>
                <HStack justifyContent={{ base: 'center', md: 'flex-start' }} width={'100%'} px={10}>
                    <Flex alignItems={'center'}>
                        <FormLabel>Show</FormLabel>
                        <Select mr={'5px'} defaultValue={'10'}>
                            <option value="10">10</option>
                            <option value="25" >25</option>
                            <option value="50" >50</option>
                            <option value="100" >100</option>
                        </Select>
                        <FormLabel>enteries</FormLabel>
                    </Flex>
                </HStack>
            </VStack>
        </Box>
    );
}

export { SearchBar };