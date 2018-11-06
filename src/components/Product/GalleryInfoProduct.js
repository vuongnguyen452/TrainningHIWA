/**
 * Created by Lotus on 4/7/17.
 */
import React,{Component} from 'react';
//
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import { ReactImageMagnify } from 'react-image-magnify';
//
import "./../../images/Product/free-shipping-btn.png";
import "./../../images/Product/Corsair230TBlack_Main_1200.png";
import "./../../images/HomePage/stars5_new.png";
//
require('./GalleryInfoProduct.scss');

class DetailOfProduct extends Component{
        constructor(props) {
            super(props);
            this.state = {
                selectedImgGallery: {0: "bdRed"},
                indexImg: 0,
                selectedTab: {1: "select-tab"}
            }
        }

    imgGalleryActive(name) {
        let selected = this.state.selectedImgGallery;
        selected = {};
        selected[name] = this.state.selectedImgGallery[name] === "bdRed" ? "" : "bdRed";
        this.setState({
            selectedImgGallery: selected,
            indexImg: name
        });
    }

    selectTab(name) {
        let selected = this.state.selectedTab;
        selected = {};
        selected[name] = this.state.selectedTab[name] === "select-tab" ? "" : "select-tab";
        this.setState({
            selectedTab: selected
        });
    }

