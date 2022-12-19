import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import products from "../../products.json";
import { Cart, CartContext } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const ProductsHook = () => {
  const { addToCart } = useContext(CartContext);
  // let { data, status } = useQuery(['products'], async () => {
  //   console.log(products);
  //   return products;
  // });

  // if (status === 'loading') return <p>Loading...</p>;

  // if (status === 'error') return <p>Error while loading products</p>;

  return (
    <>
      <Flex
        p="4rem"
        w="100%"
        height="auto"
        minHeight="400"
        display="flex"
        wrap="wrap"
      >
        {products?.map((product: Cart) => (
          <>
            <Card
              maxW='sm'
              key={product.id}
              m="0.9rem"
            >
              <CardBody>
                <Image
                  src={product.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.name}</Heading>
                  <Text>
                    {product.description}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    {product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Visualizar
                  </Button>
                  <Button
                    variant='ghost'
                    colorScheme='blue'
                    onClick={() => addToCart(product)}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    verticalAlign="middle"
                  >
                    <FaShoppingCart />
                    <Text mx={2}>
                      Adicionar ao carrinho
                    </Text>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </>

        ))}
      </Flex>
    </>
  );
}

export default ProductsHook;