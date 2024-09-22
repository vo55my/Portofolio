import PropTypes from 'prop-types';

const NavItem = ({ href, icon, label }) => {
  return (
    <li className="nav-item px-2">
      <a className="nav-link" href={href}>
        <i className={`bi ${icon}`}></i>
        <p>{label}</p>
      </a>
    </li>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavItem;
