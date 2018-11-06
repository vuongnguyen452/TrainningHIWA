// React core module
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {Provider} from "react-redux";
// Reducer
import configureStore from "./stores/configureStore";
// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import muiTheme from "./config/material-ui-config";
// Import our component
import {
    App,
    Home,
    LoginPage,
    AdminPage,
    Dashboard,
    NewProduct,
    ListProduct,
    Control,
    FilterProduct,
    GalleryInfoProduct,
    ConfigStoreProduct,
    StoreProduct,
    //
    LoginPopup,
    ListCommodity,
    NewCommodity,
    UpdateProduct,
    //
    DailyDeals,
    BannerHome,
    CustomConfigurator,
    //
    GearStore,
    MyTest,
    Footer,
    Header,
    FeatureGaming,
    SortByPerformance,
    SliderPerformance,
    Easybuilder,
    SupportPage,
    MyAccount,
    NextDaySystem,
    Refurbish,
    Finance,
    Carts,
    Loginvuong,
    Vuong
} from './components';

import "../styles/index.scss";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/Vuong" component={Vuong}/>
                <Route path="/Loginvuong" component={Loginvuong}/>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/BannerHome" component={BannerHome}/>
                    <Route path="/daily-deals" component={DailyDeals}/>
                    <Route path="/Header" component={Header}/>
                    <Route path="/Footer" component={Footer}/>
                    <Route path="/FeatureGaming" component={FeatureGaming}/>
                    <Route path="/LoginPopup" component={LoginPopup}/>
                    <Route path="/admin/login" component={LoginPage}/>
                    <Route path="/Easybuilder" component={Easybuilder}/>
                    <Route path="/daily-deals" component={DailyDeals} />
                    <Route path="/Configurator" component={CustomConfigurator} />
                    <Route path="/gearstore" component={GearStore} />
                    <Route path="/FilterProduct" component={FilterProduct} />
                    <Route path="/MyTest" component={MyTest} />
                    <Route path="/SortByPerformance" component={SortByPerformance} />
                    <Route path="/SliderPerformance" component={SliderPerformance} />
                    <Route path="/support" component={SupportPage} />
                    <Route path="/MyAccount" component={MyAccount} />
                    <Route path="/NextDaySystem" component={NextDaySystem} />
                    <Route path="/Refurbish" component={Refurbish} />
                    <Route path="/finance" component={Finance} />
                    <Route path="/GalleryInfoProduct" component={GalleryInfoProduct} />
                    <Route path="/Carts" component={Carts}/>
                    <Route path="/ConfigStoreProduct" component={ConfigStoreProduct}/>
                    <Route path="/StoreProduct" component={StoreProduct}/>
                </Route>
                <Route path="/admin" component={AdminPage}>
                    <IndexRoute component={Dashboard}/>
                    <Route path="/admin/dashboard" component={Dashboard}/>
                    <Route path="/admin/product/newProduct" component={NewProduct}/>
                    <Route path="/admin/product/listProduct" component={ListProduct}/>
                    <Route path="/admin/product/updateProduct" component={UpdateProduct}/>
                    {/**/}
                    <Route path="/admin/commodity/listCommodity" component={ListCommodity}/>
                    <Route path="/admin/commodity/newCommodity" component={NewCommodity}/>
                    {/**/}
                    <Route path="/admin/control" component={Control}/>
                </Route>
            </Router>
        </Provider>
    </ MuiThemeProvider >,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
