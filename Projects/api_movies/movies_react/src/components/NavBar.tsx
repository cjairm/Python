import React, {
	FC,
	Dispatch,
	SetStateAction,
	useState,
	ChangeEvent
} from "react";

import { useCRUD } from "../utils";
import { MovieInterface } from "../App";

interface ComponentProps {
	setMovies: Dispatch<SetStateAction<MovieInterface[]>>;
	setIsCreating: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<ComponentProps> = ({ setMovies, setIsCreating }) => {
	const [query, setQuery] = useState<string>("");
	const base = useCRUD("http://localhost:8000/");

	const onSearchHandler = () => {
		base(`movies/?q=${query}&order_by=-id`).list()
			.then((res) => setMovies([...res.results]));
	};

	return (
		<nav className="navbar navbar-dark navbar--blue d-flex flex-column flex-md-row">
			<p className="navbar-brand m-2">Movies</p>
			<form
				className="form-inline mb-2 mb-md-0"
				onSubmit={(e) => {
					onSearchHandler();
					e.preventDefault();
				}}
			>
				<input
					value={query}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						if (e.target.value === "") onSearchHandler();
						setQuery(e.target.value);
					}}
					className="form-control"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button
					className="btn btn-success my-2 my-sm-0 mx-auto mx-sm-0"
					type="submit"
				>
					Search
				</button>
				<button
					className="btn btn-default my-2 my-sm-0 mx-auto mx-sm-0"
					onClick={() => setIsCreating((prevState) => !prevState)}
				>
					New
				</button>
			</form>
		</nav>
	);
};

export default Navbar;
