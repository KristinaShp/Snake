class User {
    name;
    lastName;
    birthYear;

    constructor(n,ln,bd){
        this.name = n;
        this.lastName = ln;
        this.birthYear =bd;
    }
    
    age (){
        console.log( 2024 - this.birthYear)
    }
    fullName (){
        return this.name + " " + this.lastName;
    }
    ageInYear (year){
        console.log(`in ${year} user ${this.fullName()} age was `, year - this.birthYear)
    }
}

const u1 = new User ("John", "Doy", 1999);
const u2 = new User ("Homer", "Simpson", 1993);
u1.ageInYear (1975);
u2.ageInYear(2000);
const u3 = new User(prompt ("Enter your name"), prompt("Your last name"), +prompt("Year of birth"));
u3.ageInYear (2029);
