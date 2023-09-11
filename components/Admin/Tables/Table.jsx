import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'

import { creatorColumns, viewerColumns, transactionColumns, videoColumns, creatorData, VideoData, transactionData, viewerData } from './DashboardTableData';
import { useRef } from 'react';
import { userData, userColumns } from './UserTableData';
import { Actions } from '../SmallReusableComponents/Action';

const TableTemplate = ({ data, text, columns, Actions, to, Availability }) => {
  const num = useRef(0);
  return (
    <TableContainer mx={5} mt={'1rem'} borderRadius={'10px'} borderWidth={'2px'} borderColor={'blackAlpha.600'}>
      <Table colorScheme='gray'>
        {text ? <TableCaption>{text}</TableCaption> : null}
        <Thead>
          <Tr>
            {columns.map((c) => (
              <Th textAlign={'center'} maxWidth={'10rem'} px={'10px'} borderRight={'1px'} borderColor={'blackAlpha.600'}>{c}</Th>
            ))}
            {Actions ? (<Th textAlign={'center'} borderColor={'blackAlpha.600'} borderRight={'1px'}>Actions</Th>) : null}
            {Availability ? (<Th textAlign={'center'} borderColor={'blackAlpha.600'}>Availability</Th>) : null}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            num.current++;
            return (
              <Tr style={num.current % 2 === 1 ? { background: 'RGBA(0, 0, 0, 0.1)' } : { background: 'white' }} key={index}>
                {columns.map((column) => {
                  return (
                    <Td textAlign={'center'} borderRight={'1px'} borderBottom={0} borderColor={'blackAlpha.600'} key={column}>{item[column]}</Td>
                  )
                })}
                {Actions ? (<Td textAlign={'center'} borderColor={'blackAlpha.600'} borderBottom={0} borderRight={'1px'}> <Actions to={to} /> </Td>) : null}
                {Availability ? (<Td textAlign={'center'} borderColor={'blackAlpha.600'} borderBottom={0}> <Availability /> </Td>) : null}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

const Dashboard_Tables = () => {

  return (
    <>
      <SimpleGrid columns={{ base: '1', md: '2' }} spacing={5}>
        <GridItem>
          <TableTemplate data={creatorData} text='Creator Data' columns={creatorColumns} />
        </GridItem>
        <GridItem>
          <TableTemplate data={VideoData} text='Video Data' columns={videoColumns} />
        </GridItem>
        <GridItem>
          <TableTemplate data={viewerData} text='Viewer Data' columns={viewerColumns} />
        </GridItem>
        <GridItem>
          <TableTemplate data={transactionData} text='Transaction Data' columns={transactionColumns} />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

const User_Tables = () => {
  return (
    <TableTemplate data={userData} columns={userColumns} to={'/user/details'} Actions={Actions} />
  );
}

export { Dashboard_Tables, User_Tables, TableTemplate };