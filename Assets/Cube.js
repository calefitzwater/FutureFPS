#pragma strict

var Target : GameObject;

function Start () {

}

function Update () {
	transform.rotation.y = Target.transform.rotation.y;
	transform.position.x = Target.transform.position.x;
	transform.position.y = Target.transform.position.y;
	transform.position.z = Target.transform.position.z;
}