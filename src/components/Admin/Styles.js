/**
 * Created by slinker on 3/18/17.
 */
import {grey500, white, blue600, blue500} from "material-ui/styles/colors";
import {spacing, typography} from "material-ui/styles";

const LoginPageStyle = {
    loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    paper: {
        padding: 20,
        overflow: 'auto'
    },
    buttonsDiv: {
        textAlign: 'center',
        padding: 10
    },
    flatButton: {
        color: grey500
    },
    checkRemember: {
        style: {
            float: 'left',
            maxWidth: 180,
            paddingTop: 5
        },
        labelStyle: {
            color: grey500
        },
        iconStyle: {
            color: grey500,
            borderColor: grey500,
            fill: grey500
        }
    },
    loginBtn: {
        float: 'right'
    },
    btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
    },
    btnFacebook: {
        background: '#4f81e9'
    },
    btnGoogle: {
        background: '#e14441'
    },
    btnSpan: {
        marginLeft: 5
    }
};

const LeftDrawerStyle = {
    logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: blue600,
        paddingLeft: 40,
        height: 56,
    },
    menuItem: {
        color: white,
        fontSize: 14
    },
    avatar: {
        div: {
            padding: '15px 0 20px 15px',
            // backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
            height: 80
        },
        icon: {
            float: 'left',
            display: 'block',
            marginRight: 15,
            boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
        },
        span: {
            paddingTop: 12,
            display: 'block',
            color: 'white',
            fontWeight: 300,
            textShadow: '1px 1px #444'
        }
    }
};

const SearchBoxStyle = {
    iconButton: {
        float: 'left',
        paddingTop: 8
    },
    textField: {
        color: white,
        backgroundColor: blue500,
        borderRadius: 2,
        height: 35
    },
    inputStyle: {
        color: white,
        paddingLeft: 5
    },
    hintStyle: {
        height: 16,
        paddingLeft: 5,
        color: white
    }
};

export {
    LoginPageStyle,
    LeftDrawerStyle,
    SearchBoxStyle
}