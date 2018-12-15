import React from "react";
import ForecastData from "../containers/ForecastData";
import SearchBar from "../containers/SearchBar";
import Geolocation from "../containers/Geolocation"

const App = () => (
    <div>
        <SearchBar/>
        <Geolocation/>
        <ForecastData/>
    </div>
);

export default App;
