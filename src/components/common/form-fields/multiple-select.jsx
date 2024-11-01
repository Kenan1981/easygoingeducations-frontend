"use client";
import { MultiSelect } from "primereact/multiselect";
import React, { useState } from "react";
import {
	FloatingLabel,
	FormControl,
	FormSelect,
	InputGroup,
} from "react-bootstrap";

export const MultipleSelect = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	options,
	optionLabel,
	optionValue,
	values, // [3,12,55]
	...rest
}) => {
	const [selectedItems, setSelectedItems] = useState(values || []);

	return (
		<InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
			{!!iconBefore && (
				<InputGroup.Text>
					<i className={`pi pi-${iconBefore}`}></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId={name} label={label}>
				<MultiSelect
					value={selectedItems}
					onChange={(e) => setSelectedItems(e.value)}
					options={options}
					optionLabel={optionLabel}
					optionValue={optionValue}
					display="chip"
					placeholder="Select"
					{...rest}
					className="w-100 form-control"
				/>

				<FormControl.Feedback
					type="invalid"
					style={{ position: "absolute" }}
				>
					{errorMessage}
				</FormControl.Feedback>
			</FloatingLabel>
			{!!iconAfter && (
				<InputGroup.Text>
					<i className={`pi pi-${iconAfter}`}></i>
				</InputGroup.Text>
			)}
		</InputGroup>
	);
};
