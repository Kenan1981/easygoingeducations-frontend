import * as Yup from "yup";
import { getGenderValues } from "../misc";

const genders = getGenderValues();

export const AdminSchema = Yup.object({
	birthDay: Yup.date()
		.typeError("Invalid date")
		.max(new Date(), "Invalid birthdate")
		.required("Date of birth is required"),
	birthPlace: Yup.string().required("Place of birth is required"),
	gender: Yup.string()
		.oneOf(genders, "Invalid gender")
		.required("Gender is required"),
	name: Yup.string().required("First name is required"),
	phoneNumber: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
		.required("Phone number is required"), // 123-345-5464
	ssn: Yup.string()
		.matches(/\d{3}-\d{2}-\d{4}/, "Invalid ssn")
		.required("SSN is required"), // 123-35-5464,
	surname: Yup.string().required("Last name is required"),
	username: Yup.string().required("Username is required"),
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.max(20, "Must not exceed 20 characters")
		.matches(/[a-z]+/, "Must contain at least one lowercase letter")
		.matches(/[A-Z]+/, "Must contain at least one uppercase letter")
		.matches(/[0-9]+/, "Must contain at least one number")
		.matches(
			/[!@#$%^&*().;,:]+/,
			"Must contain at least one special character"
		)
		.required("Password is required"),

	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password")],
		"Passwords must match"
	).required("Password is required"),
});
