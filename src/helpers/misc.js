const { config } = require("./config");

export const getGenderValues = () => {
	return config.genders.map((gender) => gender.value);
};

export const getTermValues = () => {
	return config.educationTerms.map((term) => term.value);
};

export const getTermLabel = (val) => {
	const term = config.educationTerms.find((t) => t.value === val);
	return term?.label ?? "";
};
