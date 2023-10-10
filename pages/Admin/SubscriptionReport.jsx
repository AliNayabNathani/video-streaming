import SubscriptionTable from "../../components/Admin/Reports/Subscription/SubscriptionTable";
import { HeaderWithButtons } from "../../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";

export default function Subscription() {
    return (
        <>
            <HeaderWithButtons heading={'Subscription Report Management'} button1={'Export CSV'} />
            <SearchBar />
            <SubscriptionTable />
        </>
    );
}