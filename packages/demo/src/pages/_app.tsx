import React from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '../createEmotionCache'
import {EmotionCache} from '@emotion/utils'
import {CacheProvider} from '@emotion/react'
import '../styles.css'
import {ThemeProvider, createTheme} from '@mui/material'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
const theme = createTheme()

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
