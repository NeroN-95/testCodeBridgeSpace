import React, {useEffect, useState} from "react";
import ArrowLeft from "../assets/ArrowLeft.png"
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {ICard} from "../interface/interface";
import {Box, Grid} from "@mui/material";
import {ACard, AContent, Adec, Alink, ArtCon, ArtImg, Atext, TLink} from "../styles/mui-custom";


const CardArticle = () => {
    let {cardId} = useParams();
    const [card, setCard] = useState<ICard | null>(null);


    useEffect(() => {
        axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${cardId}`)
            .then((response) =>
                setCard(response.data));
    }, [cardId]);


    return (
        <>
            <Grid container sx={ArtCon}>
                <Grid xs={12}>
                    <Grid>
                        <Box sx={ArtImg}
                             style={{background: `url(${card?.imageUrl}) 0 50%`,}}></Box>
                    </Grid>
                </Grid>
                <Grid sx={AContent}>
                    <Grid sx={ACard}>
                        <Box sx={Atext }>{card?.title}</Box>
                        <Grid sx={Adec}>
                            <Box>{card?.summary}</Box>
                        </Grid>

                    </Grid>
                    <Grid xs={10} sx={Alink}>
                        <Box sx={TLink}>
                            <Link to='/' >
                                back to homepage <img src={ArrowLeft} alt='img'/>
                            </Link>
                        </Box>

                    </Grid>
                </Grid>


            </Grid>

        </>
    )
}

export default CardArticle;