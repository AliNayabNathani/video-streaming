import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { HeaderModalButtons } from "../SmallReusableComponents/HeaderModalButtons";
import CouponTable from "./CouponTable";

export default function Coupons() {
    return (
        <>
            <ChakraProvider>
                <Box mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <HeaderModalButtons heading={'Coupons Management'} button1={'Add Coupons'} />
                        <SearchBar />
                        <CouponTable />
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}