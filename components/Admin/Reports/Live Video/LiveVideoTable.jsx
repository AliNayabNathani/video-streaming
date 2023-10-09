import { useRef, useState } from "react";
import { ContentBar } from "../../SmallReusableComponents/ContentBar";
import { TableTemplate } from "../../Tables/Table";
import { Box } from "@chakra-ui/react";

const EventTransactionData = [
    {
        Transaction_ID: '0001223',
        Date: '12/22/2022',
        Viewer_Name: 'John Doe',
        Content_Creator: 'Creator 1',
        Event_Name: 'Event 1',
        No_Of_Tickets: '4',
        Amount: '$12',
    },
    {
        Transaction_ID: '0001224',
        Date: '12/23/2022',
        Viewer_Name: 'Jane Smith',
        Content_Creator: 'Creator 2',
        Event_Name: 'Event 2',
        No_Of_Tickets: '2',
        Amount: '$8',
    },
    {
        Transaction_ID: '0001225',
        Date: '12/24/2022',
        Viewer_Name: 'Alice Johnson',
        Content_Creator: 'Creator 3',
        Event_Name: 'Event 3',
        No_Of_Tickets: '6',
        Amount: '$18',
    },
    {
        Transaction_ID: '0001226',
        Date: '12/25/2022',
        Viewer_Name: 'Bob Wilson',
        Content_Creator: 'Creator 4',
        Event_Name: 'Event 4',
        No_Of_Tickets: '3',
        Amount: '$9',
    },
    {
        Transaction_ID: '0001227',
        Date: '12/26/2022',
        Viewer_Name: 'Eve Davis',
        Content_Creator: 'Creator 5',
        Event_Name: 'Event 5',
        No_Of_Tickets: '8',
        Amount: '$24',
    },
];

const EventTransactionColumns = [
    'Transaction_ID',
    'Date',
    'Viewer_Name',
    'Content_Creator',
    'Event_Name',
    'No_Of_Tickets',
    'Amount',
];

const EventReportData = [
    {
        Event_ID: '00012',
        Event_Name: 'Event 1',
        Content_Creator: 'Creator 1',
        Total_Tickets_Sold: '400',
        Amount: '$16000',
    },
    {
        Event_ID: '00013',
        Event_Name: 'Event 2',
        Content_Creator: 'Creator 2',
        Total_Tickets_Sold: '300',
        Amount: '$12000',
    },
    {
        Event_ID: '00014',
        Event_Name: 'Event 3',
        Content_Creator: 'Creator 3',
        Total_Tickets_Sold: '250',
        Amount: '$10000',
    },
]

const EventReportColumns = [
    'Event_ID',
    'Event_Name',
    'Content_Creator',
    'Total_Tickets_Sold',
    'Amount',
];

export default function LiveVideoTable() {
    const [SelectedButton, SetSelectedButton] = useState();
    console.log(SelectedButton);
    return (
        <>
            <Box my={'2.5rem'}>
                <ContentBar Text_1={'Event Transactions'} Text_2={'Events Report'} SetSelectedButton={SetSelectedButton} />
            </Box>
            {SelectedButton === 'Event Transactions' ?
                <TableTemplate data={EventTransactionData} columns={EventTransactionColumns} />
                : <TableTemplate data={EventReportData} columns={EventReportColumns} />}
        </>
    );
}