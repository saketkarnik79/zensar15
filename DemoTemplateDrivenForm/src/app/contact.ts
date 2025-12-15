export class Contact{
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    address: {
        street: string;
        city: string;
        country: string;
        pincode:string;
    }

    constructor(firstName:string, lastName:string, email:string, gender:string, street: string, city:string, country:string, pincode:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.address = {
            street: street,
            city: city,
            country: country,
            pincode: pincode
        };
    }
}