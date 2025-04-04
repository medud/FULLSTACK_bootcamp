const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
// const med =gameInfo.forEach(username)
// console.log(med);


const usernames = [];
gameInfo.forEach(gameInfo => {
    usernames.push(gameInfo.username + "!");
});
console.log(usernames);
// 2

const winners = [];
gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});
console.log(winners);