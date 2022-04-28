import React from 'react'
import { Link } from "react-router-dom";


function DashBoard() {
    
  return (  
    <div>
        <div className="page-1">
                <div className="main-1">
                    <header className="header">
                        <p className="p">4:21</p>
                        <i className="fa fa-folder"></i>
                        <i className="fa fa-buysellads"></i>
                        <p className="p-2">Sync</p>
                        <p className="p-3">BTMobile</p>
                    </header>
                    


                    <div className="sec-1">
                        <div className="container-fluid">
                            <div className="pack">
                                <Link to="/packs">
                                    <div className="box-1" >
                                        <div className="play">
                                        <i className="fa fa-archive" aria-hidden="true"></i>
                                        <p>Pack</p>
                                        </div>
                                    </div>
                                </Link>
                                    
                                <Link to='/HomeDeliveries'>
                                    <div className="box-2">
                                        <div className="play">
                                            <a href=''><i className="fa fa-truck" aria-hidden="true"></i></a>
                                            <p>Deliveries</p>
                                        </div>
                                    </div>
                                </Link>
                                    
                            </div>
                        </div>


                        <div className="container-fluid">
                            <div className="pack pack-2">
                                <Link to='/Renters'>
                                        <div className="box-1">
                                            <div className="play">
                                            <i className="fa fa-buysellads"></i>
                                            <p>Return</p>
                                            </div>
                                        </div>
                                </Link>
                                        
                                <Link to='/InventoryManagement'>
                                    <div className="box-2">
                                        <div className="play">
                                        <i className="fa fa-volume-up" aria-hidden="true"></i>
                                        <p>Inventory Mangement</p>
                                        </div>
                                    </div>
                                </Link>
                                    
                            </div>
                        </div>


                        <div className="container-fluid">
                            <div className="pack pack-2">
                                
                                    <div className="box-1">
                                        <div className="play">
                                        <p>Tranfer Gear</p>
                                        </div>
                                    </div>
                                
                                <Link to='/InventoryCount'>
                                    <div className="box-2">
                                        <div className="play">
                                        <p>Inventory Count</p>
                                        </div>
                                    </div>
                                </Link>
                                    
                            </div>
                            <div className="logout-div">
                                <div className="main-logout">
                                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                                    <p>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DashBoard


