import { HeaderWithButtons } from "../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";
import ContentCreatorTable from "../components/Admin/Tables/ContentCreatorTableData";

export default function ContentCreatorManagement() {
    return (
        <>
            <HeaderWithButtons heading={'Content Creator Management'} button1={'Export CSV'} button2={'Add User'} />
            <SearchBar />
            <ContentCreatorTable />
        </>
    );
}