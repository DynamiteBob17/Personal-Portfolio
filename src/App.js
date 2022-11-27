import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WebProjects from "./pages/WebProjects";
import JavaProjects from "./pages/JavaProjects";
import CodingChallenges from "./pages/CodingChallenges";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="web_projects" element={<WebProjects />} />
                    <Route path="java_projects" element={<JavaProjects />} />
                    <Route path="coding_challenges" element={<CodingChallenges />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
