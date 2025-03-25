const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// 1
console.log(building.numberOfFloors);
// 2
console.log(building.numberOfAptByFloor.firstFloor);
// 3
console.log(building.numberOfAptByFloor.thirdFloor);
// 4
console.log(`${building.nameOfTenants[1]} he have ${building.numberOfRoomsAndRent.dan[0]} roms`);

// 5
const sarahRent = building.numberOfRoomsAndRent.sarah[1]; 
const davidRent = building.numberOfRoomsAndRent.david[1]; 
const danRent = building.numberOfRoomsAndRent.dan[1];
const sum = sarahRent+ davidRent;
if (sum>danRent){
    building.numberOfRoomsAndRent.dan[1]=1200;
}
console.log("Updated Dan's rent:", building.numberOfRoomsAndRent.dan[1]);







