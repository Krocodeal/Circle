var openingdoor : GameObject; 

var bonussound : AudioClip; 

var time : UI.Text;

 var startTime;

 var t:int = 60 ;

 var target : GameObject;

 var eventName1 : String;

openingdoor = GameObject.Find("Door");

function Start (){


time.text = "time_countdown :" + t ;


}



function timeprint (){


t = t - 1;

time.text = "time_countdown :" + t ;


}


function OnTriggerEnter (col : Collider) {

    if (col.gameObject.tag == "slide"){
        
        iTweenEvent.GetEvent(target,eventName1).Play();
        
       
    }

else if (col.gameObject.tag == "bonus"){

	

   Debug.Log ("bonus");




}
}







	 