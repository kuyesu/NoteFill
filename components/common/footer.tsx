import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// create a tsx footer function
export const Footer = () => {
    return (
        <footer className={styles.footer}>

            
            
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <p>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </p>
        </Grid>
        <Grid item xs={12}>
        <p>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copyright © Notify. All Rights Reserved.
                </a>
            </p>
        </Grid>
       
        <Grid item xs={4} textAlign='start'>
          <a>With Love, from Canada</a>
        </Grid>
        <Grid item xs={4} textAlign='center'>
          Privacy Policy
        </Grid>
        <Grid item xs={4} textAlign='end'>
        © Notify
        </Grid>
      </Grid>
    </Box>
        </footer>
    )
}