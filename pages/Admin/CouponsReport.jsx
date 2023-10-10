import CouponsReportTable from "../../components/Admin/Reports/Coupons/CouponsReportTable";
import { HeaderWithButtons } from "../../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";

export default function CouponsReport() {
    return (
        <>

            <HeaderWithButtons heading={'Coupons Redemption Report'} button1={'Export CSV'} />
            <SearchBar />
            <CouponsReportTable />
        </>
    );
}