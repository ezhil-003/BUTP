import React from 'react'
import './COESidebar1.css'
import Bdulogo from '../../assets/img/logo.gif'
import Dashboard from '../../assets/img/space_dashboard.svg'
import Subjects from '../../assets/img/subject.svg'
import Results from '../../assets/img/icon _results demographics_.svg'
import Help from '../../assets/img/help.png'
import Account from'../../assets/img/account_circle.svg'
import Settings from '../../assets/img/settings.svg'
import Logout from '../../assets/img/logout.png'
import {Link} from 'react-router-dom'


const COESidebar1 = () => {
  return (
    <div className="sidebar1">
            <div>
                <div className="logo1">
                    <div></div>
                    <div><img src={Bdulogo} alt="" /></div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="sidebarlist1">
                    <Link to='/COEDashboard'>
                    <div className="lablelist1" >
                        <div className="side_icn_img">
                            <img src={Dashboard} alt="" />
                        </div>
                    </div>
                    </Link>
                    <Link to='/COE Subjects'>
                    <div className="lablelist1">
                        <div className="side_icn_img">
                            <img src={Subjects} alt="" />
                        </div> 
                    </div>
                    </Link>
                    <Link to='/COE Results'>
                    <div className="lablelist1">
                        <div className="side_icn_img">
                            <img src={Results} alt="" />
                        </div>   
                    </div>
                    </Link>
                    <div className="lablelist1">
                        <div className="side_icn_img"><img src={Help} alt="" /></div>
                        
                    </div>
                    <div className="lablelist1">
                        <div className="side_icn_img"><img src={Account} alt="" /></div>
                        
                    </div>
                    <div className="lablelist1">
                        <div className="side_icn_img"><img src={Settings} alt="" /></div>
                        
                    </div>
                </div>
            </div>
            <div className='logout-wrap'>
                <div className="lablelist2" >
                    <div className="iconimage2"><img src={Logout} alt="" /></div>
                </div>
            </div>
        </div>
  )
}

export default COESidebar1