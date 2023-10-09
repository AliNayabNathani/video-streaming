import React from 'react';
import { HeaderWithButtons } from '../../SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../../SmallReusableComponents/SearchBar';
import SubscriptionTable from './SubscriptionTable';

export default function Subscription() {
    return (
        <>
            <HeaderWithButtons heading={'Subscription Report Management'} button1={'Export CSV'} />
            <SearchBar />
            <SubscriptionTable />
        </>
    );
}