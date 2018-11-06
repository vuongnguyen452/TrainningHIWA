/**
 * Created by slinker on 3/18/17.
 */
import React from "react";
import TextField from "material-ui/TextField";
import {white} from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import Search from "material-ui/svg-icons/action/search";
//
import {SearchBoxStyle as styles} from "./Styles";

const SearchBox = () => {

    return (
        <div>
            <IconButton style={styles.iconButton} >
                <Search color={white} />
            </IconButton>
            <TextField
                hintText="Search..."
                underlineShow={false}
                fullWidth={true}
                style={styles.textField}
                inputStyle={styles.inputStyle}
                hintStyle={styles.hintStyle}
            />
        </div>
    );
};

export default SearchBox;
