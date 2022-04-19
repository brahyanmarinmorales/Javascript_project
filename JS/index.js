
//Simulador interativo: la idea es crear un programa que me ayude a ejecutar una tarea diaria en mi trabajo donde debo asignar habitaciones para limpiar a determinado grupo de personas. 

let login_email= prompt("Enter your email address: ")
let passcode= Number(prompt("Enter your password: "))

const PASS1=1
const room_type1="Beautiful Studio"
const room_type2="Deluxe 1BD Apartment"
const room_type3="Luxurious 2BD Apartment"
const HSK1="Dinora"
const HSK2="Julieta"
const HSK3="Brenda"

let type1=0
let type2=0
let type3=0


if (passcode===PASS1){
    confirm("Welcome to the HSK report, Are you planning to create a new one?")

    if(true){
        let room_number=prompt("Room Number: ")
        HSK_report(room_number)
    }
}else{
    console.log("Password is incorrect. Try one more time")
}

function HSK_report(room_number){

    while (room_number!="done"){
        switch (room_number.charAt(0)){
            case "1":
                if (type1<4){ 
                console.log(" " + room_number + " " + HSK1 + " ");
                }else{
                    console.log(" " + room_number + " " + room_type1 + " " + " No HSK assigned")
                }
                type1+=1
                break;
            case "2":
                if (type2<3){ 
                    console.log(" " + room_number + " " + HSK2 + " ");
                    }else{
                        console.log(" " + room_number + " " + room_type2 + " " + " No HSK assigned")
                    }
                    type2+=1
                    break;
            case "3":
                if (type3<3){ 
                    console.log(" " + room_number + " " + HSK3 + " ");
                    }else{
                        console.log(" " + room_number + " " + room_type3 + " " + " No HSK assigned")
                    }
                    type3+=1
                    break;
            default: 
                console.log(" " + "This apartment does not exist" + " ")
                break
        }
        room_number=prompt("Room Number: ")
    }
}
































