import { HStack } from "@chakra-ui/react";
import { TableTemplate } from "../../Tables/Table";
import { FiDownload } from "react-icons/fi";

const SubscriptionTableData = [
    {
        Date: '10/22/2022',
        Viewer_Name: 'John Doe',
        Invoice_Number: '#78945612',
        Plan_Name: 'Basic',
        Amount: '$10',
    },
    {
        Date: '11/15/2022',
        Viewer_Name: 'Alice Smith',
        Invoice_Number: '#78945613',
        Plan_Name: 'Standard',
        Amount: '$15',
    },
    {
        Date: '12/03/2022',
        Viewer_Name: 'Bob Johnson',
        Invoice_Number: '#78945614',
        Plan_Name: 'Premium',
        Amount: '$20',
    },
    {
        Date: '12/18/2022',
        Viewer_Name: 'Emily Wilson',
        Invoice_Number: '#78945615',
        Plan_Name: 'Basic',
        Amount: '$10',
    },
    {
        Date: '01/05/2023',
        Viewer_Name: 'Michael Brown',
        Invoice_Number: '#78945616',
        Plan_Name: 'Standard',
        Amount: '$15',
    },
];

const SubscriptionTableColumns = [
    'Date',
    'Viewer_Name',
    'Invoice_Number',
    'Plan_Name',
    'Amount'
];

const SubsAction = () => (
    <HStack cursor={'pointer'} justifyContent={'space-around'}>
        <FiDownload size={25} />
    </HStack>
)

export default function SubscriptionTable() {
    return (
        <TableTemplate data={SubscriptionTableData} columns={SubscriptionTableColumns} Actions={SubsAction} />
    );
}