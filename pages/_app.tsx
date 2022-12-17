import type { AppProps } from 'next/app';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.scss';
import { CartProvider } from './contexts/CartContext';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <CartProvider>
            <Header />
            <Component {...pageProps} />
          </CartProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
