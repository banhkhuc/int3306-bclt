import React, { ReactNode, useContext } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../stores";

const LinkItems_Admin = [
  {
    name: "Danh sách dòng sản phẩm",
    href: "/manage-products",
  },
  {
    name: "Quản lý tài khoản",
    href: `/manage-accounts`,
  },
  { name: "Quản lý cơ sở", href: "/manage-factory" },
  { name: "Quản lý thống kê", href: "/statistic-admin" },
];

const LinkItems_Production_Factory = [
  { name: "Quản lý kho", href: "facility/manage-store" },
  { name: "Quản lý sản phẩm lỗi", href: "/facility/manage-error-product" },
  { name: "Quản lý thống kê", href: "/statistic-facility" },
];

const LinkItems_Distribution_Agent = [
  { name: "Quản lý kho", href: "" },
  { name: "Quản lý bảo hành", href: "" },
  { name: "Quản lý thống kê", href: "/statistic-agent" },
];

const LinkItems_Service_Center = [
  { name: "Quản lý bảo hành", href: "/manage-guarantee" },
  { name: "Quản lý thống kê", href: "/statistic-warranty" },
];

const LinkItemsService = () => {
  switch (sessionStorage.getItem("userRole")) {
    case "admin":
      return LinkItems_Admin;
    case "produce":
      return LinkItems_Production_Factory;
    case "distribute":
      return LinkItems_Distribution_Agent;
    case "guarantee":
      return LinkItems_Service_Center;
    default:
      return LinkItems_Admin;
      break;
  }
};

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {location.pathname === "/" || location.pathname === "/login" ? (
        children
      ) : (
        <>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
          </Box>{" "}
        </>
      )}
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {/* LinkItems - actor */}
      {LinkItemsService().map((link) => (
        <Link
          to={link.href}
          // style={{ textDecoration: "none" }}
          // _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "cyan.400",
              color: "white",
            }}
            {...rest}
          >
            {link.icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={link.icon}
              />
            )}
            {link.name}
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  let navigate = useNavigate();
  const [userState, userDispatch] = useContext(UserContext);
  const handleLogout = () => {
    sessionStorage.removeItem("userRole");
    userDispatch({ type: "logout" });
    navigate("/login");
  };

  const getTitle = () => {
    switch (userState.type) {
      case "produce":
        return "Cơ sở sản xuất";
      case "distribute":
        return "Đại lý phân phối";
      case "guarantee":
        return "Trung tâm bảo hành";
      default:
        return "admin";
    }
  };

  const title = getTitle();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Menu>
          <MenuButton>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Không có thông báo gì</MenuItem>
          </MenuList>
        </Menu>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={"../public/images/admin-avatar.png"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    {/* account name */}
                    {}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {/* actor */}
                    {title}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>

            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
