/* let allows us to define a block scoped variable */


function TestMyGame() {
    let score = 100;

    console.log(`TestMyGame->Score : ${score}`);
}

TestMyGame();

console.log("outside the function : score : " + score);     // a var declaration for score would make it available here