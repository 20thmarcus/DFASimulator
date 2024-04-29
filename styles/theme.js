import { extendTheme } from "@chakra-ui/react";
import { Button, Heading, Tag, Flex, Input, Text } from "./overrides";
import { Badge } from "./badgeStyles";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "#1F1F1F",
      },
      p: {
        color: "gray.200",
      },
      "h1": {
        color: "gray.300",
      },"h2":{
        color: "gray.100"
      }, "h3":{
        color: "pink.300"
      }, "h4" :{
        color: "red.300"
      }

    }),
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  textStyles: {
    Primary: {
      color: "blue.300",
    },
  },
  layerStyles: {
    Primary: {
      bgColor: "blue.300",
    },
  },
  components: {
    Button,
    Badge,
    Heading,
    Tag,
    Flex,
    Input,
    Text,
  },
});
