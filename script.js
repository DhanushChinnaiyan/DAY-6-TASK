
//Q.NO:1 Class - Movie
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating===undefined){
            this.rating="PG";
        }
        else{
            this.rating=rating;
        }
    }

   getPG(array){
    var result=[];
   for(var i=0;i<array.length;i++){
    if(array[i].rating==="PG"){
         result.push(array[i]);
    }
   }
   return result;
   
   }
   
}
var movie1 = new Movie("beast","sun pictures")
var movie2= new Movie("Casino Royale","Eon Productions","PG13")
var arr=[movie1, movie2]
console.log(movie2.getPG(arr));

// OUT PUT:Movie {title: 'beast', studio: 'sun pictures', rating: 'PG'}
//-------------------------------------------------------------------------------------------------------------------------
//Q.NO:2 Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius=radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color=color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
var c=new Circle(1,"red");
console.log(c.radiusCircle);
// OUT PUT:1
c.radiusCircle=4;
console.log(c.radiusCircle);
// OUT PUT:4
console.log(c.colorCircle);
// OUT PUT:red
c.colorCircle= "green";
console.log(c.colorCircle);
// OUT PUT:green
console.log(c.toString);
// OUT PUT:"Circle[radius=4,color=green]"
console.log(c.areaCircle);
// OUT PUT:50.26548245743669
console.log(c.circumferenceCircle);
// OUT PUT:25.132741228718345

//-------------------------------------------------------------------------------------------------------------------------
//Q.NO:3 -Write a “person” class to hold all the details.


class Person{
    constructor(name,age,qualification,relationship,salary,gender,experience,address,email,phone){
        this.name=name;
        this.age=age
        this.qualification=qualification;
        this.relationship=relationship;
        this.salary=salary;
        this.gender=gender;
        this.experience=experience;
        this.address=address;
        this.email=email;
        this.phone=phone;
}




}
let person=new Person("dhanush","22","BE","single","15000","Male",
                    "5 years","268,south street,kosappadi","dhanus1223445@gmail.com","1234567890")

console.log(`Name:${person.name},
Age:${person.age},
Qualification:${person.qualification},
Relationship:${person.relationship},
Salary:${person.salary},
Gender:${person.gender},
Experience:${person.experience},
Address:${person.address},
Email:${person.email},
Phone:${person.phone}`)                    

//OUT PUT:
//Name:dhanush,
//Age:22,
//Qualification:BE,
// Relationship:single,
// Salary:15000,
// Gender:Male,
// Experience:5 years,
// Address:268,south street,kosappadi,
// Email:dhanus1223445@gmail.com,
// Phone:1234567890

//-------------------------------------------------------------------------------------------------------------------------

//Q.NO:4 -write a class to calculate the uber price.


//The Uber price claculator formula:
//Base Fare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) x surge boost multiplier)
// + booking fee = Passengers Ride Fare

class Uberprice{
    constructor(baseFare,costPerMinute,timeOfTheRide,costPerMile,rideDistence,surgeBoostMultiplier,bookingFees){
        this.baseFare=baseFare;
        this.costPerMinute=costPerMinute;
        this.timeOfTheRide=timeOfTheRide;
        this.costPerMile=costPerMile;
        this.rideDistence=rideDistence;
        this.surgeBoostMultiplier=surgeBoostMultiplier;
        this.bookingFees=bookingFees;

}

get price(){
    return `UBER PRICE= ${this.baseFare+((this.costPerMinute*this.timeOfTheRide)+(this.costPerMile*this.rideDistence)
    *this.surgeBoostMultiplier)+this.bookingFees}RS`;

}
}
var uberprice=new Uberprice(10,2,120,4,40,1.2,50);

console.log(uberprice.price)

//OUT PUT:UBER PRICE= 492RS