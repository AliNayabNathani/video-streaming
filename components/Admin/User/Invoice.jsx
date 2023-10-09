import { HStack } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { TableTemplate } from "../Tables/Table";
import { NormalHeading } from "../SmallReusableComponents/Heading";

const InvoiceData = [
    {
        Date: '10/22/2022',
        InvoiceNumber: '#65641325',
        PlanName: 'Basic',
        Amount: '$10',
    },
    {
        Date: '11/22/2022',
        InvoiceNumber: '#78945612',
        PlanName: 'Basic',
        Amount: '$10',
    }
];

const InvoiceColumns = ['Date', 'InvoiceNumber', 'PlanName', 'Amount'];
const InvoiceActions = () => {
    return (
        <HStack>
            <FiDownload />
        </HStack>
    );
}

export default function Invoice() {
    return (
        <>
            <NormalHeading text={'Invoice'} />
            <TableTemplate data={InvoiceData} Actions={InvoiceActions} columns={InvoiceColumns} />
        </>
    );
}