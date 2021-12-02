import { Flex, Text } from "@chakra-ui/layout";

export default function Course({ title }) {
  return (
    <Flex flexDir="column">
      <Text fontSize="lg">{title}</Text>
    </Flex>
  );
}
