import React from 'react';
import './style.scss';
import classNames from 'classnames';
import Header from 'header';
import utils from '../../resources/utils';
let params = {};
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHeaderMenu: false,
            params: {}
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        const departCityNameSearch = utils.getUrlParam('departCityNameSearch');
        const arriveCityNameSearch = utils.getUrlParam('arriveCityNameSearch');
        const classType = utils.getUrlParam('classType');

        const departAirportCode1 = utils.getUrlParam('departAirportCode1');
        const arriveAirportCode1 = utils.getUrlParam('arriveAirportCode1');
        const departAirportName1 = utils.getUrlParam('departAirportName1');
        const arriveAirportName1 = utils.getUrlParam('arriveAirportName1');
        const flightId1 = utils.getUrlParam('flightId1');
        const departTime1 = utils.getUrlParam('departTime1');
        const arriveTime1 = utils.getUrlParam('arriveTime1');
        const ticketPrice1 = utils.getUrlParam('ticketPrice1');
        const airportTax1 = utils.getUrlParam('airportTax1');
        const departTimeObj1 = new Date(parseInt(departTime1));
        const monthOfDepartTime1 = departTimeObj1.getMonth() + 1;
        const dateOfDepartTime1 = departTimeObj1.getDate();
        const weekOfDepartTime1 = departTimeObj1.getDay();
        const hoursOfDepartTime1 = departTimeObj1.getHours();
        const minutesOfDepartTime1 = departTimeObj1.getMinutes();
        const departHMStr1 = `${hoursOfDepartTime1}:${minutesOfDepartTime1}`;
        const departTimeStr1 = `${monthOfDepartTime1}月${dateOfDepartTime1}日(周${weekOfDepartTime1})`;
        const arriveTimeObj1 = new Date(parseInt(arriveTime1));
        const hoursOfArriveTime1 = arriveTimeObj1.getHours();
        const minutesOfArriveTime1 = arriveTimeObj1.getMinutes();
        const arriveHMStr1 = `${hoursOfArriveTime1}:${minutesOfArriveTime1}`;
        const duringHours1 = Math.round((parseInt(arriveTime1) - parseInt(departTime1)) / 1000 / 60 / 60);
        const duringMinutes1 = Math.round((parseInt(arriveTime1) - parseInt(departTime1)) / 1000 / 60 / 60);
        const duringTimeStr1 = duringHours1 + '小时' + duringMinutes1 + '分';

        const departAirportCode2 = utils.getUrlParam('departAirportCode2');
        const arriveAirportCode2 = utils.getUrlParam('arriveAirportCode2');
        const departAirportName2 = utils.getUrlParam('departAirportName2');
        const arriveAirportName2 = utils.getUrlParam('arriveAirportName2');
        const flightId2 = utils.getUrlParam('flightId2');
        const departTime2 = utils.getUrlParam('departTime2');
        const arriveTime2 = utils.getUrlParam('arriveTime2');
        const ticketPrice2 = utils.getUrlParam('ticketPrice2')  || 0;
        const airportTax2 = utils.getUrlParam('airportTax2') || 0;
        const departTimeObj2 = new Date(parseInt(departTime2));
        const monthOfDepartTime2 = departTimeObj2.getMonth() + 2;
        const dateOfDepartTime2 = departTimeObj2.getDate();
        const weekOfDepartTime2 = departTimeObj2.getDay();
        const hoursOfDepartTime2 = departTimeObj2.getHours();
        const minutesOfDepartTime2 = departTimeObj2.getMinutes();
        const departHMStr2 = `${hoursOfDepartTime2}:${minutesOfDepartTime2}`;
        const departTimeStr2 = `${monthOfDepartTime2}月${dateOfDepartTime2}日(周${weekOfDepartTime2})`;
        const arriveTimeObj2 = new Date(parseInt(arriveTime2));
        const hoursOfArriveTime2 = arriveTimeObj2.getHours();
        const minutesOfArriveTime2 = arriveTimeObj2.getMinutes();
        const arriveHMStr2 = `${hoursOfArriveTime2}:${minutesOfArriveTime2}`;
        const duringHours2 = Math.round((parseInt(arriveTime2) - parseInt(departTime2)) / 1000 / 60 / 60);
        const duringMinutes2 = Math.round((parseInt(arriveTime2) - parseInt(departTime2)) / 1000 / 60 / 60);
        const duringTimeStr2 = duringHours2 + '小时' + duringMinutes2 + '分';
        params = {
            departHMStr1: departHMStr1,
            departTimeStr1: departTimeStr1,
            arriveHMStr1: arriveHMStr1,
            departAirportCode1: departAirportCode1,
            arriveAirportCode1: arriveAirportCode1,
            departAirportName1: departAirportName1,
            arriveAirportName1: arriveAirportName1,
            duringTimeStr1: duringTimeStr1,
            flightId1: flightId1,
            departHMStr2: departHMStr2,
            departTimeStr2: departTimeStr2,
            arriveHMStr2: arriveHMStr2,
            departAirportCode2: departAirportCode2,
            arriveAirportCode2: arriveAirportCode2,
            departAirportName2: departAirportName2,
            arriveAirportName2: arriveAirportName2,
            duringTimeStr2: duringTimeStr2,
            flightId2: flightId2,
            departCityNameSearch: departCityNameSearch,
            arriveCityNameSearch: arriveCityNameSearch,
            classType: ['头等舱', '商务舱', '经济舱'][classType],
            airportTax: parseInt(airportTax1) + parseInt(airportTax2),
            ticketPrice: parseInt(ticketPrice1) + parseInt(ticketPrice2),
            totalPrice: parseInt(airportTax1) + parseInt(airportTax2) + parseInt(ticketPrice1) + parseInt(ticketPrice2)
        };
        this.setState({ params: params });
    }
    goToBook = () => {
        const query = `&departAirportCode1=${utils.getUrlParam('departAirportCode1')}&arriveAirportCode1=${utils.getUrlParam('arriveAirportCode1')}`
            + `&flightId1=${params.flightId1}&cabinClassId=${utils.getUrlParam('classType')}`
            + `&flightId2=${utils.getUrlParam('flightId2')}`
            + `&departCityCodeSearch=${utils.getUrlParam('departCityCodeSearch')}&arriveCityCodeSearch=${utils.getUrlParam('arriveCityCodeSearch')}`
            + `&flightType=${utils.getUrlParam('flightType')}`
            + `&ticketPrice=${params.ticketPrice}`
            + `&airportTax=${params.airportTax}`
            + `&totalPrice=${params.totalPrice}`;

        const path = {
            pathname: `/book`,
            search: query
        };
        this.props.history.push(path);
    }
    changeFlight = () => {
        this.props.history.goBack();
    }
    render() {
        classNames({});
        return (
            <div>
                <Header />
                <div className="info">
                    <i className="icon-like" />
                    已选航班！
                </div>
                <div className="detail-box">
                    <span className="depart-text">出发</span>
                    <span className="title-text">{this.state.params.flightId1}</span>
                    <span className="title-text">{this.state.params.classType}</span>
                    <span className="title-text">{this.state.params.departTimeStr1}</span>
                    <span className="title-text">{this.state.params.duringTimeStr1}</span>
                    <div className="flight-list">
                        <div className="time">
                            <span>{this.state.params.departHMStr1}</span>
                            <span>{this.state.params.arriveHMStr1}</span>
                        </div>
                        <div className="airport">
                            <span>{this.state.params.departAirportCode1}</span>
                            <span>{this.state.params.arriveAirportCode1}</span>
                        </div>
                        <div className="city-name">
                            <span>{this.state.params.departCityNameSearch + ' ' +
                            this.state.params.departAirportName1}</span>
                            <span>{this.state.params.arriveCityNameSearch + ' ' +
                            this.state.params.arriveAirportName1}</span>
                        </div>
                    </div>
                </div>
                {utils.getUrlParam('flightType') === '0' && <div className="detail-box">
                    <span className="return-text">回程</span>
                    <span className="title-text">{this.state.params.flightId2}</span>
                    <span className="title-text">{this.state.params.classType2}</span>
                    <span className="title-text">{this.state.params.departTimeStr2}</span>
                    <span className="title-text">{this.state.params.duringTimeStr2}</span>
                    <div className="flight-list">
                        <div className="time">
                            <span>{this.state.params.departHMStr2}</span>
                            <span>{this.state.params.arriveHMStr2}</span>
                        </div>
                        <div className="airport">
                            <span>{this.state.params.departAirportCode2}</span>
                            <span>{this.state.params.arriveAirportCode2}</span>
                        </div>
                        <div className="city-name">
                            <span>{this.state.params.arriveCityNameSearch + ' ' +
                            this.state.params.departAirportName2}</span>
                            <span>{this.state.params.departCityNameSearch + ' ' +
                            this.state.params.arriveAirportName2}</span>
                        </div>
                    </div>
                </div>
                }
                <div className="detail-box">
                    <div className="row1">
                        <span className="policy">提示</span>
                        {/* <span className="details">详情</span> */}
                    </div>
                    <div className="row2">
                        <i className="icon" />推荐航班
                    </div>
                    <ul className="row3">
                        <li>行李政策由航空公司规定</li>
                        <li>退票费用50元起</li>
                    </ul>
                </div>
                <div className="detail-box">
                    <span>还没决定好？</span>
                    <div className="change-flight" onClick={this.changeFlight}>更改航班</div>
                    <span className="remind">请注意，票价随时可能变动</span>
                </div>
                {/* <div className="insurance">
                    <span className="tit">保护您的航班</span>
                    <span className="status">为何不保护您的航班？</span>
                </div> */}
                {/* <div className="box insurance-box">
                    <i className="insurance-logo" />
                    <div>
                        <span className="column1">飞行事故伤害保险测试</span>
                        <span className="column2">飞行事故伤害保险测试</span>
                        <span className="column3">飞行事故伤害保险测试</span>
                        <span className="column4">飞行事故伤害保险测试</span>
                        <i className="icon-check" />
                    </div>
                </div> */}
                <div className="detail-box">
                    <div className="price-row style2">
                        <span>成人</span>
                        <span className="right">{'人民币 ' + this.state.params.totalPrice}元</span>
                    </div>
                    <div className="price-row style1">
                        <span>票价</span>
                        <span className="right">{'人民币 ' + this.state.params.ticketPrice}元</span>
                    </div>
                    <div className="price-row style1">
                        <span>{'税&服务费'}</span>
                        <span className="right">{'人民币 ' + this.state.params.airportTax}元</span>
                    </div>
                    <div className="price-row border style2">
                        <span>总价</span>
                        <span className="right">{'人民币 ' + this.state.params.totalPrice}元</span>
                    </div>
                    <div className="btn" onClick={this.goToBook}>确认</div>
                </div>
                <div className="footer">
                    <i className="flight-logo" />
                    <div className="member">祝你一路顺风！</div>
                </div>
            </div>
        );
    }
}
