import PropTypes from 'prop-types';

const Link = ({ href, icon }) => {
  return (
    <div className="col-2 link">
      <a href={href} target="_blank" className="text-light fs-1" rel="noreferrer">
        <i className={`bi ${icon}`}></i>
      </a>
    </div>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Link;
