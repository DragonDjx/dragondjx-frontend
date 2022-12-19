import { 
  Box, 
  Button, 
  Flex, 
  Input, 
  Text, 
  Image 
} from "@chakra-ui/react";
import Router from "next/router";

export default function Login() {
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100vh"
    >
      <Flex
        flex="1.5"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="#fff"
      >
        <Box mt={7}>
          <Text
            fontWeight={900}
            fontSize="3rem"
            as="h1"
          >
            Entre com sua conta
          </Text>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >

            <Input
              mt={12}
              mb={8}
              w={{ base: "200px", md: "300px", lg: "400px" }}
              type="email"
              placeholder='E-mail'
              focusBorderColor="#5b6bfa"
              defaultValue=""
              onChange={() => { }}
            />
            <Input
              mb={8}
              type="password"
              w={{ base: "200px", md: "300px", lg: "400px" }}
              placeholder='Senha'
              focusBorderColor="#5b6bfa"
              defaultValue=""
              onChange={() => { }}
            />

            <Button
              bg="#5b6bfa"
              color="#ffffff"
              p={6}
              type="submit"
            >Entrar</Button>
          </form>
        </Box>
      </Flex>
      <Flex
        flex="1"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="#222"
      >
        <Image
          src="/images/logo.png"
          alt="Logo Dragondjx Image"
          width="16rem"
          height="16rem"
          objectFit="contain"
          style={{
            cursor: "pointer"
          }}
          onClick={() => { Router.push('/') }}
        />
      </Flex>
    </Flex>
  )
}