import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/HomeScreen";
import Body from './../components/Body';
import ContatoScreen from "../screens/ContatoScreen";
import CadAlunoScreen from "../screens/CadAluno";   
import Login from "../screens/Login";


export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<ContatoScreen />} path="/contato" />   
                    <Route element={<CadAlunoScreen />} path="/teste"/>      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}   

