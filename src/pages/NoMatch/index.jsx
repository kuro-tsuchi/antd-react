import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string
};

const defaultProps = {
    title: '页面去火星了！！！'
};

class NoMatch extends React.Component {
    render() {
        let {title} = this.props;

        return <div className="bms-nomatch">{title}</div>;
    }
}

NoMatch.propTypes = propTypes;
NoMatch.defaultProps = defaultProps;

export default NoMatch;
