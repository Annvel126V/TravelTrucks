import logo from "../../../../../public/TravelTrucks.svg";

const Logo = () => {
  return (
    <div className="absolute left-12 flex h-3  items-baseline">
      <img src={logo} alt="TravelTrucks Logo" className="h-full w-auto" />
    </div>
  );
};

export default Logo;
