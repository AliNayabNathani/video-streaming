import { HeaderWithButtons } from "../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";
import { User_Tables } from "../components/Admin/Tables/Table";
import UserManagement from "../components/Admin/User/User";

export default function User() {
    return (
        <>
            <HeaderWithButtons heading={'User Management'} button1={'Export CSV'} button2={'Add User'} />
            <SearchBar />
            <User_Tables />
        </>
    )
}