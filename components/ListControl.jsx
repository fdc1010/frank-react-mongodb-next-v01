import { Flex, Input, HStack, Checkbox, Select } from "@chakra-ui/react"

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
        <Select placeholder='Filter' color="black">
          <option value='City'>City</option>
          <option value='Factory'>Factory</option>
        </Select>
        <Checkbox defaultChecked>Sort</Checkbox>
      </HStack>
    </Flex>
  )
}
