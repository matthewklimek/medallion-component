export const LicenseState = {
    NO_APPLY: "No Application",
    LICENSED: "Licensed",
    DENIED: "Denied",
    PENDING: "Pending",
    RENEW: "Renewal",
}

export const backgroundMap = {
    [LicenseState.NO_APPLY]: "bg-licenseState-noApply",
    [LicenseState.LICENSED]: "bg-licenseState-licensed",
    [LicenseState.DENIED]: "bg-licenseState-denied",
    [LicenseState.PENDING]: "bg-licenseState-pending",
    [LicenseState.RENEW]: "bg-licenseState-renew",
};

export const borderMap = {
    [LicenseState.NO_APPLY]: "border-licenseState-licensed",
    [LicenseState.LICENSED]: "border-licenseState-licensed",
    [LicenseState.DENIED]: "border-licenseState-denied",
    [LicenseState.PENDING]: "border-licenseState-pending",
    [LicenseState.RENEW]: "border-licenseState-renew",
};

export const actionMap = {
    [LicenseState.NO_APPLY]: "Apply",
    [LicenseState.LICENSED]: "",
    [LicenseState.DENIED]: "Re-apply",
    [LicenseState.PENDING]: "Check Status",
    [LicenseState.RENEW]: "Renew",
};





export const fillMap = {
    [LicenseState.NO_APPLY]: "#e2e8f0",
    [LicenseState.LICENSED]: "#80CAFF",
    [LicenseState.DENIED]: "#FF8888",
    [LicenseState.PENDING]: "#FCFE8E",
    [LicenseState.RENEW]: "#A7A5FE",

};


export const statesData = {
    Alabama: { stateName: 'Alabama', licensedState: LicenseState.NO_APPLY },
    Alaska: { stateName: 'Alaska', licensedState: LicenseState.NO_APPLY },
    Arizona: { stateName: 'Arizona', licensedState: LicenseState.DENIED },
    Arkansas: { stateName: 'Arkansas', licensedState: LicenseState.NO_APPLY },
    California: { stateName: 'California', licensedState: LicenseState.LICENSED },
    Colorado: { stateName: 'Colorado', licensedState: LicenseState.NO_APPLY },
    Connecticut: { stateName: 'Connecticut', licensedState: LicenseState.NO_APPLY },
    Delaware: { stateName: 'Delaware', licensedState: LicenseState.NO_APPLY },
    Florida: { stateName: 'Florida', licensedState: LicenseState.LICENSED },
    Georgia: { stateName: 'Georgia', licensedState: LicenseState.LICENSED },
    Hawaii: { stateName: 'Hawaii', licensedState: LicenseState.NO_APPLY },
    Idaho: { stateName: 'Idaho', licensedState: LicenseState.NO_APPLY },
    Illinois: { stateName: 'Illinois', licensedState: LicenseState.NO_APPLY },
    Indiana: { stateName: 'Indiana', licensedState: LicenseState.LICENSED },
    Iowa: { stateName: 'Iowa', licensedState: LicenseState.NO_APPLY },
    Kansas: { stateName: 'Kansas', licensedState: LicenseState.NO_APPLY },
    Kentucky: { stateName: 'Kentucky', licensedState: LicenseState.NO_APPLY },
    Louisiana: { stateName: 'Louisiana', licensedState: LicenseState.NO_APPLY },
    Maine: { stateName: 'Maine', licensedState: LicenseState.NO_APPLY },
    Maryland: { stateName: 'Maryland', licensedState: LicenseState.NO_APPLY },
    Massachusetts: { stateName: 'Massachusetts', licensedState: LicenseState.LICENSED },
    Michigan: { stateName: 'Michigan', licensedState: LicenseState.NO_APPLY },
    Minnesota: { stateName: 'Minnesota', licensedState: LicenseState.NO_APPLY },
    Mississippi: { stateName: 'Mississippi', licensedState: LicenseState.NO_APPLY },
    Missouri: { stateName: 'Missouri', licensedState: LicenseState.NO_APPLY },
    Montana: { stateName: 'Montana', licensedState: LicenseState.LICENSED },
    Nebraska: { stateName: 'Nebraska', licensedState: LicenseState.LICENSED },
    Nevada: { stateName: 'Nevada', licensedState: LicenseState.NO_APPLY },
    NewHampshire: { stateName: 'New Hampshire', licensedState: LicenseState.RENEW },
    NewJersey: { stateName: 'New Jersey', licensedState: LicenseState.LICENSED },
    NewMexico: { stateName: 'New Mexico', licensedState: LicenseState.NO_APPLY },
    NewYork: { stateName: 'New York', licensedState: LicenseState.NO_APPLY },
    NorthCarolina: { stateName: 'North Carolina', licensedState: LicenseState.NO_APPLY },
    NorthDakota: { stateName: 'North Dakota', licensedState: LicenseState.NO_APPLY },
    Ohio: { stateName: 'Ohio', licensedState: LicenseState.NO_APPLY },
    Oklahoma: { stateName: 'Oklahoma', licensedState: LicenseState.PENDING },
    Oregon: { stateName: 'Oregon', licensedState: LicenseState.RENEW },
    Pennsylvania: { stateName: 'Pennsylvania', licensedState: LicenseState.NO_APPLY },
    RhodeIsland: { stateName: 'Rhode Island', licensedState: LicenseState.LICENSED },
    SouthCarolina: { stateName: 'South Carolina', licensedState: LicenseState.NO_APPLY },
    SouthDakota: { stateName: 'South Dakota', licensedState: LicenseState.NO_APPLY },
    Tennessee: { stateName: 'Tennessee', licensedState: LicenseState.NO_APPLY },
    Texas: { stateName: 'Texas', licensedState: LicenseState.NO_APPLY },
    Utah: { stateName: 'Utah', licensedState: LicenseState.NO_APPLY },
    Vermont: { stateName: 'Vermont', licensedState: LicenseState.NO_APPLY },
    Virginia: { stateName: 'Virginia', licensedState: LicenseState.NO_APPLY },
    Washington: { stateName: 'Washington', licensedState: LicenseState.NO_APPLY },
    WestVirginia: { stateName: 'West Virginia', licensedState: LicenseState.NO_APPLY },
    Wisconsin: { stateName: 'Wisconsin', licensedState: LicenseState.LICENSED },
    Wyoming: { stateName: 'Wyoming', licensedState: LicenseState.NO_APPLY },
}