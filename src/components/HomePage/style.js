/**
 * Created by Lotus on 3/15/17.
 */
import imgBg from './../../images/HomePage/poly-bg.jpg';
import bullet from './../../images/HomePage/bullet.png';

const DailyDeals = {
    container: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imgBg})`,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    dailyDeals: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0px 5%'
    },
    dailyDealsBanner: {
    },
    bgListItem: {
        padding: '1% 0px'
    },
    bgRowItem: {
    },
    bgItem: {
        width: '20%',
        float: 'left'
    },
    listItem: {
        paddingLeft: 3,
        paddingRight: 3
    },
    itemTitle: {
        lineHeight: 1.4,
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#c21b2d',
        textAlign: 'center',
        margin: 0,
        height: 45
    },
    itemTitle2: {
        lineHeight: 1.4,
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        margin: 0,
        height: 45
    },
    bgStar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    listInfo: {
        listStyle: `url(${bullet})`,
        paddingLeft: 25,
        overflow: 'hidden',
        color: '#000'
    },
    listInfoDetailConfig: {
        listStyle: `url(${bullet})`,
        paddingLeft: 25,
        height: 150,
    },
    gridConfig: {
        padding: '1% 15px',
        backgroundColor: '#ddd',
        borderRadius: 4
    },
};

export {
    DailyDeals
};