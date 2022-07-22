import SharedLogo from '../shared/SharedLogo';
import SharedLink from '../shared/SharedLink';

const Footer = props => {
  return (
    <footer className="container flex justify-between items-center pb-8 md:pb-14">
      <SharedLogo />
      <SharedLink dark />
    </footer>
  );
};
export default Footer;
