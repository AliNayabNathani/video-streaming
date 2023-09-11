const creatorData = [
    {
        User_ID: '0012',
        Name: 'Clara',
        Gender: 'Female',
        Mobile_Number: '893745837',
        Status: 'Active',
    },
    {
        User_ID: '0014',
        Name: 'Matthew',
        Gender: 'Male',
        Mobile_Number: '876587589',
        Status: 'Active',
    },
    {
        User_ID: '0018',
        Name: 'Matthew',
        Gender: 'Male',
        Mobile_Number: '893745837',
        Status: 'Active',
    },
];

const viewerData = [
    {
        User_ID: '0012',
        Name: 'Clara',
        Gender: 'Female',
        Mobile_Number: '893745837',
        Status: 'Active',
    },
    {
        User_ID: '0014',
        Name: 'Matthew',
        Gender: 'Male',
        Mobile_Number: '876587589',
        Status: 'Active',
    },
    {
        User_ID: '0018',
        Name: 'Matthew',
        Gender: 'Male',
        Mobile_Number: '893745837',
        Status: 'Active',
    },
];

const transactionData = [
    {
        Transaction_ID: '0001223',
        Date: '12/22/2022',
        Viewer_Name: 'John',
        Amount: '$12'
    },
    {
        Transaction_ID: '0001224',
        Date: '12/22/2022',
        Viewer_Name: 'John',
        Amount: '$12'
    },
    {
        Transaction_ID: '0001225',
        Date: '12/22/2022',
        Viewer_Name: 'John',
        Amount: '$12'
    },
    {
        Transaction_ID: '0001226',
        Date: '12/22/2022',
        Viewer_Name: 'John',
        Amount: '$12'
    },
];

const VideoData = [
    {
        Video_ID:'0012',
        Date: '12/22/2022',
        Name: 'Video 1',
        Channel_Host: 'Creator 1', 
    },
    {
        Video_ID:'0013',
        Date: '12/22/2022',
        Name: 'Video 2',
        Channel_Host: 'Creator 1', 
    },
    {
        Video_ID:'0014',
        Date: '12/22/2022',
        Name: 'Video 3',
        Channel_Host: 'Creator 1', 
    },
    {
        Video_ID:'0015',
        Date: '12/22/2022',
        Name: 'Video 4',
        Channel_Host: 'Creator 1', 
    },
];

const creatorColumns = ['User_ID', 'Name', 'Gender', 'Mobile_Number', 'Status'];
const viewerColumns = ['User_ID', 'Name', 'Gender', 'Mobile_Number', 'Status'];
const transactionColumns = ['Transaction_ID', 'Date', 'Viewer_Name', 'Amount'];
const videoColumns = ['Video_ID', 'Date', 'Name', 'Channel_Host'];

export {creatorColumns, viewerColumns, transactionColumns, videoColumns, creatorData, VideoData, transactionData, viewerData};