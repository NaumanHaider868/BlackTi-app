import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Renters extends Component {
  render() {
    return (
      <div>
            <div className="main-1">
                <header className="header">
                    <p className="p">4:24</p>
                    <i className="fa fa-folder"></i>
                    <i className="fa fa-buysellads"></i>
                    <p className="p-2"><i className="fa fa-search" aria-hidden="true"></i> <i className="fa fa-home" aria-hidden="true"></i></p>
                    <Link to='/'><p className="p-3"><i className="fa fa-arrow-left" aria-hidden="true"></i> Returns</p></Link>
                </header>



                <div className="second-div">

                    <div className="date">
                        <p><i className="fa fa-calendar" aria-hidden="true"></i> Select Date</p>
                    </div>
                    
                    <div className="radio-button">
                        <div className="right-one">
                            <span className="r-o-s">11/1/2021</span>
                        </div>
                        <p><span href="#" className="span-a">Date : </span></p>
                    </div>

                    <div className="radio-button">
                        <div className="right-one-2">
                            <span><input type="checkbox" /> Search By Code</span>
                        </div>
                        <p><span href="#"><input type="checkbox" /> Scan Return : </span></p>

                        <div className="right-one">
                            <span><input type="radio" name="choose" /> My Van <input type="radio" name="choose" /> All </span>
                        </div>
                        <p><span href="#" className="f-span"> Find Returns Form : </span></p>

                        <div className="parahraph">
                            <p>Sort by:</p> <p>First Name</p><span className="caret"></span> <p>Status:</p> <p>Pending</p><span class="caret"></span>
                        </div>
                    </div>
                </div>


                <div className="container-aws">
                    <div className="partial">
                        <div className="row">
                            <div className="col-md-5">
                                <h4>dana faker</h4>
                                <p>2 Renters</p>
                                <button>PARTIAL RETURN</button>
                            </div>
                            <div className="col-md-7">
                                <h4>Bell tower (v)</h4>
                                <p>Room #:204</p>
                                <div className="for">
                                    Notes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-aws">
                    <div className="partial">
                        <div className="row">
                            <div className="col-md-5">
                                <h4>dana faker</h4>
                                <p>1 Renters</p>
                                <button class="btn btn-7">PENDING</button>
                            </div>
                            <div className="col-md-7">
                                <div className="for-2">
                                Notes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    </div>
    )
  }
}
