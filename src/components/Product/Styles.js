/**
 * Created by slinker on 3/18/17.
 */
import {grey400, grey500, cyan600, white} from "material-ui/styles/colors";
import {typography} from "material-ui/styles";

const NewProductStyle = {
    toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    buttons: {
        marginTop: 30,
        float: 'right'
    },
    saveButton: {
        marginLeft: 5
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
    NewProductStyle,
    ListProductStyle
}