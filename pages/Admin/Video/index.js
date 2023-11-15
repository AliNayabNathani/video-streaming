import { useState } from "react";
import { PageHeading } from "../../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../../components/Admin/SmallReusableComponents/SearchBar";
import VideoTable from "../../../components/Admin/Video/VideoTable";

export default function Video() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  return (
    <>
      <PageHeading text={"Video Management"} />
      <SearchBar setItemsPerPage={setItemsPerPage} />
      <VideoTable itemsPerPage={itemsPerPage} />
    </>
  );
}
