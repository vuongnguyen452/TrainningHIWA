/**
 * Created by slinker on 3/27/17.
 */
import React, {Component} from "react";
//
import {white} from "material-ui/styles/colors";
import Paper from "material-ui/Paper";

import {InfoBoxStyle as styles} from "./Styles";

class InfoBox extends Component {

    render() {
        const {title, value, Icon} = this.props;

        return (
            <Paper>
                <span style={styles.iconSpan}>
                    <Icon
                        color={white}
                        style={styles.icon}
                    />
                </span>
                <div style={styles.content}>
                    <span style={styles.text}>{title}</span>
                    <span style={styles.number}>{value}</span>
                </div>
            </Paper>
        )
    }
}

export default InfoBox;