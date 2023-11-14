import { useState } from "react";
import CategoryTable from "../../components/Admin/Category/CategoryTable";
import { HeaderModalButtons } from "../../components/Admin/SmallReusableComponents/HeaderModalButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import PrivateRoute from "../PrivateRoute";

export default function Category() {
  const [categoryData, setCategoryData] = useState([]);
  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <HeaderModalButtons
          heading={"Category Management"}
          categoryData={categoryData}
          setCategoryData={setCategoryData}
        />
        <SearchBar />
        <CategoryTable
          categoryData={categoryData}
          setCategoryData={setCategoryData}
        />
      </PrivateRoute>
    </>
  );
}
