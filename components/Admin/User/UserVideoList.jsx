import { TableTemplate } from "../Tables/Table";
import { NormalHeading } from "../SmallReusableComponents/Heading";

const VideoListData = [
    {
        Video_Title: 'Food Vlog',
        Content_Views: '2560',
        Creator_Name: 'John Dee',
        Rented_Amount: '$500',
        Purchasing_Amount: '--',
        Date: '11/22/2022',
    },
    {
        Video_Title: 'Travel Adventures',
        Content_Views: '3800',
        Creator_Name: 'Alice Smith',
        Rented_Amount: '$320',
        Purchasing_Amount: '--',
        Date: '10/15/2022',
    },
    {
        Video_Title: 'Fitness Tips',
        Content_Views: '1200',
        Creator_Name: 'Michael Johnson',
        Rented_Amount: '$150',
        Purchasing_Amount: '$350',
        Date: '09/05/2022',
    },
    {
        Video_Title: 'Cooking Masterclass',
        Content_Views: '4500',
        Creator_Name: 'Emma Brown',
        Rented_Amount: '$600',
        Purchasing_Amount: '--',
        Date: '12/02/2022',
    },
    {
        Video_Title: 'Nature Exploration',
        Content_Views: '2100',
        Creator_Name: 'Daniel Green',
        Rented_Amount: '$270',
        Purchasing_Amount: '--',
        Date: '08/18/2022',
    },
    {
        Video_Title: 'Art Showcase',
        Content_Views: '1600',
        Creator_Name: 'Olivia White',
        Rented_Amount: '$180',
        Purchasing_Amount: '--',
        Date: '07/10/2022',
    },
    {
        Video_Title: 'Home Improvement',
        Content_Views: '3000',
        Creator_Name: 'Sophia Davis',
        Rented_Amount: '$420',
        Purchasing_Amount: '$100',
        Date: '06/25/2022',
    },
    {
        Video_Title: 'Tech Reviews',
        Content_Views: '2800',
        Creator_Name: 'William Clark',
        Rented_Amount: '$390',
        Purchasing_Amount: '--',
        Date: '05/14/2022',
    },
    {
        Video_Title: 'Gardening Tips',
        Content_Views: '1800',
        Creator_Name: 'Ava Johnson',
        Rented_Amount: '$230',
        Purchasing_Amount: '--',
        Date: '04/08/2022',
    },
    {
        Video_Title: 'Music Jam Session',
        Content_Views: '5000',
        Creator_Name: 'Ethan Wilson',
        Rented_Amount: '$720',
        Purchasing_Amount: '--',
        Date: '03/01/2022',
    },
];

const VideoListColumns = [
    'Video_Title',
    'Content_Views',
    'Creator_Name',
    'Rented_Amount',
    'Purchasing_Amount',
    'Date'
];

export default function VideoList() {
    return (
        <>
            <NormalHeading text={'Video List Purchased/Rented by Viewer'} />
            <TableTemplate data={VideoListData} columns={VideoListColumns} />
        </>
    );
}