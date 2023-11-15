import { useState } from "react";
import ChannelTable from "../../../components/Admin/Channel/ChannelTable";
import { PageHeading } from "../../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../../components/Admin/SmallReusableComponents/SearchBar";

export default function Channel() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  return (
    <>
      <PageHeading text={"Channel Management"} />
      <SearchBar setItemsPerPage={setItemsPerPage} />
      <ChannelTable itemsPerPage={itemsPerPage} />
    </>
  );
}
