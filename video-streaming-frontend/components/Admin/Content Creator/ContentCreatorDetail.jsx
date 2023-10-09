import { Box, ChakraProvider, Divider, theme, useColorModeValue } from "@chakra-ui/react";
import { Details } from "../SmallReusableComponents/Details";
import SidebarWithHeader from "../Sidebar/sidebartest";
import ContentCreatorVideoList from "./ContentCreatorVideoList";

const ContentCreatorDetailData = [
    {
        Creator_ID: '0013',
        Email: 'abc@xyz.com',
        Total_Amount_Earned: '$30',
        Number_Of_Videos_Sold: '03',
        Name: 'John',
        MobileNumber: '865389859',
        Number_Of_Videos_On_Rent: '03',
        Number_Of_Subscribed_Users: '02',
        Gender: 'Male',
        Registration_Date: 'June 2, 2022',
    },
];

const ContentCreatorDetailsColumn = [
    'Creator_ID',
    'Email',
    'Total_Amount_Earned',
    'Number_Of_Videos_Sold',
    'Name',
    'MobileNumber',
    'Number_Of_Videos_On_Rent',
    'Number_Of_Subscribed_Users',
    'Gender',
    'Registration_Date',

];

export default function ContentCreatorDetail() {
    return (
        <>
            <Details PageName={'Content Creator'} DetailsData={ContentCreatorDetailData} DetailsColumn={ContentCreatorDetailsColumn} />
            <Divider />
            <ContentCreatorVideoList />
        </>
    );
}