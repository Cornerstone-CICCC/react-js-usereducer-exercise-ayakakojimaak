import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { FontContext } from "./contexts/FontContext";
import { FontSizeButton } from "./components/FontSizeButtton";

function App() {
	const context = useContext(DarkModeContext);
	const fontContext = useContext(FontContext);
	const { state } = context;
	const { fontState } = fontContext;

	return (
		<div
			style={{
				backgroundColor: state.darkMode ? "#222" : "#fff",
				color: state.darkMode ? "#eee" : "#000",
				fontSize: `${fontState.size}px`,
			}}
		>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<DarkModeToggle />
				<FontSizeButton />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
