import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/Client/Templates/Main";
import { Earnings } from "../../components/Client/Main/Dashboard/Earnings";
import { Invoices } from "../../components/Client/Main/Dashboard/Invoices";
import { Payments } from "../../components/Client/Main/Dashboard/Payments/Payments";
import Performance from "../../components/Client/Main/Dashboard/Performance";
import FailedPayment from "../../components/Client/Main/Dashboard/FailedPay";
import { useDetailContext } from "../../components/Client/Context/context";
import { ContentBar } from "../../components/Client/Reusable Components/ContentBar";
import queryString from "query-string";
import { useRouter } from "next/router";


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

export default function Dashboard({ location }) {
    const { subTitle } = useDetailContext();
    // const { code } = queryString.parse(location.search);
    const router = useRouter();
    const { code } = router.query;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/Client/Dashboard?code=${code}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then(res => res.json())
            .then(res => setUserData(JSON.stringify(res)))
    }, [code]);
    return (
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <HStack mb={'2rem'} justifyContent={'space-between'}>
                    <Heading fontSize={'1.7rem'}>Dashboard</Heading>
                    <Button>Export CSV</Button>
                </HStack>
                <ContentBar text="Dashboard" data={DashboardNavData} />
                <h5>{userData}</h5>
                <Box>
                    {DashboardNavData.map((navItem, index) => (
                        <React.Fragment key={index}>
                            {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                        </React.Fragment>
                    ))}
                </Box>
                <Box>
                    {userData}
                </Box>
            </Box>
        </MainTemplate>
    );
}