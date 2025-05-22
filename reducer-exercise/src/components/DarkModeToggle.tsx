import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { actionTypes } from "../hooks/useDarkModeReducer";

export function DarkModeToggle() {
	const { state, dispatch } = useContext(DarkModeContext);
	return (
		<div>
			<button
				type="button"
				onClick={() => dispatch({ type: actionTypes.TOGGLE })}
			>
				{state.darkMode ? "Toggle Dark Mode: ON" : "Toggle Dark Mode: OFF"}
			</button>
		</div>
	);
}
