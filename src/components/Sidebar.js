import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Divider, Flex, Heading } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useState } from "react";
import {
  FiMenu,
  FiInfo,
  FiUsers,
  FiBook,
  FiCheckSquare,
  FiCode,
  FiSun,
  FiMoon,
  FiLogOut,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";
import auth from "../api/auth";
import consts from "../consts";
import NavItem from "./NavItem";

export default function Sidebar({ userInfo, setUserInfo, theme, setTheme }) {
  let navigate = useNavigate();

  const getNavSize = () => {
    let _navSize = localStorage.getItem("navSize");
    if (!_navSize || (_navSize !== "small" && _navSize !== "large")) {
      _navSize = "small";
      localStorage.setItem("navSize", _navSize);
    }

    return _navSize;
  };

  const [navSize, setNavSize] = useState(getNavSize());
  const _setNavSize = (_navSize) => {
    setNavSize(_navSize);
    localStorage.setItem("navSize", _navSize);
  };
  let location = useLocation();

  const handleLogout = () => {
    auth.logout((error) => {
      if (error) {
        console.error(error);
        return;
      }

      setUserInfo(null);
      return navigate("/");
    });
  };

  return (
    <Flex
      position="sticky"
      marginRight="0.5rem"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius="8px"
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
              navSize === "small" ? _setNavSize("large") : _setNavSize("small");
            }}
            paddingLeft={navSize === "large" && "0.75rem"}
            borderLeft="2px solid #333333"
            borderRight="2px solid #333333"
          ></IconButton>
        </Flex>
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
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems="center" justifyContent="left">
          <Popover direction="ltr">
            <PopoverTrigger>
              <Avatar
                marginBottom="0.8rem"
                cursor="pointer"
                size="sm"
                src={userInfo.avatarUrl}
              />
            </PopoverTrigger>
            <PopoverContent
              border="none"
              borderRadius="8px"
              w="max-content"
              _focus={{ boxShadow: "none" }}
            >
              <PopoverArrow bg="#858585" />
              <PopoverBody
                borderRadius="8px"
                p={0}
                backgroundColor="#333333"
                w="max-content"
              >
                <Button
                  border="1px solid #858585"
                  backgroundColor="#333333"
                  _hover={{ backgroundColor: "none", color: "#FFFFFF" }}
                  _focus={{ boxShadow: "none" }}
                  leftIcon={<FiLogOut />}
                  variant="solid"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              {userInfo.email}
            </Heading>
            <Badge marginTop="0.5rem" w="max-content" colorScheme="blue">
              {consts.roles[userInfo.roleId]}
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
