import { Flex, Text } from "@chakra-ui/layout";

export default function Course({ title }) {
  return (
    <Flex flexDir="column">
      <Text fontSize="3xl">{title}</Text>
    </Flex>
  );
}
