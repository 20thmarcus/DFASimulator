import React from 'react';
import { Box, Input, Button, Flex, Text } from '@chakra-ui/react';

const InputFields = ({
  strings,
  history,
  handleTextChange,
  handleValidate,
  handleSimulate,
  simulating,
}) => {
  return (
    <Box>
      {strings.map((string, index) => (
        <Box key={index} mb={4}>
          <Input
            maxLength="100"
            fontSize={["0.7em", "0.7em", "0.9em"]}
            placeholder="Enter string"
            value={string}
            onChange={(e) => handleTextChange(index, e)}
            color="gray.300"
          />
          <Button
            onClick={() => handleValidate(index)}
            ml={2}
            disabled={simulating}
            _hover={{ bg: "blue.700" }}
            bg="blue.500"
            color="gray.100"
          >
            Validate
          </Button>
          <Button
            onClick={() => handleSimulate(index)}
            ml={2}
            disabled={simulating}
            _hover={{ bg: "green.700" }}
            bg="green.500"
            color="gray.100"
          >
            Simulate
          </Button>
        </Box>
      ))}
      <Box mt={8}>
        <Text fontSize="xl" mb={4} color="gray.100">History</Text>
        {history.map((entry, index) => (
          <Text key={index} color={entry.isValid ? "green.500" : "red.500"}>
            {entry.input} - {entry.isValid ? "Valid" : "Invalid"}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default InputFields;
