import { SearchBar } from "../SmallReusableComponents/SearchBar";
import { PageHeading } from "../SmallReusableComponents/Heading";
import { ContentApprovalTable } from "./ContentApprovalTable";

export default function ContentApproval() {
    return (
        <>
            <PageHeading text={'Content Approval Management'} />
            <SearchBar />
            <ContentApprovalTable />
        </>
    );
}