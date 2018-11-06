/**
 * Created by slinker on 3/18/17.
 */
import {grey500, cyan600, white} from "material-ui/styles/colors";
import {typography} from "material-ui/styles";

const ProgressStyle = {
    backDrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#000',
        opacity: 0.4,
        zIndex: 2000
    },
    progress: {
        margin: 'auto',
        position: 'fixed',
        display: 'block',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
};

const ListProductStyle = {
    subheader: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan600,
        color: white
    },
    editButton: {
        fill: grey500
    },
    floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
};


export {
    ProgressStyle,
    ListProductStyle
}