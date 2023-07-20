import { Box, Flex, Text } from "@chakra-ui/react"
import { first } from "lodash"

export default function Card({ data, isType=false }) {
  const { _id, name } = data
  let lblName = name
  let lblText = "City"
  if(isType) {
    const typename = data.type
    lblName = first(typename).name
    lblText = "Factory"
  }
  return (
    <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      borderWidth="1px"
    >
      <Box w="full" h="full">

        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            
          </Box>

          <Box>{lblText}: {lblName}</Box>

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {
              !!data?.factory && data?.factory.map(elem=><Card data={elem} isType={true} key={elem._id} />)
            }
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
