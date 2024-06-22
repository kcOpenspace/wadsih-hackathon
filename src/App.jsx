import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainWrap from "./components/MainWrap";
import bg from './assets/wapolbg.jpg'

function App() {
	return (
		<div className="App" style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`, backgroundSize: 'cover'}}>
			<Header />
			<MainWrap />
		</div>
	);
}

export default App;
