import { Link } from "react-router-dom";
import countries from "../countries.json";
import { useParams } from "react-router-dom";

export default function CountryDetails() {

    const params = useParams()

    const foundCountry = countries.find(
        (currentCountry) => currentCountry.cca3 === params.cca3
    );

    // console.log(foundCountry);
    // console.log(params);

    return (
        <>
            <div className='col-7'>
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}><strong>Capital</strong></td>
                            {foundCountry.capital.map(capital => <td>{capital}</td>)}

                        </tr>
                        <tr>
                            <td><strong>Area</strong></td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Borders</strong></td>
                            <td>
                                <ul className="list-unstyled">
                                    {foundCountry.borders.map(border => <li><Link to={"/" + border}>
                                        {countries.find(currentCountry => currentCountry.cca3 === border).name.common}
                                    </Link></li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}