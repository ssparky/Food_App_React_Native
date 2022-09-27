import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import config from '../src/styles/config';

const GroupImage = function GroupImage({ width, height, style }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 640 512">
      <Path fill={config.primaryTextColor} d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
    </Svg>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

GroupImage.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

GroupImage.defaultProps = {
  style: {},
};

export default GroupImage;
