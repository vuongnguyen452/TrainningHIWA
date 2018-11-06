/**
 * Created by slinker on 3/19/17.
 */
// Constants defined
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    commodities: [],
    imageBanner: [
        {img: 'slider1.jpg'},
        {img: 'slider2.jpg'},
        {img: 'slider3.jpg'},
        {img: 'slider4.jpg'},
        {img: 'slider5.jpg'},
        {img: 'slider6.jpg'},
        {img: 'slider7.jpg'},
        {img: 'slider8.jpg'},
        {img: 'slider9.jpg'},
        {img: 'slider10.gif'},
        {img: 'slider11.jpg'},
        {img: 'slider12.jpg'},
        {img: 'slider13.jpg'},
        {img: 'slider14.jpg'},
        {img: 'slider15.jpg'},
        {img: 'slider16.jpg'},
        {img: 'slider17.jpg'},
        {img: 'slider18.jpg'},
    ],
    imageBanner2: [
        {img: 'slider15.jpg'},
        {img: 'slider16.jpg'},
        {img: 'slider17.jpg'},
        {img: 'slider18.jpg'},
    ],
    Item: [
        {
            img: 'HomePage/400-element-1.png',
            title: 'Intel B250 Blowout Daily Special',
            star: 'HomePage/stars4-5_new.png',
            freeShipping: true,
            vrReady: false,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-GL702_05_1.png',
            title: 'ASUS ROG GL553VD-DS71 Laptop',
            star: 'HomePage/stars4-5_new.png',
            freeShipping: true,
            vrReady: false,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-phantom240-1-Main_.png',
            title: 'ASUS ROG GL553VD-DS71 Laptop',
            star: 'HomePage/stars5_new.png',
            freeShipping: true,
            vrReady: true,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-GL553_(13).png',
            title: 'Intel B250 Blowout Daily Special',
            star: 'HomePage/stars5_new.png',
            freeShipping: false,
            vrReady: false,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-VersaH35-1.png',
            title: 'ASUS ROG GL553VD-DS71 Laptop',
            star: 'HomePage/stars5_new.png',
            freeShipping: false,
            vrReady: true,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-VersaH35-1.png',
            title: 'ASUS ROG GL553VD-DS71 Laptop',
            star: 'HomePage/stars5_new.png',
            freeShipping: false,
            vrReady: true,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        },
        {
            img: 'HomePage/400-VersaH35-1.png',
            title: 'ASUS ROG GL553VD-DS71 Laptop',
            star: 'HomePage/stars5_new.png',
            freeShipping: false,
            vrReady: true,
            info1: 'Windows 10 Home',
            info2: 'Intel® Core™ i7-7700K Processor',
            info3: '8GB DDR4-3000 Memory',
            info4: 'NVIDIA GeForce GTX 1070 8GB',
            info5: 'MSI Z270 PC Mate MB',
            info6: '1TB HD',
            price: '$749',
            price2: '$800'
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LIST_PRODUCT_IN_STORE:
            return {
                ...state,
                commodities: action.payload
            };
    }
    return state;
}

