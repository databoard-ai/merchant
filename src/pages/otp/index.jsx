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
  HStack
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import signUpImage from "../../assets/signUp.jpg";
import logo from "../../assets/logo-white.svg";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
 const navigate =  useNavigate()
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").split("");
    if (paste.length === 6) {
      setOtp(paste);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
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
            <Heading as="h2" size="xl" textAlign="start" mb={6} color={"black"}>
              Enter OTP
            </Heading>
            <Text fontSize={"18px"} color={"black"} fontWeight={"semibold"}>
              Enter 6-digit code sent to{" "}
              <Text as="span" color="#FF4D00" cursor="pointer">
                oluseyi@clocker.com
              </Text>{" "}
            </Text>
            <VStack marginTop={"30px"} spacing={4}>
              <FormControl>
                <FormLabel
                  fontSize={"18px"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  OTP Code
                </FormLabel>
                <HStack spacing={4}>
                  {otp.map((data, index) => (
                    <Input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      ref={(el) => (inputsRef.current[index] = el)}
                      height="80px"
                      width="70px"
                      textAlign="center"
                      fontSize="2xl"
                      background="white"
                      border="2px solid"
                      borderColor="gray.300"
                    />
                  ))}
                </HStack>
              </FormControl>
              <Button
                colorScheme={isOtpComplete ? "blue" : undefined}
                width="full"
                padding={"30px"}
                bg={isOtpComplete ? "blue.500" : "#B1CBF2"}
                color="white"
                _hover={isOtpComplete ? { bg: "blue.600" } : { bg: "#B1CBF2" }}
                isDisabled={!isOtpComplete}
                onClick={() => navigate("/register")}
              >
                Continue
              </Button>

              <Flex justifyContent="space-between" width="100%" mt={4}>
                <Text color="gray.600">
                  Didn’t get it?{" "}
                  <Text as="span" color="#FF4D00" cursor="pointer">
                    Resend
                  </Text>
                </Text>
                <Text color="gray.600">
                  OTP expires in{" "}
                  <Text as="span" color={"#FF4D00"}>
                    {formatTime(timeLeft)}
                  </Text>
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OtpPage;
