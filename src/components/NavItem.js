import { Flex, Link, Text } from "@chakra-ui/layout";
import { Menu, MenuButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";

export default function NavItem({ navSize, title, icon, active }) {
  return (
    <Flex
      mt={25}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      borderLeft={active ? "2px solid #FFFFFF" : "2px solid #333333"}
      paddingRight="2px"
    >
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", color: "#FFFFFF" }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex alignItems="center" color={active && "#FFFFFF"}>
              <Icon as={icon} fontSize="2xl" />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
