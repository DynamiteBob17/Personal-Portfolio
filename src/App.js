import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import WebProjects from "./pages/web_projects/WebProjects";
import JavaProjects from "./pages/java_projects/JavaProjects";
import CodingChallenges from "./pages/coding_challenges/CodingChallenges";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"web_projects"} element={<WebProjects />} />
                    <Route path={"java_projects"} element={<JavaProjects />} />
                    <Route path={"coding_challenges"} element={<CodingChallenges />} />
                    <Route path={"*"} element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
