import { useState } from "react";
import { HeaderWithButtons } from "../SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import ContentCreatorTable from "../Tables/ContentCreatorTableData";

export default function ContentCreatorManagement() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  return (
    <>
      <HeaderWithButtons
        heading={"Content Creator Management"}
        button1={"Export CSV"}
        button2={"Add User"}
      />
      <SearchBar setItemsPerPage={setItemsPerPage} />
      <ContentCreatorTable itemsPerPage={itemsPerPage} />
    </>
  );
}
