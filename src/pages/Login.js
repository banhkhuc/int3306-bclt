import { useContext, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  ChakraProvider,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { loginApi } from "../api/accountApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../stores";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userDispatch = useContext(UserContext)[1];
  const handleShowClick = () => setShowPassword(!showPassword);

  let navigate = useNavigate();

  const handleNavigate = () => {
    switch (sessionStorage.getItem("userRole")) {
      case "admin":
        navigate("/manage-accounts");
        break;
      case "produce":
        navigate("/facility/manage-store");
        break;
      case "distribute":
        // navigate("/manage-accounts");
        break;
      case "guarantee":
        navigate("/manage-guarantee");
        break;
      default:
        break;
    }
  };

  handleNavigate();

  const handleSubmit = (values) => {
    const login = async (data) => {
      const response = await loginApi(data);
      console.log("res in login", response);
      const type = typeof response;

      if (response.status === 200) {
        // console.log("login success", response);
        // console.log("token", response.data.token);
        localStorage.setItem("token", response.data.token);
        const {
          FacilityId,
          Facility: { type },
          account,
          email,
          fullName,
        } = response.data.user;
        sessionStorage.setItem("userRole", type);
        userDispatch({
          type: "login",
          payload: { FacilityId, type, account, email, fullName },
        });
        setTimeout(() => handleNavigate(type), 2000);
      } else if (response.status === 404) {
        console.log("login error", response);
      }
    };

    const data = {
      account: values.account,
      password: values.password,
    };
    console.log("data: " + JSON.stringify(data));
    login(data);
  };

  const formik = useFormik({
    initialValues: {
      account: "",
      password: "",
    },
    validationSchema: yup.object({
      account: yup.string().required("This field is required."),
      password: yup.string().required("This field is required."),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="blue.800"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading mb={6} color="blackAlpha.800">BC LAPTOP</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="blackAlpha.600"
              boxShadow="md"
            >
              <FormControl isInvalid={formik.errors.account}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    name="account"
                    type="email"
                    placeholder="Nhập email"
                    style={{
                      color: "black",
                      border: "1px solid black",
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.account}
                  />
                </InputGroup>
                <FormErrorMessage>{formik.errors.account}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    style={{
                      color: "black",
                      border: "1px solid black",
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Nhập mật khẩu"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Ẩn" : "Hiện"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                <FormHelperText textAlign="right">
                  <Link>Quên mật khẩu?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="telegram"
                width="full"
                onClick={formik.handleSubmit}
              >
                Đăng nhập
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
};

export default Login;