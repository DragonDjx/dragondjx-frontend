import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import products from "../../products.json";
import { CartContext } from "../contexts/CartContext";

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
        {products?.map(product => (
          <>
            <Card maxW='sm' key={product.id}>
              <CardBody>
                <Image
                  src={product.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.name}</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
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
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Adicionar ao carrinho
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