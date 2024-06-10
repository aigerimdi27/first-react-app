import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog/Catalog";
import { Client } from "./pages/Client/Client";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Catalog/> }/>
        <Route path="/client" element={ <Client/> }/>

      </Routes>
    </>
  );
}

