import { Box, Heading, Text } from "@chakra-ui/react";
import CompleteSetup from "../../../pages/Client/AccountSetup";

export const DummyText = ({ count }) => {
    count++;
    return (
        <Box mt={'3rem'} mr={{ base: 'none', md: '15rem' }}>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >Setup Account: </Heading>
                <Text>Your dashboard is the central hub for managing all aspects of your Vides account, from personal and company details to financial information and services.</Text>
            </Box>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >To navigate to your dashboard:</Heading>
                <ol >
                    <li>
                        Visit videeO.com. For users with an account specific to a certain region, you will be directed accordingly.
                    </li>
                    <li>
                        Click on your username located at the upper right corner of the screen and select &quot;Dashboard.&quot;
                    </li>
                    <li>
                        You&apos;ll land on the Dashboard Overview
                    </li>
                </ol>
                <Text>With Payee Settings, you can modify various components of your account --- be it your profile, bank information, or tax details.</Text>
            </Box>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >Business Information</Heading>
                <Text>This section is for specifying your business name and contact information. If you are an individual user, simply use your first and last name. Remember, the email you use here will serve as your primary contact. Changing this email will require a confirmation process.</Text>
            </Box>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >Financial Setup</Heading>
                <Text>Here, you will input your banking details for any disbursements. Payments are generally processed through a 50-day cycle, allowing for financial transactions at the beginning of each month. To view a schedule of specific payout dates, check here. Note: If your bank is not supported, you will need to open an account with one of the approved banks.</Text>
            </Box>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >Tax Compliance</Heading>
                <Text>You must report your income for tax purposes as required by U.S. tax laws. Before you can upload documents and receive payment, a $55 fee is applicable for tax compliance verification. For additional information, refer to our Tax Guidelines and Frequently Asked Questions on Tax.</Text>
            </Box>
            <Box mb={'2rem'}>
                <Heading mb={'0.5rem'} color={"#55DF01"} size={'md'} >Team Members & Access Levels</Heading>
                <Text>Ths area allows you to add or remove authorized users and designate their roles, Different roles provide different access
                    privileges within your account. For more details on this, visit our Team Members & Access Levels section</Text>
            </Box>
        </Box>
    );
}

export const AccountSetup = () => {
    return (
        <CompleteSetup />
    );
}

export const Overview = () => (
    <Box mt={'3rem'} mr={{ base: 'none', md: '15rem' }}>
        <Heading>Overview</Heading>
        <Text>VideeOHub serves as a bridge between content creators ranging from indie producers to big-shot studios-and our diverse, global audience accessible through an array of devices. VideeOHub allows you to offer your content that meets our guidelines for either rental or purchase, primarily on key global markets from United States to Africa
            At Videeo, we are committed to regularly updating our content library to provide fresh and engaging material for our viewers. We typically license professionally crafted movies and TV series that have either hit the silver screen, been featured on major TV channels, or been showcased at leading film festivals. However, being professionally produced is not the sole criteria; Videeo retains the discretion to either include or exclude content based on various factors. We might also choose to license unique titles that haven&apos;t been released theatrically or featured on major networks or festivals. It&apos;s important to note that any content licensed is not guaranteed a permanent spot and can be taken down at any time, as determined solely by Videeo.
            Each submitted title is subject to both manual and automated evaluations before any licensing agreements are made. Until your content has been approved across all the territories and formats you&apos;ve requested, it will be tagged as &apos;Under Review&apos;. Please be aware that submission of your title doesn&apos;t ensure its selection for licensing, nor does it commit Videeo to a specific publishing timeframe.
            For more info, please refer to your Video Onboarding Guide (link to guide on site) for a detailed guide of the process from start to finish</Text>
    </Box>
)