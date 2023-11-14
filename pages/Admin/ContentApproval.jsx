import { ContentApprovalTable } from "../../components/Admin/Content Approval/ContentApprovalTable";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import PrivateRoute from "../PrivateRoute";

export default function ContentApproval() {
  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <PageHeading text={"Content Approval Management"} />
        <SearchBar />
        <ContentApprovalTable />
      </PrivateRoute>
    </>
  );
}
