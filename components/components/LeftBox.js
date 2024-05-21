import {
  Flex,
  Input,
  Button,
  Text,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

const LeftBox = ({
  handleTest,
  data,
  prob2,
  string,
  handleReset,
  handleTextChange,
  handleSimulation,
  simulating,
  count,
  regex1,
  regex2,
  history,
  handleClearHistory,
  handleRunAll,
  handleStoreInput, // Add store input prop
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "35em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 20]}
        mb={[16, 16, 20, 20, 20, 10]}
        borderRadius="5%"
        bg="#151515"
        p="20"
        boxShadow="0 0px 4px rgba(0, 0, 0, 0.1)"
        border="1px solid #404040"
        height="100%"
      >
        <Flex align="flex-end" justify="space-between">
          <Heading variant="title" fontFamily="Verdana">Group 5</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]} style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
            {/* Your code content here */}
          </Code>
        </Flex>
        <Divider mb="6" />
        <Box>
          <form onSubmit={handleTest}>
            <Flex align="space-between">
              <Heading display={["none", null, "none", null, null, "flex"]} bg="none" fontWeight="regular">
                Regular Expression:
              </Heading>
              <Tag 
                as="span" 
                fontSize={["0.7em", "0.7em", "0.9em"]} 
                bg="#151515" 
                color="gray.300" 
                fontWeight="light"
              >
                {!prob2 ? regex1 : regex2}
              </Tag>
              <Heading fontWeight="regular">Language Accepted:</Heading>
              <Tag 
                my={1} 
                fontSize={["0.7em", "0.7em", "0.9em"]} 
                bg="#151515" 
                color="gray.300" 
                fontWeight="light"
              >
                {!prob2 ? "[a, b]" : "[0, 1]"}
              </Tag>
            </Flex>
            <Divider mb="6" />
            <Flex align="center">
              <Heading>Input String:</Heading>
              <Flex align="center">
                <Flex justifyContent="flex-end">
                </Flex>
              </Flex>
            </Flex>
            <Input
              maxLength="100"
              fontSize={["0.7em", "0.7em", "0.9em"]}
              my={3}
              placeholder={!prob2 ? "e.g. bababb" : "e.g. 0110101"}
              value={string}
              onChange={handleTextChange}
              color="gray.300"
            />
            <Flex justify="flex-end" align="center">
              <Flex>
                <Button
                  variant="clear"
                  onClick={handleReset}
                  disabled={simulating}
                  _hover={{ bg: "#151515" }}
                  bg="#151515"
                >
                  Clear
                </Button>
                <Button
                  onClick={handleStoreInput} // Add onClick handler for store input
                  ml={2}
                  _hover={{ bg: "orange.700" }}
                  bg="blue.500"
                  color="gray.100"
                >
                  Store Input
                </Button>
                <Button
                  isLoading={simulating}
                  loadingText="simulating..."
                  spinnerPlacement="start"
                  onClick={handleSimulation}
                  ml={2}
                  disabled={simulating}
                  _hover={{ bg: "green.700" }}
                  bg="green.500"
                  color="gray.100"
                >
                  Simulate
                </Button>

              </Flex>
            </Flex>
          </form>
        </Box>
        <Divider my={6} />
        <Box>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">History</Heading>
            <Flex>
              <Button
                size="sm"
                onClick={handleClearHistory}
                colorScheme="#151515"
                mr={2}
              >
                Clear History
              </Button>
              <Button
                size="sm"
                onClick={handleRunAll}
                colorScheme="blue"
              >
                Run All
              </Button>
            </Flex>
          </Flex>
          {history.map((entry, index) => (
            <Flex key={index} mb={2} justify="space-between">
              <Text>{entry.input}</Text>
              <Tag colorScheme={entry.result.includes("Valid") ? "green" : entry.result.includes("Invalid") ? "red" : "gray"}>
                {entry.result}
              </Tag>
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
