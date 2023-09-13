import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { HeaderWithButtons } from '../components/Admin/SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../components/Admin/SmallReusableComponents/SearchBar';
import { TableTemplate } from '../components/Admin/Tables/Table';
import { userColumns, userData } from '../components/Admin/Tables/UserTableData';
import { Actions } from '../components/Admin/SmallReusableComponents/Action';
import { useSearchContext } from '../components/Admin/Context api/Context';
export default function UserManagement() {
    const { searchQuery, isFilter } = useSearchContext();

    const filterData = () => {
        if (searchQuery) {
            return userData.filter((data) =>
                data.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                data.User_ID.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        return userData;
    };
    return (
        <>
            <HeaderWithButtons heading={'User Management'} button1={'Export CSV'} button2={'Add User'} />
            <SearchBar />
            <TableTemplate
                data={searchQuery?.length > 1 && isFilter ? filterData() : userData}
                columns={userColumns}
                to={"/UserDetails"}
                Actions={Actions}
            />
        </>
    );
}