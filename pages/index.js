import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Stack, Box, Typography} from '@mui/material'
import { useEffect } from 'react';
import React from "react";
import MuiMarkdown from 'mui-markdown';
import useSWR from 'swr'
export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [goalResult, setGoalResult] = React.useState(undefined);
  
  const { data, error } = useSWR(
    "/api/hello",
    fetcher
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Stack spacing={2}>
        <Button href="http://10.0.1.179:9117" variant='contained'> Jacket</Button>
        <Button href="http://10.0.1.179:8080" variant='contained'> Flood Torrent</Button>
        <Button href="https://10.0.1.179:9443" variant='contained'> Portainer</Button> 
    </Stack>
<Box sx={{ backgroundColor: 'white', borderRadius: 2, p: 2, mt: 5}}>

{data && 
        // <MuiMarkdown>
        {data}
      // </MuiMarkdown>
    }
</Box>
    
      </main>1

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
