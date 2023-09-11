import { TableTemplate } from "../../Tables/Table";

const TransactionTableData = [
    {
        Transaction_ID: '0001223',
        Date: '10/22/2022',
        Viewer_Name: 'John Doe',
        Content_Creator: 'Creator 1',
        Video_Name: 'Video 1',
        Type: 'Rent',
        Amount: '$10',
    },
    {
        Transaction_ID: '0001224',
        Date: '11/15/2022',
        Viewer_Name: 'Alice Smith',
        Content_Creator: 'Creator 2',
        Video_Name: 'Video 2',
        Type: 'Purchase',
        Amount: '$20',
    },
    {
        Transaction_ID: '0001225',
        Date: '12/03/2022',
        Viewer_Name: 'Bob Johnson',
        Content_Creator: 'Creator 3',
        Video_Name: 'Video 3',
        Type: 'Rent',
        Amount: '$15',
    },
    {
        Transaction_ID: '0001226',
        Date: '12/18/2022',
        Viewer_Name: 'Emily Wilson',
        Content_Creator: 'Creator 1',
        Video_Name: 'Video 4',
        Type: 'Purchase',
        Amount: '$25',
    },
    {
        Transaction_ID: '0001227',
        Date: '01/05/2023',
        Viewer_Name: 'Michael Brown',
        Content_Creator: 'Creator 2',
        Video_Name: 'Video 5',
        Type: 'Rent',
        Amount: '$12',
    },
];

const TransactionTableColumns = [
    'Transaction_ID',
    'Date',
    'Viewer_Name',
    'Content_Creator',
    'Video_Name',
    'Type',
    'Amount'
];

export default function TransactionTable() {
    return (
        <TableTemplate data={TransactionTableData} columns={TransactionTableColumns} />
    );
}