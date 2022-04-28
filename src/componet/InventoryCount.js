import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class InventoryCount extends Component {
  render() {
    return (
        <div>
          <div className="equipiment">
                <div className="main-1">
                    <header className="header">
                        <p className="p">4:23</p>
                        <i className="fa fa-folder"></i>
                        <i className="fa fa-buysellads"></i>
                        <p className="p-2"> GO TO FIT <i class="fa fa-home" aria-hidden="true"></i></p>
                        <Link to='/'><p className="p-3"><i class="fa fa-arrow-left" aria-hidden="true"></i> dana test</p></Link>
                        <p id="id">Renter ID: 753461</p>
                    </header>
                    <div className="container-aws">
                        <p className="p-one">EQUIPIMENT HISTORY </p>
                        <hr className="horiz" />
                        <div className="row">
                            <div className="col-md-5">
                                <p id="pack">PACKAGE</p>
                                <p>OWN BOOT</p>
                                <p>ADD ONS</p>
                                <p>CLOTHING</p>
                            </div>
                            <div className="col-md-7">
                                <div className="jrski"> Jr Ski</div>
                                <input type="checkbox" name="" />
                                <div className="play">
                                    <div className="helmet"> Helmet </div>
                                    <div className="p">P</div>
                                    <div className="green">F</div>
                                </div>
                                <div className="empty"></div>
                            </div>
                        </div>
                        <div className="contant">
                            <div className="row-2">
                                <div className="col-md-3">
                                    <p>AGE</p>
                                    <div className="put"></div>
                                </div>
                                <div className="col-md-3">
                                    <p>GENDER</p>
                                    <div className="put"></div>
                                </div>
                                <div className="col-md-3">
                                    <p>HEIGHT</p>
                                    <div className="put"></div>
                                </div>
                                <div className="col-md-3">
                                    <p>WEIGHT</p>
                                    <div className="put"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-aws">
                        <div className="contant-2">
                            <div className="row-3">
                                <div className="col-md-4 col-sm-4">
                                    <p> SHOE SIZE</p>
                                    <div className="put-2"></div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p> SHOE TYPE</p>
                                    <div className="put-2"></div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p> ABILITY</p>
                                    <div className="put-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="row">
                                <div className="col-md-6 six">
                                    <div className="flow">
                                        <div className="fifty">54</div>
                                        <p>POLES</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flow-2">
                                        
                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                                                Select
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                                            </ul>
                                        </div>


                                        <div className="r-p">
                                            <p>P</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bot">
                        <div className="container-aws">
                            <p className="folk">PACK EQUIPIMENT</p>
                            <div className="row">
                                <div className="col-md-4 first-fort">
                                    <p> Boot </p>
                                    <div className="red-div red-1">Pack</div>
                                </div>
                                <div className="col-md-4">
                                    <p>Ski/<br/>Snowboard</p>
                                    <div className="red-div">Pack</div>
                                </div>
                                <div className="col-md-4 last-fort">
                                    <p>AddOns</p>
                                    <div className="red-plus"><i className="fa fa-plus"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-aws">
                        <div className="last-div">
                            <div className="div-1">DIN:N/A</div>
                            <div className="div-2">Sole Lenght:N/A</div>
                            <div className="div-3"> Skier Code: N/A</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
