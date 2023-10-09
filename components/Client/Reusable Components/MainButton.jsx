import { Button, Icon, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiToggleRight, FiToggleLeft } from 'react-icons/fi';

const MainButton = ({ children }) => (
    <Button fontSize={'1rem'} borderRadius={'5px'} py={4} px={8} border={'1px solid black'} boxShadow={'4px 4px 4px black'}>
        {children}
    </Button>
);

const NavButton = ({ children }) => (
    <Button fontSize={['1rem', '1.1rem']} bg={'blue.700'} color={'white'} borderRadius={'0'} px={4} border={'1px solid black'} boxShadow={'4px 4px 4px black'}>
        {children}
    </Button>
)

const PinkButton = ({ children }) => (
    <Button borderRadius={'0'} px={4} border={'1px solid black'} boxShadow={'4px 4px 4px black'} _hover={{ bg: 'pink.800' }} _focus={{ bg: 'pink.700' }} color={'white'} bg={"pink.900"}>{children}</Button>
)

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);

    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <Icon
            aria-label={isOn ? 'Turn Off' : 'Turn On'}
            as={isOn ? BsToggleOn : BsToggleOff} // Use the imported icons here
            onClick={handleToggle}
            color={isOn ? 'green' : 'red'}
            bg={'white'}
            boxSize={50}
        />
    );
};

export { ToggleButton, PinkButton, MainButton, NavButton };