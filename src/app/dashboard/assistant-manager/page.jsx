import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AssistantList } from "@/components/dashboard/assistant-manager/assistant-list";
import { getAllAssistantsByPage } from "@/services/assistant-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllAssistantsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Assistants" />
			<Spacer />
			<AssistantList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
