"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const DateInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	value,
	...rest
}) => {
	const [date, setDate] = useState("");

	console.log(value)

	useEffect(() => {
		if (value) {
			setDate(value);
		}
	}, [value]);

	return (
		<InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
			{!!iconBefore && (
				<InputGroup.Text>
					<i className={`pi pi-${iconBefore}`}></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId={name} label={label}>
				<Calendar
					name={name}
					className="form-control w-100"
					value={date}
					onChange={(e) => setDate(e.value)}
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
