import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import { darkModeReducer, initialState } from "../hooks/useDarkModeReducer";
import type {
	DarkModeState,
	DarkModeAction,
} from "../hooks/useDarkModeReducer";

// Contextの型定義
type DarkModeContextType = {
	state: DarkModeState;
	dispatch: Dispatch<DarkModeAction>;
};

// Context作成（初期値はダミーで後からProviderで必ず値を渡す）
export const DarkModeContext = createContext<DarkModeContextType>({
	state: initialState,
	dispatch: () => null,
});

// Providerコンポーネント
export function DarkModeProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(darkModeReducer, initialState);

	return (
		<DarkModeContext.Provider value={{ state, dispatch }}>
			{children}
		</DarkModeContext.Provider>
	);
}
