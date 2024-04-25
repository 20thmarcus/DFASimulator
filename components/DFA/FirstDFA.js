import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}
      {/* q1 q2 */}
      <Text top="31%" left="14%" size="label">
        a
      </Text>
      {/* q2 t */}
      <Text top="35%" left="27%" size="label">
        a
      </Text>
      {/* q3 t */}
      <Text top="65%" left="27%" size="label">
        b
      </Text>
      {/* q3 q4 */}
      <Text top="69%" left="36%" size="label">
        b
      </Text>
      {/* q2 q4 */}
      <Text top="31%" left="36%" size="label">
        a
      </Text>
      {/* q1 q3 */}
      <Text top="69%" left="14%" size="label">
        b
      </Text>
      {/* q3 q6 */}
      <Text top="45%" left="50%" size="label">
        a, b
      </Text>
      {/* q6 q7 */}
      <Text top="45%" left="70%" size="label">
        a, b
      </Text>
      {/* q6 q6 */}
      <Text
        top={["45%", "45%", "50%", "60%", "50%", "50%"]}
        left={["40%", "40%", "42%", "90%", "90%", "90%"]}
        size="label"
      >
      a, b
      </Text>
      
      

      {/* ARROW BODY */}
      {/* q2 q4 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "5em", "8em"]}
        top={["37%","37%","37%","37%", "37%", "30%"]}
        left={["37%", "37%", "37%", "32%", "32%", "34%"]}
        rotate={["30","30","40", "40", "40", "-145"]}
      />
   
      {/* q3 q4 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "8em", "8em"]}
        top={["87%", "87%", "85%", "63%", "63%", "63%"]}
        left="32%"
        rotate={["200", "200", "128", "140", "140", "145"]}
      />
    
      {/* trap ul */}
      <ArrowBody
        w={["8em", "8em", "13em", "5em", "5em", "8em"]}
        top="58%"
        left={["27.5%", "27.5%", "30%", "22.5%", "22.5%", "23.5%"]}
        rotate={["90"]}
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["8em", "8em", "13em", "5em", "5em", "14em"]}
        top="55%"
        left={["47%", "47%", "50%", "51%", "51%", "50%"]}

      />
      {/* trap ur */}
      <ArrowBody
        w={["8em", "8em", "13em", "5em", "5em", "8em"]}
        top="43%"
        left={["27.5%", "27.5%", "30%", "22.5%", "22.5%", "23.5%"]}
        rotate={["90"]}
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["8em", "8em", "13em", "5em", "5em", "15em"]}
        top="55%"
        left={["47.5%", "47.5%", "70%", "71%", "71%", "%71"]}

      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "5em", "8em"]}
        top={["30%","30%","30%","30%","30%","30%",]}
        left={["11%", "11%", "14%", "15%", "15%", "16%"]}
        rotate={["200", "200", "128", "140", "140", "145"]}
      />
   
      
      {/* q1 q3 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "5em", "8em"]}
        top={["71%","71%", "71%", "71%", "71%", "65%" ]}
        left={["12%", "12%", "14%", "15%", "15%", "18%"]}
        rotate={["60", "60", "50", "40", "40", "-145"]}
      />

      {/* ARROWS */}
      {/* q6 q6 */}
      <ArrowLoopSm
        top={["50%", "50%", "50%", null, null, "50%"]}
        left={["42.5%", "42.5%", "86.4%", null, null, "46%"]}
        rotate="180"
      />
      {/* <ArrowLoopLg  
        top={["50%", "50%", "50%", null, null, "60%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "80%"]}
        rotate="20"
      /> */}
   
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "50%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "85.2%"]}
        rotate="200"
      />


      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "29.2%", "25.6%", "26.6%", "22.9%"]}
        left={["17.2%", "17.2%", "17.6%", "21.1%", "20.6%", "21.7%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["71%", "71%", "71.7%", "74.8%", "75.3%", "80.1%"]}
        left={["17.4%", "17.4%", "17.3%", "20.74%", "21%", "21.6%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      />
      {/* q2 t */}
      <ArrowHead
        top={["41.6%", "41.6%", "41.7%", "39.5%", "39.5%", "38.2%"]}
        left={["27.3%", "27.3%", "27.1%", "24.89%", "24.89%", "25%"]}
        rotate={["47", "47", "40", "90", "90", "90"]}
      />
      {/* q3 t */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "60.5%", "60%", "61.8%"]}
        left={["27.4%", "27.4%", "27.3%", "24.9%", "24.9%", "25.075%"]}
        rotate={["-59", "-59", "-50", "-90", "-90", "-90"]}
      />
      {/* q3 q4 m */}
      <ArrowHead
        top={["58.4%", "58.4%", "58.2%", "58.6%", "58.6%", "55.4%"]}
        left={["33.1%", "33.1%", "33.3%", "38.1%", "38.1%", "38%"]}
        rotate={["235", "235", "230", "-45", "-45", "-45"]}
      />
      {/* q2 q4 m */}
      <ArrowHead
        top={["42%", "42%", "42%", "41.6%", "41.6%", "45.6%"]}
        left={["33.2%", "33.2%", "33.2%", "38.1%", "38.1%", "37.8%"]}
        rotate={["130", "130", "130", "45", "45", "45"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["41.8%", "41.8%", "41.7%", "49.9%", "49.9%", "49.8%"]}
        left={["46.6%", "46.6%", "47.1%", "56.3%", "56.3%", "57.5%"]}

      />
      {/* q5 q6 */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "49.9%", "49.9%", "49.8%"]}
        left={["47.2%", "47.2%", "47.4%", "76.2%", "76.2%", "77.5%"]}

      />
  

      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q1
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q6
      </Atom>

      <Atom
        variant="T"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        T
      </Atom>
    </>
  );
};

export default FirstDFA;
