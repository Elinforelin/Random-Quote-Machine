import { fetchDataAction } from "../store/dataReduser";

export const getApi = () => async (dispatch) => {
	return await fetch("https://type.fit/api/quotes")
		.then((response) => response.json())
		.then((data) => {
			return dispatch(fetchDataAction(data));
		})
		.catch((err) => console.log(err));
};
