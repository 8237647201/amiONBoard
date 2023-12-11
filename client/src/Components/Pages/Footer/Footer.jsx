import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import instagram from '../../Image/instagram.png';
import facebook from '../../Image/facebook.png';
import github from '../../Image/github.png';
import linkedin from '../../Image/linkedin.png';

const Shadow = {
    boxShadow: "1px 0px 10px #d2d2d2"
}

const logoDiv = {
    width: "20%"
}

const titleStyle = {
    color: "#ff9000"
}

const smText = {
    color: "#000"
}

const contactDiv = {
    width: "100px"
}

const linkStyle = {
    textDecoration: "none",
    color: "#000"
}

const Footer = () => {
    return (
        <div style={Shadow} className='d-flex flex-md-row flex-wrap align-items-center'>
            <div style={logoDiv} className='d-flex flex-col m-5'>
                <div>
                    <img style={{ borderRadius: "10px" }} src={logo} alt="logo" />
                </div>
                <div>
                    <span>&#169; 2023 Ankit Mishra.</span><br />
                    <span>All Rights Reserved.</span>
                </div>
            </div>
            <div className='d-flex flex-col m-5'>
                <div style={titleStyle} className='border-b-2'>
                    <h3>TEAM</h3>
                </div>
                <div style={smText} className='mt-2'>
                    <h5>Ankit Mishra</h5>
                    <h5>Dev 2</h5>
                    <h5>Dev 3</h5>
                </div>
            </div>
            <div className='d-flex flex-col m-5'>
                <div style={titleStyle} className='border-b-2'>
                    <h3>SPECIAL MENTIONS</h3>
                </div>
                <div style={smText} className='mt-2'>
                    <h5>Abc Def</h5>
                    <h5>Abc Def</h5>
                    <h5>Abc Def</h5>
                </div>
            </div>
            <div style={contactDiv} className='d-flex flex-col m-5'>
                <div style={titleStyle} className='border-b-2'>
                    <h3>CONTACT</h3>
                </div>
                <div className='d-flex flex-col mt-2'>
                    <div className='d-flex'>
                        <Link className='m-2'>
                            <img src={instagram} alt="instagram icon" />
                        </Link>
                        <Link className='m-2'>
                            <img src={facebook} alt="facebook icon" />
                        </Link>
                    </div>
                    <div style={titleStyle} className='d-flex'>
                        <Link className='m-2'>
                            <img src={github} alt="github icon" />
                        </Link>
                        <Link className='m-2'>
                            <img src={linkedin} alt="linkedin icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-col m-5'>
                <div style={titleStyle} className='border-b-2'>
                    <h3>LINKS</h3>
                </div>
                <div className='d-flex flex-col mt-2'>
                    <Link style={linkStyle} to='/home'><h5>HOME</h5></Link>
                    <Link style={linkStyle} to='/about'><h5>ABOUT</h5></Link>
                    <Link style={linkStyle} to='/profile'><h5>PROFILE</h5></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;