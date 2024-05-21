import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1, problem2, language1, language2 } from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {
  const regex1 = "(aa+bb) (a+b)* (a+b+ab+ba) (a+b+ab+ba)* (aa+bab)* (a+b+aa) (a+b+bb+aa)*";
  const regex2 = "((101) + (111)* + (100) + (1 + 0 + 11)*)(1 + 0 + 01)* (111 + 000 + 101) (1 + 0)*";

  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [prob2, setProb2] = useState(false);
  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const closeToasts = useToast();

  let input = string;
  let results = "";

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);
    const countValue = e.target.value.length;
    setCount(countValue);
  };

  const handleReset = () => {
    setString("");
    setCount(0);
    setData("");
    closeAll();
  };

  const handleSwitch = () => {
    setProb2((prev) => !prev);
    setData("");
    closeAll();
  };

  const closeAll = () => {
    closeToasts.closeAll();
  };

  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };

  const trapToast = () => {
    trapString({
      title: "Invalid: Trapped",
      status: "error",
      isClosable: true,
    });
  };

  const shortToast = () => {
    shortString({
      title: "Invalid: Too Short",
      status: "error",
      isClosable: true,
    });
  };

  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "info",
      isClosable: true,
    });
  };

  const updateHistoryResult = (input, result) => {
    setHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.input === input ? { ...entry, result } : entry
      )
    );
  };

  const handleValid = (input) => {
    setSimulating(false);
    validToast();
    setData(results);
    updateHistoryResult(input, "Valid");
  };

  const handleTrapped = (input) => {
    setSimulating(false);
    trapToast();
    setData(results);
    updateHistoryResult(input, "Invalid: Trapped");
  };

  const handleShort = (input) => {
    setSimulating(false);
    shortToast();
    setData(results);
    updateHistoryResult(input, "Invalid: Too Short");
  };

  const handleInputString = () => {
    input = input.replace(/\s+/g, "").toLowerCase();
  };

  const handleTest = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input === "") {
        notInLanguageToast();
      } else if (input.includes("a") || input.includes("b")) {
        results = new DFA(input, problem1, language1);
        setData(results);
        setHistory((prev) => [...prev, { input: string, result: "Tested" }]);
      } else {
        notInLanguageToast();
      }
    } else {
      if (input === "") {
        notInLanguageToast();
      } else if (input.includes("0") || input.includes("1")) {
        results = new DFA(input, problem2, language2);
        setData(results);
        setHistory((prev) => [...prev, { input: string, result: "Tested" }]);
      } else {
        notInLanguageToast();
      }
    }
  };

  const handleSimulation = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input === "") {
        notInLanguageToast();
      } else if (input.includes("a") || input.includes("b")) {
        setSimulating(true);
        results = new DFA(input, problem1, language1);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node === pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("T") &&
            !pathWithZeroes.includes("eos")
              ? handleValid(input)
              : node === "T" && pathWithZeroes.slice(-4)[0] === "T"
              ? handleTrapped(input)
              : pathWithZeroes.slice(-4)[3 - 1] === node &&
                !pathWithZeroes.includes("T") &&
                handleShort(input);
          }, i * 200);
        });
      } else {
        notInLanguageToast();
      }
    } else {
      if (input === "") {
        notInLanguageToast();
      } else if (input.includes("0") || input.includes("1")) {
        setSimulating(true);
        results = new DFA(input, problem2, language2);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node === pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("eos")
              ? handleValid(input)
              : pathWithZeroes.slice(-4)[3 - 1] === node && handleShort(input);
          }, i * 200);
        });
      } else {
        notInLanguageToast();
      }
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleRunAll = async () => {
    for (const entry of history) {
      const { input } = entry;
      setString(input);
      handleInputString();

      if (!prob2) {
        if (input === "") {
          notInLanguageToast();
        } else if (input.includes("a") || input.includes("b")) {
          setSimulating(true);
          results = new DFA(input, problem1, language1);
          const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
          await new Promise((resolve) => {
            pathWithZeroes.some((node, i) => {
              setTimeout(() => {
                setCurrentNode(node);
                if (node === pathWithZeroes[pathWithZeroes.length - 2] &&
                  !pathWithZeroes.includes("T") &&
                  !pathWithZeroes.includes("eos")) {
                  handleValid(input);
                } else if (node === "T" && pathWithZeroes.slice(-4)[0] === "T") {
                  handleTrapped(input);
                } else if (pathWithZeroes.slice(-4)[3 - 1] === node &&
                  !pathWithZeroes.includes("T")) {
                  handleShort(input);
                }
                if (i === pathWithZeroes.length - 1) resolve();
              }, i * 200);
            });
          });
        } else {
          notInLanguageToast();
        }
      } else {
        if (input === "") {
          notInLanguageToast();
        } else if (input.includes("0") || input.includes("1")) {
          setSimulating(true);
          results = new DFA(input, problem2, language2);
          const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
          await new Promise((resolve) => {
            pathWithZeroes.some((node, i) => {
              setTimeout(() => {
                setCurrentNode(node);
                if (node === pathWithZeroes[pathWithZeroes.length - 2] &&
                  !pathWithZeroes.includes("eos")) {
                  handleValid(input);
                } else if (pathWithZeroes.slice(-4)[3 - 1] === node) {
                  handleShort(input);
                }
                if (i === pathWithZeroes.length - 1) resolve();
              }, i * 200);
            });
          });
        } else {
          notInLanguageToast();
        }
      }
    }
  };

  const handleStoreInput = () => {
    setHistory((prev) => [...prev, { input: string, result: "Stored" }]);
  };

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      <LeftBox
        handleTest={handleTest}
        data={data}
        prob2={prob2}
        string={string}
        handleTextChange={handleTextChange}
        simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
        count={count}
        regex1={regex1}
        regex2={regex2}
        history={history}
        handleClearHistory={handleClearHistory}
        handleRunAll={handleRunAll}
        handleStoreInput={handleStoreInput} // Pass store input function to LeftBox
      />
      <Divider
        display={["block", null, "block", null, null, "none"]}
        mt="6"
        mb="2"
      />
      <RightBox
        prob2={prob2}
        simulating={simulating}
        regex1={regex1}
        regex2={regex2}
        currentNode={currentNode}
        handleSwitch={handleSwitch}
      />
    </Flex>
  );
};

export default Main;
