import React from 'react';
// import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <div>
            <div className="bg-gray-700 text-white font-bold flex p-4 justify-between px-6 flex h-[10vh]">
                <div className='Logo'> 
                    Logo
                </div>
                <div className='components'>
                    <ul className='flex justify-between space-x-8'>
                    {/* <Link to='/'>Go to Aboutpage</Link> */}
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                    </ul>            
                </div>
            </div>
        </div>
    );

}
export default Nav;