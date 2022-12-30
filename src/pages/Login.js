import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>BC LAPTOP</Heading>
        <Input
          placeholder="Nhập email"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="Nhập mật khẩu"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Đăng nhập
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
