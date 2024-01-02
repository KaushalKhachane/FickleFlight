import React from 'react'
import logo from "../assets/Logo.svg";
import "./NavBar.css"
import bell from "../assets/bell.svg"
import profile from "../assets/profile.png"
export const NavBar = () => {
    return (
        <div style={{zIndex: '1', position: 'fixed', top: '0', width: '100%', backgroundColor: 'white', alignItems: 'center', height: '80px', paddingLeft: '80px', paddingRight: '80px', display: 'flex', justifyContent: 'space-between' }} >
            <div style={{}}>
                <img src={logo} alt="" />
            </div>
            <div style= {{display : 'flex', alignItems : 'center'}} className='nav-link'>
                <ul style={{ display: 'flex', gap: '30px' }}>
                    <li>Explore</li>
                    <li>Search</li>
                    <li>Hotels</li>
                    <li>Offers</li>
                </ul>
                <img style={{marginLeft: '33px', alignItems:'center'}} src={bell} alt="" />
                <img style={{marginLeft: '12px', alignItems:'center'}} src={profile} alt="" />
            </div>
        </div>
    )
}
