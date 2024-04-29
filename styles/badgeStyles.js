export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "green.700",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3.5em",
      w: "3.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "9%",

      borderColor: "gray.300",
    },
    q2: {
      top: "20%",
      left: "25%",

      borderColor: "gray.300",
    },
    q3: {
      top: "80%",
      left: "25%",

      borderColor: "gray.300",
    },
    q4: {
      top: "50%",
      left: "41%",

      borderColor: "gray.300",
    },
    q5: {
      top: "50%",
      left: "61%",

      borderColor: "gray.300",
    },
    q6: {
      top: "50%",
      left: "81%",

      borderColor: "gray.300",
    },
    q7: {
      top: "20%",
      left: "60%",

      borderColor: "orange.300",
    },
    q8: {
      top: "80%",
      left: "60%",

      borderColor: "orange.300",
    },
    q9: {
      top: "50%",
      left: "70%",

      borderColor: "purple.300",
    },
    q10: {
      top: "50%",
      left: "90%",

      borderColor: "teal.300",
    },
    T: {
      top: "50%",
      left: "25%",

      borderColor: "white.300",
      bg: "red.900"
    },
       /*q5 */
       1: {
        top: "80%",
        left: "50%",
      
        borderColor: "orange.300",
      },
      /* q7*/
      2: {
        top: "50%",
        left: "70%",
      
        borderColor: "purple.300",
      },
      /* q6*/
      3: {
        top: "50%",
        left: "50%",
      
        borderColor: "orange.300",
      },
      /*q3*/
      4: {
        top: "15%",
        left: "50%",
    
        borderColor: "orange.300",
      },
      /* q4*/
      6: {
        top: "80%",
        left: "25%",
      
        borderColor: "purple.300",
      },
      /* q2*/
      7: {
        top: "15%",
        left: "25%",
      
        borderColor: "purple.300",
      },
      /*q1 */
      8: {
        top: "50%",
        left: "10%",
      
        borderColor: "blue.300",
      },
  },
  defaultProps: {
    size: "node",
  },
};
