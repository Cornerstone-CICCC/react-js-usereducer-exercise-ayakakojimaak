import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import { fontReducer, initialState } from "../hooks/useFontReducer";
import type { FontState, FontAction } from "../hooks/useFontReducer";

type FontContextType = {
	fontState: FontState;
	dispatch: Dispatch<FontAction>;
};

export const FontContext = createContext<FontContextType>({
	fontState: initialState,
	dispatch: () => null,
});

export function FontProvider({ children }: { children: ReactNode }) {
	const [fontState, dispatch] = useReducer(fontReducer, initialState);

	return (
		<FontContext.Provider value={{ fontState, dispatch }}>
			{children}
		</FontContext.Provider>
	);
}
