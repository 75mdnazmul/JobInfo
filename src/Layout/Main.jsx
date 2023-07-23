import React from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            {/* <div className='container mx-auto'> */}
                <Outlet></Outlet>
            {/* </div> */}
        </div>
    );
};

export default Main;