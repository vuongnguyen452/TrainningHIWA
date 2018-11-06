/**
 * Created by slinker on 3/18/17.
 */
import React, {Component} from "react";
//Library
import CircularProgress from "material-ui/CircularProgress";
// import styles
import {ProgressStyle as style} from "./Styles";

const Progress = (props) => {
    return (
        <div>
            {props.isShow ?
                <div style={style.backDrop}>
                    {/*<PulseLoader />*/}
                    <CircularProgress
                        size={60}
                        thickness={5}
                        style={style.progress}
                    />
                </div> : null
            }
        </div>
    )
};

Progress.propTypes = {
    isShow: React.PropTypes.bool.isRequired
};

export default Progress;