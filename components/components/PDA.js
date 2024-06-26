import Image from 'next/image'; // Import Next.js Image component

import {
  Box,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PDA = ({ prob2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mx="2"
        bg="#151515"
        color="gray.100"
        _hover={{ bg: "blue.700" }}
        onClick={onOpen}
      >
        Show PDA
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="#151515" maxW="50%" maxH="70vh" overflowY="auto">
          <ModalHeader color="gray.100">Pushdown Automata</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!prob2 ? (
              <VStack>
                <Box>
                  <Image src="/views/PDA1.jpg" alt="PDA1" width={500} height={500} />
                </Box>
              </VStack>
            ) : (
              <VStack>
                <Box>
                  <Image src="/views/PDA2.jpg" alt="PDA2" width={500} height={500} />
                </Box>
                {/* Add more images as needed */}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PDA;
