import SharedLogo from '../shared/SharedLogo';
import SharedLink from '../shared/SharedLink';

const Header = props => {
  return (
    <header className="container flex justify-between items-center mt-4 mb-8">
      <SharedLogo />
      <SharedLink dark />
    </header>
  );
};

export default Header;
