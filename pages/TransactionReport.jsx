import TransactionTable from "../components/Admin/Reports/Transaction/TransactionTable";
import { HeaderWithButtons } from "../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";

export default function Transaction() {
    return (
        <>
            <HeaderWithButtons heading={'Transaction Report Management'} button1={'Export CSV'} />
            <SearchBar />
            <TransactionTable />
        </>
    );
}