export class User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    city: string;
    zip: number;
    region: string;

    checkFields() {
        if (this.name 
            && this.lastname 
            && this.email 
            && this.password 
            && this.address 
            && this.city 
            && this.zip 
            && this.region) {

            return true;
        }
        return false;
    }
}