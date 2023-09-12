import CategoryTable from "../components/Admin/Category/CategoryTable";
import { HeaderModalButtons } from "../components/Admin/SmallReusableComponents/HeaderModalButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";

export default function Category() {
    return (
        <>
            <HeaderModalButtons heading={'Category Management'} button1={'Add Category'} button2={'Add Sub Category'} />
            <SearchBar />
            <CategoryTable />
        </>
    );
}