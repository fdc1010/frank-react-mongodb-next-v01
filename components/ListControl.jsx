import { Flex, Input, HStack, Checkbox, Select } from "@chakra-ui/react"

export default function ListControl({ onBlur, onSelect, onCheck }) {
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
        <Input
          placeholder="Input value to filter"
          onBlur={(e) => onBlur(e.target.value)}
          defaultValue=""
          color="black"
        />
        <Select
          placeholder="Filter All"
          onChange={(e) => onSelect(e.target.selectedIndex)}
          color="black"
          inlineSize="40%"
        >
          <option value="1">
            City
          </option>
          <option value="4">Factory</option>
        </Select>
        <Checkbox
          defaultChecked
          onChange={(e) => onCheck(e.target.checked)}
          color="black"
          inlineSize="20%"
        >
          Sort
        </Checkbox>
      </HStack>
    </Flex>
  )
}
