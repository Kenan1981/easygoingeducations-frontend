"use client";

import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";

export const InstructorCard = (props) => {
	const { firstName, lastName, image, title } = props;

	return (
		<Card className="instructor-card">
			<Image src={`/img/instructors/${image}`} width={400} height={500} className="card-img-top card-img-bottom" alt={`${firstName} ${lastName}`} />

            <Card.Title>
                <h4>{firstName} {lastName}</h4>
                <h6>{title}</h6>
            </Card.Title>
		</Card>
	);
};
