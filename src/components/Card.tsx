import React, {useCallback} from "react";
import {ICard} from "../interface/interface";
import calendar from "../assets/calendar.png";
import rightImg from "../assets/ArrowRight.png"
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import {AllWidth, CStyle, STitle, TLink} from "../styles/mui-custom";

interface CardProps {
    card: ICard;
    filter: string;
}

const HeightLight = (search: string, string: string) => {
    if (!search) return string;
    const regExp = new RegExp(`${search}`, "g")
    const matchValues = string.match(regExp)

    if (matchValues) {
        return string.split(regExp).map((str: string, index: number, array: string[]) => {
            const match = matchValues.shift()
            if (index < array.length - 1) {
                return <>{str}<span style={{background: "#FFFF00"}}>{match}</span></>
            }
            return str;
        })
    }
    return string;
}

const Card = (props: CardProps) => {
    const {card, filter} = props
    const {title, summary} = card;

    const heightText = useCallback((string: string) => {
        return HeightLight(filter, string)
    }, [filter]);

    return (
        <Box sx={AllWidth}>
            <img src={card.imageUrl} alt="img" style={{height: 217, width: "inherit"}}/>
            <Box sx={CStyle}>
                <Box><img src={calendar} alt='img'/> {card.publishedAt}</Box>
                <Box>{card.newsSite}</Box>
                <Box>{heightText(title)}</Box>
                <Box sx={STitle}>{heightText(summary)}</Box>
                <Box sx={TLink}>
                    <Link to={`/cards/${card.id}/`}>
                    <Box>Read more <img src={rightImg} alt="img"/></Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Card;