import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {

    function dropDown(){
        document.querySelector('#submenu').classList.toggle('hidden');
        document.querySelector('#arrow').classList.toggle('rotate-0');
    }
    
    function Open(){
        document.querySelector('.sidebar').classList.toggle('left-[0.001px]');
    }

    return (
        <div >
            {/* Menu icon start for mobile */}
            <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={()=>{Open()}}>
                <i className='bi bi-filter-left px-2 bg-gray-900 rounded-md'></i>
            </span>
            {/* Menu icon end */}
            <div className='sidebar fixed top-0 bottom-0 left-[-390px] lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900'>
                <div className='text-gray-100 text-xl'>
                    <div className='p-2.5 mt-1 flex items-center'>
                        {/* Logo Header start */}
                        <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
                        <div className='font-bold text-gray-200 text-[15px] ml-3'>Admin Pannel</div>
                        <i className="bi bi-x-lg ml-20 cursor-pointer lg:hidden" onClick={()=>{Open()}}></i>
                        {/* Logo Header end */}
                    </div>
                    <hr className='my-2 text-gray-600 w-full' ></hr>
                </div>
                {/* Input Search start */}
                <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white'>
                    <i className='bi bi-search text-sm'></i>
                    <input type="text" className='text-[15px] ml-4 w-full bg-transparent focus:outline-none' placeholder='Search' />
                </div>
                {/* Input Search end */}
                {/* Sidebar component start */}
                <Link  to="/admin/Dashboard" className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <i className='bi bi-house-door-fill'></i>
                    <span className='text-[15px] ml-4 text-gray-200'>Dashboard</span>
                </Link>
                <Link to="/admin/Profile" className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <i className='bi bi-file-person'></i>
                    <span className='text-[15px] ml-4 text-gray-200'>Profile</span>
                </Link>

            <hr className='my-4 text-gray-600' />

                <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white' onClick={()=>{dropDown()}}>
                    <i className='bi bi-chat-left-text-fill'></i>
                    <div className='flex justify-between w-full items-center'>
                        <span className='text-[15px] ml-4 text-gray-200'>Chatbox</span>
                        <span className='text-sm rotate-180' id='arrow'>
                            <i className='bi bi-chevron-down'></i>
                        </span>
                    </div>
                </div>
                {/* submenu start */}
                <div className='text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 hidden' id='submenu'>
                    <h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>Social</h1>
                    <h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>Personal</h1>
                    <h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>Friends</h1>
                </div>
                {/* submenu end */}

                <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <i className='bi bi-box-arrow-in-right'></i>
                    <span className='text-[15px] ml-4 text-gray-200'>Logout</span>
                </div>

                {/* Sidebar component start */}
            </div>
        </div>
    );

}
export default AdminSideBar;