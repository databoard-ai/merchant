import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Flex,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import React, { useState } from "react";
import signUpImage from "../../assets/signUp.jpg";
import logo from "../../assets/logo-white.svg";
import arrow from "../../assets/arrow-left.svg";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import eye icons
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
   const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false); 
  const navigate = useNavigate();

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
        <Box
          flex="1"
          position="relative"
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={signUpImage}
            alt="Sign Up"
            objectFit="cover"
            height="100vh"
            width="100%"
          />

          <Image
            src={logo}
            alt="Logo"
            position="absolute"
            top="5%"
            left="5%"
            width="150px"
            zIndex="1"
          />
        </Box>
        <Button
          onClick={() => navigate('/login')}
          marginLeft={"15px"}
          fontSize={"18px"}
          _hover={"curser"}
          bg={"transparent"}
          marginTop={"25px"}
        >
          <Image src={arrow} />
          Back
        </Button>
        <Box
          flex={{ base: "1", md: "1" }}
          p={8}
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={"25px"}
        >
          <Box width={"80%"} margin={"auto"}>
            <Heading
              as="h2"
              size="xl"
              textAlign="start"
              mb={6}
              color={"#4283E4"}
            >
              Set up your account
            </Heading>
            <VStack marginTop={"30px"} spacing={4}>
              <FormControl id="email">
                <FormLabel
                  fontSize={"18px"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  Email
                </FormLabel>
                <Input
                  height={"60px"}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <Flex width={"100%"} gap={8}>
                <FormControl id="firstname">
                  <FormLabel
                    fontSize={"18px"}
                    color={"black"}
                    fontWeight={"semibold"}
                  >
                    Firstname
                  </FormLabel>
                  <Input
                    height={"60px"}
                    type="text"
                    width={"100%"}
                    placeholder="Enter your firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </FormControl>

                <FormControl id="lastname">
                  <FormLabel
                    fontSize={"18px"}
                    color={"black"}
                    fontWeight={"semibold"}
                  >
                    Lastname
                  </FormLabel>
                  <Input
                    height={"60px"}
                    width={"100%"}
                    type="text"
                    placeholder="Enter your lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <Flex width={"100%"} gap={8}>
                <FormControl id="phone">
                  <FormLabel
                    fontSize={"18px"}
                    color={"black"}
                    fontWeight={"semibold"}
                  >
                    Phone number
                  </FormLabel>
                  <Input
                    height={"60px"}
                    width={"100%"}
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>

                <FormControl id="country">
                  <FormLabel
                    fontSize={"18px"}
                    color={"black"}
                    fontWeight={"semibold"}
                  >
                    Country
                  </FormLabel>
                  <Input
                    height={"60px"}
                    width={"100%"}
                    type="text"
                    placeholder="Enter your country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <FormControl id="businessName">
                <FormLabel
                  fontSize={"18px"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  Business Name
                </FormLabel>
                <Input
                  height={"60px"}
                  type="text"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </FormControl>

              <FormControl id="password">
                <FormLabel
                  fontSize={"18px"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    height={"60px"}
                    type={passwordVisible ? "text" : "password"} // Toggle between text and password types
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement height="60px">
                    <IconButton
                      variant="ghost"
                      icon={
                        passwordVisible ? (
                          <ViewOffIcon boxSize={7} color={"#838282"} />
                        ) : (
                          <ViewIcon boxSize={7} color={"#838282"} />
                        )
                      }
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      aria-label={
                        passwordVisible ? "Hide password" : "Show password"
                      }
                      width="70px" // Adjust this width value to increase or decrease the button size
                      _hover={{ background: "transparent" }} // Remove background on hover
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="confirmPassword">
                <FormLabel
                  fontSize={"18px"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  Confirm Password
                </FormLabel>
                <InputGroup>
                  <Input
                    height={"60px"}
                    type={passwordVisible ? "text" : "password"} // Toggle between text and password types
                    placeholder="Confirm your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement height="60px">
                    <IconButton
                      variant="ghost"
                      icon={
                        passwordVisible ? (
                          <ViewOffIcon boxSize={7} color={"#838282"} />
                        ) : (
                          <ViewIcon boxSize={7} color={"#838282"} />
                        )
                      }
                      onClick={() =>
                        setForgetPasswordVisible(!forgetPasswordVisible)
                      }
                      aria-label={
                        forgetPasswordVisible
                          ? "Hide password"
                          : "Show password"
                      }
                      width="70px"
                      _hover={{ background: "transparent" }}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                colorScheme={isEmailValid ? "blue" : undefined}
                width="full"
                padding={"30px"}
                bg={isEmailValid ? "blue.500" : "#B1CBF2"}
                color="white"
                _hover={isEmailValid ? { bg: "blue.600" } : { bg: "#B1CBF2" }}
                isDisabled={!isEmailValid}
                onClick={() => navigate("/dashboard")}
              >
                Finish
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpPage;
