import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";

export default function Overview() {
    return (
        <MainTemplate>
            <Box p={8}>
                <Heading mb={'2rem'} size={'md'}>Overview</Heading>
                <Text>Videe0Hub serves as a bridge between content creators-ranging from indie producers to big-shot studios-and our diverse, global audience accessible through an array of devices. Videe0Hub allows you to offer your content that meets our guidelines for either rental or purchase, primarily on key global markets from United States to Africa</Text>
                <br />
                <Text>At Videeo, we are committed to regularly updating our content library to provide fresh and engaging material for our viewers. We typically license professionally crafted movies and TV series that have either hit the silver screen, been featured on major TV channels, or been showcased at leading film festivals. However, being professionally produced is not the sole criteria; Videeo retains the discretion to either include or exclude content based on various factors. We might also choose to license unique titles that haven't been released theatrically or featured on major networks or festivals. It's important to note that any content licensed is not guaranteed a permanent spot and can be taken down at any time, as determined solely by Videe0.</Text>
                <br />
                <Text>Each submitted title is subject to both manual and automated evaluations before any licensing agreements are made. Until your content has been approved across all the territories and formats you've requested, it will be tagged as 'Under Review'. Please be aware that submission of your title doesn't ensure its selection for licensing, nor does it commit Videeo to a specific publishing timeframe.</Text>
                <br />
                <Text>For more info, please refer to your Video Onboarding Guide (link to guide on site) for a detailed guide of the process from start to finish</Text>
            </Box>
        </MainTemplate>
    );
}