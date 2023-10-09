import { ContentApprovalTable } from "../../components/Admin/Content Approval/ContentApprovalTable";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";

export default function ContentApproval() {
    return (
        <>
            <PageHeading text={'Content Approval Management'} />
            <SearchBar />
            <ContentApprovalTable />
        </>
    );
}