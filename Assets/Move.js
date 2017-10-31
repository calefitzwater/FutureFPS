#pragma strict

var Grounded : boolean;
var pokeForce : float;
var timer : boolean;
var timer2 : boolean;
var bullet : Transform;
var muzzle : Transform;
var delay : boolean;
var gun : Transform;
var Aim : boolean;
var Cam : GameObject;

function Start () {
	timer = true;
	Cam.active = false;
}

function Update () {
	if(Input.GetKey("w") && Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddForce(new Vector3(transform.forward.x, 0 , transform.forward.z) * 10000);
	}
	if(Input.GetKey("w") && !Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddForce(new Vector3(transform.forward.x, 0 , transform.forward.z) * 4000);
	}
	if(Input.GetKeyDown("space") && !Grounded){
		rigidbody.AddForce(Vector3.up * 500000);
	}
	if(Input.GetKey("a")){
		rigidbody.AddForce(transform.right * -4000);
	}
	if(Input.GetKey("d")){
		rigidbody.AddForce(transform.right * 4000);
	}
	if(Input.GetKey("s")){
		rigidbody.AddForce(transform.forward * -4000);
	}
	
	if(Input.GetKeyDown("b") && Grounded){
		rigidbody.AddForce(Vector3.up * -700000);
	}	
		if(timer2){
			if (Input.GetMouseButtonDown(2) && !Grounded) {
				var hit: RaycastHit;
				var ray = Camera.main.transform;
				if (Physics.Raycast(ray.position, ray.forward, hit)) {
					if (rigidbody != null)
						rigidbody.AddForceAtPosition(ray.forward * pokeForce, hit.point);
				}
				if(timer2){
					timer2=false;
				}
		}
	}
	
	//Gun
	if(Input.GetMouseButton(0) && !delay){
		var clone = Instantiate(bullet, muzzle.position, muzzle.rotation);
		//GunSway();
		clone.rigidbody.AddForce(muzzle.forward * 30000);
		delay = true;
		Delay();
	}
		if(Input.GetMouseButtonDown(1)){ 
		Aim = true; 
		if(Aim == true){ 
			Cam.active = true;
			muzzle.active=true;
		}
	}
	if(Cam.active == false){
		muzzle.active = false;
	}
	if(Input.GetMouseButtonUp(1)){ 
		Aim = true; 
		if(Aim){ 
			Cam.active = false;
			muzzle.active=false;
		}
	}
}

function OnCollisionEnter(other : Collision){
	Grounded = false;
	timer2 = false;
}
function OnCollisionExit(other : Collision){
	Grounded = true;
	timer2 = true;
}

function Delay(){
	if(delay == true){
		yield WaitForSeconds(.3);
		delay = false;
	}
}

function GunSway(){
	gun.transform.Translate(muzzle.transform.right * -.1);
	yield WaitForSeconds(.05);
	gun.transform.Translate(muzzle.transform.right * .1);
}
