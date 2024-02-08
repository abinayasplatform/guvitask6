
// Write a "person" class to hold all the details

class person {

    constructor() {
        this.name = 'NoName';
        this.age = 'NoAge';
        this.dob = 'dob';
        this.contactNo = 'contactNO';
        this.height = 'height';
        this.weight = 'weight';
    }

    getDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`DOB: ${this.dob}`);
        console.log(`ContactNO: ${this.contactNo}`);
        console.log(`Height: ${this.height}`);
        console.log(`Weight: ${this.weight}`);
    }
}

let person01 = new person();

person01.name = 'Abinaya';
person01.age = 24;
person01.dob = '16.01.2000';
person01.contact = 9123456780;
person01.height = 165;
person01.weight = 45;


let person02 = new person();

person02.name = 'Dinesh';
person02.age = 26;
person02.dob = '24.03.2000';
person02.contact = 9876543210;
person02.height = 185;
person02.weight = 59;


person01.getDetails();
person02.getDetails();



// output


// Name : Abinaya
// Age: 24
// DOB: 16.01.2000
// ContactNO: contactNO
// Height: 165
// Weight: 45
// Name : Dinesh
// Age: 26
// DOB: 24.03.2000
// ContactNO: contactNO
// Height: 185
// Weight: 59