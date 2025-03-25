var car = ""

for (i = 0; i < 6; i++) {


    car += "* "
    console.log(car);
}

for (i = 0; i < 6; i++) {
    car = ""
    for (j = 0; j <= i; j++) {
        car += "* "

    }
    console.log(car);
}





let pattern2 = "";
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        pattern2 += "* ";
    }
    pattern2 += "\n";
}
console.log(pattern2);




