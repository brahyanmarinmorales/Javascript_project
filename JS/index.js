/*let data=(prompt("Enter a number from 1 to 10"))

let list

while(data!="ESC"){

    switch(data){
        case "1":
            document.write(" "+"1) Bogotá")
            break
        case "2":
            document.write(" "+"2) Medellin")
            break
        case "3":
            document.write(" "+"3) Cali")
            break
        case "4":
            document.write(" "+"4) Pereira")
            break
        case "5":
            document.write(" "+"5) Barranquilla")
            break
        case "6":
            document.write(" "+"6) Cartagena")
            break
        case "7":
            document.write(" "+"7) Armenia")
            break1
        case "8":
            document.write(" "+"8) Bucaramanga")
            break
        case "9":
            document.write(" "+"9) Pasto")
            break
        case "10":
            document.write(" "+"10) Santa Marta")
            break
        default:
            document.write("There are not more cities to include")
    }

    data=(prompt("Continue with the sequence: "))
}*/




//Simulador interativo

/*let login_email= prompt("Enter your email address: ")
let passcode= Number(prompt("Enter your password: "))
let room_number

const PASS1=1
const room_type1="Beautiful Studio"
const room_type2="Deluxe 1BD Apartment"
const room_type3="Luxurious 2BD Apartment"


if (passcode===PASS1){
    confirm("Welcome to the HSK report, Are you planning to create a new one?")

    if(true){

        while (room_number!="done"){ 
            room_number=prompt("Room Number: ")
            console.log(room_number)
            room_type_verification(room_number.charAt(0))
        }   
    }
}else{
    document.write("Password is incorrect. Try one more time")
}


function room_type_verification (room){ 
    if(room==1){
        room_type1
        document.write(" " + room_number + " " + room_type1 + " ")
    }else if(room==2){
        room_type2
        document.write(" " + room_number + " " + room_type2 + " ")
    }else if(room==3){ 
        room_type3
        document.write(" " + room_number + " " + room_type3 + " ")
    }
    else{
        document.write("This apartment does not exist")
    }
}*/

const hsk = "Dinora";
let type="Beautiful Studio"
let room_number=102

if (type=="Beautiful Studio") {
    for (let i = 0; i < 4; i += 1){
        document.write(" " + hsk + " " + room_number)
    }
    
}






























