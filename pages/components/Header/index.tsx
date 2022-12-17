import {
  Flex,
  Box,
  Text,
  Input,
  IconButton,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure
} from "@chakra-ui/react";
import {
  BsSearch
} from "react-icons/bs";
import {
  FaUserAlt,
  FaShoppingCart
} from "react-icons/fa";
import Router from "next/router";
import { useState } from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          w="300px"
          bg="#222"
          display="flex"
          flexDirection="column"
        >
          <DrawerCloseButton color="#fff"/>
          <DrawerHeader color="#fff">Carrinho de Compras</DrawerHeader>

          <DrawerBody>
            {/* Cart logic here */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        position="fixed"
        w="100%"
        align="center"
        justify="space-between"
        minH="75px"
        padding="1rem 4rem"
        background="#222"
        zIndex={99999}
      >
        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/logo.png"
            alt="Logo Dragondjx Image"
            width="50px"
            height="50px"
            objectFit="contain"
            style={{
              cursor: "pointer"
            }}
            onClick={() => { Router.push('/') }}
          />
          <Text
            color="#c1c1c1"
            ml="0.5rem"
            fontSize={21}
            fontWeight="700"
            cursor="pointer" _hover={{
              color: "#b6b6b6",
            }}
            onClick={() => { Router.push('/') }}
          >
            DragonDjx
          </Text>
        </Box>

        <Box
          display={{ base: "none", md: "inline-flex" }}
          alignItems="center"
        >
          <Input
            w={300}
            h={41}
            borderRadius="8px"
            outline="none"
            type='text'
            color="#fff"
            fontSize={18}
            placeholder="Pesquisar Produtos"
            borderRight="none"
            outlineColor="transparent"
            value={search || ''}
            onChange={(e: any) => {setSearch(e.target.value)}}
          />

          <IconButton
            height={41}
            w={30}
            border="none"
            backgroundColor="#fff"
            aria-label='Search media'
            borderLeftRadius={0}
            icon={<BsSearch fontSize={9} />}
            ml="-5px"
            cursor="pointer"
            zIndex={9999}
          />
        </Box>

        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            cursor="pointer"
            backgroundColor="transparent"
            border="none"
            color="#c1c1c1"
            mx={5}
          >
            <FaUserAlt fontSize={25} />
          </Button>

          <Button
            onClick={onOpen}
            cursor="pointer"
            backgroundColor="transparent"
            border="none"
            color="#c1c1c1"
          >
            <FaShoppingCart fontSize={25} />
          </Button>

        </Box>
      </Flex>
    </>
  );
}