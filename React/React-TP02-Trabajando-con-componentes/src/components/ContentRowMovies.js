import React from "react";
import { TopCard } from "./TopCard";

const ContentRowMovies = () => {
    const Data = [
        {
            color: 'primary',
            title: "Movies in Data Base",
            value: 21,
            icon: "fa-film",
        },
        {
            color: 'warning',
            title: "Actors quantity",
            value: 49,
            icon: "fa-user",
        },
        {
            color: 'success',
            title: "Total awards",
            value: 79,
            icon: "fa-award",
        },
    ];
    return (
        <div className="row">
            {Data.map((dat, i) => {
                return <TopCard data ={dat} key ={i + dat.color} />
            })}
        </div>
    )
}
export default ContentRowMovies;