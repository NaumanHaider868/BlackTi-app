import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class  HomeDeliveries extends Component {
  render() {
    return (
      <div>
          <div className="main-1">
                <header className="header">
                    <p className="p">4:22</p>
                    <i className="fa fa-folder"></i>
                    <i className="fa fa-buysellads"></i>
                    <p className="p-2"><i className="fa fa-search" aria-hidden="true"></i> <i className="fa fa-home" aria-hidden="true"></i>
                </p>
                    <Link to='/'><p className="p-3"><i className="fa fa-arrow-left" aria-hidden="true"></i> Deliveries</p></Link>
                </header>


                <div className="first-div">
                    <div className="date">
                        <p><i className="fa fa-calendar" aria-hidden="true"></i> Select Date</p>
                    </div>
                    <div className="radio-button">
                        <div className="right-one">
                            <span>
                                <input type="radio" name="gender"/> Both <input type="radio" name="gender"/> AM <input type="radio" name="gender"/> PM
                            </span>
                        </div>
                        <p>
                            <span href="#">Date : </span> 9/1/2021
                        </p>
                    </div>

                    <div className="radio-button">
                        <div className="right-one">
                            <span>
                                <input type="radio" name="choose" /> My Van <input type="radio" name="choose" /> All <input type="radio" name="choose" /> Select Van
                            </span>
                        </div>
                        <p>
                            <span href="#">Form : </span>
                        </p>

                        <div class="parahraph">
                            <p>Sort by:</p> 
                            <p>All</p>
                            <span class="caret"></span> 
                            <p>Status:</p> 
                            <p>Pending</p>
                            <span class="caret"></span>
                        </div>
                    </div>
                </div>

                <div className="not-packed">

                    <span className="span-1">dana testy</span>

                    <p className="p-one">7:30 
                        <span className="span-2">AM</span>
                    </p>

                    <i className="fa fa-users" aria-hidden="true"> - <span className="span-3">1</span></i>

                    <div className="button-right">
                        <button className="btn">Not Packed</button>
                        <p className="P-TWO">Van : <span className="span-4">#5</span></p>
                    </div>

                </div>


                <div className="not-packed">

                    <span className="span-1">nadeem testy</span>
                    <p className="p-one">8:30 <span className="span-2">AM</span></p>
                    <i className="fa fa-users" aria-hidden="true"> - <span className="span-3">1</span></i>

                    <div className="button-right">
                        <button className="btn">Not Packed</button>
                        <p className="P-TWO">Van : <span className="span-4">#3</span></p>
                    </div>

                </div>


                <div className="not-packed">

                    <span className="span-1">sally smith 
                        <span class="wel">Alpine (aw)</span>
                    </span>

                    <p className="p-one">
                        10:00 <span className="span-2">AM</span>
                    </p>

                    <i className="fa fa-users" aria-hidden="true">
                         - <span className="span-3">1</span>
                    </i>

                    <div className="button-right">
                        <button className="btn">Not Packed</button>
                        <p className="P-TWO">
                            Van : <span className="span-4">#3</span>
                        </p>
                    </div>

                </div>

            </div>
      </div>
    )
  }
}
