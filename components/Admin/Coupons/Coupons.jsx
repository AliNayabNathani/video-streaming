import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { HeaderModalButtons } from "../SmallReusableComponents/HeaderModalButtons";
import CouponTable from "./CouponTable";

export default function Coupons() {
    return (
        <>
            <HeaderModalButtons heading={'Coupons Management'} button1={'Add Coupons'} />
            <SearchBar />
            <CouponTable />

        </>
    );
}