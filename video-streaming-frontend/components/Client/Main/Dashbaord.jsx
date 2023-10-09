import { Box, Container, HStack } from "@chakra-ui/react";
import { ContentBar } from "../Reusable Components/ContentBar";
import { NavButton } from "../Reusable Components/MainButton";
import { Earnings } from "./Dashboard/Earnings";
import { useDetailContext } from "../Context/context";
import React from "react";
import { Invoices } from "./Dashboard/Invoices";
import { Payments } from "./Dashboard/Payments/Payments";
import Performance from "./Dashboard/Performance";
import FailedPayment from "./Dashboard/FailedPay";

const DashboardNavData = [
    {
        name: "Earnings",
        to: Earnings,
    },
    {
        name: "Invoices",
        to: Invoices
    },
    {
        name: "Payments",
        to: Payments
    },
    {
        name: "Performance Metrics",
        to: Performance,
    },
    {
        name: "Failed Payments",
        to: FailedPayment,
    }
];

export default function Dashboard() {
    const { subTitle } = useDetailContext();

    return (
        <Box p={'3rem'}>
            <HStack ml={{ base: '0', md: '5rem' }} justifyContent={'space-evenly'}>
                <ContentBar text="Dashboard" data={DashboardNavData} />
                <NavButton>Export CSV</NavButton>
            </HStack>
            <Box>
                {DashboardNavData.map((navItem, index) => (
                    <React.Fragment key={index}>
                        {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
}