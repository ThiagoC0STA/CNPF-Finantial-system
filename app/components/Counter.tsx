'use client'

import { Button, Typography, Box } from '@mui/material'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useStore } from '../store/useStore'

export default function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 3,
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={increment}
          startIcon={<FaPlus />}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={decrement}
          startIcon={<FaMinus />}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  )
} 