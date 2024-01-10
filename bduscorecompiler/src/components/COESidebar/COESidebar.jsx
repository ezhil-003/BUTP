import React from 'react'
import './COESidebar.css'
import Bdulogo from '../../assets/img/logo.gif'
import Dashboard from '../../assets/img/space_dashboard.svg'
import Subjects from '../../assets/img/subject.svg'
import Results from '../../assets/img/icon _results demographics_.svg'
import Help from '../../assets/img/help.png'
import Account from '../../assets/img/account_circle.svg'
import Settings from '../../assets/img/settings.svg'
import Logout from '../../assets/img/logout.png'
import { Link } from 'react-router-dom'
const COESidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <div className="logo">
                    <div></div>
                    <div><img src={Bdulogo} alt="" /></div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="sidebarlist">
                    <div className="lablelist-top" >
                        <div className="iconimage"><img src={Dashboard} alt="" /></div>
                        <div className="lablecontainer"><label htmlFor="Dashboard">Dashboard</label></div>
                    </div>
                    <Link to='/COE Subjects'>
                        <div className="lablelist">
                            <div className="iconimage">
                                <img src={Subjects} alt="" />
                            </div>
                            <div className="lablecontainer">
                                <label htmlFor="Subject">Subject</label>
                            </div>
                        </div>
                    </Link>
                    <Link to='/COE Results' >
                        <div className="lablelist">
                            <div className="iconimage">
                                <img src={Results} alt="" />
                            </div>
                            <div className="lablecontainer">
                                <label htmlFor="results" >Results</label>
                            </div>
                        </div>
                    </Link>
                    <div className="lablelist">
                        <div className="iconimage">
                            <img src={Help} alt="" />
                        </div>
                        <div className="lablecontainer">
                            <label htmlFor="About">About Us</label>
                        </div>
                    </div>
                    <div className="lablelist">
                        <div className="iconimage">
                            <img src={Account} alt="" />
                        </div>
                        <div className="lablecontainer">
                            <label htmlFor="Account">Account</label>
                        </div>
                    </div>
                    <div className="lablelist">
                        <div className="iconimage">
                            <img src={Settings} alt="" />
                        </div>
                        <div className="lablecontainer">
                            <label htmlFor="settings">Settings</label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="lablelist3" >
                    
                        <div className="iconimage3">
                            <img src={Logout} alt="" />
                        </div>
                        <div className="lablecontainer3">
                            <label htmlFor="logout">Logout</label>
                        </div>
                  
                </div>
            </div>

        </div>
    )
}

export default COESidebar