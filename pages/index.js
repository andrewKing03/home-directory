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
  
  let { data, error } = useSWR(
    "/api/hello",
    fetcher
  );
// data = "Last committed block: 8323170\nTime since last block: 8.3s\nSync Time: 52263.7s\nLast consensus protocol: https://github.com/algorandfoundation/specs/tree/e5f565421d720c6f75cdd186f7098495caf9101f\nNext consensus protocol: https://github.com/algorandfoundation/specs/tree/e5f565421d720c6f75cdd186f7098495caf9101f\nRound for next consensus protocol: 8323171\nNext consensus protocol supported: true\nLast Catchpoint: \nGenesis ID: mainnet-v1.0\nGenesis hash: wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=\n"
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Directory</title>
        <meta name="description" content="Home directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Stack spacing={2}>
        <Button href="http://10.0.1.179:9117" variant='contained'> Jacket</Button>
        <Button href="http://10.0.1.179:32400" variant='contained'> Plex</Button>
        <Button href="http://10.0.1.179:8181" variant='contained'> Flood Torrent</Button>
        <Button href="https://10.0.1.179:9443" variant='contained'> Portainer</Button> 
    </Stack>
<Box sx={{maxWidth:370, backgroundColor: 'white', borderRadius: 2, p: 2, mt: 5}}>
{data && data.indexer && 
  <Typography key='indexer' variant='body1'>Indexer Round: {data.indexer.round}</Typography>
}
</Box>
<Box sx={{maxWidth:370, backgroundColor: 'white', borderRadius: 2, p: 2, mt: 5}}>
{data && data.node && data.node.split('\n').map((x, index) => {
  return <Typography key={index} variant='body1'>
  {x.substring(0, 50)}
  </Typography>
})
        // <MuiMarkdown>
        
      // </MuiMarkdown>
    }
</Box>
    
      </main>1

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
