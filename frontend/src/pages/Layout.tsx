import {Outlet} from "react-router";
import Navbar from "../organisms/Navbar.tsx";

const Layout = ({}) => {
    return (
        <div className={`w-full h-full`}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;