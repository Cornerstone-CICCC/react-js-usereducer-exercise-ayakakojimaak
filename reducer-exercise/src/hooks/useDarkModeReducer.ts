export type DarkModeState = {
	darkMode: boolean;
};

export type DarkModeAction = {
	type: (typeof actionTypes)[keyof typeof actionTypes];
};

export const initialState = {
	darkMode: false,
};

export const actionTypes = {
	TOGGLE: "TOGGLE",
};

export function darkModeReducer(state: DarkModeState, action: DarkModeAction) {
	switch (action.type) {
		case actionTypes.TOGGLE:
			return { darkMode: !state.darkMode };
		default:
			return state;
	}
}
