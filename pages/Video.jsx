import { useState } from "react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";
import VideoTable from "../components/Admin/Video/VideoTable";

export default function Video() {
  return (
    <>
      <PageHeading text={"Video Management"} />
      <SearchBar />
      <VideoTable />
    </>
  );
}
