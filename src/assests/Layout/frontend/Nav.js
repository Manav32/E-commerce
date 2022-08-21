import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <div>
            <div className="bg-gray-700 text-white font-bold flex justify-end lg:justify-between px-6 h-[10vh] min-w-100vw ">
                <div className='Logo hidden lg:block self-center'> 
                    Logo
                </div>
                <div className='components flex w-[calc(100vw-340px)] justify-end px-1 m-3'>
                                        {/* components */}
                        <div className='component text-white items-center flex-row m-1 rounded flex duration-300 list-none space-x-10'>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/Collection"><li>Collection</li></Link>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/register"><li>Register</li></Link>
                        </div>            

                </div>
            </div>
        </div>
    );

}
export default Nav;