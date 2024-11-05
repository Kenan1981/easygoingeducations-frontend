"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDatell } from "@/helpers/date-time";

export const ContactMessageList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Messages</h2>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/contact-message?page=${e.page}`);
	};

	const formatDate = (row) => formatDatell(row.date);
	const formatSubject = (row) =>
		row.subject.length > 20
			? `${row.subject.substring(0, 20)} ...`
			: row.subject;

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="id"
				paginator
				rows={size}
				totalRecords={totalElements}
				stripedRows
				showGridlines
				first={number * size}
				header={header}
				onPage={onPage}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column field="name" header="Name" />
				<Column field="email" header="Email" />
				<Column body={formatDate} header="Date" />
				<Column body={formatSubject} header="Subject" />
			</DataTable>
		</Container>
	);
};
