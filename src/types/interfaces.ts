export interface AdminSignup {
    firstName: string;
    surnName: string;
    email: string;
    companyName: string;
    phoneNumber: string;
}

export interface InputValue {
    key: CompanyFormEnum,
    value: string ;
}

export enum CompanyFormEnum {
    EMAIL = "email",
    FIRSTNAME = "firstName",
    SURNAME = "surnName",
    PHONENUMBER = "phoneNumber",
    COMPANYNAME = "companyName",
    EMPLOYEECOUNT = "employeeCount",
    MISSION = "mission",
    VISION = "vision",
    VALUES = "values",
    // SUBSCRIOTION="subscription"
}

export interface CompanyFInal {
    info: {
        firstName: string;
        surnName: string;
        email: string;
        phoneNumber: string;
        companyName: string,
        employeeCount: string,
        mission: string,
        vision: string,
        values: string,
        // subscription: [],
    }
    errors: any,
    errorfound: boolean,
    showError: boolean,
}
