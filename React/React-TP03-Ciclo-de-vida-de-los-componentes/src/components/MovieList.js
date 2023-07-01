import React from "react";

export const DataMovie = (props) => {
    return(
        <tbody  >
            <tr >
                <td className="">{props.data.id}</td>
                <td>{props.data.title}</td>
                <td>{props.data.rating}</td>
                <td>{props.data.awards}</td>
                <td>{props.data.length}</td>
            </tr>
        </tbody>
    )
}
export default DataMovie;