'use client';

import { Button, HStack, IconButton } from "@chakra-ui/react";
import { HiOutlineEye } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from "react";
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { useRouter } from "next/router";

const Actions = ({ to }) => {
    const router = useRouter();

    const handleNavigation = (to) => {
        router.push(to);
        onClose();
    };

    return (
        <HStack align={'center'} justifyContent={'space-between'}>
            <HiOutlineEye cursor={'pointer'} size={25} />
            <BiEdit cursor={'pointer'} size={25} />
            <AiOutlineDelete cursor={'pointer'} size={25} />
            <ToggleButton cursor={'pointer'} />
        </HStack>
    );
}

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);

    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <IconButton
            aria-label={isOn ? 'Turn Off' : 'Turn On'}
            icon={isOn ? <FiToggleRight size={25} /> : <FiToggleLeft size={25} />}
            onClick={handleToggle}
            color={isOn ? 'green' : 'red'}
            colorScheme="transparent"
        />
    );
};

const ContentApprovalButtons = () => (
    <>
        <Button colorScheme="green">Accept</Button>
        <Button colorScheme="red">Reject</Button>
    </>
)

export { Actions, ToggleButton, ContentApprovalButtons };