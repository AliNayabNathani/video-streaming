import LiveVideoTable from "../components/Admin/Reports/Live Video/LiveVideoTable";
import { HeaderWithButtons } from "../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";

export default function LiveVideoReport() {
    return (
        <>
            <HeaderWithButtons heading={'Live Video Payments Reports'} button1={'Export CSV'} />
            <SearchBar />
            <LiveVideoTable />
        </>
    );
}