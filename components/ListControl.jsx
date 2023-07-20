import { Flex, Input, HStack } from "@chakra-ui/react"

export default function ListControl() {
  return (
    <Flex
      align="center"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      backgroundColor="white"
      _hover={{
        bg: "cyan.100",
        color: "white",
      }}
      p={2}
    >
      <HStack spacing="4" inlineSize="100%" borderColor="gray.400">
        <Input placeholder="Input value to filter" />
        <Input placeholder="Filter by City,Factory" />
        <Input placeholder="Sort by Order (Desc,Asc)" />
      </HStack>
    </Flex>
  )
}
