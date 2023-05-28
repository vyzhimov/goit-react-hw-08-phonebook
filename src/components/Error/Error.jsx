import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorImg } from './Error.styled';
import Warning from '../../images/Warning.png';

const Error = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorImg src={Warning} alt="warning" />
      <div>
        <p>Sorry there was an error. Please, reload the page! </p>
      </div>
    </ErrorWrapper>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
