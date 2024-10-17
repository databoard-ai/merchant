import {
  Box,
  Heading,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  FormControl,
  FormLabel,
  Button,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/link-card-logo.svg";

const CardLinkPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  return (
    <Box>
      <Flex height="100vh">
        {/* Wrap both the TabList and TabPanels in the same Tabs component */}
        <Tabs
          variant="enclosed"
          orientation="vertical"
          isFitted
          width="100%"
          display="flex"
        >
          {/* Left Side - Tabs */}
          <Box
            flex="1" // Left side takes up half of the screen
            p={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={"start"}
            bg={"#DEEBFF"}
          >
            <Heading>Link a new card</Heading>
            <Text as="p">
              Seamlessly write data on any NFC Card in 3 simple steps
            </Text>
            <TabList>
              <Tab>Validating Profile</Tab>
              <Tab>Profile Validated</Tab>
              <Tab>Tap Card on NFC Hardware</Tab>
              <Tab>Scanning</Tab>
              <Tab>Valid Card Detected</Tab>
              <Tab>Card Linked</Tab>
              <Tab>Completed</Tab>
            </TabList>
          </Box>

          {/* Right Side - Tab Panels */}
          <Box
            flex="1" // Right side takes up the other half of the screen
            p={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box></Box>

            <TabPanels>
              <TabPanel>
                <Image m={"auto"} width={"300px"} src={logo} />
                <Box m={'auto'} width={'fit-content'} >
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
                      width={'25rem'}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </FormControl>
                </Box>
                <Box
                  justifyContent={"center"}
                  width={"fit-content"}
                  margin={"auto"}
                >
                  <Button
                    colorScheme={"blue"}
                    width="12rem"
                    margin={"auto"}
                    padding={"30px"}
                    bg={"blue.500"}
                    color="white"
                    _hover={{ bg: "blue.600" }}
                  >
                    Link Card
                  </Button>
                </Box>
              </TabPanel>

              <TabPanel>
                <Text>Profile Validated! You can now proceed.</Text>
              </TabPanel>

              <TabPanel>
                <Text>Please tap the card on NFC Hardware to proceed.</Text>
              </TabPanel>

              <TabPanel>
                <Text>Scanning the NFC card...</Text>
              </TabPanel>

              <TabPanel>
                <Text>Valid card detected. Processing...</Text>
              </TabPanel>

              <TabPanel>
                <Text>Your card has been successfully linked!</Text>
              </TabPanel>

              <TabPanel>
                <Text>Process completed! You can now use your NFC card.</Text>
              </TabPanel>
            </TabPanels>
          </Box>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default CardLinkPage;
