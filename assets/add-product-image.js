import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const AddProductImage = function AddProductImage({ style, width, height }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 640 512">
      <Path fill="#fff" d="M40.7 16c4 .3 7.1 3.5 7.3 7.5L55.5 152h17.4L88.1 23.1c.5-4 3.9-7.1 7.9-7.1s7.5 3 7.9 7.1L119.1 152h17.3L144 23.5c.2-4 3.3-7.2 7.3-7.5s7.6 2.3 8.5 6.1l30.3 128.7c1.3 5.4 1.9 11 1.9 16.6 0 39.9-32.2 72.2-72 72.5V472c0 13.3-10.7 24-24 24s-24-10.7-24-24V240c-39.8-.3-72-32.6-72-72.5 0-5.6.6-11.2 1.9-16.6L32.2 22.2c.9-3.9 4.5-6.5 8.5-6.1zm572.4 1c2-.7 4-1 6.1-1 11.5 0 20.9 9.3 20.9 20.9V472c0 13.3-10.7 24-24 24s-24-10.7-24-24V320H544c-17.7 0-32-14.3-32-32V160c0-100.8 84.2-136.8 101.1-143zM221.2 143.6l-16.3-69.3C241.8 47.7 287.1 32 336 32c60.3 0 115 23.8 155.3 62.5-7 18.8-11.3 40.5-11.3 65.5v26.2C454.1 132.8 399.3 96 336 96c-44.9 0-85.5 18.5-114.6 48.3l-.2-.8zM336 480c-76.2 0-143.5-38.1-184-96.2v-117c8.5-2.8 16.6-6.7 24-11.4v.6c0 88.4 71.6 160 160 160 68.1 0 126.2-42.5 149.3-102.4 9.2 21 29.3 36.2 53.2 38.2C502.6 427.6 425.4 480 336 480zm128-224c0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128 128 57.3 128 128z" />
    </Svg>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

AddProductImage.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

AddProductImage.defaultProps = {
  style: {},
};

export default AddProductImage;