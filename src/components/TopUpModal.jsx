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
  VStack
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function TopUpModal({ isOpen, onClose }) {
  const [credits, setCredits] = useState(1); // Start with 1 credit
  const unitPrice = 500; // Price per unit
  const totalAmount = credits * unitPrice; // Calculate total cost

  // Function to increase credits
  const incrementCredits = () => {
    setCredits((prevCredits) => prevCredits + 1);
  };

  // Function to decrease credits, ensuring it doesn't go below 1
  const decrementCredits = () => {
    setCredits((prevCredits) => (prevCredits > 1 ? prevCredits - 1 : 1));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
      p={'20px'}
      >
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

          {/* Increment and Decrement Buttons */}
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
                <Text
                  fontStyle={"italic"}
                  mx={4}
                  fontWeight="bold"
                  color={credits === 1 ? "#838282" : "black"}
                >
                  {credits}
                </Text>
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
              <Text
                fontStyle={"italic"}
                color={"black"}
              >{`N${totalAmount}`}</Text>
              <Text fontStyle={"italic"} color={"#838282"}>
                {" "}
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
            textDecoration="underline" // Underline the Cancel text
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
