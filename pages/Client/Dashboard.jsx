import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import MainTemplate from "../../components/Client/Templates/Main";
import { Earnings } from "../../components/Client/Main/Dashboard/Earnings";
import { Invoices } from "../../components/Client/Main/Dashboard/Invoices";
import { Payments } from "../../components/Client/Main/Dashboard/Payments/Payments";
import Performance from "../../components/Client/Main/Dashboard/Performance";
import FailedPayment from "../../components/Client/Main/Dashboard/FailedPay";
import { useDetailContext } from "../../components/Client/Context/context";
import { ContentBar } from "../../components/Client/Reusable Components/ContentBar";

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
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <HStack mb={'2rem'} justifyContent={'space-between'}>
                    <Heading fontSize={'1.7rem'}>Dashboard</Heading>
                    <Button>Export CSV</Button>
                </HStack>
                <ContentBar text="Dashboard" data={DashboardNavData} />
                <Box>
                    {DashboardNavData.map((navItem, index) => (
                        <React.Fragment key={index}>
                            {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </MainTemplate>
    );
}