    render() {
        const {
            imgList,
            infoList,
            labelProduct
        } = this.props;
        return (
            <div className="container-detail-product">
                <div className="container">
                    <div id="gallery-info-area" className="clearfix">
                        <div className="gallery-panel col-xs-12 col-lg-6">
                            <div className="case-panel col-xs-2 col-lg-3 clearfix">
                                {
                                    imgList.map((o,i) => {
                                        return (
                                            <a
                                                onClick={this.imgGalleryActive.bind(this, i)}
                                                key={i}
                                                className={`zoom-img ${this.state.selectedImgGallery[i]}`}
                                            >
                                                <img src={require(`./../../images/Product/${o.img}`)} alt=""/>
                                            </a>
                                        )
                                    })
                                }

                            </div>
                            <div className="col-xs-10 col-lg-9">
                                <div className="col-xs-9 image-product">
                                    <ReactImageMagnify {...{
                                        largeImage: {
                                            alt: 'Example description',
                                            src: require(`./../../images/Product/${imgList[this.state.indexImg].img2}`),
                                            width: 1200,
                                            height: 1200,
                                            backgroundColor: '#ffffff'
                                        },
                                        smallImage: {
                                            alt: 'Example description',
                                            src: require(`./../../images/Product/${imgList[this.state.indexImg].img}`),
                                            width: 300,
                                            height: 300
                                        },
                                        imageClassName: "small-image",
                                        enlargedImageContainerClassName: "large-image"
                                    }
                                                       }
                                    />
                                </div>
                                <div className="col-xs-3 label-product">
                                    <img src={require(`./../../images/Product/free-shipping-btn.png`)} alt=""/>
                                    <img src={require(`./../../images/Product/special-promo-btn.png`)} alt=""/>
                                    <div className="cpu-icon">
                                        <img src={require(`./../../images/Product/Intel_i7_175.png`)} alt=""/>
                                    </div>
                                    <div className="c360" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="title-area">
                                <h2>Intel B250 Blowout 2 Daily Special</h2>
                            </div>
                            <div className="reviews">
                                <div className="reviews-stars-5"
                                     style={{background: `url(${require(`./../../images/HomePage/stars5_new.png`)})`}}
                                />
                                <div> | </div>
                                <div>109 </div>
                                <div>customer reviews</div>
                            </div>
                            <div className="content-area">
                                <ul className="clearfix">
                                    <li onClick={this.selectTab.bind(this, "1")} className={this.state.selectedTab["1"]}>Base Components</li>
                                    <li onClick={this.selectTab.bind(this, "2")} className={this.state.selectedTab["2"]}>Software / Accessories</li>
                                    <li onClick={this.selectTab.bind(this, "3")} className={this.state.selectedTab["3"]}>Services / Support</li>
                                </ul>
                                <div className="container-contents">
                                    <div className="contents">
                                        <div className="mCSB_2">
                                            <div className="mCSB_2_container">
                                                <div className="s-gid-1">
                                                    {
                                                        infoList.map((o,i) => {
                                                            return (
                                                                <div key={i} className="s-oid-28">
                                                                    <div className={`space-box ${o.savef}`}/>
                                                                    <p>. </p>
                                                                    <p style={{fontWeight: 'bold'}}>{o.optionName} :: </p>
                                                                    <p>{o.infoOfOption}</p>
                                                                </div>
                                                            )}
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-fluid">
                                        <hr/>
                                        <div className="col-sm-3 social">
                                            <ul>
                                                <li className="icon-fb"/>
                                                <li className="icon-tw"/>
                                                <li className="icon-gg"/>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4"/>
                                        <div className="col-sm-5 money-area">
                                            <div className="ct">
                                                <div className="subtotal-title">Subtotal :</div>
                                                <div className="money subtotal">$929</div>
                                            </div>
                                            <div className="affirm-area ct">
                                                <div className="affirm-title">or as low as:</div>
                                                <div>
                                                    <span className="money affirm-subtotal">$82/mo</span>
                                                    <span className="money affirm-subtotal">
                                                        <img src={require("./../../images/Product/Affirm-Mockups-final.png")} alt=""/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
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

DetailOfProduct.defaultProps = {
    imgList: [
        {
            img: 'Corsair230TBlack_Main_400.png',
            img2: 'Corsair230TBlack_Main_1200.png',
        },
        {
            img: 'Corsair230T_Black_1200_02_sm.png',
            img2: 'Corsair230T_Black_1200_02.png',
        },
        {
            img: 'Corsair230TBlack_Main_400.png',
            img2: 'Corsair230TBlack_Main_1200.png',
        },
        {
            img: 'Corsair230T_Black_1200_02_sm.png',
            img2: 'Corsair230T_Black_1200_02.png',
        },
        {
            img: 'Corsair230TBlack_Main_400.png',
            img2: 'Corsair230TBlack_Main_1200.png',
        },
        {
            img: 'Corsair230T_Black_1200_02_sm.png',
            img2: 'Corsair230T_Black_1200_02.png',
        },
        {
            img: 'Corsair230TBlack_Main_400.png',
            img2: 'Corsair230TBlack_Main_1200.png',
        },
        {
            img: 'Corsair230T_Black_1200_02_sm.png',
            img2: 'Corsair230T_Black_1200_02.png',
        },
        {
            img: 'Corsair230TBlack_Main_400.png',
            img2: 'Corsair230TBlack_Main_1200.png',
        },
        {
            img: 'Corsair230T_Black_1200_02_sm.png',
            img2: 'Corsair230T_Black_1200_02.png',
        },

    ],
    infoList: [
        {
            savef: 'save-f',
            optionName: 'Operating System',
            infoOfOption: 'Windows 10 Home - (64-bit)'
        },
        {
            savef: 'save-f',
            optionName: 'Display',
            infoOfOption: 'MSI GP72 Leopard, 17.3" FHD, Anti-Glare 1920x1080 [KBL]'
        },
        {
            savef: '',
            optionName: 'Processor',
            infoOfOption: 'Intel® Core™ i7-7700HQ Mobile Processor (4x 2.8GHz/6MB L3 Cache) [GP72] [KBL]'
        },
        {
            savef: '',
            optionName: 'Memory',
            infoOfOption: '8GB [8GB x 1] 2133MHz DDR4 SO-DIMM Laptop Memory - Major Brand **FREE Upgrade to 16GB DDR4-2400**'
        },
        {
            savef: 'save-f',
            optionName: 'Video Card',
            infoOfOption: 'NVIDIA GeForce GTX 1050 TI - 2GB [GP72]'
        },
        {
            savef: '',
            optionName: 'Operating System',
            infoOfOption: 'Windows 10 Home - (64-bit)'
        },
        {
            savef: '',
            optionName: 'M.2 Solid State Drive',
            infoOfOption: 'None'
        },
        {
            savef: '',
            optionName: 'Primary Hard Drive',
            infoOfOption: '120 GB Kingston UV400 SATA-3 SSD -- Read: 550MB/s; Write: 490MB/s - Single Drive'
        },
        {
            savef: '',
            optionName: 'Primary Hard Drive',
            infoOfOption: '120 GB Kingston UV400 SATA-3 SSD -- Read: 550MB/s; Write: 490MB/s - Single Drive'
        },
        {
            savef: '',
            optionName: 'Primary Hard Drive',
            infoOfOption: '120 GB Kingston UV400 SATA-3 SSD -- Read: 550MB/s; Write: 490MB/s - Single Drive'
        },

    ],
    labelProduct: [
        {item1: "free-shipping-btn.png"},
        {item2: "special-promo-btn.png"},
        {item3: "Intel_i7_175.png"}
    ]
};

export default DetailOfProduct;