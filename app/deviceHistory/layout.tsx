"use client"
import { Box, Button, Center, Heading } from "@chakra-ui/react"
import Link from "next/link"

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box height={"100vh"}>
      <Center backgroundColor={"blue"} paddingBottom={4}>
        <Heading size={"xl"} marginTop={4} color={"white"}>
          History
        </Heading>
      </Center>

      <Box marginX={4}>
        {children}
        <Box position={"absolute"} bottom={8}>
          <Link href="/deviceList">
            <Button backgroundColor={"blue"} color="white">
              Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
