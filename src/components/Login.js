/**
 * Created by slinker on 2/14/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    RaisedButton,
    TextField
} from 'material-ui';
import {Flex} from 'react-flex';
import {Button, Carousel, Checkbox, Radio, FormGroup} from 'react-bootstrap';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            accessCode: ''
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.connect = this.connect.bind(this);
    }

    connect() {
        this.props.connect({
            accessCode: this.state.accessCode
        }, function (err, result) {

        });
    }

    handlerChange(e) {
        this.setState({
            accessCode: e.target.value
        });
    }

    render() {
        return (

            <div style={{
                height: 300,
                width: 300,
                textAlign: 'center',
                display: 'inline-block',
                margin: "auto",
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                paddingTop: 40
            }}>

                <Flex
                    row
                    justifyContent='center'
                    alignContent='center'
                    alignItems='center'
                >
                    <TextField
                        floatingLabelText="Access Code"
                        onChange={this.handlerChange}
                    />
                    <br />
                    <RaisedButton
                        disabled={
                            !this.state.accessCode
                        }
                        label='CONNECT'
                        primary
                        onClick={this.connect}
                    />
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <form>
                        <Checkbox validationState="success">
                            Checkbox with success
                        </Checkbox>
                        <Radio validationState="warning">
                            Radio with warning
                        </Radio>
                        <Checkbox validationState="error">
                            Checkbox with error
                        </Checkbox>

                        {/* This requires React 15's <span>-less spaces to be exactly correct. */}
                        <FormGroup validationState="success">
                            <Checkbox inline>
                                Checkbox
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                with
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                success
                            </Checkbox>
                        </FormGroup>
                    </form>
                </Flex>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);