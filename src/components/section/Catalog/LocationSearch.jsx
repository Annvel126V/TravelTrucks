import { useState } from "react";
import { MapPin } from "lucide-react";

const LocationSearch = () => {
  const [location, setlocation] = useState("");

  const handleChange = (e) => {
    setlocation(e.target.value);
  };

  const suggestion = ["Kiev, Ukraine"];

  return (
    <div className="w-80">
      <label htmlFor="location" className="block text-gray-500 mb-3">
        Location
      </label>
      <div className="relative">
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleChange}
          className="w-full rounded-lg bg-gray-100 border-gray-300 text-gray-900 p-4 pl-10  focus:border-indigo-500 focus:ring-indigo-500"
        />
        <MapPin className="absolute left-3 top-4 text-gray-400" size={21} />
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
                  <MapPin className="text-gray-400" size={18} />
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
