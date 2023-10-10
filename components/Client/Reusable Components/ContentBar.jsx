import { Button, Flex, Select } from "@chakra-ui/react";
import "./content.css";
import { useDetailContext } from "../Context/context";

export const ContentBar = ({ text, data }) => {
    const { title, subTitle, updateSubTitle, updateTitle } = useDetailContext();

    const HandleClick = (e) => {
        e.preventDefault();
        if (text === 'Main') {
            updateTitle(e.target.textContent);
            console.log(title);
        }
        else {
            updateSubTitle(e.target.textContent);

        }
    }

    const HandleOptionClick = (e) => {
        e.preventDefault();
        updateSubTitle(e.target.value);
    }

    const ContentButton = ({ children }) => (
        <Button width={'100%'} variant={'outline'} onClick={HandleClick} borderRadius={'0'} py={6} px={10} fontSize={{ base: 'sm', md: 'md' }} className="Content-Bar">
            {children}
        </Button>
    )

    return (
        <Flex alignItems={'center'}>
            <Flex width={'100%'} display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }} borderRight={'2px solid black'}>
                {data.map((navbar, index) => (
                    <ContentButton key={index}>
                        {navbar.name}
                    </ContentButton>
                ))}
            </Flex>
            <Flex mt={2} width={'100%'} alignItems={'center'} display={{ base: 'flex', md: 'flex', lg: 'flex', xl: 'none' }} boxShadow={'0px 0px 2px black'} >
                <Select onChange={HandleOptionClick} fontSize={'1.2rem'} bg={'white'}>
                    {data.map((navbar, index) => (
                        <option key={index} className="myOption" value={navbar.name}>{navbar.name}</option>
                    ))}
                </Select>
            </Flex>
        </Flex>
    );
}