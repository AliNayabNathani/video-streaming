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
    TotalAmountSpent: '$30',
    NumberOfVideosRented: '03',
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
  'TotalAmountSpent',
  'NumberOfVideosRented',
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
    <ChakraProvider theme={theme}>
      <Box mx={1}>
        <SidebarWithHeader />
        <Box ml={{ base: 0, md: 60 }} p={4}>
          <Details PageName={'User'} DetailsData={UserDetailData} DetailsColumn={UserDetailsColumn} />
          <Invoice />
          <VideoList />
        </Box>
      </Box>
    </ChakraProvider>
  );
}