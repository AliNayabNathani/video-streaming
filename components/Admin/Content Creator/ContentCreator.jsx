import { HeaderWithButtons } from "../SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import ContentCreatorTable from "../Tables/ContentCreatorTableData";

export default function ContentCreatorManagement() {
    return (
        <>
            <HeaderWithButtons heading={'Content Creator Management'} button1={'Export CSV'} button2={'Add User'} />
            <SearchBar />
            <ContentCreatorTable />
        </>
    );
}