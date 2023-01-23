import React, { useEffect, useMemo, useState } from "react";
import TypeSearch from "./TypeSearch";
import { ICard } from "../interface/interface";
import { spaceAPI } from "../core/api";
import Card from "./Card";
import { Grid } from "@mui/material";


const Cards = () => {
    const [ filter, setFilter ] = useState("");
    const [ cards, setCards ] = useState<ICard[] | []>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setFilter(value);
    }

    const items = useMemo(() => {
        if (filter) {
            return cards.filter(item => {
                const matchValue = filter.toLowerCase();
                const {title, summary} = item;
                if (title.toLowerCase().includes(matchValue)) return true;
                return summary.toLowerCase().includes(matchValue);

            })
        }
        return cards;
    }, [ filter, cards ]);

    useEffect(() => {
        spaceAPI.getAllArticle().then((response) => setCards(response.data));
    }, []);

    return (
        <Grid container xs={12}>
            <Grid container xs={12} style={{
                padding: " 0 60px",
                margin: '30px 0'
            }}>
                <TypeSearch handleChange={handleChange}/>
            </Grid>
            {
                filter ? <Grid sx={{margin: 8}}>
                    <h3>Results: {items.length}
                        <hr/>
                    </h3>
                </Grid> : null
            }
            <Grid container xs={12} style={{
                padding: " 0 60px",
                justifyContent: "space-between",
            }}>
                {items.map((card) =>
                    <Grid sx={{boxShadow: 3, marginBottom: 10,}} xs={3} mr={8} md={3} key={card.id}>
                        <Card card={card} key={card.id} filter={filter}/>
                    </Grid>
                )
                }
            </Grid>
        </Grid>
    )
}
export default Cards;