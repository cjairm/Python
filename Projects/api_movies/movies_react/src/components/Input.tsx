import React, { ChangeEvent, FC } from "react";

interface ComponentProps {
	label: string;
	value: string;
	onChangeHandler: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

export const Input: FC<ComponentProps> = ({
	label,
	value,
	onChangeHandler
}) => {
	return (
		<div className="form-group">
			<label htmlFor={`input${label}`}>{label}</label>
			<input
				value={value}
				onChange={onChangeHandler}
				type="text"
				className="form-control"
				id={`input${label}`}
				aria-describedby={`update${label}`}
			/>
		</div>
	);
};

export const Textarea: FC<ComponentProps> = ({
	label,
	value,
	onChangeHandler
}) => {
	return (
		<div className="form-group">
			<label htmlFor={`input${label}`}>{label}</label>
			<textarea
				defaultValue={value}
				onChange={onChangeHandler}
				className="form-control"
				id={`input${label}`}
				aria-describedby={`update${label}`}
				rows={10}
			></textarea>
		</div>
	);
};
