import type { AppProps } from 'next/app';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.scss';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
// import { useRouter } from 'next/router';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <CartProvider>
              <Header />
              <Component {...pageProps} />
            </CartProvider>
          </AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
