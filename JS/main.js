//alert()
//Activity 1

/*let nam=prompt("Share your name: ");
let last_name=prompt("Enter your last name: ");
let age=parseInt(prompt("How old are you? "));

console.log(nam);
console.log(last_name);
console.log(age);*/

//Activity 2

/*const CITY1="Nairobi";
const CITY2="Tokio";
const CITY3="Denver";
const CITY4="Berlin";
const CITY5="Rio";

console.log(CITY1);
console.log(CITY2);
console.log(CITY3);
console.log(CITY4);
console.log(CITY5);*/

//Activity 3

/*let namE="Brahyan Marin Morales"
let city="Medellin"
let year="1997"
const CODE="M7383HWSBG2"


let driver_license= "Code: "+CODE+" "+
                    "Name: "+namE+" "+
                    "City: "+city+" "+
                    "Year: "+year;
                    
console.log(driver_license)*/

//Activity #4

/*let family_member1=prompt("Enter first name: ")
let family_member2=prompt("Enter second name: ")
let family_member3=prompt("Enter third name: ")
let family_member4=prompt("Enter fourth name: ")
let family_member5=prompt("Enter fifth name: ")

let family="1) "+family_member1+ " "+
            "2) "+family_member2+ " "+
            "3) "+family_member3+ " "+
            "4) "+family_member4+ " "+
            "5) "+family_member5+ " ";

document.write(family)*/

//activity 5

/*let price=parseFloat(prompt("Enter the price of the item: "))
let discount1=0.2
let discount2=0.3

if (price>1000){
     document.write(price= price - (price* discount1))
}
else if (price > 2000){
    document.write(price= price - (price* discount2))
}
else {
    document.write("You are not eligible for discount")
}*/

// JS 2 Activty 1

/*let indicted=prompt("Please enter your first name: ")

const ACCUSED="Brahyan"

if (indicted === ACCUSED){
    document.write("You are guilty")
}
else {
    document.write("You are lucky we spare your life!!!")
}*/


// JS 2 Activty 2

/*let key=prompt("Please press one key letter: ")

const CORRECT="y"
const CORRECT2="Y"

if (key == CORRECT || key == CORRECT2){
    document.write("You are RIGHT")
}
else {
    document.write("Keep trying loser!")
}*/


// JS 2 Activty 3

/*let key=prompt("Please enter a number between 1 - 4: ")

const CHARAPTER1="Batman"
const CHARAPTER2="Superman"
const CHARAPTER3="Spiderman"
const CHARAPTER4="Iroman"


if (key == 1){
    document.write("You have choosen "+ CHARAPTER1)
}
else if (key==2){
    document.write("You have choosen "+ CHARAPTER2)
}
else if (key==3){ 
    document.write("You have choosen "+ CHARAPTER3)
}
else if (key==4){
    document.write("You have choosen "+ CHARAPTER4)
}
else {
    document.write("You are a poor evil human")
}*/


// JS 2 Activty 4

/*let digit=parseInt(prompt("Enter your favorite number: "))

if(digit>0 && digit<100){
    document.write("You have a very low budget")
}
else if(digit>=100 && digit<=1000){
    document.write("You have an average budget")
}
else if(digit>1000){
    document.write("You have a lot money")
}
else{
    document.write("Don't be a bitch!")
}*/

// JS 2 Activty 5

/*let product1=prompt("Enter a fruit: ")
let product2=prompt("Enter a veggie: ")
let product3=prompt("Enter a bean: ")
let product4=prompt("Enter a beverage: ")
let product5=prompt("Enter a dessert: ")

if(product1!=" " && product2!=" " && product3!=" " && product4!=" " && product5!=" "){
    let order="1) "+product1+" "+
    "2) "+product2+" "+
    "3) "+product3+" "+
    "4) "+product4+" "+
    "5) "+product5+" ";
    
    
    document.write(order)
}
else {
    document.write("Not enough products to complete the order.")
}*/

// JS 3 Activty 1

/*let number=parseInt(prompt("Enter a number: "))
let nickname=prompt("Enter your name: ")

for (let index=0;index<=number;index=index+1){
    document.write(nickname)
}*/

// JS 3 Activty 2

/*let request=parseInt(prompt("Enter a number of 2 digits: "))

for(index=0;index<=request;index= index+ 1){
    if(index==4){
        break
    }
    document.write(" side ");
}*/

// JS 3 Activty 3

/*let cant=10

for(let index=0;index<=cant;index+=1){
    let student=prompt("Name your first student: ")
    document.write(" "+index+" "+student+"\n")
}*/

// JS 3 Activty 4

/*const WINNER="Voldemort"
let list
let poter=prompt("Enter a Harry Poter's character name: ")
while(poter!=WINNER){
    document.write(poter+", "+"this character is not strong enough"+" ")
    list+=poter+"\n"

    poter=prompt("Enter another one: ")
}
console.log(list)*/

// JS 3 Activty 5

let data=Number(prompt("Enter a number from 1 to 10"))
let list
while(data!=0){
    switch(data){
        case 1:
            document.write("1) Bogotá")
            break
        case 2:
            document.write("2) Medellin")
            break
        case 3:
            document.write("3) Cali")
            break
        case 4:
            document.write("4) Pereira")
            break
        case 5:
            document.write("5) Barranquilla")
            break
        case 6:
            document.write("6) Cartagena")
            break
        case 7:
            document.write("7) Armenia")
            break1
        case 8:
            document.write("8) Bucaramanga")
            break
        case 9:
            document.write("9) Pasto")
            break
        case 10:
            document.write("10) Santa Marta")
            break
        default:
            document.write("We can't have different items")
    }

    data=Number(prompt("Continue with the sequence: "))

}
