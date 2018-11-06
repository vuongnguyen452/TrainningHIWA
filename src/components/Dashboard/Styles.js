/**
 * Created by slinker on 3/27/17.
 */

import {pink600, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

const InfoBoxStyle = {
    content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 90
    },
    number: {
        display: 'block',
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
    },
    text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
    },
    iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: pink600
    },
    icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

    }
};

export {
    InfoBoxStyle
}