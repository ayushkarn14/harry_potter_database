import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Characters from "./Characters.json";
import Staff from "./Staff.json";
import Students from "./Students.json";
function App() {
    return (
        <>
            <div style={{ backgroundColor: "#1c2738" }}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={<List key="1" category={Characters} />}
                        />
                        <Route
                            path="/Students"
                            element={<List key="2" category={Students} />}
                        />
                        <Route
                            path="/Staff"
                            element={<List key="3" category={Staff} />}
                        />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
