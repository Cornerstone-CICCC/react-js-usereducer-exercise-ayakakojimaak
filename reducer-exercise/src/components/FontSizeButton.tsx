import { useContext } from "react";
import { FontContext } from "../contexts/FontContext";
import { fontActionTypes } from "../hooks/useFontReducer";

export function FontSizeButton() {
	const { dispatch } = useContext(FontContext);
	return (
		<div>
			<button
				type="button"
				onClick={() => dispatch({ type: fontActionTypes.INCREASE })}
			>
				Increase Font Size
			</button>
			<button
				type="button"
				onClick={() => dispatch({ type: fontActionTypes.DECREASE })}
			>
				Decrease Font Size
			</button>
		</div>
	);
}
