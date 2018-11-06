/**
 * Created by Vuong on 14/04/2017.
 */
import React ,{Component} from 'react';
import {Row} from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';

import{FontIcon, FaInbox,FaVideoCamera, FaTags,FaCamera,FaUpload,FaComment,
    FaClockO
    ,FaUser,FaEnvelope,FaPhoneSquare,FaHome}  from "react-icons/lib/fa";
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
require('./Loginvuong.scss');
class Loginvuong extends Component{
    render(){
        return(
            <div className="fb-chat-conversation-container">
                <div className="border-right fb-chat-list clearfix">
                    <Tabs>
                        <Tab icon={<FaInbox className="muidocs-icon-action-home" />} />
                        <Tab icon={<ActionFlightTakeoff />} />
                        <Tab icon={<FaInbox className="material-icons">favorite</FaInbox>} />
                        <Tab icon={<FaInbox className="muidocs-icon-action-home" />} />
                        <Tab icon={<FaInbox className="muidocs-icon-action-home" />} />
                    </Tabs>
                    <input type="text"  className="form-control form-large txtSearch" placeholder="Search..."/>
                    <div className="col-md-12 conversation scroll-conversation event-scroll-visible">
                        <ul className="list-conversation">
                            <li className="border-bottom is-actived">
                                <div className="conversation-icon">
                                    <img src="//graph.facebook.com/754458324695901/picture?width=70&height=70"/>
                                </div>
                                <div className="conversation-content">
                                    <p className="bold-light conversation-snippet">Ti Gon</p>
                                    <div  className="conversation-snippet">
                                        <FaInbox/> <span> j</span>
                                    </div>
                                </div>
                                <div className="conversation-info">
                                    <div>
                                            <i><FaClockO/></i>
                                            <span>Hom nay 12:23 PM</span>
                                    </div>
                                    <div>
                                        <i className="iconss"><FaInbox/></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fb-conversation-message ps-relative">
                    <div className="inline_block border-right chat-box">
                        <div className="conversation-message-info border-bottom ws-nm">
                            <span className="name">Ti Gon</span>
                            <div className="dropdown btn-group fb-dropdown-list-customer ml5">
                                <button className="btn btn-default dropdown-toggle">•••</button>
                            </div>
                        </div>
                        <div className="conversation-tags border-bottom">
                            <a className="btn btn-default btn-xs">
                                <FaInbox/> Chinh sua nhan
                            </a>
                        </div>
                        <div className="list-message-container">

                        </div>
                        <div className="message-reply border-top">
                            <div className="textarea-reply">
                                <textarea className="sss" ></textarea>
                            </div>
                            {/*<div className="reply-attachment-form">*/}
                                {/*<Row>*/}
                                    {/*<Tabs className="ccc col-md-10">*/}
                                        {/*<Tab*/}
                                            {/*icon={<FaTags size="15px" className="material-icons"></FaTags>}*/}
                                            {/*label="Tim kiem"*/}
                                        {/*/>*/}
                                        {/*<Tab*/}
                                            {/*icon={<FaCamera  size="15px" className="material-icons"></FaCamera>}*/}
                                            {/*label="Chup anh"*/}
                                        {/*/>*/}
                                        {/*<Tab*/}
                                            {/*icon={<FaUpload size="15px" />}*/}
                                            {/*label="tai hinh"*/}
                                        {/*/>*/}
                                        {/*<Tab*/}
                                            {/*icon={<FaComment size="15px" />}*/}
                                            {/*label="tin nhan moi"*/}
                                        {/*/>*/}
                                    {/*</Tabs>*/}

                                    {/*<div className="col-md-2">*/}
                                        {/*<button className="btn btn-default dropdown-toggle dddd">Gui</button>*/}
                                    {/*</div>*/}
                                {/*</Row>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="inline_block participant-info-container overflow-auto">
                        <div className="conversation-message-info-1 border-bottom ws-nm clearfix">
                            <div className="participant-info-customer ws-nm text-left">
                                <div className="participant-info-customer-detail">
                                    <div className="mb10 clearfix">
                                        <a className="pull-right bold-light">Cập nhật thông tin</a>
                                    </div>
                                    <div className="clearfix">
                                        <div className="col-md-3 col-xs-12 p-none pull-left text-center">
                                            <div className="participant-avatar-customer text-center">
                                                <img className="img-max-width-100" src="//graph.facebook.com/754458324695901/picture?width=70&height=70"/>
                                            </div>
                                            <a className="view-detail-customer text-center">Xem chi tiết</a>
                                        </div>
                                        <div className="col-md-9 col-xs-12 p-l10 p-r10 pull-left">
                                            <ul className="participant-info-detail-customer">
                                                <li className="overflow-ellipsis"><FaUser/>Ti Gon </li>
                                                <li className="overflow-ellipsis"><FaEnvelope/>754458324695901@facebook.com </li>
                                                <li className="overflow-ellipsis"><FaPhoneSquare/>Chưa có thông tin </li>
                                                <li className="overflow-ellipsis"><FaHome/>Chưa có thông tin </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="participant-info-customer-comment overflow-auto border-top">
                                    <div className="comment-log-small">
                                        <div className="comment-log-small-header clearfix">
                                            <a href="" className="pull-right bold-light">Them ghi chu</a>
                                        </div>
                                        <div className="comment-log-small-body clearfix mt5">
                                            <p className="text-center bold-light ws-nm mb0">chua co ghi chu nao</p>
                                            <div className="comment-log-small-note">
                                                <p className="note text-center ws-nm mb0">Việc ghi chú giúp bạn lưu lại các chú ý trong quá trình tư vấn khách hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="participant-customer-orders ws-nm text-left">
                                    <div className="clearfix mb10 participant-customer-orders-header ps-relative">
                                        <span>Don hang</span>
                                    </div>
                                    <div className="participant-customer-orders-no-order clearfix">
                                        <p className="color-stateGray mt10 pl15" >Tạo đơn hàng nhanh, chuyển giao đơn hàng ngay lập tức tới nhà vận chuyển (Giao hàng nhanh, ViettelPost...)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Loginvuong;