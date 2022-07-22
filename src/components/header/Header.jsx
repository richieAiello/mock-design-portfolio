import SharedLogo from '../shared/SharedLogo';
import SharedLink from '../shared/SharedLink';

const Header = props => {
  return (
    <header
      className="container flex justify-between items-center mt-4 mb-8 
      md:mt-[2.125rem] md:mb-16 lg:mb-[4.125rem] "
    >
      <SharedLogo />
      <SharedLink dark />
    </header>
  );
};

export default Header;
