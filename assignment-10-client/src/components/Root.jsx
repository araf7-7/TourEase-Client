import Foot from "./Foot";

import Header from "./Header";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Root;