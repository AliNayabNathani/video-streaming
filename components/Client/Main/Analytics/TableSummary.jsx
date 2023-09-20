
import { Stack, Box, Card, CardBody, Flex, HStack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
export default function TableSummary() {
    const Revenue_Card = ({ title, total_earnings, weekly_earnings }) => (
        <Card fontSize={'1.2rem'} width={'250px'} borderRadius={'20px'}>
            <CardBody >
                <Flex textAlign={'center'} direction={'column'} alignItems={'center'} >
                    <b style={{ textDecoration: 'underline' }} >{title} </b>
                    <Text>{total_earnings}</Text>
                    <Text>+{weekly_earnings}</Text>
                </Flex>
            </CardBody>
        </Card>
    );

    const Stats_Card = ({ title, total, monthly }) => (
        <Card fontSize={'1.2rem'} width={'250px'} borderRadius={'20px'}>
            <CardBody>
                <Flex textAlign={'center'} direction={'column'} alignItems={'center'}>
                    <b><u>{title}</u></b>
                    <Text>This month: {monthly}</Text>
                    <Text>Total: {total}</Text>
                </Flex>
            </CardBody>
        </Card>
    )

    return (
        <>
            <SimpleGrid
                columns={{ base: '1', md: '3' }}
                spacing={{ base: 2, md: '2rem' }}
            >
                <Revenue_Card title="Revenue" total_earnings="$54000" weekly_earnings="$2000" />
                <Revenue_Card title="Sales Revenue" total_earnings="$33000" weekly_earnings="$1300" />
                <Revenue_Card title="Video Hub Set Up Revenue" total_earnings="$21000" weekly_earnings="$800" />
                <Stats_Card title="Number of Registered Users" total="5000" monthly="50" />
                <Stats_Card title="Total Videos" total="5000" monthly="50" />
                <Stats_Card title="Total Movies" total="1000" monthly="10" />
                <Stats_Card title="Total TV Series" total="500" monthly="5" />
                <Stats_Card title="Total Live Streams" total="4000" monthly="40" />
                <Stats_Card title="Active Subscriptions" total="1000" monthly="10" />
            </SimpleGrid>
        </>
    )
}