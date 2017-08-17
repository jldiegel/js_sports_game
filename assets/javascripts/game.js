(function() {

//variables

let team1shootButton = document.querySelector("#teamone-shoot")

  //console.log(team1shootButton)

let team2shootButton = document.querySelector("#teamtwo-shoot")

  //console.log(team2shootButton)

let team1shots = document.querySelector("#teamone-numshots")

  //console.log(team1shots)

let team1goals = document.querySelector("#teamone-numhits")

  //console.log(team1goals)

let team2shots = document.querySelector("#teamtwo-numshots")

  //console.log(team1shots)

let team2goals = document.querySelector("#teamtwo-numhits")

  //console.log(team2goals)

let resetButton = document.querySelector("#reset")

  //console.log(resetButton)

let numresets = document.querySelector("#num-resets")


  //console.log(numresets)

//functions

resetButton.addEventListener("click", function(){

  numresets.innerHTML = parseInt(numresets.innerHTML) + 1

  team1shots.innerHTML = 0
  team2shots.innerHTML = 0

  team1goals.innerHTML = 0
  team2goals.innerHTML = 0


  console.log(numresets.innerHTML)

})

team1shootButton.addEventListener("click", function(){

  shot.play()

  let randomNumber1 = Math.random()

  team1shots.innerHTML = parseInt(team1shots.innerHTML) + 1


  if (randomNumber1 >.88) {
    team1goals.innerHTML = parseInt(team1goals.innerHTML) + 1

    goal.play()
  }
})


team2shootButton.addEventListener("click", function(){

  shot.play()

  let randomNumber2 = Math.random()

  team2shots.innerHTML = parseInt(team2shots.innerHTML) + 1

  if (randomNumber2 >.88) {
    team2goals.innerHTML = parseInt(team2goals.innerHTML) + 1

    goal.play()
  }
})


})()
