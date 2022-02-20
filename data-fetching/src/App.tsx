import { Routes, Route } from "react-router-dom";
import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />}></Route>
      <Route path="/repo/*" element={<Repo />}></Route>
    </Routes>
  )
}