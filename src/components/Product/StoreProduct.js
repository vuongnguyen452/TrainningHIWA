/**
 * Created by Lotus on 4/18/17.
 */
import React, {Component} from 'react';

import {GalleryInfoProduct, ConfigStoreProduct} from './../../components';

class StoreProduct extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <GalleryInfoProduct/>
                <ConfigStoreProduct/>
            </div>
        )
    }
}

export default StoreProduct;