import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiInfo,
  FiUsers,
  FiBook,
  FiCheckSquare,
  FiCode,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useLocation } from "react-router";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, setNavSize] = useState("small");
  const [theme, setTheme] = useState("dark");
  let location = useLocation();

  return (
    <Flex
      position="sticky"
      marginRight="1rem"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius="15px"
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="#333333"
      color="#858585"
    >
      <Flex
        paddingLeft="0.5rem"
        paddingRight="0.5rem"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Flex
          w={navSize !== "small" && "100%"}
          mt={5}
          alignItems="center"
          justifyContent="space-between"
          paddingRight={navSize === "large" && "0.75rem"}
        >
          <IconButton
            background="none"
            _hover={{ background: "none", color: "#FFFFFF" }}
            _focus={{ boxShadow: "none" }}
            _active={{ backgroundColor: "#333333" }}
            icon={<FiMenu />}
            onClick={() => {
              navSize === "small" ? setNavSize("large") : setNavSize("small");
            }}
            paddingLeft={navSize === "large" && "0.75rem"}
            borderLeft="2px solid #333333"
            borderRight="2px solid #333333"
          ></IconButton>
          <Icon
            hidden={navSize === "small"}
            as={theme === "light" ? FiMoon : FiSun}
            fontSize="2xl"
            color="#FFFFFF"
          />
        </Flex>
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Home"
          path="/"
          location={location.pathname}
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiBook}
          title="Courses"
          path="/courses"
          location={location.pathname}
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiCode}
          title="Assignments"
          path="/assignments"
          location={location.pathname}
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiCheckSquare}
          title="Submissions"
          path="/submissions"
          location={location.pathname}
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiUsers}
          title="Users"
          path="/users"
          location={location.pathname}
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiInfo}
          title="About"
          path="/about"
          location={location.pathname}
        ></NavItem>
      </Flex>
      <Flex
        paddingLeft="1rem"
        paddingRight="1rem"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
        color="#FFFFFF"
      >
        <Icon
          hidden={navSize !== "small"}
          as={theme === "light" ? FiMoon : FiSun}
          fontSize="2xl"
        />
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems="center" justifyContent="left">
          <Avatar size="sm" src="" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              zdravko.gyurov97@gmail.com
            </Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
