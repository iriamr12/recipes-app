import React, { useState } from 'react';

const RecipeFilter = ({ onFilterChange }) => {
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedDiet, setSelectedDiet] = useState("All");

    const countries = [
        "Afghan", "Albanian", "Algerian", "Andorran", "Angolan", "Antiguan and Barbudan",
        "Argentinian", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini",
        "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian",
        "Bosnian", "Herzegovinian", "Motswana", "Botswanan", "Brazilian", "Bruneian", "Bulgarian", "Burkinabe",
        "Burundian", "Ivorian", "Cape Verdian", "Cambodian", "Cameroonian", "Canadian", "Central African",
        "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Comorian", "Costa Rican",
        "Croatian", "Cuban", "Cypriot", "Czech", "Congolese", "Danish", "Djiboutian", "Dominican", "Ecuadorian",
        "Egyptian", "Salvadoran", "Equatorial Guinean", "Equatoguinean", "Eritrean", "Estonian", "Ethiopian",
        "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian",
        "Guatemalan", "Guinean", "Guinea-Bissauan", "Guyanese", "Haitian", "Holy See", "Honduran", "Hungarian",
        "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Italian", "Jamaican", "Japanese",
        "Jordanian", "Kazakhstani", "Kenyan", "Kiribati", "Kuwaiti", "Kyrgyzstani", "Laotian", "Latvian", "Lebanese",
        "Basotho", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourgish", "Malagasy", "Malawian",
        "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican",
        "Micronesian", "Moldovan", "Monégasque", "Monacan", "Mongolian", "Montenegrin", "Moroccan", "Mozambican",
        "Burmese", "Namibian", "Nauruan", "Nepalese", "Dutch", "New Zealander", "Nicaraguan", "Nigerien", "Nigerian",
        "North Korean", "North Macedonian", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian",
        "Papua New Guinean", "Paraguayan", "Peruvian", "Philippine", "Polish", "Portuguese", "Qatari", "Romanian", "Russian",
        "Rwandan", "Saint Kitts and Nevis", "Saint Lucian", "Saint Vincent and the Grenadines", "Samoan", "San Marino",
        "Sao Tome and Principe", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean",
        "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese", "Spanish",
        "Sri Lankan", "Sudanese", "Surinamese", "Swedish", "Swiss", "Syrian", "Tajik", "Tanzanian", "Thai", "Timorese",
        "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan",
        "Ukrainian", "Emirati", "British", "American", "Uruguayan", "Uzbekistani", "Ni-Vanuatu", "Venezuelan", "Vietnamese",
        "Yemeni", "Zambian", "Zimbabwean"
    ];

    // Function to handle country filter change
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        onFilterChange(event.target.value, selectedDiet);
    };

    // Function to handle diet filter change
    const handleDietChange = (event) => {
        setSelectedDiet(event.target.value);
        onFilterChange(selectedCountry, event.target.value);
    };

    return (
        <div className="filter-container">
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="All">All Countries</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            <select value={selectedDiet} onChange={handleDietChange}>
                <option value="All">All Diets</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
            </select>
        </div>
    );
};

export default RecipeFilter;
