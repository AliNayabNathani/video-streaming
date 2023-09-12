import { Details } from "../components/Admin/SmallReusableComponents/Details";
import Invoice from "../components/Admin/User/Invoice";
import VideoList from "../components/Admin/User/UserVideoList";

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

const UserDetailsColumn = [
    'UserID',
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
        <>
            <Details PageName={'User'} DetailsData={UserDetailData} />
            <Invoice />
            <VideoList />
        </>
    );
}