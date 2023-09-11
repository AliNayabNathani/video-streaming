import ContentCreatorReportTable from "../components/Admin/Reports/Content Creator/ContentCreatorReportTable";
import { HeaderWithButtons } from "../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../components/Admin/SmallReusableComponents/SearchBar";

export default function ContentCreatorReport() {
    return (
        <>
            <HeaderWithButtons heading={'Conent Creator Account Payment Report'} button1={'Export CSV'} />
            <SearchBar />
            <ContentCreatorReportTable />
        </>
    );
}