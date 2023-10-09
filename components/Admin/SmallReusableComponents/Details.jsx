import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { PageHeading } from "./Heading";
import React from "react";

const Details = ({ PageName, DetailsData }) => {
    return (
        <>
            <PageHeading text={`${PageName} Detail Screen`} />
            <SimpleGrid mb={'2rem'} columns={{ base: 1, md: 3 }} spacing={1} alignItems={"center"}>
                <Text>User ID: <b>{DetailsData[0].UserID}</b></Text>
                <Text>Email: <b>{DetailsData[0].Email}</b></Text>
                <Text>Total Amount Spent: <b>{DetailsData[0].TotalAmountSpent}</b></Text>
                <Text>Number Of Videos Rented: <b>{DetailsData[0].NumberOfVideosRented}</b></Text>
                <Text>Subscription Status: <b>{DetailsData[0].SubscriptionStatus}</b></Text>
                <Text>Name: <b>{DetailsData[0].Name}</b></Text>
                <Text>Mobile Number: <b>{DetailsData[0].MobileNumber}</b></Text>
                <Text>Number Of Videos Purchased: <b>{DetailsData[0].NumberOfVideosPurchased}</b></Text>
                <Text>Number Of Content Creators Subscribed: <b>{DetailsData[0].NumberOfContentCreatorsSubscribed}</b></Text>
                <Text>Plan Name: <b>{DetailsData[0].PlanName}</b></Text>
                <Text>Gender: <b>{DetailsData[0].Gender}</b></Text>
                <Text>Registration Date: <b>{DetailsData[0].RegistrationDate}</b></Text>
                <Text>Status: <b>{DetailsData[0].Status}</b></Text>
            </SimpleGrid>
        </>
    );
};


export { Details };