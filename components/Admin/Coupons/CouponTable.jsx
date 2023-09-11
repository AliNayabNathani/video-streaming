import { TableTemplate } from "../Tables/Table";
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { HStack } from "@chakra-ui/react";
import { ToggleButton } from "../SmallReusableComponents/Action";

const CouponTableData = [
    {
        Coupon_ID: '001',
        Coupon_Name: 'Coupon1',
        Date_Of_Entry: '10/11/2022',
        Discount: '10%',
        Expiry_Date: '20/11/2022',
    },
    {
        Coupon_ID: '002',
        Coupon_Name: 'Coupon2',
        Date_Of_Entry: '10/11/2022',
        Discount: '15%',
        Expiry_Date: '25/11/2022',
    },
    {
        Coupon_ID: '003',
        Coupon_Name: 'Coupon3',
        Date_Of_Entry: '11/11/2022',
        Discount: '20%',
        Expiry_Date: '30/11/2022',
    },
    {
        Coupon_ID: '004',
        Coupon_Name: 'Coupon4',
        Date_Of_Entry: '11/11/2022',
        Discount: '12%',
        Expiry_Date: '22/11/2022',
    },
    {
        Coupon_ID: '005',
        Coupon_Name: 'Coupon5',
        Date_Of_Entry: '12/11/2022',
        Discount: '8%',
        Expiry_Date: '24/11/2022',
    },
    {
        Coupon_ID: '006',
        Coupon_Name: 'Coupon6',
        Date_Of_Entry: '12/11/2022',
        Discount: '25%',
        Expiry_Date: '26/11/2022',
    },
    {
        Coupon_ID: '007',
        Coupon_Name: 'Coupon7',
        Date_Of_Entry: '13/11/2022',
        Discount: '30%',
        Expiry_Date: '28/11/2022',
    },
    {
        Coupon_ID: '008',
        Coupon_Name: 'Coupon8',
        Date_Of_Entry: '13/11/2022',
        Discount: '5%',
        Expiry_Date: '21/11/2022',
    },
    {
        Coupon_ID: '009',
        Coupon_Name: 'Coupon9',
        Date_Of_Entry: '14/11/2022',
        Discount: '18%',
        Expiry_Date: '27/11/2022',
    },
    {
        Coupon_ID: '010',
        Coupon_Name: 'Coupon10',
        Date_Of_Entry: '14/11/2022',
        Discount: '22%',
        Expiry_Date: '29/11/2022',
    },
];

const CouponTableColumn = [
    'Coupon_ID',
    'Coupon_Name',
    'Date_Of_Entry',
    'Discount',
    'Expiry_Date',
]

const CouponAction = () => (
    <HStack justifyContent={'space-around'}>
        <BiEdit cursor={'pointer'} size={25} />
        <AiOutlineDelete cursor={'pointer'} size={25} />
    </HStack>
)

const CouponAvailability = () => (
    <ToggleButton />
)
export default function CouponTable() {
    return (
        <TableTemplate data={CouponTableData} columns={CouponTableColumn} Actions={CouponAction} Availability={CouponAvailability} />
    );
}