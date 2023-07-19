import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { cardVariant, parentVariant } from "@utils/motion"
import { motion } from "framer-motion"
import Card from "@components/Card"

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function List({ lists }) {

  return (
    <Box>
      <MotionSimpleGrid
        mt="4"
        minChildWidth="250px"
        spacing="2em"
        minH="full"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >            
        {lists.map((id, i) => (
          <MotionBox variants={cardVariant} key={i}>
            <Card id={id} />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
    </Box>
  )
}
