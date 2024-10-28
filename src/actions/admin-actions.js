"use server";

import { response } from "@/helpers/form-validation";
import { deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const deleteAdminAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteAdmin(id);
		const data = await res.text();

		if (!res.ok) {
			return response(false, data, null);
		}

        revalidatePath("/dashboard/admin");

        return response(true, data, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};
