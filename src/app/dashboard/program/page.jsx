import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { ProgramList } from "@/components/dashboard/program/program-list";
import { UnAssignedProgramList } from "@/components/dashboard/program/unassigned-program-list";
import {
	getAllProgramsByPage,
	getUnAssignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataAllPrograms = (await getAllProgramsByPage(page)).json();
	const dataUnAssignedPrograms = (await getUnAssignedPrograms()).json();
	const dataTeachers = (await getAllTeachers()).json();

	const [allPrograms, unAssignedPrograms, teachers] = await Promise.all([
		dataAllPrograms,
		dataUnAssignedPrograms,
		dataTeachers,
	]);

	const newTeachers = teachers.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));


	return (
		<>
			<PageHeader title="Programs" />
			<Spacer />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnAssignedProgramList
				programs={unAssignedPrograms}
				teachers={newTeachers}
			/>
			<Spacer />
		</>
	);
};

export default Page;
