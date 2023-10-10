import ChannelTable from "../../components/Admin/Channel/ChannelTable";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";

export default function Channel() {
    return (
        <>
            <PageHeading text={'Channel Management'} />
            <SearchBar />
            <ChannelTable />
        </>
    );
}