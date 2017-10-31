#pragma strict

function Start () {

}

function Update () {
}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Soldier"){
		rigidbody.AddForce(other.transform.forward * 5000);
		rigidbody.AddForce(Vector3.up * 5000);
		rigidbody.AddTorque(transform.right * 50000);
	}
}