import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { User_Tables } from '../Tables/Table';
import { SearchBar } from '../SmallReusableComponents/SearchBar';
import { HeaderWithButtons } from '../SmallReusableComponents/HeaderWithButtons';
import { Box } from '@chakra-ui/react';

export default function UserManagement() {
    return (
        <>
            <HeaderWithButtons heading={'User Management'} button1={'Export CSV'} button2={'Add User'} />
            <SearchBar />
            <User_Tables />
        </>
    );

}