let data=(prompt("Enter a number from 1 to 10"))

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
}