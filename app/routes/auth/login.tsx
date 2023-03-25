import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { useLoaderData } from '@remix-run/react';
import api from '~/services/api.server';

export async function loader() {
  const res = await api.get('state-cities/rn')
  return res.data;
}

const Login = () => {
  const cities = useLoaderData();

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >

      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
        py={12}
        px={6}
      >
        <Stack align={'center'}>
          <Image
            // boxSize="70%"
            boxSize="70%"
            objectFit="contain"
            src="/images/logo.png"
            alt="Dan Abramov"
          />
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <Heading
              fontSize={'3xl'}
              textAlign={'center'}
              marginBottom={'20px'}
            >
              Login
            </Heading>

            <FormControl id="email">
              <FormLabel>Endereço de e-mail</FormLabel>
              <Input
                autoFocus
                type="email"
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>

            <Stack spacing={5}>
              <Link color={'blue.400'}>Esqueci minha senha</Link>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Logar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
