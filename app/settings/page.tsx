import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
export default function Settings() {
  return (
    <Box marginX={4} height={"100vh"}>
      <Center>
        <Heading size={"xl"}>Settings</Heading>
      </Center>

      <Center marginTop={20}>
        <Box>
          
          <Center marginTop={6}>
            <ButtonGroup>
              <Button>Status</Button>
              <Button>History</Button>
              <Button>Settings</Button>
            </ButtonGroup>
          </Center>
        </Box>
      </Center>
      <Box position={"absolute"} bottom={8}>
        <Link href="/">
          <Button>Sign Out</Button>
        </Link>
      </Box>
    </Box>
  )
}
