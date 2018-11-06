/**
 * Created by situan on 14/03/2017.
 */
import React, {Component} from 'react';

require('./../flickity.scss');
require('./styles.scss');

const Flickity = require('react-flickity-component')(React);

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    imagesLoaded: true,
    lazyLoad: true,
    bgLazyLoad: true
};

class BannerSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgList: props.imgList
        }
    }

    render() {
        const {
            imgList
        } = this.state;
        return (
            <div className="container-banner-slider clearfix">
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                >
                        {
                            imgList.map((o,i) => {
                                return (
                                    <div
                                        key={i} className="carousel-cell flickity-bg-lazyloaded"
                                        style={{backgroundImage: `url(${require(`./../../images/imgSlider/${o.img}`)})`}}
                                    />
                                )
                            })
                        }
                </Flickity>
            </div>
        )
    }
}

BannerSlider.defaultProps = {

};

export default BannerSlider;