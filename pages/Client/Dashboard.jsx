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
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from "axios";

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
    const { user, error, isLoading } = useUser();
    const { subTitle } = useDetailContext();
    // const { code } = queryString.parse(location.search);
    const router = useRouter();
    const { code } = router.query;
    const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/Client/Dashboard?code=${code}`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => setUserData(JSON.stringify(res)))
    // }, [code]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/protected')
            .then(response => {
                // Handle the successful response here
                setUserData(JSON.stringify(response.data));
            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <HStack mb={'2rem'} justifyContent={'space-between'}>
                    <Heading fontSize={'1.7rem'}>Dashboard</Heading>
                    <Button>Export CSV</Button>
                </HStack>
                <ContentBar text="Dashboard" data={DashboardNavData} />
                {/* {user && (
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )} */}
                {userData}
                {console.log(userData)}
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