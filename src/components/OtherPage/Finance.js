/**
 * Created by situan on 09/04/2017.
 */
import React, {Component} from 'react';
import {
    Image
} from 'react-bootstrap';
require('./Finance.scss');

class Finance extends Component {
    render() {
        return (
            <div className="finance">
                <div className="block text-center finance_img1"
                     style={{backgroundImage: `url(${require(`./../../images/OtherPage/Finance/Finance_LP_1-1.jpg`)})`}}
                >
                </div>
                <div className="block text-center attachment"
                     style={{backgroundImage: `url(${require(`./../../images/OtherPage/Finance/Finance_LP_2-2.jpg`)})`}}
                >
                    <div className="description">
                        <img src={require("./../../images/OtherPage/Finance/Finance_LP_4Step.png")}/>
                    </div>
                </div>
                <div className="block text-center part3"
                     style={{backgroundImage: `url(${require(`./../../images/OtherPage/Finance/bg.jpg`)})`}}
                >
                    <div className="description1">
                        <p>
                            There are no hidden fees, no gimmicks, no catches. Simple select "Checkout with Affirm"
                            from
                            your shopping cart, and you will just need to take a few moments to fill out some
                            information
                            for a real-time decision. Checking your eligibility and terms won't affect your credit
                            score.
                            Qualified customers will have the option to choose from 3, 6, or 12 month financing
                            terms*,
                            with each term clearly showing your monthly payment.
                            <br/><br/>
                        </p>
                        <h5>
                            We are confident that you'll find Affirm to be a safe, easy, secure financing
                            option.
                        </h5>
                        <br/>
                        <p>
                            *Rates between 10-30% APR based on credit. Qualified applicants may choose between 3-,
                            6-, or
                            12-month terms on purchase of $100.00 or more.
                            <br/>
                            For purchases between $50.00-$99.99, 3- or 6-month terms are available.
                            <br/>
                            For purchases under $50.00, a 30-day term is available. Previous purchases are
                            ineligible for offer. Offer is subject to change at any time.
                            <br/>
                            Affirm loans are made by Cross River Bank, a New Jersey-chartered bank, Member FDIC.
                        </p>
                    </div>
                </div>
                <div className="block text-center attachment">
                    <div className="iframe_utube">
                        <iframe src="https://www.youtube.com/embed/Jab8Uu3uwr4?rel=0" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Finance;