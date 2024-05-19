import {
  Box,
  VStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const PDA = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button
            mx="2"
            bg="#151515"
            color="gray.100"
            _hover={{ bg: "blue.700" }}
          >
            Show PDA
          </Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "80em"]}
          _focus=""
          bg="#151515"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold" color="gray.100">
            Pushdown Automata
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>

                <Box>
                  <img src="/views/PDA1.jpg"></img>
                </Box>
              </VStack>
            ) : (
              <VStack>
                <Box>
                  <img src="/views/PDA2.jpg"></img>
                </Box>
                {/* Add more images as needed */}
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PDA;
