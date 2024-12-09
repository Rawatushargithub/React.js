import React from "react";
import { Link , NavLink } from "react-router-dom"
//link and navlink is came from react-router-dom , they both are same but navlink gave more features 
//link is used in replace of "a" tag becoz when "a" tag is used then the whole page get refresh and in react we don't have the concept of refresh it just add the element in DOM 
//if the page is again reloading then react kisi kamm ka nhi ha that's why we use Link tag
//<Link to="/"> <Link/>

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        // for doing colour highlighting when user is in home and want to go to contact or any other route , we used callback function css
                                        // when we take navlink then we have the access of a variable isActive we can use this variable for checking whether we are in home or not or any other routes also 
                                   //ASSIGNMENT : => Do the above thing in footer home and contact by yourself
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"     // due to navlink isActive can automatically fetch whether the user is in about or not 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        // for doing colour highlighting when user is in home and want to go to contact or any other route , we used callback function css
                                        // when we take navlink then we have the access of a variable isActive we can use this variable for checking whether we are in home or not or any other routes also 
                                   //ASSIGNMENT : => Do the above thing in footer home and contact by yourself
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"     // due to navlink isActive can automatically fetch whether the user is in about or not 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        // for doing colour highlighting when user is in home and want to go to contact or any other route , we used callback function css
                                        // when we take navlink then we have the access of a variable isActive we can use this variable for checking whether we are in home or not or any other routes also 
                                   //ASSIGNMENT : => Do the above thing in footer home and contact by yourself
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"     // due to navlink isActive can automatically fetch whether the user is in about or not 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        // for doing colour highlighting when user is in home and want to go to contact or any other route , we used callback function css
                                        // when we take navlink then we have the access of a variable isActive we can use this variable for checking whether we are in home or not or any other routes also 
                                   //ASSIGNMENT : => Do the above thing in footer home and contact by yourself
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

