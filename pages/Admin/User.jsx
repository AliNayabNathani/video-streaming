import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { HeaderWithButtons } from '../../components/Admin/SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../../components/Admin/SmallReusableComponents/SearchBar';
import { TableTemplate } from '../../components/Admin/Tables/Table';
import { userColumns, userData } from '../../components/Admin/Tables/UserTableData';
import { Actions } from '../../components/Admin/SmallReusableComponents/Action';
import { useSearchContext } from '../../components/Admin/Context api/Context';
import { Button, FormControl, FormLabel, Heading, Input, Select, Stack, VStack, useDisclosure } from '@chakra-ui/react';
import { PageHeading } from '../../components/Admin/SmallReusableComponents/Heading';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import './style.css';

const ShowAddUserModal = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent color={"white"} bg={"#232323"} minW={["auto", "700px"]}>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack alignItems={'flex-start'} direction={{ base: "column", md: "row" }}
                            p={[5, 20]}>
                            <Heading fontSize={'2rem'} alignSelf={'center'}>Add User</Heading>
                            <FormLabel>User Name</FormLabel>
                            <Input mb={'1rem'} border={'2px solid black'} placeholder='Abheesh' />
                            <FormLabel>Gender</FormLabel>
                            <Select mb={'1rem'} border={'2px solid black'}>
                                <option style={{ background: '#232323' }} select-option selected>Male</option>
                                <option style={{ background: '#232323' }}> Female</option>
                                <option style={{ background: '#232323' }}>Other</option>
                            </Select>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input mb={'1rem'} border={'2px solid black'} placeholder='876587589' />
                            <Button alignSelf={'center'} mr={3} onClick={onClose}>
                                Submit
                            </Button>
                        </VStack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const HeaderButtons = ({ onOpen }) => {

    return (
        <Stack
            justifyContent={["center", "space-between"]}
            direction={["column", "row"]}
            align={["center", "center"]}
            my={[0, 4]}
            mb={8}
        >
            <PageHeading text='User Management' />
            <Stack direction={["column", "row"]} align={["center", "flex-end"]}>
                <Button size={{ base: "sm", md: "md" }} variant={"outline"}>
                    Export CSV
                </Button>
                <Button onClick={onOpen} size={{ base: "sm", md: "md" }} variant={"solid"}>
                    Add User
                </Button>
            </Stack>
        </Stack>
    );
}

export default function UserManagement() {
    const { searchQuery, isFilter } = useSearchContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const filterData = () => {
        if (searchQuery) {
            return userData.filter((data) =>
                data.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                data.User_ID.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        return userData;
    };
    return (
        <>
            <HeaderButtons onOpen={onOpen} />
            <SearchBar />
            <ShowAddUserModal isOpen={isOpen} onClose={onClose} />
            <TableTemplate
                data={searchQuery?.length > 1 && isFilter ? filterData() : userData}
                columns={userColumns}
                to={"/Admin/UserDetails"}
                Actions={Actions}
            />
        </>
    );
}