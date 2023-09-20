import CouponTable from "../../components/Admin/Coupons/CouponTable";
import { HeaderModalButtons } from "../../components/Admin/SmallReusableComponents/HeaderModalButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";

export default function Coupons() {
    return (
        <>
            <HeaderModalButtons heading={'Coupons Management'} button1={'Add Coupons'} />
            <SearchBar />
            <CouponTable />
        </>
    );
}