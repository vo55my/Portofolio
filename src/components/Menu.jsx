import NavItem from './NavItem';

const Menu = () => {
  return (
    <div className="navbar fixed-bottom navbar-expand header">
      <div className="container justify-content-center">
        <ul className="nav nav-pills text-center rounded">
          <NavItem href="#page/slide1" icon="bi-house-fill" label="Home" />
          <NavItem href="#page/slide2" icon="bi bi-info-square-fill" label="About" />
          <NavItem href="#page/slide3" icon="bi bi-person-square" label="Contact" />
        </ul>
      </div>
    </div>
  );
}

export default Menu;