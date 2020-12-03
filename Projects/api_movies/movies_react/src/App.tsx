import React, { FC, useEffect, useState } from "react";

import Card, { CardForm } from "./components/Card";
import Navbar from "./components/NavBar";
import { useCRUD } from "./utils";

export interface MovieInterface {
	id: number;
	release_year: number;
	title: string;
	origin: string;
	director: string;
	cast: null | string;
	genre: string;
	url: string;
	plot: string;
}

const App: FC = () => {
	const base = useCRUD("http://localhost:8000/");
	const [movies, setMovies] = useState<MovieInterface[]>([]);
	const [isCreating, setIsCreating] = useState<boolean>(false);

	useEffect(() => {
		base("movies/?order_by=-id")
			.list()
			.then((res) => setMovies([...res.results]));
	}, [base]);

	return (
		<>
			<Navbar setMovies={setMovies} setIsCreating={setIsCreating} />
			<div className="container">
				<div className={`${isCreating ? "show" : "hide"}`}>
					<CardForm
						state="creating"
						setIsCreating={setIsCreating}
						setIsEditing={() => {}}
						setMovies={setMovies}
						show={true}
						id={0}
						release_year={0}
						title=""
						origin=""
						director=""
						cast=""
						genre=""
						url=""
						plot=""
					/>
				</div>
				<div className="row my-3">
					{movies.map((m: MovieInterface) => (
						<div
							key={m.id}
							className="col-12 col-md-4 col-lg-3 my-1"
						>
							<Card {...m} setMovies={setMovies} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default App;
