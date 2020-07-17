//feetToMile_Part
function feetToMile(feet){
    var mile = feet*0.00018939394;
    return mile;
}
var Mile = feetToMile(5280);
console.log("feetToMile:",Mile,"Miles");

//woodCalculator_part
function woodCalculator(chair,table,bed){
    var Chair = chair*1;
    var Table = table*3;
    var  Bed = bed*5;
    var total = Chair + Table + Bed;
    return total;
}
var CHAIR_TABLE_BED =woodCalculator(3,5,5);
console.log("TOTAL QUANTITY OF WOOD:", CHAIR_TABLE_BED ,"Cubic Feet");

//brickCalculator_part
function brickCalculator(floor){
    if(floor<11){
        return floor*15*1000; 
    }
    else if(floor>10 && floor>21){
        return (10*15*1000)+(floor - 10)*12*1000;
    }
    else{
        return(10*15*1000)+(10*12*1000)+(floor-20)*10*1000;
    }
}
var count = brickCalculator(40);
console.log("Total Number of Bricks:",count);

//TinyFriend_part
var name  =["Jack","Roy","Abdullah","Niloy","Julkar","Naim"];
function tinyFriend(name){
    var small = name[0];
    for(var i = 0;i<name.length;i++){
        var element = name[i];
        if(small < element){
            small = element;
        }
    }
   return small;
}
 var tiny = tinyFriend(name);
 console.log("My Tiny Friend:",tiny);

