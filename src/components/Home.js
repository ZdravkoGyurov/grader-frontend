import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { FiGithub } from "react-icons/fi";
import auth from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home({ userInfo }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/courses");
    }
  }, []);

  return (
    <Flex
      backgroundColor="#F3F3F3"
      color="#858585"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <Button
        backgroundColor="#333333"
        _hover={{ backgroundColor: "none", color: "#FFFFFF" }}
        _focus={{ boxShadow: "none" }}
        leftIcon={<FiGithub />}
        variant="solid"
        onClick={() => {
          auth.login();
        }}
      >
        Sign in with Github
      </Button>
    </Flex>
  );
}
