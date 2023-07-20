import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from "@chakra-ui/react"
import Image from "next/image"
import profilePic from "@public/me.jpeg"
import { FiChevronDown, FiBell } from "react-icons/fi";

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      />
      
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack spacing="4">
              <Avatar
                size="md"
              ><Image
              style={imageStyle}
              src={profilePic}
              alt="user profile picture"
            />

              </Avatar>
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="lg">Franklin Caruana</Text>
                <Text fontSize="md" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList fontSize="lg" bg="white" borderColor="gray.200">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  )
}
