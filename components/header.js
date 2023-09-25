// components/Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="bg-white">
            <div className='flex'>
                <div className=''>
                    <div className='float-left'>
                        <img
                            src="/header-login.png"
                            alt="Header Image"
                            className="max-h-48 w-32 md:w-80 xl:w-[44vw] xl:max-h-[13vw]"
                        />
                    </div>

                    <img
                        src="/logo.png"
                        alt="Header Image"
                        className="mx-3 xl:mx-[56rem] h-16 mt-14 xl:mt-24"
                    />
                </div>

            </div>

        </header>
    );
};

export default Header;
