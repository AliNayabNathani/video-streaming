import { Box, Divider, Heading, List, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";

export default function BankInfo() {
    return (
        <MainTemplate>
            <Heading size={'lg'} mb={'1rem'}>Bank and Tax Information</Heading>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Account Setup for Content Submission
                </Heading>
                <Text>You can submit your videos for licensing evaluation once your account setup is complete. To finalize the setup process, you will require the following three essential pieces of information:</Text>
                <OrderedList color={'#9c9c9c'}>
                    <ListItem>A bank account from one of our endorsed regions</ListItem>
                    <ListItem>A bank account from one of our endorsed regions</ListItem>
                    <ListItem>Your billing preferences</ListItem>
                </OrderedList>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Bank Information</Heading>
                <Text>We remit your royalty payments directly to the bank account you specify. Check our list of Supported Banking Regions to ensure your bank is in an area we can transfer funds to. Payments are generally processed around 90 days following the close of the month during which your content generated revenue. For more details, refer to our Bank Information section.</Text>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Tax Details</Heading>
                <Text>Before you can upload videos and receive payments, you need to furnish us with your tax information to adhere to local tax laws. Note: If your content is intended for distribution in a European or UK territory, you are mandated to complete a UK Tax Form as well as specify your billing preferences. To learn more, head over to our Tax Information section</Text>
            </Box>

            <Divider />

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Account holder</Heading>
                <OrderedList color='#9c9c9c'>
                    <ListItem>Type-checking or savings</ListItem>
                    <ListItem>Account number (verify in box 2)</ListItem>
                    <ListItem>Routing number box 1 and verify in box2</ListItem>
                    <ListItem>Name of bank</ListItem>
                    <ListItem>Click add</ListItem>
                </OrderedList>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>After click add then:</Heading>
                <Text>You are setup to receive payments</Text>
                <UnorderedList color='#9c9c9c'>
                    <ListItem>Customers can purchase your content in their local currency</ListItem>
                    <ListItem>You get paid in your preferred currencies</ListItem>
                    <ListItem>All videeo transactions will be paid in US($) dollars according to your payment details below</ListItem>
                    <ListItem>You are notified by email if there are any issues</ListItem>
                </UnorderedList>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Add another bank button</Heading>
                <UnorderedList color='#9c9c9c'>
                    <Text>Bank account</Text>
                    <Text>United states *****123</Text>
                    <Text>payment details you are paid in: US($)</Text>
                </UnorderedList>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Delete Account</Heading>
                <Text>We must collect tax info about your business, before we can pay you. You will be redirected to our secure tax platform, and returned here for confirmation</Text>
                <br />

            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}></Heading>
                <Text></Text>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Under penalties of perjury, I certify that:</Heading>
                <OrderedList color='#9c9c9c'>
                    <ListItem>The number shown on this form is my correct TIN, and</ListItem>
                    <ListItem> I am not subject to withholding because: (a) no notification from IRS, (b) exempt from backup withholding, or</ListItem>
                    <ListItem>I am a US citizen, and</ListItem>
                    <ListItem>Name of bank</ListItem>
                    <ListItem> I am exempt from FATCA reporting and FATCA# is correct entered on this form</ListItem>
                </OrderedList>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>Provided:</Heading>
                <Text>The IRS doesn`t require your consent to any provision of this document other than the certications required to avoid backup withholding. Signature (type full name)</Text>
                <Text>By typing my name on any given date, I`m signing the tax form under penalties of perjury</Text>
                <Text>Date _____</Text>
                <Text>Submit for review --- review document</Text>
                <Text>Make changes                  submit</Text>
                <Text>Tax info review</Text>
            </Box>

            <Box mb={'1rem'}>
                <Heading size={'sm'} color={'#55DF01'}>VALIDATED</Heading>
                <Text>Your tax info has been received and successfully validated applicable withholding rate: <b style={{ color: '#55DF01' }}>0%</b></Text>
                <Text>Exit assessment</Text>
            </Box>

            <Text textDecor={'underline'} color={'#55DF01'}>Print W9 document download</Text>
        </MainTemplate >
    )
}