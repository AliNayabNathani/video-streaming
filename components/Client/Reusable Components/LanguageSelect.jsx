import {
    Box, Flex, HStack, Select, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    Button,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import './content.css';
import { ChevronDownIcon } from "@chakra-ui/icons";


export const LanguageSelect = () => {
    const [optionValue, setOptionValue] = useState('EN');
    console.log(optionValue);

    const handleSelectChange = value => {
        setOptionValue(value);
    };

    return (
        <HStack width={['100%', '200px']} borderRadius={'5px'} bg={'whiteAlpha.400'}>
            <Menu>
                <MenuButton width='100%' textAlign={'start'} _hover={'none'} fontWeight={'normal'} bg={'blackAlpha.100'} color={'whiteAlpha.600'} onChange={handleSelectChange} value={optionValue} as={Button} rightIcon={<ChevronDownIcon />}
                >
                    {`${optionValue}/Support`}
                </MenuButton>
                <MenuList p={0} m={0} bg={'transparent'} borderColor={'transparent'} borderRadius={'10px'}>
                    <MenuItem onClick={() => handleSelectChange('EN')} bg={'gray.700'}>English</MenuItem>
                    <MenuItem onClick={() => handleSelectChange('AR')} bg={'gray.500'}>Arabic</MenuItem>
                    <MenuItem onClick={() => handleSelectChange('FR')} bg={'gray.700'}>French</MenuItem>
                    <MenuItem onClick={() => handleSelectChange('SW')} bg={'gray.500'}>Swahili</MenuItem>
                    <MenuItem onClick={() => handleSelectChange('YR')} bg={'gray.700'}>Yoruba</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};