let Marks=60;

switch(true){

case(Marks<=100 && Marks>=80):
    document.write("A+");
break;
case(Marks<80 && Marks>=70):
    document.write("A");
break;
case(Marks<70 && Marks>=60):
    document.write("A-");
break;
case(Marks<60 && Marks>=50):
    document.write("B")
break;
case(Marks<50 && Marks>=40):
    document.write("C")
break;
default:
    document.write("F")
}