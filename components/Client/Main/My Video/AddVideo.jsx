import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { useDetailContext } from "../../Context/context";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiImageAdd, BiPlay } from "react-icons/bi";
import { Tooltip } from "recharts";
import videojs from "video.js";
import axios from "axios";
import { server } from "../../../server";

const Video = ({ src, onOptions, poster, name }) => {
  const videoRef = useRef(null);

  const [streamButton, setStreamButton] = useState(<BiPlay />);
  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      muted: true,
      controls: false,
      responsive: true,
      fluid: true,
      sources: [
        {
          src,
          type: "video/mp4",
          poster,
        },
      ],
    };

    const player = videojs(videoRef.current, videoJsOptions, function () {
      // Player is ready
    });

    // Add event listeners
    player.on("play", () => {
      // Video play event
    });

    player.on("pause", () => {
      // Video pause event
    });

    player.on("ended", () => {
      // Video ended event
    });

    return () => {
      // Cleanup and dispose of the player
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const handleOptions = () => {
    // Implement your logic to show options, e.g., open a modal
    console.log("Options clicked");
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      // Check if the video is paused and toggle accordingly
      if (videoRef.current.paused) {
        videoRef.current.play();
        setStreamButton(BiPause); // Set the button icon to pause
      } else {
        videoRef.current.pause();
        setStreamButton(BiPlay); // Set the button icon to play
      }
    }
  };

  return (
    <Box>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        poster={poster}
      />
      <HStack p={2} bg={"whiteAlpha.100"} justifyContent={"space-between"}>
        <Stack>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            onClick={togglePlayPause}
          >
            {streamButton}
          </Button>
        </Stack>
        <HStack>
          <Tooltip hasArrow label={name} bg="white">
            <Button
              borderRadius={"20px"}
              size={"sm"}
              bg={"blackAlpha.600"}
              color="white"
              p={0}
              onClick={handleOptions}
            >
              <AiOutlineInfoCircle />
            </Button>
          </Tooltip>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={handleOptions}
          >
            <BsThreeDotsVertical />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

const FormLabelOutline = ({ children }) => (
  <Text
    width={"100%"}
    color={"white"}
    textAlign={"start"}
    fontSize={"1rem"}
    fontWeight={"bold"}
  >
    {children}
  </Text>
);

const UploadEpisodeOutline = ({ episodeData, setEpisodeData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serverImage, setServerImage] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [serverVideo, setServerVideo] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  function EpisodeModal({ isOpen, onClose, episodeData, setEpisodeData }) {
    const [tempEpisodeData, setTempEpisodeData] = useState({
      title: "",
      src: "",
      poster: "",
      description: "",
    });

    console.log("Temp: ", tempEpisodeData);
    console.log("Episode: ", episodeData);

    const handleVideoSelect = (e) => {
      const selectedFile = e.target.files[0];
      console.log("selected", selectedVideo);
      setServerVideo(selectedFile);
      if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        setSelectedVideo(objectURL);
      }
      const formData = new FormData();
      formData.append("Video", selectedFile);
      axios
        .post(server + "other/uploadVideo", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      handleEpisodeData(e);
    };

    const handlePictureSelect = (e) => {
      const selectedFile = e.target.files[0];
      console.log(selectedImage);
      setServerImage(selectedFile);
      if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        setSelectedImage(objectURL);
      }
      const formData = new FormData();
      formData.append("image", selectedFile);
      axios
        .post(server + "other/uploadPicture", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      handleEpisodeData(e);
    };

    const handleEpisodeData = (e) => {
      setTempEpisodeData({
        ...tempEpisodeData,
        [e.target.name]: e.target.value,
      });
    };

    const handleEpisodeUpload = () => {
      setEpisodeData([...episodeData, tempEpisodeData]);
      onClose();
    };

    const clearEpisodeData = () => {
      tempEpisodeData({
        title: "",
        src: "",
        poster: "",
        description: "",
      });
    };
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={"#232323"}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Enter Title</Text>
              <Input
                value={tempEpisodeData.title}
                name="title"
                onChange={handleEpisodeData}
                required
              />
              <Text>Select Video</Text>
              {/* <Input value={tempEpisodeData.src} name="src" onChange={handleEpisodeData} type="file" accept="video/*" required /> */}
              <HStack for="fileInput" border={"1px solid #323232"} w={"100%"}>
                <Input
                  type="file"
                  value={tempEpisodeData.poster}
                  accept="video/*"
                  display="none"
                  id="fileInput"
                  justifyContent={"center"}
                  onChange={handleVideoSelect}
                  required
                />
                <label
                  htmlFor="fileInput"
                  style={{ cursor: "pointer", marginLeft: "1rem" }}
                >
                  <AiOutlineVideoCameraAdd size={32} />
                </label>
              </HStack>
              <Text>Select thumbnail</Text>
              {/* <Input value={tempEpisodeData.poster} name='poster' onChange={handleEpisodeData} type="file" accept="image/*" /> */}
              <HStack for="fileInput" border={"1px solid #323232"} w={"100%"}>
                <Input
                  type="file"
                  value={tempEpisodeData.poster}
                  accept="image/*"
                  display="none"
                  id="fileInput"
                  justifyContent={"center"}
                  onChange={handlePictureSelect}
                  required
                />
                <label
                  htmlFor="fileInput"
                  style={{ cursor: "pointer", marginLeft: "1rem" }}
                >
                  <BiImageAdd size={32} />
                </label>
              </HStack>
              <Text>Enter Description</Text>
              <Input
                value={tempEpisodeData.description}
                name="description"
                onChange={handleEpisodeData}
                required
              />
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={handleEpisodeUpload}>
                Upload
              </Button>
              <Button mr={3} onClick={clearEpisodeData}>
                clear
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <Box>
      <VStack alignItems={["center", "flex-start"]} p={6}>
        <Stack direction={"row-reverse"}>
          <HStack>
            <Button
              bg={"#414141"}
              color={"#55DF01"}
              fontSize={"inherit"}
              textDecor={"underline"}
              w={"150px"}
              h={"150px"}
              onClick={onOpen}
            >
              Upload File
            </Button>
          </HStack>
          <EpisodeModal
            episodeData={episodeData}
            setEpisodeData={setEpisodeData}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Stack>
      </VStack>
    </Box>
  );
};

const VideoOutline = ({
  index,
  setEpisodeData,
  episodeData,
  visibleVideoOutlines,
  setVisibleVideoOutlines,
}) => {
  const handleDelete = () => {
    setVisibleVideoOutlines((prevVisibleVideoOutlines) => {
      return prevVisibleVideoOutlines.filter((video, i) => i !== index);
    });

    episodeData.forEach((_, index) => {
      episodeData.splice(index);
    });
  };

  return (
    <HStack
      width={"100%"}
      bg={"whiteAlpha.400"}
      p={8}
      border={"2px solid black"}
    >
      <Box height={"100%"}>
        <UploadEpisodeOutline />
      </Box>
      <VStack w={"100%"} ml={"1rem"} alignSelf={"flex-start"}>
        <Input
          _placeholder={{ color: "white" }}
          name="title"
          variant={"unstyled"}
          placeholder="Add Title"
        />
        <Input
          _placeholder={{ color: "white" }}
          name="Length"
          variant={"unstyled"}
          placeholder="Add Length"
        />
        <Input
          _placeholder={{ color: "white" }}
          name="desc"
          variant={"unstyled"}
          placeholder="Add Description"
        />
      </VStack>
      <Icon
        onClick={handleDelete}
        cursor={"pointer"}
        color={"black"}
        as={AiOutlineCloseCircle}
        alignSelf={"flex-start"}
        boxSize={7}
      />
    </HStack>
  );
};

const TrailerOutline = ({
  index,
  setTrailerOutlines,
  trailerData,
  setTrailerData,
}) => {
  console.log(trailerData);
  const handleDelete = () => {
    setTrailerOutlines((prevtrailerOutlines) => {
      return prevtrailerOutlines.filter((trailer, i) => i !== index);
    });

    trailerData.forEach((_, index) => {
      trailerData.splice(index, 1);
    });
  };
  return (
    <Box key={index} bg={"whiteAlpha.400"} w={"100%"} p={4}>
      <Icon
        onClick={handleDelete}
        w={"100%"}
        cursor={"pointer"}
        color={"black"}
        as={AiOutlineCloseCircle}
        boxSize={7}
      />
      <VStack alignItems={["center", "flex-start"]}>
        <Stack direction={"row-reverse"}>
          <Box
            border={"1px solid transparent"}
            borderRadius={5}
            cursor={"pointer"}
            _hover={{ scale: "1.5" }}
            width={["100%", "200px"]}
            mr={"1rem"}
          >
            <Video
              src={trailerData[0].src}
              poster={trailerData[0].poster}
              name={trailerData[0].title}
            />
          </Box>
        </Stack>
        <Text>{trailerData[0].title}</Text>
      </VStack>
    </Box>
  );
};

const UploadOutline = ({
  trailerData,
  setTrailerData,
  setTrailerOutlines,
  trailerOutline,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function TrailerModal({ isOpen, onClose, trailerData, setTrailerData }) {
    const [tempTrailerData, setTempTrailerData] = useState({
      title: "",
      src: "",
      poster: "",
    });

    console.log("Temp: ", tempTrailerData);
    console.log("Trailer: ", trailerData);
    const handleTrailerData = (e) => {
      setTempTrailerData({
        ...tempTrailerData,
        [e.target.name]: e.target.value,
      });
    };

    const handleTrailerUpload = () => {
      setTrailerData([...trailerData, tempTrailerData]);
      setTrailerOutlines([
        ...trailerOutline,
        <TrailerOutline key={index} trailerData={trailerData} />,
      ]);
      onClose();
    };

    const handleFileSelect = (e) => {
      const selectedFile = e.target.files[0];
      console.log(selectedFile);
      setServerImage(selectedFile);
      if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        setSelectedImage(objectURL);
      }
      const formData = new FormData();
      formData.append("image", selectedFile);
      axios
        .post(server + "other/uploadPicture", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      handleTrailerData();
    };

    const clearTrailerData = () => {
      tempTrailerData({
        title: "",
        src: "",
        poster: "",
      });
    };
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={"#232323"}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Enter Title</Text>
              <Input
                value={tempTrailerData.title}
                name="title"
                onChange={handleTrailerData}
                required
              />
              <Text>Select Video</Text>
              <Input
                value={tempTrailerData.src}
                name="src"
                onChange={handleTrailerData}
                type="file"
                accept="video/*"
                required
              />
              <Text>Select thumbnail</Text>
              {/* <Input name='poster' onChange={handleFileSelect} type="file" accept="image/*" /> */}
              <HStack for="fileInput" border={"1px solid #323232"} w={"100%"}>
                <Input
                  type="file"
                  value={tempTrailerData.poster}
                  accept="image/*"
                  display="none"
                  id="fileInput"
                  justifyContent={"center"}
                  onChange={handleFileSelect}
                  required
                />
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={handleTrailerUpload}>
                Upload
              </Button>
              <Button mr={3} onClick={clearTrailerData}>
                clear
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <Box>
      <VStack alignItems={["center", "flex-start"]} p={6}>
        <Stack direction={"row-reverse"}>
          <HStack>
            <Button
              bg={"#414141"}
              color={"#55DF01"}
              fontSize={"inherit"}
              textDecor={"underline"}
              w={"150px"}
              h={"150px"}
              onClick={onOpen}
            >
              Upload File
            </Button>
          </HStack>
          <TrailerModal
            trailerData={trailerData}
            setTrailerData={setTrailerData}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default function AddVideo() {
  const [visibleVideoOutlines, setVisibleVideoOutlines] = useState([]);
  const [trailerOutline, setTrailerOutlines] = useState([]);
  const [trailerData, setTrailerData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  const [isVideoCreated, setIsVideoCreated] = useState(false);
  const handleAddButtonClick = () => {
    setVisibleVideoOutlines([
      ...visibleVideoOutlines,
      <VideoOutline key={visibleVideoOutlines.length} />,
    ]);
  };

  const [input, setInput] = useState({
    title: "",
    rentAmount: "",
    purchaseAmount: "",
    addGenre: "",
    description: "",
    castDetails: "",
    category: "",
    country: "",
    language: "",
    type: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    rentAmount: "",
    purchaseAmount: "",
    addGenre: "",
    description: "",
    castDetails: "",
    category: "",
    country: "",
    language: "",
    type: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleSelectChange = (e, selectedValue) => {
    const name = e.target.name;
    console.log(selectedValue);
    setInput({ ...input, [name]: selectedValue });
    console.log(input);
  };

  const createVideo = () => {
    const res = axios.post(server + "creator/myvideo/add", input, {
      headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });
    console.log(res);
    if (res.data.status == 200) {
      setIsVideoCreated(true);
    }
  };

  return (
    <>
      <Box p={"3rem"} mt={"2rem"} bg={"#232323"}>
        <Stack
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
        >
          <VStack width={["100%", "40%"]} alignItems={"flex-start"}>
            <FormLabelOutline>Title</FormLabelOutline>
            <Input
              name={"title"}
              value={input.title}
              onChange={handleInput}
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Rent Amount</FormLabelOutline>
            <Input
              name="rentAmount"
              value={input.rentAmount}
              onChange={handleInput}
              type="number"
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Purchasing Amount</FormLabelOutline>
            <Input
              name="purchaseAmount"
              value={input.purchaseAmount}
              onChange={handleInput}
              type="number"
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Add Genre</FormLabelOutline>
            <Input
              name="addGenre"
              value={input.addGenre}
              onChange={handleInput}
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Description</FormLabelOutline>
            <Textarea
              name="description"
              value={input.description}
              onChange={handleInput}
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Cast/Crew Details</FormLabelOutline>
            <Textarea
              name="castDetails"
              value={input.castDetails}
              onChange={handleInput}
              bg="rgba(255, 255, 255, 0.24)"
              borderColor="transparent"
            />

            <FormLabelOutline>Category</FormLabelOutline>
            <Menu>
              <MenuButton
                name="category"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg="rgba(255, 255, 255, 0.24)"
              >
                {input.category ? input.category : "educational"}{" "}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="category"
                  onClick={(e) => handleSelectChange(e, "Educational")}
                  value="Educational"
                >
                  Educational
                </MenuItem>
                <MenuItem
                  name="category"
                  onClick={(e) => handleSelectChange(e, "Short Film")}
                  value="Short Film"
                >
                  Short Film
                </MenuItem>
              </MenuList>
            </Menu>

            <FormLabelOutline>Country/Region</FormLabelOutline>
            <Menu>
              <MenuButton
                name="country"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg="rgba(255, 255, 255, 0.24)"
              >
                {input.country ? input.country : "US"}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="country"
                  onClick={(e) => handleSelectChange(e, "US")}
                  value="US"
                >
                  US
                </MenuItem>
                <MenuItem
                  name="country"
                  onClick={(e) => handleSelectChange(e, "Africa")}
                  value="Africa"
                >
                  Africa
                </MenuItem>
                <MenuItem
                  name="country"
                  onClick={(e) => handleSelectChange(e, "UK")}
                  value="UK"
                >
                  UK
                </MenuItem>
              </MenuList>
            </Menu>

            <FormLabelOutline>Language</FormLabelOutline>
            <Menu>
              <MenuButton
                name="language"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg={"whiteAlpha.400"}
              >
                {input.language ? input.language : "English"}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "English")}
                  value="English"
                >
                  English
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "Swahili")}
                  value="Swahili"
                >
                  Swahili
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "French")}
                  value="French"
                >
                  French
                </MenuItem>
              </MenuList>
            </Menu>

            <FormLabelOutline>Select Type</FormLabelOutline>
            <Menu>
              <MenuButton
                name="type"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg="rgba(255, 255, 255, 0.24)"
              >
                {input.type ? input.type : "Movie"}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="type"
                  onClick={(e) => handleSelectChange(e, "Movie")}
                  value="Movie"
                >
                  Movie
                </MenuItem>
                <MenuItem
                  name="type"
                  onClick={(e) => handleSelectChange(e, "Series")}
                  value="Series"
                >
                  Series
                </MenuItem>
              </MenuList>
            </Menu>
          </VStack>

          <VStack width={["100%", "50%"]} alignItems={"flex-start"}>
            <FormLabelOutline>Trailers (if any)</FormLabelOutline>
            <HStack w={"100%"} overflowX={"auto"}>
              {trailerOutline.map((data, index) => (
                <TrailerOutline
                  index={index}
                  setTrailerOutlines={setTrailerOutlines}
                  setTrailerData={setTrailerData}
                  trailerData={trailerData}
                  key={index}
                />
              ))}
              <VStack
                alignItems={"flex-start"}
                bg={"whiteAlpha.400"}
                w={"100%"}
                p={8}
              >
                <UploadOutline
                  trailerData={trailerData}
                  setTrailerData={setTrailerData}
                  trailerOutline={trailerOutline}
                  setTrailerOutlines={setTrailerOutlines}
                />
              </VStack>
            </HStack>

            <FormLabel>Trailer Langauge (Optional)</FormLabel>
            <Menu>
              <MenuButton
                name="language"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg={"whiteAlpha.400"}
              >
                {input.language ? input.language : "English"}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "English")}
                  value="English"
                >
                  English
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "Swahili")}
                  value="Swahili"
                >
                  Swahili
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "French")}
                  value="French"
                >
                  French
                </MenuItem>
              </MenuList>
            </Menu>

            <FormLabelOutline>Upload Episodes</FormLabelOutline>

            {visibleVideoOutlines.map((video, index) => (
              <VideoOutline
                visibleVideoOutlines={visibleVideoOutlines}
                setVisibleVideoOutlines={setVisibleVideoOutlines}
                episodeData={episodeData}
                setEpisodeData={setEpisodeData}
                index={index}
                key={index}
              />
            ))}

            <Button
              fontSize={"1.1rem"}
              justifyContent={"space-between"}
              width={"100%"}
              onClick={handleAddButtonClick}
              rightIcon={<FaPlus size={20} />}
            >
              Add New Episodes
            </Button>

            <HStack>
              <Text
                color={"#55DF01"}
                textDecor={"underline"}
                onClick={() => document.getElementById("fileInput").click()}
              >
                Add Audio File
              </Text>
              <input
                type="file"
                id="audioInput"
                style={{ display: "none" }}
                accept="audio/*"
              />
            </HStack>

            <Menu>
              <MenuButton
                name="language"
                w={"100%"}
                p={2}
                borderRadius={"5px"}
                as={Box}
                bg={"whiteAlpha.400"}
              >
                {input.language ? input.language : "English"}
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "English")}
                  value="English"
                >
                  English
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "Swahili")}
                  value="Swahili"
                >
                  Swahili
                </MenuItem>
                <MenuItem
                  name="language"
                  onClick={(e) => handleSelectChange(e, "French")}
                  value="French"
                >
                  French
                </MenuItem>
              </MenuList>
            </Menu>

            <HStack w={"100%"}>
              <Button variant={"outline"} w={"50%"}>
                Cancel
              </Button>
              <Button w={"50%"}>Submit</Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </>
  );
}
