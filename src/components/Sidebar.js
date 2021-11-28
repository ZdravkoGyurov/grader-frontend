import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { FiMenu, FiHome, FiSettings } from "react-icons/fi";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, setNavSize] = useState("small");

  return (
    <Flex
      position="sticky"
      h="95vh"
      margin="2.5vh 1rem 0 1rem"
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
        <IconButton
          background="none"
          mt={5}
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
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          active
        ></NavItem>
        <NavItem navSize={navSize} icon={FiSettings} title="Settings"></NavItem>
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
