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
        b
      </Text>
      {/* q3 t */}
      <Text top="65%" left="27%" size="label">
        a
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
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["37%","37%","37%","37%", "37%", "30%"]}
        left={["30%", "30%", "32%", "32%", "32%", "34%"]}
        rotate={["50","50","40", "40", "40", "-145"]}
      />
   
      {/* q3 q4 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "8em", "8em"]}
        top={["75%", "75%", "63%", "63%", "63%", "63%"]}
        left={["35%", "35%", "32%", "32%", "32%", "32%"]}
        rotate={["-50", "-50", "140", "140", "140", "145"]}
      />
    
      {/* trap ul  baba*/}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top="45%"
        left={["20.5%", "20.5%", "22.5%", "22.5%", "22.5%", "23.5%"]}
        rotate={["90"]}
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["8em", "8em", "5em", "5em", "5em", "14em"]}
        top="57%"
        left={["58.5%", "58.5%", "51%", "51%", "51%", "50%"]}

      />
      {/* trap ur taas*/}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "8em"]}
        top="45%"
        left={["20.5%", "20.5%", "22.5%", "22.5%", "22.5%", "23.5%"]}
        rotate={["90"]}
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["8em", "8em", "15em", "5em", "5em", "15em"]}
        top="57%"
        left={["58.5%", "58.5%", "71%", "71%", "71%", "%71"]}

      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "5em", "8em"]}
        top={["30%","30%","30%","30%","30%","30%",]}
        left={["11%", "11%", "15%", "15%", "15%", "16%"]}
        rotate={["130", "130", "140", "140", "140", "145"]}
      />
   
      
      {/* q1 q3 */}
      <ArrowBody
        w={["5em", "5em", "8em", "5em", "5em", "8em"]}
        top={["65%","65%", "71%", "71%", "71%", "65%" ]}
        left={["20%", "20%", "15%", "15%", "15%", "18%"]}
        rotate={["-130", "-130", "40", "40", "40", "-145"]}
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
        top={["25%", "25%", "25.6%", "25.6%", "26.6%", "22.9%"]}
        left={["19.7%", "19.7%", "21.1%", "21.1%", "20.6%", "21.7%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["76.3%", "76.3%", "74.8%", "74.8%", "75.3%", "80.1%"]}
        left={["19.7%", "19.7%", "20.74%", "20.74%", "21%", "21.6%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      />
      {/* q2 t */}
      <ArrowHead
        top={["40%", "40%", "39.5%", "39.5%", "39.5%", "38.2%"]}
        left={["25.2%", "25.2%", "24.89%", "24.89%", "24.89%", "25%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />
      {/* q3 t */}
      <ArrowHead
        top={["60%", "60%", "60.5%", "60.5%", "60%", "61.8%"]}
        left={["25.2%", "25.2%", "24.9%", "24.9%", "24.9%", "25.075%"]}
        rotate={["-90", "-90", "-90", "-90", "-90", "-90"]}
      />
      {/* q3 q4 m */}
      <ArrowHead
        top={["58.4%", "58.4%", "58.6%", "58.6%", "58.6%", "55.4%"]}
        left={["37.5%", "37.5%", "38.1%", "38.1%", "38.1%", "38%"]}
        rotate={["-55", "-55", "-45", "-45", "-45", "-45"]}
      />
      {/* q2 q4 m */}
      <ArrowHead
        top={["41%", "41%", "41.6%", "41.6%", "41.6%", "45.6%"]}
        left={["38.2%", "38.2%", "38.1%", "38.1%", "38.1%", "37.8%"]}
        rotate={["55", "55", "45", "45", "45", "45"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["49.2%", "49.2%", "51.6%", "51.6%", "51.6%", "51.6%"]}
        left={["55%", "55%", "56.3%", "56.3%", "56.3%", "57.5%"]}

      />
      {/* q5 q6 */}
      <ArrowHead
        top={["49.3%", "49.2%", "51.6%", "51.6%", "51.6%", "51.6%"]}
        left={["75%", "75%", "76.2%", "76.2%", "76.2%", "77.5%"]}

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
