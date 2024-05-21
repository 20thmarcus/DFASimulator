
import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowHead, ArrowLoop, ArrowBody, ArrowLoopSm, ArrowLoopLg, } from "../components/Arrows";

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
/* number within the lines */
const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    <Text top="1%" left="80%" size="label">
        DFA For RegEx 2
      </Text>
    {/* q1 q4 */}
    <Text size="label" top="70%" left="15%">
      1
    </Text>


    {/* q1 q2 */}
    <Text size="label" top="30%" left="15%">
      0
      </Text>

    {/* q2 q4 */}
    <Text size="label" top="50%" left="23%">
      1
    </Text>

    {/* q2 q3 */}
    <Text size="label" top="10%" left="36%">
      0
    </Text>

    {/* q3 q4 */}
    <Text size="label" top="40%" left="38%">
      1
    </Text>

    {/* q3 q7 */}
    <Text size="label" top="25%" left="62%">
      0
    </Text>

    {/* q4 q6 */}
    <Text size="label" top="90%" left="38%">
      1
    </Text>

    {/* q4 q6 */}
    <Text size="label" top="65%" left="40%">
      0
    </Text>
  
    {/* q5 q7 */}
    <Text size="label" top="66%" left="58%">
      1
    </Text>

    {/* q5 q6 */}
    <Text size="label" top="67%" left="48.5%">
      0
    </Text>

    {/* q6 q7 */}
    <Text size="label" top="46%" left="58%">
     1
    </Text>
    
    {/* q6 q3 */}
    <Text size="label" top="33%" left="48.5%">
      0
    </Text>

    {/* q6 q6 */}
    <Text size="label" top="50%" left="77.5%">
      0, 1
    </Text>


    {/* q1 q2 */}
    <ArrowBody
      w={["5em", null, "6em", null, null, "9em"]}
      top={["30%", null, "30%", null, null, "30%"]}
      left={["13%", null, "15%", null, null, "16%"]}
      rotate={["125", null, "130", null, null, "145"]}
    />

    {/* q1 q4 */}
    <ArrowBody
      w={["5em", null, "6em", null, null, "10em"]}
      top={["68%", null, "68%", null, null, "68%"]}
      left={["13%", null, "15%", null, null, "15%"]}
      rotate={["48", null, "45", null, null, "30"]}
    />

    {/* q2 q4 */}
    <ArrowBody
      w={["8em", "8em", "11em", null, null, "11em"]}
      top={["52%", "52%", "52%", null, null, "52%"]}
      left={["20.5%", "20.5%", "22.5%", null, null, "23.5%"]}
      rotate={["90", null, "90", null, null, "90"]}
    />

    {/* q2 q3 */}
    <ArrowBody
      w={["4em", null, "9em", null, null, "14em"]}
      top={["23%", null, "20%", null, null, "20%"]}
      left={["38%", null, "35%", null, null, "35%"]}
    />

    {/* q3 q4 */}
    <ArrowBody
      w={["9em", null, "15em", null, null, "16em"]}
      top={["49%", null, "49%", null, null, "45%"]}
      left={["32.7%", null, "34%", null, null, "36%"]}
      rotate={["125", null, "130", null, null, "140"]}
    />

    {/* q3 q7 */}
    <ArrowBody
      w={["5em", "5em", "10em", null, null, "11em"]}
      top={["35%", "36%", "35.5%", null, null, "35%"]}
      left={["57.6%", "58%", "60%", null, null, "60%"]}
      rotate={["45", "45", "37", null, null, "30"]}
    />

    {/* q4 q5 */}
    <ArrowBody
      w={["4em", null, "10em", null, null, "13em"]}
      top={["90%", null, "90%", null, null, "90%"]}
      left="37%"
    />

     {/* q4 q6 */}
     <ArrowBody
      w={["5em", "5em", "10em", null, null, "15em"]}
      top={["58%", "58%", "60%", null, null, "62%"]}
      left={["35%", "35%", "35%", null, null, "35%"]}
      rotate={["140", null, "147", null, null, "155"]}
    />

    {/* q5 q6 */}
    <ArrowBody
      w={["4em", "4em", "4em", null, null, "3em"]}
      top={["65%", "65%", "65%", null, null, "65%"]}
      left={["45.5%", "45.5%", "48%", null, null, "48%"]}
      rotate="90"
    />

    {/* q5 q7 */}
    <ArrowBody
      w={["5em", "5em", "10em", null, null, "11em"]}
      top={["56%", "56%", "60%", null, null, "62%"]}
      left={["60.6%", "61%", "60.7%", null, null, "60%"]}
      rotate={["140","140", "144", null, null, "155"]}
    />

   {/* q6 q3 */}
   <ArrowBody
      w={["4em", "4em", "4em", null, null, "3em"]}
      top={["35%", "35%", "35%", null, null, "33%"]}
      left={["46%", "46%", "48%", null, null, "48%"]}
      rotate="90"
    />

    {/* q6 q7 */}
    <ArrowBody
      w={["3em", null, "10em", null, null, "9em"]}
      top={["57.5%", null, "54.6%", null, null, "55%"]}
      left={["60%", null, "60%", null, null, "60%"]}
    />      


    {/*q7 q7 */}
    <ArrowLoopSm
        top={["50%", "50%", "50%", null, null, "50%"]}
        left={["77.5%", "77.5%", "75.5%", null, null, "40%"]}
        rotate="180"
      />

    {/*q7 q7 */}
    <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "50%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "74.3%"]}
        rotate="200"
      />


    {/* q1 q2 */}
    <ArrowHead
      top={["23.1%", null, "21.5%", null, null, "21.7%"]}
      left={["21.6%", null, "21.3%", null, null, "22.2%"]}
      rotate="310"
    />

    {/* q1 q4 */}
    <ArrowHead
      top={["72%", null, "74.5%", null, null, "71.3%"]}
      left={["21.3%", null, "21%", null, null, "20.8%"]}
      rotate={["42", null, "42", null, null, "45%"]}
    />

    {/* q2 q3 */}
    <ArrowHead
      top={["15.4%", null, "14.8%", null, null, "14.8%"]}
      left={["44%", null, "45.3%", null, null, "46.5%"]}
    />

    {/* q2 q4 */}
    <ArrowHead
      top={["70%", null, "69.2%", null, null, "68.2%"]}
      left={["25%", null, "24.9%", null, null, "25.1%"]}
      rotate="90"
    />

    {/* q3 q4 */}
    <ArrowHead
      top={["72.5%", null, "72.3%", null, null, "74.5%"]}
      left={["28.5%", null, "28.4%", null, null, "28%"]}
      rotate="138"
    />      
    
    {/* q3 q7 */}
    <ArrowHead
      top={["40.99%", null, "40.99%", null, null, "43%"]}
      left={["67.5%", null, "67.2%", null, null, "67.23%"]}
      rotate="40"
    />

    {/* q4 q6 */}
    <ArrowHead
      top={["55%", null, "51.7%", null, null, "49.7%"]}
      left={["44.8%", null, "45.3%", null, null, "46.6%"]}
      rotate="320"
    />

    {/* q4 q5 */}
    <ArrowHead
      top={["82%", null, "84.7%", null, null, "85%"]}
      left={["44.3%", null, "45.7%", null, null, "46.9%"]}
    />

    {/* q5 q6 */}
    <ArrowHead
      top={["60%", null, "61%", null, null, "61.3%"]}
      left={["50.2%", null, "50.4%", null, null, "49.6%"]}
      rotate="-90"
    />

    {/* q5 q7 */}
    <ArrowHead
      top={["58%", "58.3%", "57.2%", null, null, "56.4%"]}
      left={["66.5%", "66.8%", "66.5%", null, null, "67.2%"]}
      rotate="320"
    />

    {/* q6 q3 */}
    <ArrowHead
      top={["25%", null, "25.5%", null, null, "26.5%"]}
      left={["50.8%", null, "50.4%", null, null, "49.6%"]}
      rotate={["-90", null, "-90", null, null, "-90"]}
    />

     {/* q6 q7 */}
     <ArrowHead
      top={["49.7%", null, "49.5%", null, null, "49.7%"]}
      left={["64%", null, "65.2%", null, null, "66.5%"]}
      rotate="0"
    />

    <Atom
      variant="1"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 5 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q5
    </Atom>
    <Atom
      variant="2"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 7 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
     
    >
      q7
    </Atom>
    <Atom
      variant="3"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 6 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q6
    </Atom>
    <Atom
      variant="4"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 3 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q3
    </Atom>

    <Atom
      variant="6"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 4 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q4
    </Atom>
    <Atom
      variant="7"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 2 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q2
    </Atom>
    <Atom
      variant="8"
      variants={variants}
      initial="initial"
      animate={currentNodeVal == 1 ? "pulse" : ""}
      whileHover={!simulatingStatus && "scale"}
    >
      q1
    </Atom>
  </div>
  );
};
export default SecondDFA;