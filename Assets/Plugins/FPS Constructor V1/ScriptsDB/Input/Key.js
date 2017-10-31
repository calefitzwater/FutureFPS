#pragma strict
var key : String;
var input : InputItem;

function UpdateInput () {
	//Just get the values from Unity's input
	input.got = Input.GetButton("p");
	input.down = Input.GetButtonDown("p");
	input.up = Input.GetButtonUp("p");	
}
