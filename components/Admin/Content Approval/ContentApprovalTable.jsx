import { TableTemplate } from "../Tables/Table";
import { HiOutlineEye } from "react-icons/hi";
import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AddModal } from "../Category/Modal/AddModal";
import { ContentApprovalButtons } from "../SmallReusableComponents/Action";

const ContentApprovalTableData = [
  {
    Video_Title: "Food Vlog",
    Creator_Name: "John Dee",
    Rented_Amount: "$500",
    Purchasing_Amount: "$300",
    Uploaded_Date: "11/22/2022",
  },
  {
    Video_Title: "Travel Adventure",
    Creator_Name: "Emma Smith",
    Rented_Amount: "$400",
    Purchasing_Amount: "$250",
    Uploaded_Date: "10/15/2022",
  },
  {
    Video_Title: "Fitness Routine",
    Creator_Name: "Alex Johnson",
    Rented_Amount: "$450",
    Purchasing_Amount: "$280",
    Uploaded_Date: "09/28/2022",
  },
  {
    Video_Title: "Cooking Masterclass",
    Creator_Name: "Sophia Williams",
    Rented_Amount: "$550",
    Purchasing_Amount: "$330",
    Uploaded_Date: "08/10/2022",
  },
  {
    Video_Title: "Nature Exploration",
    Creator_Name: "Daniel Brown",
    Rented_Amount: "$420",
    Purchasing_Amount: "$270",
    Uploaded_Date: "07/05/2022",
  },
  {
    Video_Title: "Art and Creativity",
    Creator_Name: "Olivia Martinez",
    Rented_Amount: "$380",
    Purchasing_Amount: "$240",
    Uploaded_Date: "06/18/2022",
  },
  {
    Video_Title: "Science Explained",
    Creator_Name: "William Jackson",
    Rented_Amount: "$520",
    Purchasing_Amount: "$310",
    Uploaded_Date: "05/09/2022",
  },
  {
    Video_Title: "Music Jam Session",
    Creator_Name: "Ava Garcia",
    Rented_Amount: "$470",
    Purchasing_Amount: "$290",
    Uploaded_Date: "04/14/2022",
  },
  {
    Video_Title: "Language Learning",
    Creator_Name: "Liam White",
    Rented_Amount: "$490",
    Purchasing_Amount: "$320",
    Uploaded_Date: "03/22/2022",
  },
  {
    Video_Title: "Tech Reviews",
    Creator_Name: "Ella Adams",
    Rented_Amount: "$430",
    Purchasing_Amount: "$260",
    Uploaded_Date: "02/07/2022",
  },
];

const ContentApprovalTableColumns = [
  "Video_Title",
  "Creator_Name",
  "Rented_Amount",
  "Purchasing_Amount",
  "Uploaded_Date",
];

const ContentAprrovalModal = () => (
  <>
    <Box p={5}>
      <HStack
        borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
        p={"0.5rem"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <Text fontWeight={"bold"}>Video Title: </Text>
        <Text>{ContentApprovalTableData[0].Video_Title}</Text>
      </HStack>
      <HStack
        borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
        p={"0.5rem"}
        bg={"whiteAlpha.300"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <Text fontWeight={"bold"}>Uploaded Date: </Text>
        <Text>{ContentApprovalTableData[0].Uploaded_Date}</Text>
      </HStack>
      <HStack
        borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
        p={"0.5rem"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <Text fontWeight={"bold"}>Creator Name: </Text>
        <Text>{ContentApprovalTableData[0].Creator_Name}</Text>
      </HStack>
      <HStack
        borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
        p={"0.5rem"}
        bg={"whiteAlpha.300"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <Text fontWeight={"bold"}>Rented Amount: </Text>
        <Text>{ContentApprovalTableData[0].Rented_Amount}</Text>
      </HStack>
      <HStack
        borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
        p={"0.5rem"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <Text fontWeight={"bold"}>Purchasing Amount: </Text>
        <Text textAlign={"start"}>
          {ContentApprovalTableData[0].Purchasing_Amount}
        </Text>
      </HStack>
      <HStack
        p={"0.5rem"}
        justifyContent={"space-around"}
        marginBottom={"1rem"}
      >
        <ContentApprovalButtons />
      </HStack>
    </Box>
  </>
);

const ContentApprovalActions = ({ to }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [SelectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (button) => {
    console.log(button);
    setSelectedButton(button);
    onOpen();
  };

  return (
    <>
      <HStack justifyContent={"space-around"}>
        <HiOutlineEye
          onClick={() => handleButtonClick("Content Approval")}
          cursor={"pointer"}
          size={25}
        />
        <ContentApprovalButtons />
      </HStack>
      <AddModal
        heading={"Content Approval Management"}
        CustomModal={ContentAprrovalModal}
        isOpen={isOpen}
        onClose={onClose}
        selectedButton={SelectedButton}
      />
    </>
  );
};

const ContentApprovalTable = () => {
  return (
    <TableTemplate
      data={ContentApprovalTableData}
      columns={ContentApprovalTableColumns}
      Actions={ContentApprovalActions}
    />
  );
};

export { ContentApprovalTable, ContentAprrovalModal };
