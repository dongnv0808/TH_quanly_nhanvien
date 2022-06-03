export enum Gender{
    MALE,
    FEMALE,
    OTHER
};

export class Employee{
    _fullname: string = "";
    _gender: Gender = Gender.OTHER;
    _birtday?: Date;
    _email: string = "";
    _phonenumber: string = "";
    constructor(fullname: string, gender: Gender, birtday: Date, email: string, phonenumber: string){
        this._fullname = fullname;
        this._gender = gender;
        this._birtday = birtday;
        this._email = email;
        this._phonenumber = phonenumber;
    }

}