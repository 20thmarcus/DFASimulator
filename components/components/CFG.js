import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2"
              bg="#151515"
              color="gray.100"
              _hover={{ bg: "blue.700" }}>Show CFG</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "14em"]}
          _focus=""
          bg="#151515"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold" color="gray.100">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Text>{"S -> XYZ"}</Text>
                <Text>{"X -> aa | bb"}</Text>
                <Text>{"Y -> X | ab | ba"}</Text>
                <Text>{"Z -> aZ | bZ | ^"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S -> XYX"}</Text>
                <Text>{"X -> 0X | 1X | ^"}</Text>
                <Text>{"Y -> 000 | 101 | 111"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
