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
  const [history, setHistory] = useState([]); // Add this state
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

  const handleValid = () => {
    setSimulating(false);
    validToast();
    setData(results);
    setHistory((prev) => [...prev, { input: string, result: "Valid" }]); // Update history
  };

  const handleTrapped = () => {
    setSimulating(false);
    trapToast();
    setData(results);
    setHistory((prev) => [...prev, { input: string, result: "Invalid: Trapped" }]); // Update history
  };

  const handleShort = () => {
    setSimulating(false);
    shortToast();
    setData(results);
    setHistory((prev) => [...prev, { input: string, result: "Invalid: Too Short" }]); // Update history
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
        setHistory((prev) => [...prev, { input: string, result: "Tested" }]); // Update history
      } else {
        notInLanguageToast();
      }
    } else {
      if (input === "") {
        notInLanguageToast();
      } else if (input.includes("0") || input.includes("1")) {
        results = new DFA(input, problem2, language2);
        setData(results);
        setHistory((prev) => [...prev, { input: string, result: "Tested" }]); // Update history
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
              ? handleValid()
              : node === "T" && pathWithZeroes.slice(-4)[0] === "T"
              ? handleTrapped()
              : pathWithZeroes.slice(-4)[3 - 1] === node &&
                !pathWithZeroes.includes("T") &&
                handleShort();
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
              ? handleValid()
              : pathWithZeroes.slice(-4)[3 - 1] === node && handleShort();
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

  return (
    <Flex
      direction={["column","column","column","column","column", "row"]}
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
        history={history} // Pass history to LeftBox
        handleClearHistory={handleClearHistory} // Pass clear history function to LeftBox
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
