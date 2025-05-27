'use client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Counter from './components/Counter'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Counter />
      </main>
    </ThemeProvider>
  )
}
