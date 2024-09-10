import { AppBar, Box, ButtonBase, Container, Toolbar, Typography } from '@mui/material'
import SignOutIcon from '@mui/icons-material/Logout'
import Head from 'next/head'
import React from 'react'
import { SignOut } from '../../config/firebase'

const Authenticated = ({ children, title }) => {
    const defaultTitle = 'Netflix'
    const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
            <Typography sx={{ flex: 1 }}>Netflix</Typography>
            <ButtonBase onClick={SignOut}>
                <SignOutIcon/>
                <Typography sx={{ ml: 1 }}>Sign Out</Typography>
            </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ pt: '64px' }}>
        <Container>
            {children}
        </Container>
      </Box>
    </>
  )
}

export default Authenticated
