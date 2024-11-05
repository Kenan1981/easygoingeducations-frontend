
import { STUDENTINFO_CREATE_API, STUDENTINFO_DELETE_API, STUDENTINFO_GET_BY_ID_API, STUDENTINFO_GET_BY_STUDENT_API, STUDENTINFO_GET_BY_TEACHER_API, STUDENTINFO_UPDATE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllInfoByPageForTeacher = async (
	page = 0,
	size = 10,
) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${STUDENTINFO_GET_BY_TEACHER_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllInfoByPageForStudent = async (
	page = 0,
	size = 10,
) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${STUDENTINFO_GET_BY_STUDENT_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};


export const getStudentInfoById = async (id) => {
	return fetch(`${STUDENTINFO_GET_BY_ID_API}/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createStudentInfo = async (payload) => {
	return fetch(`${STUDENTINFO_CREATE_API}`, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateStudentInfo = async (payload) => {
	return fetch(`${STUDENTINFO_UPDATE_API}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteStudentInfo = async (id) => {
	return fetch(`${STUDENTINFO_DELETE_API}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
