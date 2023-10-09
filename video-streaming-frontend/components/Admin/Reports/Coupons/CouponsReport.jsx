import React from 'react';
import { HeaderWithButtons } from '../../SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../../SmallReusableComponents/SearchBar';
import CouponsReportTable from './CouponsReportTable';

export default function CouponsReport() {
    return (
        <>

            <HeaderWithButtons heading={'Coupons Redemption Report'} button1={'Export CSV'} />
            <SearchBar />
            <CouponsReportTable />
        </>
    );
}