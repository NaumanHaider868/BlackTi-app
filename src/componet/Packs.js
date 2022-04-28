import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Packs extends Component {
  render() {
    return (
      <div>
            <div className="page-4">
  
                <div className="main-1">
                    <header className="header">
                        <p className="p">4:23</p>
                        <i className="fa fa-folder"></i>
                        <i className="fa fa-buysellads"></i>
                        <p className="p-2"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> <i className="fa fa-home" aria-hidden="true"></i></p>
                        <Link to='/'><p className="p-3"><i className="fa fa-arrow-left" aria-hidden="true"></i> Packs</p></Link>
                    </header>
                
                
                    <div className="main">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <p className="p-1">Notes</p>
                    </div>
                
                
                    <div className="sky">
                        <span><i className="fa fa-clock-o"></i> 7:30 Aam <i className="fa fa-users"></i> 1 Renters <i className="fa fa-calendar"></i> 09/01/2021-9/01/2021</span>
                    </div>
                
                    <div className="id">
                        <i className="fa fa-phone"></i>
                        <u><p>(917) 597-6556</p></u>
                        <p className="res">Res ID: 29B999</p>
                    </div>
                
                
                    <div className="fit">
                        <div className="button">
                        <button className="btn btn-1">Pack</button>
                        <button className="btn btn-2">Fit</button>
                        <button className="btn btn-3">Waiver</button>
                        </div>
                        <p className="graph">dana test</p>
                        <p className="graph-2">Jer Ski</p>
                        <p className="graph-3">Helmet</p>
                    </div>
                    <button className="conf">Confirmation Page</button>
                
                
                
                </div>
            </div>
      </div>
    )
  }
}
