import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  FormControl,
  FormLabel,
  Input,
  Image
} from "@chakra-ui/react";
import logo from "../assets/link-card-logo.svg";
import check from "../assets/checkmark-circle-01.svg";
import alert from "../assets/alert-01.svg";

const LinkModal = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [email, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsUsernameValid] = useState(true); // Assuming it's valid initially
  const [isCardIdentified, setIsCardIdentified] = useState(false); // State to track if a card is identified

  const toggleCardIdentification = () => {
    setIsCardIdentified((prev) => !prev); // Toggle between card identified and not identified
  };

  // Simulating the email validation process (database check)


  const checkUsernameInDatabase = (inputUsername) => {
    const validUsernames = ["@user1", "@user2", "@example"]; // Replace with real DB check
    return validUsernames.includes(inputUsername);
  };

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);

    // Username regex validation: Must start with "@", followed by alphanumeric characters or underscores, 3 to 16 characters total
    const usernameRegex = /^@[a-zA-Z0-9_]{2,15}$/;
    setIsUsernameValid(usernameRegex.test(inputUsername));
  };

  const handleLinkCard = () => {
    setIsLoading(true);

    // Check the email validity first
    if (isEmailValid) {
      if (checkUsernameInDatabase(email)) {
        // Simulate immediate success if username exists
        setTimeout(() => {
          setIsLoading(false);
          setCurrentTab(1); // Move to the next tab (Validating Profile)
          setTimeout(() => {
            setCurrentTab(2); // Move to the next tab (Profile Validated)
          }, 1000); // Delay before moving to validated state
        }, 1000); // Fast transition for successful lookup
      } else {
        // Simulate a delay for failed lookup
        setTimeout(() => {
          setIsLoading(false);
          setCurrentTab(1); // Move to Validating Profile tab
          setTimeout(() => {
            setCurrentTab(2); // Move to Profile Validated tab after delay
          }, 3000); // 3 seconds delay for failed lookup
        }, 3000);
      }
    } else {
      setIsLoading(false); // Stop loading if the email is not valid
    }
  };

    useEffect(() => {
      if (isCardIdentified) {
        // Automatically progress through the stages when the card is identified
        setTimeout(() => setCurrentTab(3), 1000); // Move to "Tap Card on NFC Hardware"
        setTimeout(() => setCurrentTab(4), 2000); // Move to "Scanning"
        setTimeout(() => setCurrentTab(5), 3000); // Move to "Valid Card Detected"
        setTimeout(() => setCurrentTab(6), 4000); // Move to "Card Linked"
        setTimeout(() => setCurrentTab(7), 5000); // Move to "Completed"
      }
    }, [isCardIdentified]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent p={0} borderRadius="xl">
        <ModalCloseButton />
        <Flex width="100%">
          {/* Left Side - Blue background */}
          <Box
            flex="1"
            bg="#DEEBFF"
            p={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
            borderTopLeftRadius="2xl"
            borderBottomLeftRadius="2xl"
          >
            <ModalHeader fontSize="2xl">Link a new card</ModalHeader>
            <Tabs orientation="vertical" index={currentTab}>
              <TabList
                display="flex"
                flexDirection="column"
                alignItems="flex-start" // Align the tabs to the start
                justifyContent="start"
                textAlign="start"
                gap={6}
              >
                <Text justifyContent="flex-start">Enter Username</Text>

                <Tab
                  isDisabled={currentTab < 1}
                  color={currentTab >= 1 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start" // Align the tab content to start
                  gap={2} // Adds space between the icon and text
                >
                  {currentTab >= 1 && <Image src={check} boxSize="24px" />}
                  Validating Profile
                </Tab>

                <Tab
                  isDisabled={currentTab < 2}
                  color={currentTab >= 2 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  {currentTab >= 2 && <Image src={check} boxSize="24px" />}
                  Profile Validated
                </Tab>

                <Tab
                  isDisabled={currentTab < 3}
                  color={currentTab >= 3 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  Tap Card on NFC Hardware
                </Tab>

                <Tab
                  isDisabled={currentTab < 4}
                  color={currentTab >= 4 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  {currentTab >= 4 && <Image src={check} boxSize="24px" />}
                  Scanning
                </Tab>

                <Tab
                  isDisabled={currentTab < 5}
                  color={currentTab >= 5 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  {currentTab >= 5 && <Image src={check} boxSize="24px" />}
                  Valid Card Detected
                </Tab>

                <Tab
                  isDisabled={currentTab < 6}
                  color={currentTab >= 6 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  {currentTab >= 6 && <Image src={check} boxSize="24px" />}
                  Card Linked
                </Tab>

                <Tab
                  isDisabled={currentTab < 7}
                  color={currentTab >= 7 ? "black" : "#838282"}
                  _selected={{ color: "black", fontWeight: "bold" }}
                  display="flex"
                  justifyContent="flex-start"
                  gap={2}
                >
                  {/* {currentTab >= 7 && <Image src={check} boxSize="24px" />} */}
                  Completed
                </Tab>
              </TabList>
            </Tabs>
          </Box>

          {/* Right Side - White background */}
          <Box
            flex="1"
            bg="white"
            p={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            borderTopRightRadius="2xl"
            borderBottomRightRadius="2xl"
          >
            <Tabs orientation="vertical" index={currentTab}>
              <TabPanels>
                {/* Enter Username Panel */}
                <TabPanel>
                  <Image m={"auto"} width={"300px"} src={logo} />
                  <Box m={"auto"} width={"fit-content"}>
                    <FormControl id="email">
                      <FormLabel
                        fontSize={"18px"}
                        color={"black"}
                        fontWeight={"semibold"}
                      >
                        Enter Username
                      </FormLabel>
                      <Input
                        m={"auto"}
                        mb={"30px"}
                        height={"60px"}
                        maxW={"30rem"}
                        width={"25rem"}
                        type="email"
                        placeholder="@Username"
                        value={email}
                        onChange={handleUsernameChange}
                        isInvalid={!isEmailValid}
                      />
                    </FormControl>
                  </Box>
                  <Flex mt={4} justifyContent="space-between">
                    <Button
                      onClick={handleLinkCard}
                      isDisabled={!email || isLoading}
                      colorScheme={"blue"}
                      width="12rem"
                      margin={"auto"}
                      padding={"30px"}
                      bg={"blue.500"}
                      color="white"
                      _hover={{ bg: "blue.600" }}
                    >
                      {isLoading ? "Processing..." : "Link Card"}
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Validating Profile Panel */}
                <TabPanel>
                  <Image m={"auto"} width={"300px"} src={logo} />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Validating Profile...
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button
                      // isDisabled={currentTab === 6}
                      width="12rem"
                      margin={"auto"}
                      padding={"30px"}
                      bg={"white"}
                      border="1px solid #FA4F4F"
                      color="#FA4F4F"
                      _hover={{ bg: "white" }}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Profile Validated Panel */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Flex
                    gap={3}
                    align="center" // Center-aligns items vertically
                    justifyContent="center" // Center-aligns items horizontally
                    direction="row" // Align items in a column
                    mt={4} // Margin top for spacing
                  >
                    <Image mt={2} src={isCardIdentified ? check : alert} />
                    <Text textAlign="center" fontSize="xl" mt={2}>
                      {isCardIdentified
                        ? "Card identified!"
                        : "No card identified!"}
                    </Text>
                  </Flex>
                  {!isCardIdentified && (
                    <Text textAlign="center" mt={4}>
                      See possible reasons to{" "}
                      <Text
                        color={"#4283E4"}
                        _hover={{ cursor: "pointer" }}
                        as="span"
                      >
                        troubleshoot{" "}
                      </Text>
                    </Text>
                  )}
                </TabPanel>

                {/* Tap Card on NFC Hardware */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Profile Validated Successfully!
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button onClick={() => setCurrentTab(3)} colorScheme="blue">
                      Next: Tap Card on NFC Hardware
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Scanning Panel */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Profile Validated Successfully!
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button onClick={() => setCurrentTab(3)} colorScheme="blue">
                      Next: Tap Card on NFC Hardware
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Valid Card Detected Panel */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Profile Validated Successfully!
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button onClick={() => setCurrentTab(3)} colorScheme="blue">
                      Next: Tap Card on NFC Hardware
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Card Successfully Linked Panel */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Profile Validated Successfully!
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button onClick={() => setCurrentTab(3)} colorScheme="blue">
                      Next: Tap Card on NFC Hardware
                    </Button>
                  </Flex>
                </TabPanel>

                {/* Process Completed Panel */}
                <TabPanel>
                  <Image
                    m={"auto"}
                    width={"400px"}
                    src={
                      "https://s3-alpha-sig.figma.com/img/fc54/35dc/70ceaf309a6144bcd47ad0875e9026f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSmyp9hKbJ7FZvNYaMchrZ-EFgmCEPmzLh7lhAZjrD~XaTdT8fcevlzMu-NUq3Lcw8aqmcELZJg4F-PkKunjLOicmaFYUPHwOMBGFSZWn0AKwezkyPl-Vlr~9nMMYZYSEymWjWTbOa~ewDFO4hn6ZivbnXvIjPNCPTbYA661Dp4IuhfUbSh8v0Wtwt64G2SSWvSfnXNa9vcl6-oHQgmqkYkKSK6y5mQqQSH-gVHJFqlkVIH-SrekHzwUSleCD41tFW59Bq-Hdlm8QUYDB6njqL3uajPoOBcxRu20IJ4XvWJ-QBCGA~df47~CzDaLlnihfs74MZwyul4PWFaGVj0T~g__"
                    }
                  />
                  <Text textAlign="center" fontSize="xl" mt={4}>
                    Profile Validated Successfully!
                  </Text>
                  <Flex mt={4} justifyContent="space-between">
                    <Button onClick={() => setCurrentTab(3)} colorScheme="blue">
                      Next: Tap Card on NFC Hardware
                    </Button>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default LinkModal;
