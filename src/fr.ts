const fr: { [key: string]: string } = {
    "AD": "Andorre",
    "AE": "Émirats arabes unis",
    "AF": "Afghanistan",
    "AG": "Antigua-et-Barbuda",
    "AL": "Albanie",
    "AM": "Arménie",
    "AO": "Angola",
    "AR": "Argentine",
    "AT": "Autriche",
    "AU": "Australie",
    "AZ": "Azerbaïdjan",
    "BA": "Bosnie-Herzégovine",
    "BB": "Barbade",
    "BD": "Bangladesh",
    "BE": "Belgique",
    "BF": "Burkina Faso",
    "BG": "Bulgarie",
    "BH": "Bahreïn",
    "BI": "Burundi",
    "BJ": "Bénin",
    "BM": "Bermudes",
    "BN": "Brunei",
    "BO": "Bolivie",
    "BR": "Brésil",
    "BS": "Bahamas",
    "BT": "Bhoutan",
    "BW": "Botswana",
    "BY": "Bélarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CD": "Congo (DR)",
    "CF": "République centrafricaine",
    "CG": "Congo",
    "CH": "Suisse",
    "CI": "Côte D'Ivoire",
    "CL": "Chili",
    "CM": "Cameroun",
    "CN": "Chine (République populaire)",
    "CO": "Colombie",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cap-Vert",
    "CY": "Chypre",
    "CZ": "Tchéquie",
    "DE": "Allemagne",
    "DJ": "Djibouti",
    "DK": "Danemark",
    "DM": "Dominique",
    "DO": "République dominicaine",
    "DZ": "Algérie",
    "EC": "Équateur",
    "EE": "Estonie",
    "EG": "Egypte",
    "ER": "Erythrée",
    "ES": "Espagne",
    "ET": "Ethiopie",
    "FI": "Finlande",
    "FJ": "Fidji",
    "FM": "Micronésie",
    "FR": "France",
    "GA": "Gabon",
    "GB": "Royaume-Uni",
    "GD": "Grenade",
    "GE": "Géorgie",
    "GH": "Ghana",
    "GL": "Groenland",
    "GM": "Gambie",
    "GN": "Guinée",
    "GQ": "Guinée équatoriale",
    "GR": "Grèce",
    "GT": "Guatemala",
    "GW": "Guinée-Bissau",
    "GY": "Guyane",
    "HK": "Hong-Kong",
    "HN": "Honduras",
    "HR": "Croatie",
    "HT": "Haïti",
    "HU": "Hongrie",
    "ID": "Indonésie",
    "IE": "Irlande",
    "IL": "Israël",
    "IN": "Inde",
    "IQ": "Irak",
    "IR": "Iran",
    "IS": "Islande",
    "IT": "Italie",
    "JM": "Jamaïque",
    "JO": "Jordanie",
    "JP": "Japon",
    "KE": "Kenya",
    "KG": "Kirghizistan",
    "KH": "Cambodge",
    "KI": "Kiribati",
    "KM": "Comores",
    "KN": "Saint-Christophe-et-Niévès",
    "KP": "Corée du Nord",
    "KR": "Corée du Sud",
    "KW": "Koweit",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Liban",
    "LC": "Sainte-Lucie",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Libéria",
    "LS": "Lesotho",
    "LT": "Lituanie",
    "LU": "Luxembourg",
    "LV": "Lettonie",
    "LY": "Libye",
    "MA": "Maroc",
    "MC": "Monaco",
    "MD": "Moldavie",
    "ME": "Monténégro",
    "MG": "Madagascar",
    "MK": "Macédoine du Nord",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolie",
    "MO": "Macao",
    "MR": "Mauritanie",
    "MT": "Malte",
    "MU": "Maurice",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexique",
    "MY": "Malaisie",
    "MZ": "Mozambique",
    "NA": "Namibie",
    "NE": "Niger",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Pays-Bas",
    "NO": "Norvège",
    "NP": "Népal",
    "NR": "Nauru",
    "NZ": "Nouvelle-Zélande",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Pérou",
    "PG": "Papouasie-Nouvelle-Guinée",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Pologne",
    "PR": "Puerto Rico",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RO": "Roumanie",
    "RS": "Serbie",
    "RU": "Russie",
    "RW": "Rwanda",
    "SA": "Arabie Saoudite",
    "SB": "Îles Salomon",
    "SC": "Seychelles",
    "SD": "Soudan",
    "SE": "Suède",
    "SG": "Singapour",
    "SI": "Slovénie",
    "SK": "Slovaquie",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Sénégal",
    "SO": "Somalie",
    "SR": "Suriname",
    "SS": "Sud-Soudan",
    "ST": "Sao Tomé et Principe",
    "SV": "El Salvador",
    "SY": "Syrie",
    "SZ": "Eswatini (Swaziland)",
    "TD": "Tchad",
    "TG": "Togo",
    "TH": "Thaïlande",
    "TJ": "Tadjikistan",
    "TL": "Timor-Leste",
    "TM": "Turkménistan",
    "TN": "Tunisie",
    "TO": "Tonga",
    "TR": "Turquie",
    "TT": "Trinité-et-Tobago",
    "TV": "Tuvalu",
    "TW": "Taïwan (République de Chine)",
    "TZ": "Tanzanie",
    "UA": "Ukraine",
    "UG": "Ouganda",
    "US": "États-Unis",
    "UY": "Uruguay",
    "UZ": "Ouzbékistan",
    "VA": "Cité du Vatican",
    "VC": "Saint-Vincent-et-les-Grenadines",
    "VE": "Venezuela",
    "VN": "Viêt-Nam",
    "VU": "Vanuatu",
    "WS": "Samoa",
    "YE": "Yémen",
    "ZA": "Afrique du Sud",
    "ZM": "Zambie",
    "ZW": "Zimbabwe"
};

export default fr;
