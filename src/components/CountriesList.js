import { Link } from "react-router-dom";
import countries from "../countries.json";
import { useState } from "react";


export default function CountriesList() {

    let [colors, setColors] = useState(" ");
    let [activeCountry, setActiveCountry] = useState(" ");
    function changeColors(event) {
        setActiveCountry(event.target.id)
        setColors()
    }



    return <div className="col-5" style={{ maxHeight: "90vh", overflowY: "scroll" }}>
        <div className="list-group">
            {countries.map((country) =>
                <Link onClick={(event) => changeColors(event)} style={{ background: country.cca3 === activeCountry && '#00AEED', color: country.cca3 === activeCountry && '#FFF' }} id={country.cca3} key={country.cca3} className="list-group-item list-group-item-action" to={country.cca3}> {country.flag} {country.name.common} </Link>
            )}
        </div>
    </div >
}