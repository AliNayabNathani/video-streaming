
import { ToggleButton } from "../SmallReusableComponents/Action";
import { TableTemplate } from "../Tables/Table";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { HStack } from "@chakra-ui/react";
const VideoTableData = [
    {
        Video_ID: '1230',
        Video_Title: 'Food Vlog',
        Content_Views: '2560',
        Creator_Name: 'John Dee',
        Rented_Amount: '$500',
        Purchasing_Amount: '$300',
        Uploaded_Date: '11/22/2022',
    },
    {
        Video_ID: '1231',
        Video_Title: 'Travel Adventure',
        Content_Views: '1800',
        Creator_Name: 'Emma Smith',
        Rented_Amount: '$400',
        Purchasing_Amount: '$250',
        Uploaded_Date: '10/15/2022',
    },
    {
        Video_ID: '1232',
        Video_Title: 'Fitness Routine',
        Content_Views: '3200',
        Creator_Name: 'Alex Johnson',
        Rented_Amount: '$450',
        Purchasing_Amount: '$280',
        Uploaded_Date: '09/28/2022',
    },
    {
        Video_ID: '1233',
        Video_Title: 'Cooking Masterclass',
        Content_Views: '4200',
        Creator_Name: 'Sophia Williams',
        Rented_Amount: '$550',
        Purchasing_Amount: '$330',
        Uploaded_Date: '08/10/2022',
    },
    {
        Video_ID: '1234',
        Video_Title: 'Nature Exploration',
        Content_Views: '2800',
        Creator_Name: 'Daniel Brown',
        Rented_Amount: '$420',
        Purchasing_Amount: '$270',
        Uploaded_Date: '07/05/2022',
    },
    {
        Video_ID: '1235',
        Video_Title: 'Art and Creativity',
        Content_Views: '1500',
        Creator_Name: 'Olivia Martinez',
        Rented_Amount: '$380',
        Purchasing_Amount: '$240',
        Uploaded_Date: '06/18/2022',
    },
    {
        Video_ID: '1236',
        Video_Title: 'Science Explained',
        Content_Views: '3900',
        Creator_Name: 'William Jackson',
        Rented_Amount: '$520',
        Purchasing_Amount: '$310',
        Uploaded_Date: '05/09/2022',
    },
    {
        Video_ID: '1237',
        Video_Title: 'Music Jam Session',
        Content_Views: '2100',
        Creator_Name: 'Ava Garcia',
        Rented_Amount: '$470',
        Purchasing_Amount: '$290',
        Uploaded_Date: '04/14/2022',
    },
    {
        Video_ID: '1238',
        Video_Title: 'Language Learning',
        Content_Views: '3300',
        Creator_Name: 'Liam White',
        Rented_Amount: '$490',
        Purchasing_Amount: '$320',
        Uploaded_Date: '03/22/2022',
    },
    {
        Video_ID: '1239',
        Video_Title: 'Tech Reviews',
        Content_Views: '2700',
        Creator_Name: 'Ella Adams',
        Rented_Amount: '$430',
        Purchasing_Amount: '$260',
        Uploaded_Date: '02/07/2022',
    },
];


const VideoTableColumns = [
    'Video_ID',
    'Video_Title',
    'Content_Views',
    'Creator_Name',
    'Rented_Amount',
    'Purchasing_Amount',
    'Uploaded_Date'
];

const VideoActions = ({ to }) => {
    return (
        <HStack justifyContent={'space-around'}>

            <HiOutlineEye cursor={'pointer'} size={25} />

            <AiOutlineDelete cursor={'pointer'} size={25} />
            <ToggleButton cursor={'pointer'} />
        </HStack>
    );
}

export default function VideoTable() {
    return (
        <TableTemplate data={VideoTableData} columns={VideoTableColumns} Actions={VideoActions} to="/video/details" />
    )
}