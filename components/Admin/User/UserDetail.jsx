import { Box, ChakraProvider, GridItem, HStack, SimpleGrid, Stack, Text, VStack, theme, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import Invoice from "./Invoice";
import { PageHeading } from "../SmallReusableComponents/Heading";
import VideoList from "./UserVideoList";
import { Details } from "../SmallReusableComponents/Details";

const UserDetailData = [
  {
    UserID: '0013',
    Email: 'abc@xyz.com',
    Total_Amount_Spent: '$30',
    Number_Of_Videos_Rented: '03',
    SubscriptionStatus: 'Subscribed',
    Name: 'John',
    MobileNumber: '865389859',
    NumberOfVideosPurchased: '02',
    NumberOfContentCreatorsSubscribed: '05',
    PlanName: 'Basic',
    Gender: 'Male',
    RegistrationDate: 'June 2, 2022',
    Status: 'Suspended'
  },
];

const UserDetailsColumn = ['UserID',
  'Email',
  'Total_Amount_Spent',
  'Number_Of_Videos_Rented',
  'SubscriptionStatus',
  'Name',
  'MobileNumber',
  'NumberOfVideosPurchased',
  'NumberOfContentCreatorsSubscribed',
  'PlanName',
  'Gender',
  'RegistrationDate',
  'Status'
];

export default function UserDetail() {
  return (
    <>
      <Details PageName={'User'} DetailsData={UserDetailData} DetailsColumn={UserDetailsColumn} />
      <Invoice />
      <VideoList />
    </>
  );
}