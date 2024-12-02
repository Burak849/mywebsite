import React from 'react';

const Navbar = () => {
    return (
        <nav className="max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 sticky top-10 z-50 ml-auto mr-auto w-max px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40 bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-white">
            <a className="relative" href="#home">
                <span>
                    <span className="text-[--orange] absolute -left-5 top-0 max-lg:hidden">&lt;</span>
                    <div>
                        <span className="text-[--orange] absolute -left-5 top-0">&lt;</span>Home
                    </div>
                    <span className="text-[--orange] absolute top-0 -right-10 max-lg:hidden">/&gt;</span>
                </span>
            </a>
            <a className="relative opacity-20" href="#skills">
                <span>
                    <div>Skills</div>
                </span>
            </a>
            <a className="relative opacity-20" href="#projects">
                <span>
                    <div>Projects</div>
                </span>
            </a>
            <a className="relative opacity-20" href="#about-me">
                <span>
                    <div>About me</div>
                </span>
            </a>
            <a className="relative opacity-20" href="#contact">
                <span>
                    <div>Contact</div>
                </span>
            </a>
            <div className="language-switch-container">
                <input className="tgl tgl-style" id="toggle-language" type="checkbox" />
                <label
                    className="tgl-btn"
                    htmlFor="toggle-language"
                    data-tg-off="DE"
                    data-tg-on="EN"
                ></label>
            </div>
        </nav>
    );
};

export default Navbar;
