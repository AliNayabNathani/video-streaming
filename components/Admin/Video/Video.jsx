import { SearchBar } from "../SmallReusableComponents/SearchBar";
import { PageHeading } from "../SmallReusableComponents/Heading";
import VideoTable from "./VideoTable";
import React from "react";

export default function Video() {
    return (
        <>
            <PageHeading text={'Video Management'} />
            <SearchBar />
            <VideoTable />
        </>
    );
}