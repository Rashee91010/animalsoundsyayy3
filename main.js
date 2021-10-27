//https://teachablemachine.withgoogle.com/models/VMLJH-wGZ/

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VMLJH-wGZ/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }
     else{
    console.log(results);
        random_number_r=Math.floor(Math.random() * 255)+1;
        random_number_g=Math.floor(Math.random() * 255)+1;
        random_number_b=Math.floor(Math.random() * 255)+1;
        
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*  100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"; 
         
         
          img1=document.getElementById("pomeriancute.jpg");
        img2=document.getElementById("catorange.jpg");
          img3=document.getElementsByTagName("ear.png");
        
        if(results[0].label == "woof")
            {
                img1.src="dogiswhite.gif";
                img2.src="catorange.jpg";
                img3.src="ear.png";
            }
        else if(results[0].label == "meow")
            {
                img1.src="pomeriancute.jpg";
                img2.src="cutekittybestkitty.gif";
                img3.src="ear.png";
            }
        
        else
            {
                img1.src="pomeriancute.jpg";
                img2.src="catorange.jpg";
                img3.src="dancingEAR.gif";
                
            }
    } 
}