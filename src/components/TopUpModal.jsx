import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Box,
  IconButton,
  VStack,
  Input
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function TopUpModal({ isOpen, onClose }) {
  const [credits, setCredits] = useState(1); // Actual credits
  const [inputValue, setInputValue] = useState("1"); // Temporary input for flexibility
  const unitPrice = 500; // Price per unit
  const totalAmount = credits * unitPrice; // Calculate total cost

  // Function to increase credits
  const incrementCredits = () => {
    const newCredits = credits + 1;
    setCredits(newCredits);
    setInputValue(newCredits.toString());
  };

  // Function to decrease credits, ensuring it doesn't go below 1
  const decrementCredits = () => {
    if (credits > 1) {
      const newCredits = credits - 1;
      setCredits(newCredits);
      setInputValue(newCredits.toString());
    }
  };

  // Function to handle manual input change (allow empty temporarily)
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setInputValue(value); // Allow empty or valid number
    }
  };

  // Validate input onBlur to ensure it stays valid
  const handleBlur = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setCredits(parsedValue);
    } else {
      setCredits(1); // Reset to 1 if invalid
    }
    setInputValue(parsedValue >= 1 ? parsedValue.toString() : "1");
  };

  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={"20px"}>
        <ModalHeader>Purchase Link Credit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            padding={"12px"}
            borderRadius={"7px"}
            bg={"#E4EFFF"}
            mt={"20px"}
            textAlign={"center"}
          >
            Select the number of credits you want to add to your account. Once
            the purchase is confirmed, the credits will be instantly available
            for use.
          </Box>

          <Text mt={4}>Amount of credits</Text>

          {/* Increment and Decrement Buttons + Input Field */}
          <Flex alignItems="center" justifyContent="space-between" mt={2}>
            <VStack>
              <Flex
                border="1px solid #838282"
                borderRadius={"5px"}
                p={"7px"}
                alignItems="center"
              >
                <IconButton
                  icon={<MinusIcon />}
                  onClick={decrementCredits}
                  aria-label="Decrease credits"
                  size="sm"
                  variant="unstyled"
                  isDisabled={credits === 1}
                  _hover={{ bg: "transparent" }}
                  color={credits === 1 ? "#838282" : "black"}
                />
                {/* Input Field for Manual Entry */}
                <Input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleBlur} // Ensure valid value on blur
                  type="text" // Allow the user to type freely
                  width="60px"
                  textAlign="center"
                  mx={4}
                />
                <IconButton
                  icon={<AddIcon />}
                  onClick={incrementCredits}
                  aria-label="Increase credits"
                  size="sm"
                  variant="unstyled"
                  _hover={{ bg: "transparent" }}
                  color="black"
                />
              </Flex>

              <Text fontStyle={"italic"} color={"#838282"}>
                1 Credit per link
              </Text>
            </VStack>
            {/* Display Total Cost */}
            <VStack>
              <Text fontStyle={"italic"} color={"black"}>
                {`N${totalAmount}`}
              </Text>
              <Text fontStyle={"italic"} color={"#838282"}>
                Excl. VAT
              </Text>
            </VStack>
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={"space-between"}>
          <Button colorScheme="blue" mr={3}>
            Proceed to payment
          </Button>
          <Text
            as="a"
            onClick={onClose}
            color={"#FA4F4F"}
            mr={3}
            textDecoration="underline"
            cursor="pointer"
          >
            Cancel
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TopUpModal;
