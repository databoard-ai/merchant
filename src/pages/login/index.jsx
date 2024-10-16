import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Flex,
  Image,
  Text,
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import eye icons
import signUpImage from "../../assets/signUp.jpg";
import logo from "../../assets/logo-white.svg";
import line from "../../assets/signUp_line.svg";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const [isEmailValid, setIsEmailValid] = useState(false);
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

        <Box
          flex={{ base: "1", md: "1" }}
          p={8}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={"80%"} margin={"auto"}>
            <Heading
              as="h2"
              size="xl"
              textAlign="start"
              mb={6}
              color={"#4283E4"}
            >
              Welcome Back!
            </Heading>
            <Text fontSize={"18px"} color={"black"} fontWeight={"semibold"}>
              Log in to your account.
            </Text>

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
                  />
                  <InputRightElement height="60px">
                    <IconButton
                      variant="ghost"
                      icon={
                        passwordVisible ? (
                          <ViewOffIcon boxSize={7} />
                        ) : (
                          <ViewIcon boxSize={7} />
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

              <Button
                colorScheme={isEmailValid ? "blue" : undefined}
                width="full"
                padding={"30px"}
                bg={isEmailValid ? "blue.500" : "#B1CBF2"}
                color="white"
                _hover={isEmailValid ? { bg: "blue.600" } : { bg: "#B1CBF2" }}
                isDisabled={!isEmailValid}
              >
                Proceed
              </Button>
              <Image src={line} alt="line" />
              <Text>
                New here?{" "}
                <Text
                  onClick={() => navigate("/")}
                  as="span"
                  color="#4283E4"
                  cursor="pointer"
                >
                  Sign up
                </Text>
              </Text>
              <Button
              onClick={()=>navigate('/dashboard')}
                leftIcon={<FcGoogle />}
                w="100%"
                p="1.6em"
                bgColor="#fff"
                border="2px solid #838282"
                fontSize={{ base: "sm", md: "md" }}
              >
                Sign up with Google
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginPage;
