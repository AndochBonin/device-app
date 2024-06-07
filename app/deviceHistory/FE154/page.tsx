"use client"
import ChartComponent from "@/app/components/chart"
import { Box, Flex, Text, Select } from "@chakra-ui/react"
import React from "react"

export default function DeviceFE154() {
  return (
    <Box marginTop={8}>
      <Box>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Serial # :{" "}
          </Text>
          <Text>FE154</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Name :{" "}
          </Text>
          <Text>Main Oven</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Timeframe :{" "}
          </Text>
          <Select placeholder="" width={28}>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </Select>
        </Flex>
      </Box>
      <Box marginTop={10}>
        <ChartComponent
          data={[
            100, 90, 84, 70, 60, 40, 32, 24, 18, 100, 94, 86, 79, 74
          ]}
          alert={140}
        />
      </Box>
    </Box>
  )
}
