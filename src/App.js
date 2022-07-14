import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';


function App() {
	return (
		<Router>
				<Navbar/>
				<Shop/>
				<div className='container my-5'>
					<Routes>
						<Route exact path="/" element={<Home/>}/>
					</Routes>
				</div>
		</Router>
	);
}

export default App;
