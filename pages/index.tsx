import { 
  Flex, 
  Text 
} from "@chakra-ui/react";
import ProductsHook from "./hooks/Products";

export default function Home() {
  return (
    <>
      <Flex
        w="90vw"
        flexDir="column"
        align="center"
        justify="center"
        background="transparent"
        margin="0 auto"
        minH="700px"
        h="auto"
      >
        <Text 
          color="#fff"
          as="h1"
          mb="2rem"
          fontWeight="900"
          fontSize={40}
        >
          Dragondjx - A melhor em oferecer o melhor
        </Text>
        <Text 
          color="#fff"
          as="p"
          fontWeight={500}
          fontSize={22}
        >
          "Monte, melhore ou construa seu sonho."
        </Text>
      </Flex>
      <Flex
        minHeight="100vh"
        h="max-content"
        w="90vw"
        flexDirection="column"
        margin="0 auto"
        backgroundColor="rgba(255,255,255,0.8)"
      >
        <ProductsHook />
      </Flex>
    </>
  )
}
