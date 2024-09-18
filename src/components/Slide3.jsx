import Link from './Link';

const Slide3 = () => (
  <div className="container text-center text-light mb-5 pb-5">
    <p className="display-4 fw-bolder">Contact</p>
    <div className="row justify-content-center">
      <Link href="mailto:dhaifullahhilmy@gmail.com" icon="bi-envelope-fill" />
      <Link href="https://www.facebook.com/profile.php?id=100007533818546" icon="bi-facebook" />
      <Link href="https://github.com/vo55my" icon="bi-github" />
      <Link href="https://www.instagram.com/si_hilmy" icon="bi-instagram" />
      <Link href="https://www.linkedin.com/in/dhaifullah-hilmy/" icon="bi-instagram" />
      <p className="text-center pt-5">Created with 🔥 by Dhaifullah Hilmy</p>
    </div>
  </div>
);

export default Slide3;
