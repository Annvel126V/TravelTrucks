import Navigation from "../../HeaderComponents/Navigation";
import Logo from "../../HeaderComponents/Logo";
const Header = () => {
  return (
    <header className="flex items-center justify-center bg-darkWhite  p-6 ">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
