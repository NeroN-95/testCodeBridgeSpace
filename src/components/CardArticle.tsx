import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.png"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ICard } from "../interface/interface";
import { Grid } from "@mui/material";


const CardArticle = () => {
    let {cardId} = useParams();
    const [card, setCard] = useState<ICard | null>(null);


    useEffect(() => {
        axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${cardId}`)
            .then((response) =>
                setCard(response.data));
    }, []);


    return (
        <>
            <Grid container sx={{background: "white", zIndex: -1}}>
                <Grid xs={12}>
                    <Grid>
                        <div style={{
                            width: '100%',
                            display: 'block',
                            height: '245px',
                            background: `url(${card?.imageUrl}) 0 50%`
                        }}/>
                    </Grid>
                </Grid>
                <Grid  sx={{marginBottom: 15, background: "white", minHeight: '100vh'}}>
                    <Grid  sx={{boxShadow: 2, marginTop: -10, marginX: 10, background: 'white', minHeight: '100vh'}}>
                        <p style={{textAlign: 'center', fontSize: 18}}>{card?.title}</p>
                        <Grid sx={{margin: 10}}>
                            <p>{card?.summary}</p>
                        </Grid>

                    </Grid>
                    <Grid xs={10} sx={{marginTop: 2, marginLeft: 20}}>
                        <Link to='/' style={{textDecoration: "none", fontWeight: 500, color: 'black'}}>
                            back to homepage <img src={ArrowLeft}/>
                        </Link>
                    </Grid>
                </Grid>


            </Grid>

        </>
    )
}

export default CardArticle;