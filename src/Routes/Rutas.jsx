import { Route, Routes, Link} from "react-router-dom"
import { Home } from '../Home/Home'
import { Members } from '../Members/Members'
import { Menu } from '../shared/Menu/Menu'
import { Footer } from '../shared/Footer/Footer'
import { Shop } from '../Shop/Shop'
import { Carga } from '../Hook/Carga'
import { Discography } from "../Discography/Discography"
import { Fans } from "../Fans/Fans"


export function Rutas() {
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/integrantes" element={<Members />} />
                <Route path="/discography" element={<Discography />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/fans" element={<Fans />} />
                <Route path="/hooks" element={<Carga />} />
            </Routes>
        </>
    )
}