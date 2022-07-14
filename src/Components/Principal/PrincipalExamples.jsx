import { useState, useMemo } from "react";

import { MUSIC_API } from "../../Constants/musicAPI";

import { experimentalStyled as styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';

export const PrincipalExamples = () => {
    const axios = require('axios').default;

    const [List, setList] = useState([]);

    useMemo(() => {        
        axios.get(`${MUSIC_API}composer/list/pop.json`, {
        }, {
            params: {
                "popularwork": 1,
                "recommendedwork": 1,
                "recommendedcomposer": 1
            },
    })
        .then(function (response) {
            setList(response.data.composers.slice(0, 12));
        })
            .catch(function (error) {
            // eslint-disable-next-line
            console.error(error);
        });
    }, [axios]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: "pointer"
    }));

    const handleClickComposer = (idComposer) => {
        
    };

    return (
        <div style={{marginLeft:'15%', marginRight:'15%'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {List && List.map(({id, epoch, complete_name,portrait, birth, death}) => (
                    <Grid item xs={2} sm={4} md={4} key={id}>
                        <Item onClick={() => handleClickComposer(id)}>
                            <Typography variant="h6" >
                                {complete_name}
                            </Typography>

                            <img
                                src={portrait}
                                style={{width:'80%',height:'90%', border:"0",}}
                                alt={`Portrait of ${complete_name}`}
                                loading="lazy"
                            />
                            <Typography variant="subtitle2" >
                                {`Birth: ${birth} Death: ${death}`}
                            </Typography>
                            <Typography variant="subtitle1" >
                                Epoch: {epoch}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
