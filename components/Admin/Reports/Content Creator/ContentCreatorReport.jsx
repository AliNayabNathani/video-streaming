import React from 'react';
import SidebarWithHeader from '../../Sidebar/sidebartest';
import { HeaderWithButtons } from '../../SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../../SmallReusableComponents/SearchBar';
import ContentCreatorReportTable from './ContentCreatorReportTable';

export default function ContentCreatorReport() {
    return (
        <>
            <HeaderWithButtons heading={'Conent Creator Account Payment Report'} button1={'Export CSV'} />
            <SearchBar />
            <ContentCreatorReportTable />
        </>
    );
}