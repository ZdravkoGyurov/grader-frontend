import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Header({ styles, theme, setTheme }) {
  return (
    <Flex
      borderRadius="8px"
      color={styles.color}
      bg={styles.backgroundColor}
      marginBottom="0.5rem"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
    >
      <Text fontSize="3xl">Grader</Text>
      <Icon
        background="none"
        color="#858585"
        _hover={{ background: "none", color: styles.color, cursor: "pointer" }}
        _focus={{ boxShadow: "none" }}
        _active={{ backgroundColor: styles.backgroundColor }}
        as={theme === "light" ? FiMoon : FiSun}
        fontSize="2xl"
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      />
    </Flex>
  );
}
