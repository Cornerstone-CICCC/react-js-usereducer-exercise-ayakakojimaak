export type FontState = {
	size: number;
};

export type FontAction = {
	type: (typeof fontActionTypes)[keyof typeof fontActionTypes];
};

export const initialState = {
	size: 16,
};

export const fontActionTypes = {
	INCREASE: "INCREASE",
	DECREASE: "DECREASE",
};

export function fontReducer(state: FontState, action: FontAction) {
	switch (action.type) {
		case fontActionTypes.INCREASE:
			return { size: state.size + 1 };
		case fontActionTypes.DECREASE:
			return { size: state.size - 1 };
		default:
			return state;
	}
}
