/**
 * Created by Vuong on 30/03/2017.
 */
import React ,{Component} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui';
import {
    Image
}
from 'react-bootstrap'
require('./Easybuilder.scss');
class Easybuilder extends Component{
    render (){
        return(
            <div className="container-easy-builder clearfix">
                <div className="container-paper clearfix">
                    <div className="container-body">
                        <div className="top_row">
                            <a href="" className="col_one">
                                <Image src={require('./../../images/HomePage/easy-builder-logo-large2-exclude.png')}/>
                            </a>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="select-panel">
                            <div className="title1">CHOOSE YOUR PROCESSOR?</div>
                            <div className="title2">SELECT ONE</div>
                        </div>
                        <div className="select-cpu">
                            <div className="col-xs-3">
                                <div className="cpu-radio">
                                    <input name="radio" id="radio-yes" type="radio"/>
                                </div>
                                <label className="full-right">
                                    <Image src={require('./../../images/HomePage/intel.png')}/>
                                </label>
                            </div>
                            <div className="col-xs-offset-2"/>
                            <div className="col-xs-3">
                                <div className="cpu-radio">
                                    <input name="radio" id="radio-no" type="radio"/>
                                </div>
                                <label>
                                    <Image src={require('./../../images/HomePage/amd.png')}/>
                                </label>
                            </div>
                        </div>
                        <div className="select-game">
                            <div className="select-title">
                                <div className="title1">WHAT GAMES DO YOU WANT TO PLAY?</div>
                                <div className="title2">CHECK ALL THAT APPLY</div>
                            </div>
                            <div className="row_">
                                <div className="description">
                                    Different games require different specs to perform at their highest quality. Let us help you by first choosing what games you like to play and we'll help you do the rest.
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_moba.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA" className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">MOBA Games</label>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_shooter.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA" className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">FPS Games</label>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_action.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA" className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">ACTION Games</label>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_RPG.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA" className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">RPG Games</label>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_startegy.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA"className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">CASUAL Games</label>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <hr className="ez"/>
                                    <label for="MOBA">
                                        <div className="image-frame">
                                            <Image src ={require('./../../images/HomePage/game-cover_sports.png')}/>
                                        </div>
                                    </label>
                                    <div className="class-game">
                                        <input type="checkbox" id ='MOBA' name="MOBA" className="checkbox"/>
                                        <label htmlFor="MOBA" className="ng">SPORTS Games</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select-stream">
                            <hr className="ez"/>
                            <div className="select-s">
                                <input type="checkbox" name="streaming" id="streaming" className="checkbox"/>
                                <label for="streaming">WILL YOU BE STREAMING?</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn-next-button">Next Step ></button>
                </div>
            </div>

        )
    }
}
export default Easybuilder;