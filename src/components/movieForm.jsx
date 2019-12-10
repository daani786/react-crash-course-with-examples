import { getMovie, saveMovie } from "../services/fakeMovieService";

import Form from "./common/form";
import Joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .integer()
            .min(0)
            .max(100)
            .required()
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .min(0)
            .max(10)
            .required()
            .label("Daily Rental Rate")
    };

    componentDidMount() {
        //const genres = [{ _id: "", name: "" }, ...getGenres()];
        const genres = getGenres();
        this.setState({ genres: genres });

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-form");

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        console.log("movie", movie.genre);
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        // Call the server
        //const username = this.username.current.value;
        //console.log("submitted");

        saveMovie(this.state.data);
        this.props.history.push("/movies");
    };

    render() {
        return (
            <div>
                <h1>MovieForm</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput(
                        "numberInStock",
                        "Number in Stock",
                        "number"
                    )}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
