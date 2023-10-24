
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Establece "player1_name" usando la función localStorage.setItem()
	  //Establece "player2_name" usando la función localStorage.setItem()
  player1_name=localStorage.getItem("player1_name");
  player2_name=localStorage.getItem("player2_name");
  player1_score=0;
  player2_score=0;

    window.location = "game_page.html";
}

