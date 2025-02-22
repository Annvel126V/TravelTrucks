import { useState } from "react";
import Icon from "../../Icon/Icon";

const LocationSearch = () => {
  const [location, setlocation] = useState("");

  const handleChange = (e) => {
    setlocation(e.target.value);
  };

  const suggestion = ["Kiev, Ukraine"];

  return (
    <div className="w-90 mb-10 ">
      <label htmlFor="location" className="block text-gray  mb-3">
        Location
      </label>
      <div className="relative ">
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleChange}
          className=" rounded-lg bg-darkWhite  gap-3 text-gray p-4 pl-12 "
        />
        <span className="absolute left-[20px] top-[19px] hidden opacity-100 peer-focus:opacity-0 md:block">
          <Icon id="map" w={20} h={20} className="fill-gray" />
        </span>
        {location && (
          <div className="absolute top-12 left-0 right-0 rounded-lg ">
            {suggestion
              .filter((suggestion) =>
                suggestion
                  .toLocaleLowerCase()
                  .includes(location.toLocaleLowerCase())
              )
              .map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 flex items-center gap-2 cursor-pointer"
                  onClick={() => setlocation(suggestion)}
                >
                  <Icon id="map" w={20} h={20} className="fill-black" />
                  <span>{suggestion}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
