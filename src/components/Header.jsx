import NavItem from './NavItem';

const Header = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand bg-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav text-center">
          <NavItem href="#page/slide1" icon="bi-house-fill" label="Home" />
          <NavItem href="#page/slide2" icon="bi bi-info-square-fill" label="About" />
          <NavItem href="#page/slide3" icon="bi bi-person-square" label="Contact" />
        </ul>
      </div>
    </nav>
  );
}

export default Header;