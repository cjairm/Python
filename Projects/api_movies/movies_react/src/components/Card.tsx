import React, {
	FC,
	useState,
	useEffect,
	Dispatch,
	SetStateAction
} from "react";

import { MovieInterface } from "../App";
import { useCRUD } from "../utils";
import { Input, Textarea } from "./Input";

interface CardInterface extends MovieInterface {
	setMovies: Dispatch<SetStateAction<MovieInterface[]>>;
}

interface CardInformationInterface extends MovieInterface {
	show: boolean;
	setIsEditing: (id: number) => void;
	setMovies: Dispatch<SetStateAction<MovieInterface[]>>;
	state?: "creating";
	setIsCreating?: Dispatch<SetStateAction<boolean>>;
}

const Card: FC<CardInterface> = ({
	id,
	title,
	plot,
	release_year,
	origin,
	director,
	cast,
	genre,
	url,
	setMovies
}) => {
	const [isEditing, setIsEditing] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);
	const [description, setDescription] = useState<string>("");

	useEffect(() => {
		let desc = "";
		if (!show) {
			if (plot.length >= 300) {
				for (let i = 0; i < 300; i++) {
					if (plot[i] !== undefined) desc += plot[i];
				}
				desc += "...";
			} else desc = plot;
		} else desc = plot;

		setDescription(desc);
	}, [show, plot]);

	return (
		<div className="card card-body border border--blue">
			{isEditing ? (
				<CardForm
					setMovies={setMovies}
					show={show}
					setIsEditing={setIsEditing}
					id={id}
					title={title}
					plot={plot}
					release_year={release_year}
					origin={origin}
					director={director}
					cast={cast}
					genre={genre}
					url={url}
				/>
			) : (
				<>
					<h5 className="card-title">{`${title} - ${release_year}`}</h5>
					<p className="card-text">{description}</p>
					<CardInformation
						setMovies={setMovies}
						setIsEditing={setIsEditing}
						show={show}
						id={id}
						title={title}
						plot={plot}
						release_year={release_year}
						origin={origin}
						director={director}
						cast={cast}
						genre={genre}
						url={url}
					/>
				</>
			)}
			<button
				className="btn btn-info"
				onClick={() => {
					setIsEditing(0);
					setShow((prevState) => !prevState);
				}}
			>
				{show ? "Close" : "More"}
			</button>
		</div>
	);
};

const CardInformation: FC<CardInformationInterface> = ({
	id,
	director,
	origin,
	cast,
	genre,
	url,
	show,
	setIsEditing,
	setMovies
}) => {
	const base = useCRUD("http://localhost:8000/");

	return (
		<div className={`${show ? "show" : "hide"} d-flex flex-column`}>
			<small className="text-muted">Director: {director}</small>
			<small className="text-muted">Origin: {origin}</small>
			{cast && <small className="text-muted">Cast: {cast}</small>}
			<small className="text-muted">Genre: {genre}</small>
			<button
				onClick={() => (window.location.href = url)}
				className="btn btn-link mb-1"
			>
				More info
			</button>
			<button
				className="btn btn-success"
				onClick={() => setIsEditing(id)}
			>
				Edit
			</button>
			<button
				className="btn btn-danger my-1"
				onClick={() => {
					setMovies((prevState) => {
						const ms = [];
						for (let i = 0; i < prevState.length; i++) {
							if (id !== prevState[i].id) ms.push(prevState[i]);
						}

						return ms;
					});
					base(`movies/${id}/`).remove();
				}}
			>
				Remove
			</button>
		</div>
	);
};

export const CardForm: FC<CardInformationInterface> = ({
	id,
	title,
	plot,
	release_year,
	origin,
	director,
	cast,
	genre,
	url,
	setIsEditing,
	setMovies,
	state,
	setIsCreating
}) => {
	const [movie, setMovie] = useState<MovieInterface>({
		id,
		title,
		plot,
		release_year,
		origin,
		director,
		cast: cast !== null ? cast : "",
		genre,
		url
	});

	const base = useCRUD("http://localhost:8000/");

	useEffect(() => {
		setMovies((prevState) =>
			prevState.map((m) => (m.id === movie.id ? movie : m))
		);
	}, [movie, setMovies]);

	const updateInputHanlder = (keyName: string, val: string) =>
		setMovie((prevState) => ({
			...prevState,
			[keyName]: val
		}));

	const onUpdateMovieHandler = () => base(`movies/${id}/`).update(movie);
	const onCreateMovieHandler = () =>
		base("movies/")
			.create(movie)
			.then((resp) => setMovies((prevState) => [resp, ...prevState]));

	return (
		<>
			<Input
				label="Title"
				value={movie.title}
				onChangeHandler={(e) =>
					updateInputHanlder("title", e.target.value)
				}
			/>
			<Input
				label="Release Year"
				value={"" + movie.release_year}
				onChangeHandler={(e) =>
					updateInputHanlder("release_year", e.target.value)
				}
			/>
			<Input
				label="Director"
				value={movie.director}
				onChangeHandler={(e) =>
					updateInputHanlder("director", e.target.value)
				}
			/>
			<Input
				label="Origin"
				value={movie.origin}
				onChangeHandler={(e) =>
					updateInputHanlder("origin", e.target.value)
				}
			/>
			<Input
				label="Genre"
				value={movie.genre}
				onChangeHandler={(e) =>
					updateInputHanlder("genre", e.target.value)
				}
			/>
			<Input
				label="Cast"
				value={movie.cast !== null ? movie.cast : ""}
				onChangeHandler={(e) =>
					updateInputHanlder("cast", e.target.value)
				}
			/>
			<Input
				label="URL"
				value={movie.url}
				onChangeHandler={(e) =>
					updateInputHanlder("url", e.target.value)
				}
			/>
			<Textarea
				label="Plot"
				value={movie.plot}
				onChangeHandler={(e) =>
					updateInputHanlder("plot", e.target.value)
				}
			/>
			<button
				className="btn btn-success w-100 mb-1"
				onClick={() => {
					if (state !== "creating") onUpdateMovieHandler();
					else {
						if (setIsCreating)
							setIsCreating((prevState) => !prevState);
						onCreateMovieHandler();
					}
					setIsEditing(0);
				}}
			>
				Finish
			</button>
		</>
	);
};

export default Card;
