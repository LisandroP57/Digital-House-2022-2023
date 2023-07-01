import React, { Component } from 'react';
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor() {
        super()
        this.state = {
            genresList: [],
            isHovered: false
        }
    }
    componentDidMount() {
        fetch('/api/genres')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(genres => {
            this.setState({ genresList: genres.data })
        })
        .catch(error => console.log(error))
    }

    handleMouseOver = () => {
        this.setState({ isHovered: true });
    };
    handleMouseOut = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { genresList, isHovered  } = this.state;
        const cardBodyClass = isHovered ? 'card-body bg-secondary' : 'card-body';

        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>Genres in Data Base</h6>
                        </div>
                        <div className={cardBodyClass}>
                            <div className="row">
                                {genresList.map((genre, index) => {
                                    return <Genre {...genre} key={index} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GenresInDb;