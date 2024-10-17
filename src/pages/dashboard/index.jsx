import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  Input,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import dummyData from "./cardData";
import { useNavigate } from "react-router-dom";
import TopUpModal from "../../components/TopUpModal";
import LinkModal from "../../components/LinkCardModal";
import hand from "../../assets/waving hand.svg";
import card from "../../assets/link card.svg";
import top from "../../assets/topup.svg";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.svg";


const DashboardPage = () => {
  const itemsPerPage = 10; // Display 10 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const {
    isOpen: isTopUpOpen,
    onOpen: onTopUpOpen,
    onClose: onTopUpClose
  } = useDisclosure();
  const {
    isOpen: isLinkOpen,
    onOpen: onLinkOpen,
    onClose: onLinkClose
  } = useDisclosure();

  const [search, setSearch] = useState("");
  const filteredData = dummyData.filter((user) => {
    const searchTerm = search.toLowerCase();
    return (
      user.UserName.toLowerCase().includes(searchTerm) ||
      user.Link.toLowerCase().includes(searchTerm) ||
      new Date(user.Timestamp)
        .toLocaleString()
        .toLowerCase()
        .includes(searchTerm)
    );
  });
  const navigate = useNavigate();
  // Pagination calculations
  const totalItems = filteredData.length;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIdx, endIdx);

  return (
    <Box width={{ base: "90%", lg: "80%" }} margin={"auto"}>
      <Heading
        mt={"100px"}
        as="h4"
        size="lg"
        textAlign="start"
        mb={6}
        color={"black"}
      >
        <Flex>
          Welcome back Oluseyi <Image src={hand} />
        </Flex>
      </Heading>
      <Text as="p" color={"#959595"}>
        Manage your clients cards from here
      </Text>
      <Flex
        padding={"12px"}
        borderRadius={"7px"}
        bg={"#E4EFFF"}
        mt={"20px"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Button bg="#4283E4" color="white">
            New
          </Button>
          <Text textAlign="center" ml="5px">
            Link credits cost N500 per card.
          </Text>
        </Flex>

        <Flex>
          <Button bg={"#4283E4"} color={"white"}>
            Explore
          </Button>
          <Button ml={"10px"} bg={"white"} color={"black"}>
            Close
          </Button>
        </Flex>
      </Flex>

      {/* Tabs Navigation and Content */}
      <Tabs mt={"20px"} variant="unstyled">
        <TabList justifyContent="start" borderBottom="3px solid #838282">
          {" "}
          {/* Default black underline */}
          <Tab
            _selected={{
              fontWeight: "bold",
              borderBottom: "4px solid #4283E4",
              color: "black"
            }}
            sx={{
              borderBottom: "4px solid transparent",
              paddingBottom: "10px",
              transition: "border-bottom 0.2s, font-weight 0.2s"
            }}
          >
            Activity
          </Tab>
          <Tab
            _selected={{
              fontWeight: "bold",
              borderBottom: "4px solid #4283E4",
              color: "black"
            }}
            sx={{
              borderBottom: "4px solid transparent",
              paddingBottom: "10px",
              transition: "border-bottom 0.2s, font-weight 0.2s"
            }}
          >
            Settings
          </Tab>
          <Tab
            _selected={{
              fontWeight: "bold",
              borderBottom: "4px solid #4283E4",
              color: "black"
            }}
            sx={{
              borderBottom: "4px solid transparent",
              paddingBottom: "10px",
              transition: "border-bottom 0.2s, font-weight 0.2s"
            }}
          >
            Support
          </Tab>
        </TabList>

        {/* TabPanels to display different content for each tab */}
        <TabPanels>
          <TabPanel>
            <Flex justifyContent={"space-between"}>
              <Box
                width={"30%"}
                padding={"25px"}
                borderRadius={"7px"}
                border="1px solid #797979"
              >
                <Text>Total Link Credits</Text>
                <Heading>47</Heading>
                <Text as="p">
                  <Text as="span" color={"#FF3B30"}>
                    -24%
                  </Text>{" "}
                  from last week
                </Text>
              </Box>
              <Box
                width={"30%"}
                padding={"25px"}
                borderRadius={"7px"}
                border="1px solid #797979"
              >
                <Text>Total Linked Cards</Text>
                <Heading>375</Heading>
                <Text as="p">
                  <Text as="span" color={"#34C759"}>
                    +12%
                  </Text>{" "}
                  from last week
                </Text>
              </Box>
              <Box
                width={"30%"}
                padding={"25px"}
                borderRadius={"7px"}
                border="1px solid #797979"
              >
                <Text>Total Blocked Cards</Text>
                <Heading>0</Heading>
                <Text as="p">
                  <Text as="span" color={"#34C759"}>
                    +0%
                  </Text>{" "}
                  from last week
                </Text>
              </Box>
            </Flex>

            {/* Search Input */}
            <Flex justifyContent={"end"} mt={"30px"}>
              <Flex>
                <FormControl id="search">
                  <Flex alignItems="center" position="relative" width="350px">
                    <Image
                      src={searchIcon} // assuming 'searchIcon' holds the image
                      alt="Search Icon"
                      position="absolute"
                      left="10px"
                      boxSize="20px" // Adjust icon size to fit within the input height
                    />
                    <Input
                      height="40px"
                      width="100%"
                      type="text"
                      placeholder="Search Users by Name, Link or Date"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)} // Update search input
                      pl="40px" // Padding-left to make space for the icon on the left
                    />
                  </Flex>
                </FormControl>

                <Button
                  onClick={onLinkOpen}
                  bg="#4283E4"
                  color="white"
                  p="20px"
                  pl={"25px"}
                  pr={"25px"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={card} />
                  <Text ml="5px">Link Card</Text>
                </Button>

                <Button
                  border="1px solid #838282"
                  ml="10px"
                  bg="white"
                  color="#292929"
                  p="20px"
                  pl={"25px"}
                  pr={"25px"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="fit-content"
                  onClick={onTopUpOpen}
                >
                  <Image src={top} />
                  <Text color="#292929" ml="5px">
                    Top up
                  </Text>
                </Button>
              </Flex>
            </Flex>

            {/* Table with Paginated Data */}
            <TableContainer
              mt="30px"
              border="1px solid #F8F8F8"
              borderRadius={"5px"}
            >
              <Table variant="simple" size="md">
                <Thead bg="#DEEBFB">
                  <Tr>
                    <Th border="1px solid #838282">
                      <Box
                        as="span"
                        display="inline-block"
                        w="15px"
                        h="15px"
                        borderRadius="3px"
                        bg="transparent"
                        mr="10px"
                        border="1px solid #4283E4"
                      />
                    </Th>
                    <Th border="1px solid #838282">UserName</Th>
                    <Th border="1px solid #838282">Link</Th>
                    <Th border="1px solid #838282">Timestamp</Th>
                    <Th border="1px solid #838282">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginatedData.map((user, index) => (
                    <Tr
                      key={index}
                      _hover={{ bg: "#F4FAFE", cursor: "pointer" }}
                    >
                      <Td border="1px solid #838282">
                        <Box
                          as="span"
                          display="inline-block"
                          w="15px"
                          h="15px"
                          borderRadius="3px"
                          bg="white"
                          mr="10px"
                          border="1px solid #838282"
                        />
                      </Td>
                      <Td border="1px solid #838282">{user.UserName}</Td>
                      <Td border="1px solid #838282">
                        <Text
                          as="a"
                          href={user.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          _hover={{ color: "#4283E4" }}
                        >
                          {user.Link.length > 30
                            ? `${user.Link.slice(0, 30)}...`
                            : user.Link}
                        </Text>
                      </Td>
                      <Td border="1px solid #838282">
                        {new Date(user.Timestamp).toLocaleString()}
                      </Td>
                      <Td
                        border="1px solid #838282"
                        _hover={{ color: "#FA4F4F" }}
                      >
                        Block
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

            {/* Pagination Info */}
            <Text mt={"10px"}>
              {startIdx + 1}-{endIdx} of {totalItems} items
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" mt={4}>
              This is the Settings tab content.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" mt={4}>
              This is the Support tab content.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <TopUpModal isOpen={isTopUpOpen} onClose={onTopUpClose} />
      <LinkModal isOpen={isLinkOpen} onClose={onLinkClose} />
    </Box>
  );
};

export default DashboardPage;
