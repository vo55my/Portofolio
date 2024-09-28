import ModeToggle from './ModeToggle';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">
        <a className="navbar-brand text-light fw-bold" href="#">
          Portofolio
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;