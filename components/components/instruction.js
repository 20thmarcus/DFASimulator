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
  
  const INSTR = ({ prob2 }) => {
    return (
      <>
        <Popover isLazy placement="top">
          <PopoverTrigger>
            <Button mx="2"
                bg="#151515"
                color="gray.100"
                _hover={{ bg: "blue.700" }}>Instruction</Button>
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
              Instructions
            </PopoverHeader>
            <PopoverBody align="center">
              {!prob2 ? (
                <VStack>
                  <Text>{"1. The player must input strings"}</Text>
                  <Text>{"2. If Valid, it must shoot to the net (Final State)"}</Text>
                  <Text>{"3. If invalid, it will not shoot to the net"}</Text>
            
                </VStack>
              ) : (
                <VStack>
                  <Text>{"S -> ABCD"}</Text>
                  <Text>{"X -> 111X | ^"}</Text>
                  <Text>{"Y -> 1Y | 0Y | 11Y | ^"}</Text>
                  <Text>{"A -> 101 | X | 100 | Y"}</Text>
                  <Text>{"B -> DB | 01B | ^"}</Text>
                  <Text>{"C -> 111 | 000 | 101"}</Text>
                  <Text>{"D -> 1D | 0D | ^"}</Text>
                </VStack>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  };
  
  export default INSTR;
  