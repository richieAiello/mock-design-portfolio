import logo from '../../assets/logo.svg';

const Header = props => {
  return (
    <header className="container flex justify-between items-center mt-4 mb-8">
      <img src={logo} alt="" className="h-12 w-12" />
      <a
        href="#"
        className="text-white bg-black rounded-full font-bold py-2 px-7
       text-[0.875rem] leading-[1.75rem] inline-block duration-[400ms]
       cursor-pointer hover:bg-blue focus:bg-blue"
      >
        Free Consultation
      </a>
    </header>
  );
};

export default Header;
