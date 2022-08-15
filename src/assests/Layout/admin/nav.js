import React from 'react';
// import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <div>
            <div className="bg-gray-700 text-white font-bold flex justify-end lg:justify-between px-6 h-[10vh] min-w-100vw lg:w-[calc(100vw-300px)] lg:mx-[300px]">
                {/* <div className='Logo lg:hidden'> 
                    Logo
                </div> */}
                <div className='components flex w-[calc(100vw-340px)] justify-end px-1 m-3'>
                                        {/* Search */}
                        <div className='Search bg-white items-center flex-row m-1 rounded flex duration-300 '>
                            <i className='bi bi-search px-2 bg-white text-black font-bolder rounded-md'></i>
                            <input type="search" placeholder='Search for..' className='px-3 font-light focus:outline-none bg-transparent text-black w-[120px] sm:w-[150px] lg:w-full '/>
                        </div>            
                                        {/* Account */}
                    <div className='Account p-2 flex flex-row items-center m-1'>
                    <i className="bi bi-person text-2xl"></i>
                    <i className="bi bi-caret-down-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Nav;