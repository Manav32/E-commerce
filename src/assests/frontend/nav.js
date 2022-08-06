import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <div>
            <div className="bg-gray-700 text-white font-bold flex p-4 justify-between">
                <div className='Logo'> 
                    Logo
                </div>
                <div className='components'>
                    <ul className='flex justify-between space-x-8'>
                    <Link to='/'>Go to Aboutpage</Link>
                    </ul>            
                </div>
            </div>
        </div>
    );

}
export default Nav;