import React from 'react'
import { CircularProgress } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
    <CircularProgress isIndeterminate color='green.300' />
    </div>
  )
}

export default Loading
