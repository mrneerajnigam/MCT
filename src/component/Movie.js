import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';
import styles from './movie.css';


function Movie() {

    const [text, setText] = useState()
    const [movie, setMovie] = useState([])
    const changeText = (event) => {
        setText(event.target.value)
    }
    const getMovie = (e) => {
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${text}}&apikey=363b95a9`)
            .then((response) => {
                console.log(response)
                setMovie(response.data.Search)
            })
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SMDb - Search Movie Data base</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form className="d-flex" onSubmit={getMovie}>
                            <input className="form-control me-2" type="search" placeholder="Search movie here" aria-label="Search" value={text} onChange={changeText} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container my-3">
                <div className="row">
                    {
                        movie.map((value, index) => {
                            return (
                                <div className="col-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.Poster} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h3 className="card-text">Name - {value.Title}</h3>

                                            <h5 className="card-title">Year - {value.Year}</h5>
                                            <h5 className="card-text">SMDb Rating - {value.imdbID}</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default Movie;
