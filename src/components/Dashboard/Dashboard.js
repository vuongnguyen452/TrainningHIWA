/**
 * Created by slinker on 3/18/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
//
import {cyan600, orange600, pink600, purple600} from "material-ui/styles/colors";
import Assessment from "material-ui/svg-icons/action/assessment";
import Face from "material-ui/svg-icons/action/face";
import ThumbUp from "material-ui/svg-icons/action/thumb-up";
import ShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import InfoBox from "./InfoBox";
//
class Dashboard extends Component {

    render () {
        const {
            totalProduct,
            totalProductInStore,
            totalSold,
            totalUser
        } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                        <InfoBox Icon={ShoppingCart}
                                 color={pink600}
                                 title="Tổng số lượng sản phẩm"
                                 value={totalProduct}
                        />
                    </div>


                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                        <InfoBox Icon={ThumbUp}
                                 color={cyan600}
                                 title="Tổng số lượng hàng trong kho"
                                 value={totalProductInStore}
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                        <InfoBox Icon={Assessment}
                                 color={purple600}
                                 title="Sảm phẩm đã bán"
                                 value={totalSold}
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                        <InfoBox Icon={Face}
                                 color={orange600}
                                 title="Số lượng thành viên"
                                 value={totalUser}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalProduct: state.admin.totalProduct,
        totalProductInStore: state.admin.totalProductInStore,
        totalSold: state.admin.totalSold,
        totalUser: state.admin.totalUser
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Dashboard);