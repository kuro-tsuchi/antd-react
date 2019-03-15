/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:23:04
 * @Last Modified by:   wqjiao
 * @Last Modified time: 2019-03-15 18:23:04
 * @Description: NoMatch 未找到的页面
 */
import React from 'react';
import PropTypes from 'prop-types';
import $axios from '../../utils/axios';

const propTypes = {
    title: PropTypes.string
};

const defaultProps = {
    title: '页面去火星了！！！'
};

class NoMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $axios({
            method: 'GET',
            url: 'api/cs_trace',
            params: {
                a: 1,
                b: 2
            }
        })
            .then(e => {
                console.log('axios:', e);
            })
            .catch(e => {
                console.log('axios-error:', e);
            });
    }

    render() {
        let {title} = this.props;

        return <div className="bms-nomatch">{title}</div>;
    }
}

NoMatch.propTypes = propTypes;
NoMatch.defaultProps = defaultProps;

export default NoMatch;
