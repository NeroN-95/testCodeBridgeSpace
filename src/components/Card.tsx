import React, { useCallback } from "react";
import { ICard } from "../interface/interface";
import calendar from "../assets/calendar.png";
import rightImg from "../assets/ArrowRight.png"
import { Link } from "react-router-dom";

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
    }, [ filter ]);

    return (
        <div style={{width: "100%"}}>
            <img src={card.imageUrl} alt="img" style={{height: 217, width: "inherit"}}/>
            <div style={{padding: 10}}>
                <p><img src={calendar}/> {card.publishedAt}</p>
                <p>{card.newsSite}</p>
                <p>{heightText(title)}</p>
                <p style={{
                    height: "31px",
                    overflow: "hidden",
                    fontSize: "12px",
                    lineHeight: "16px"
                }}>{heightText(summary)}</p>
                <Link to={`/cards/${card.id}/`} style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>
                    <div>Read more <img src={rightImg}/></div>
                </Link>
            </div>
        </div>
    )
}
export default Card;