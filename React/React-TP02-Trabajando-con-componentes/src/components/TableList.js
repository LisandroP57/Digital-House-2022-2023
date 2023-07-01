import React from 'react';

export const MovieList = () => {
    const data = [
        {
            title: "Billy Elliot",
            length: 123,
            rating: 5,
            genres: ["Drama", "Comedia"],
            awards: 2
        },
        {
            title: "Alicia en el país de las maravillas",
            length: 142,
            rating: 4.8,
            genres: ["Drama", "Acción", "Comedia"],
            awards: 3
        },
    ];

    const TableRows = () => {
        return data.map((movie, i) => (
            <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.length}</td>
                <td>{movie.rating}</td>
                <td>{movie.genres.join(", ")}</td>
                <td>{movie.awards}</td>
            </tr>
        ));
    };

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between card">
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieList;