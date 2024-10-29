"use client";
import { createAdminAction } from "@/actions/admin-actions";
import {
	DateInput,
	MaskedInput,
	SelectInput,
	TextInput,
} from "@/components/common/form-fields";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import { useFormState } from "react-dom";

export const AdminCreateForm = () => {
	const [state, dispatch] = useFormState(createAdminAction, initialResponse);

	return (
		<form action={dispatch}>
			<TextInput
				name="name"
				className="mb-3"
				label="First name"
				errorMessage={state?.errors?.name}
			/>

			<TextInput
				name="surname"
				className="mb-3"
				label="Last name"
				errorMessage={state?.errors?.surname}
			/>

			<SelectInput
				name="gender"
				className="mb-3"
				label="Gender"
				errorMessage={state?.errors?.gender}
				options={config.genders}
				optionLabel="label"
				optionValue="value"
			/>

			<TextInput
				type="date"
				name="birthDay"
				className="mb-3"
				label="Date of borth"
				errorMessage={state?.errors?.birthDay}
			/>

			<TextInput
				name="birthPlace"
				className="mb-3"
				label="Place of birth"
				errorMessage={state?.errors?.birthPlace}
			/>

			<MaskedInput
				name="phoneNumber"
				className="mb-3"
				label="Phone number"
        mask="999-999-9999"
				errorMessage={state?.errors?.phoneNumber}
			/>
		</form>
	);
};
