import { Link } from "react-router-dom";
import countries from "../countries.json";
import { useParams } from "react-router-dom";

export default function CountryDetails() {

    const params = useParams()

    const foundCountry = countries.find(
        (currentCountry) => currentCountry.cca3 === params.cca3
    );

    console.log(foundCountry);

    return <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{ width: "30%" }}>Capital</td>
                    <td>Paris</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        551695 km
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            <li><Link to="/">teste</Link></li>

                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}