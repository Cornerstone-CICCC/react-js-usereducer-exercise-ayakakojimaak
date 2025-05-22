import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { FontProvider } from "./contexts/FontContext";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DarkModeProvider>
			<FontProvider>
				<App />
			</FontProvider>
		</DarkModeProvider>
	</StrictMode>,
);
