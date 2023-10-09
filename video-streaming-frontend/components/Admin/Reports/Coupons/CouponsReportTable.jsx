import { HStack } from "@chakra-ui/react";
import { TableTemplate } from "../../Tables/Table";
import { FiDownload } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";

const CouponsReportTableData = [
    {
        Coupon_Name: 'Coupon 1',
        Total_Redemptions: '4',
        Total_Discount: '$20',
    },
    {
        Coupon_Name: 'Coupon 2',
        Total_Redemptions: '7',
        Total_Discount: '$35',
    },
    {
        Coupon_Name: 'Coupon 3',
        Total_Redemptions: '2',
        Total_Discount: '$10',
    },
    {
        Coupon_Name: 'Coupon 4',
        Total_Redemptions: '12',
        Total_Discount: '$60',
    },
    {
        Coupon_Name: 'Coupon 5',
        Total_Redemptions: '5',
        Total_Discount: '$25',
    },
];

const CouponsReportTableColumns = [
    'Coupon_Name',
    'Total_Redemptions',
    'Total_Discount',
];

const CouponsReportAction = () => (
    <HStack cursor={'pointer'} justifyContent={'space-around'}>
        <HiOutlineEye size={25} />
    </HStack>
)

export default function CouponsReportTable() {
    return (
        <TableTemplate data={CouponsReportTableData} columns={CouponsReportTableColumns} Actions={CouponsReportAction} />
    );
}