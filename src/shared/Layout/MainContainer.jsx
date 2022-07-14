import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'; 

export const MainContainer = ({ component }) => {
    return (
        <div>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        Classical paradise
                    </Typography>
                    <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
                        <ButtonGroup color="primary" size='small' aria-label="medium secondary button group">
                            <Link to="/">
                            <Button key={"principal"}
                                sx={{
                                    color: '#fff',
                                
                            }}>
                                Home
                            </Button>
                        </Link>

                        <Link to="/composers">
                            <Button key={"composers"}
                            sx={{
                                color: '#fff',
                            }}>
                                Compositors
                            </Button>
                        </Link>

                        <Link to="/pieces">
                            <Button key={"composers"}
                            sx={{
                                color: '#fff',
                            }}>
                                Classical Pieces
                            </Button>
                        </Link>
                        </ButtonGroup>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "3rem",
                }}
            >
            </nav>
            <div className=''>
                {component}
            </div>
        </div>
    );
};
