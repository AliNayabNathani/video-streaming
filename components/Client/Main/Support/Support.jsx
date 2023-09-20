import { Box, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "../../Bars/DetailsSidebar";
import { DetailText } from "../../Details/DetailText";
import { useDetailContext } from "../../Context/context";

export default function Support() {
    const { title } = useDetailContext();
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh" >
            <Box maxH={'100vh'} display={['block', 'flex']} flex='1' bg={useColorModeValue('gray.100', 'gray.900')}>
                <Sidebar />
                <Box overflowY={'scroll'} p={4}>
                    <DetailText text={title} />
                </Box>
            </Box>
        </Box >
    );
}