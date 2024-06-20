"use client"
import ChartComponent from "@/app/components/chart"
import { Box, Flex, Text, Select } from "@chakra-ui/react"
import React from "react"
import dynamic from 'next/dynamic'
 
const DynamicChart = dynamic(() => import('../../components/chart'), {
  ssr: false,
})

export default function Device11607B() {
  return (
    <Box marginTop={8}>
      <Box>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Serial # :{" "}
          </Text>
          <Text>11607B</Text>
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
        <DynamicChart
          data={[
            100, 95, 90, 80
          ]}
          alert={0}
        />
      </Box>
    </Box>
  )
}
