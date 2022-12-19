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
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Card,
  CardBody,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import {
  BsSearch
} from "react-icons/bs";
import {
  FaShoppingCart
} from "react-icons/fa";
import {
  FiLogIn
} from "react-icons/fi"
import {
  BiTrash
} from "react-icons/bi";
import Router from "next/router";
import { useContext, useState } from "react";
import { Cart, CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');
  const { cart, removeFromCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);

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
          zIndex={9999}
        >
          <DrawerCloseButton
            color="#fff"
          />
          <DrawerHeader color="#fff">Carrinho de Compras</DrawerHeader>

          <DrawerBody>
            {cart?.map((item: Cart) => (
              <>
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '20px', sm: '30px' }}
                    maxH={{ base: '20px', sm: '30px' }}
                    src={item.image}
                    alt={item.name}
                  />
                  <CardBody>
                    <Heading
                      mt="-1.1rem"
                      size='md'
                      color="#fff"
                    >{item.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                      {item.price}
                    </Text>
                    <IconButton
                      variant='solid'
                      colorScheme='transparent'
                      aria-label="Trash Icon"
                      cursor="pointer"
                      title="Excluir item"
                      marginLeft="11rem"
                      _hover={{
                        color: "#222"
                      }}
                      onClick={() => removeFromCart(item)}
                      icon={<BiTrash />}
                    ></IconButton>
                  </CardBody>
                </Card>
              </>
            ))}
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
        zIndex={999}
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
            onChange={(e: any) => { setSearch(e.target.value) }}
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
          {isAuthenticated ? (
            <Avatar 
              name="Livrodjx"
              bg="#666"
              src="https://images2.alphacoders.com/702/702226.jpg"
              mx={5}
              w={35}
              h={35}
              cursor="pointer"
            />
          ) : (
           
            <Button
              cursor="pointer"
              backgroundColor="transparent"
              border="none"
              color="#c1c1c1"
              mx={5}
              onClick={() => Router.push('/login')}
            >
              <FiLogIn fontSize={25} title="Login" />
            </Button>
          )}

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