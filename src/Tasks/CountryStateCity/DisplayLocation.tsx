import React, { useState } from "react";
import { City, Country, State } from "./LocationTypes";
import { Locations } from "./Location";

const DisplayLocation: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = Locations.find((c) => c.id === Number(event.target.value));
    setSelectedCountry(country || null);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedCountry) {
      const states =
        selectedCountry.states.find(
          (s) => s.id === Number(event.target.value)
        ) || null;
      setSelectedState(states);
      setSelectedCity(null);
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(selectedState) {
        const city = selectedState.cities.find((c) => c.id === Number(event.target.value))
        setSelectedCity(city || null)
    }
  }

  return (
    <div>
      <h1>Display Countries, States and Cities</h1>
      <hr />
      &nbsp;&nbsp;
      <select onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Locations.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      {selectedCountry && (
        <select onChange={handleStateChange}>
          <option value="">Select State</option>
          {selectedCountry.states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      )}
      &nbsp;&nbsp;&nbsp;
      {selectedState && (
        <select onChange={handleCityChange}>
          <option value="">Select City</option>
          {selectedState.cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      )}
      {selectedCountry && selectedState && selectedCity && (
        <p>
          You selected:{" "}
          <b>
            {selectedCountry.name} → {selectedState.name} → {selectedCity.name}
          </b>
        </p>
      )}
    </div>
  );
};

export default DisplayLocation;
