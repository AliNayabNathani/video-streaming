import { Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";

export default function Billing() {
    return (
        <MainTemplate>
            <Heading>Billing preferences</Heading>
            <Text>Due to possible changes in our acquisition policies, content providers based in the EU and UK must provide valid VAT invoices as a precondition for receiving payments. As such, your billing preferences are crucial. For additional information, please consult our Billing Preferences section.</Text>
        </MainTemplate>
    )
}