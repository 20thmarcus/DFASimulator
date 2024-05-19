import Head from "next/head";
import Main from "../components/Main";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>DFA Compiler</title>
        <meta name="description" content="A website for DFA Simulation deployed through vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" w="100%" align="center" justify="center">
        <Main />
      </Flex>
    </>
  );
}
