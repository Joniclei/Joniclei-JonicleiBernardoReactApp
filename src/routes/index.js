import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from './../components/Body';
import ContatoScreen from "../screens/ContatoScreen";
import TesteScreen from "../screens/TesteScreen";   

export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContatoScreen />} path="/contato" />   
                    <Route element={<TesteScreen />} path="/teste"/>      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}   

