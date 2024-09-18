import PropTypes from 'prop-types';

const Slide = ({ id, anchor, children }) => {
  return (
    <div className="slide" data-anchor={anchor} id={id}>
      {children}
    </div>
  );
}

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Slide;
