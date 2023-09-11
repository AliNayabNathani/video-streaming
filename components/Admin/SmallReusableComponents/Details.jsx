import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { PageHeading } from "./Heading";
import React from "react";

const Details = ({ PageName, DetailsData, DetailsColumn }) => {
    return (
        <>
            <PageHeading text={`${PageName} Detail Screen`} />
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1} alignItems={"center"}>
                {DetailsData.map((data) => (
                    <React.Fragment key={data.UserID}>
                        {DetailsColumn.map((column) => (
                            <GridItem colSpan={1}>
                                <Text>{`${column}: ${data[column]}`}</Text>
                            </GridItem>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </>
    );
};


export { Details };