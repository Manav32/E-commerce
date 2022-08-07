import React from 'react';
import user from'../../images/user.png'
// import {Link} from 'react-router-dom';

const SideBar = () => {
    
    return (
        <div className='Sidebar bg-gray-700 text-white w-[10%] lg:w-[25%] flex flex-col justify-between p-4 h-[90vh]'>
            {/* SideBar Login pic with details menu */}
            <div className='loginDetails flex flex-col justify-center items-center h-1/4 w-full space-y-4'>
                <div className='w-2/6'>
                    <img src={user} alt='User' />
                </div>
                <div>Manav</div>
            </div>
            {/* Sidebar menu contains sidebar details */}
            <div className='SideBarDetails h-3/4 space-y-8 font-mono text-gray-400 text-lg text-left w-2/3 p-10'>
                <div className='coreItem space-y-4'>
                    <div className='Header text-left text-sm font-bold'>Core</div>
                    <div className='Content mx-4'>Dashboard</div>
                </div>
                <div className='coreItem space-y-4'>
                    <div className='Header text-left text-sm font-bold'>Interface</div>
                    <div className='Content flex justify-between mx-4'>
                        <div className='desc'>Layout</div>
                        <div className='arrow'> {'>'} </div>
                    </div>
                    <div className='Content flex justify-between mx-4'>
                        <div className='desc'>Pages</div>
                        <div className='arrow'> {'>'} </div>
                    </div>

                </div>
                <div className='coreItem space-y-4'>
                    <div className='Header text-left text-sm font-bold'>Addons</div>
                    <div className='Content mx-4'>Charts</div>
                    <div className='Content mx-4'>Tables</div>
                </div>
            </div>
        </div>
    );

}
export default SideBar;