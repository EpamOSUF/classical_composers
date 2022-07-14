import './PrincipalScreen.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { PrincipalExamples } from './PrincipalExamples';

export const PrincipalScreen = () => {
    return (
        <div>
        <h1>Classical composers</h1>
        
          <div style={{marginLeft:'20%', marginRight:'20%'}}>
            <Typography variant='subtitle1' align='justify' sx={{md:'30px', xl:'larger'}}>
                The Oxford Dictionary defines ‘classical music’ as “music written in a Western musical tradition,
                usually using an established form. Classical music is generally considered to be serious and to have a lasting value.”
                <br />
                In this space, you can search a lot of composers, discover his works and the most important thing, find
                the composition to listen it.
          </Typography>
                          <Typography variant='h6' fontWeight='bold' fontStyle='italic' align='center' >
                  We hope you enjoy your visit
                </Typography>
        </div>

        <Divider variant="middle" sx={{ mb: 4 }} />
        
        <PrincipalExamples />
        </div>
    );
};
