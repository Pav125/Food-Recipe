import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Detail from "./components/Detail"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </>
  )
}