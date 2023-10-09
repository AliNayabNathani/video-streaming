import { NormalHeading } from "../SmallReusableComponents/Heading";
import { TableTemplate } from "../Tables/Table";

const VideoListData = [
    {
        Video_ID: '0011',
        Video_Title: 'The Dark Web',
        Date_Of_Upload: '02-06-2021',
        Views: '2560',
        No_Of_Times_Video_Purchased: '500',
        No_Of_Times_Video_Rented: '600',
        Total_Amount_Earned: '$340',
    },
    {
        Video_ID: '0012',
        Video_Title: 'Exploring Space',
        Date_Of_Upload: '03-15-2021',
        Views: '3200',
        No_Of_Times_Video_Purchased: '480',
        No_Of_Times_Video_Rented: '550',
        Total_Amount_Earned: '$420',
    },
    {
        Video_ID: '0013',
        Video_Title: 'Cooking Masterclass',
        Date_Of_Upload: '04-22-2021',
        Views: '1800',
        No_Of_Times_Video_Purchased: '350',
        No_Of_Times_Video_Rented: '400',
        Total_Amount_Earned: '$290',
    },
    {
        Video_ID: '0014',
        Video_Title: 'Art of Painting',
        Date_Of_Upload: '06-10-2021',
        Views: '4200',
        No_Of_Times_Video_Purchased: '600',
        No_Of_Times_Video_Rented: '700',
        Total_Amount_Earned: '$540',
    },
    {
        Video_ID: '0015',
        Video_Title: 'Fitness Workout',
        Date_Of_Upload: '08-02-2021',
        Views: '2800',
        No_Of_Times_Video_Purchased: '420',
        No_Of_Times_Video_Rented: '520',
        Total_Amount_Earned: '$380',
    },
    {
        Video_ID: '0016',
        Video_Title: 'Travel Adventure',
        Date_Of_Upload: '09-18-2021',
        Views: '3500',
        No_Of_Times_Video_Purchased: '530',
        No_Of_Times_Video_Rented: '620',
        Total_Amount_Earned: '$460',
    },
    {
        Video_ID: '0017',
        Video_Title: 'Music Composition',
        Date_Of_Upload: '10-30-2021',
        Views: '1900',
        No_Of_Times_Video_Purchased: '300',
        No_Of_Times_Video_Rented: '370',
        Total_Amount_Earned: '$310',
    },
    {
        Video_ID: '0018',
        Video_Title: 'Culinary Delights',
        Date_Of_Upload: '12-15-2021',
        Views: '4000',
        No_Of_Times_Video_Purchased: '560',
        No_Of_Times_Video_Rented: '650',
        Total_Amount_Earned: '$500',
    },
    {
        Video_ID: '0019',
        Video_Title: 'Fashion Trends',
        Date_Of_Upload: '01-25-2022',
        Views: '2300',
        No_Of_Times_Video_Purchased: '380',
        No_Of_Times_Video_Rented: '450',
        Total_Amount_Earned: '$340',
    },
    {
        Video_ID: '0020',
        Video_Title: 'Technology Insights',
        Date_Of_Upload: '03-05-2022',
        Views: '3100',
        No_Of_Times_Video_Purchased: '450',
        No_Of_Times_Video_Rented: '530',
        Total_Amount_Earned: '$410',
    },
];

const VideoListColumns = [
    'Video_ID',
    'Video_Title',
    'Date_Of_Upload',
    'Views',
    'No_Of_Times_Video_Purchased',
    'No_Of_Times_Video_Rented',
    'Total_Amount_Earned'
];

export default function ContentCreatorVideoList() {
    return (
        <>
            <NormalHeading text={'List of Videos Uploaded by Content Creator'} />
            <TableTemplate data={VideoListData} columns={VideoListColumns} />
        </>
    );
}