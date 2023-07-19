import { Box, Flex, useToast } from "@chakra-ui/react"
import { useEffect } from "react"

export default function UserCard({ id }) {
  const toast = useToast()
  const { name, email, phone } = user
  const toastMessage = (title, message, status) => {
    toast({
      title,
      description: message,
      status: status,
      duration: 3000,
      isClosable: true,
    })
  }
  const onDelete = (userId) => {
    try {
      toastMessage("User Deletion", "Successful", "success")
    } catch (err) {
      toastMessage("Error Catched.", (err?.message ?? "Opps there seems to be an error"), "error")
    }
  }
  useEffect(()=>{
    if (!!error) toastMessage("Error Catched.", error, "error")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[error])

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
      onClick={() => onDelete(id)}
    >
      <Box w="full" h="full">
        <Box
          w="100%"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
        </Box>

        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {name}
          </Box>

          <Box>{email}</Box>

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {phone}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
