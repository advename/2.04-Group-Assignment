 // ===========================  INTRO SCENE =======================================
 // ================================================================================
 //Initialize let and give values
 let intro = document.querySelector("#intro");
 let introClickToStart = document.querySelector(".intro-click-to-start");
 let introActive = true;


 //Audio of INTRO SCENE
 let neonFlickerAudio = document.querySelector(".neon-flickerA")
 neonFlickerAudio.volume = .5;
 let neonAudio = document.querySelector(".neonA")
 neonAudio.play();
 neonAudio.volume = .5;
 let rainThunderAudio = document.querySelector(".rain-thunder-audioA")
 rainThunderAudio.play();
 rainThunderAudio.volume = .5;


 // Change Intro Background randomly with flickering sound
 let introBatesGlow = document.querySelector(".intro-bates-sign")

 setTimeout(introRandomBates, random(2000, 4000));

 function introRandomBates() {

     // check if introActive is true, if so, continue, otherwhise, stop function
     // by not calling it again
     if (introActive === true) {
         //adding class intro-anim... to change background and play flicker sound
         introBatesGlow.classList.add("intro-bates-glow");
         neonFlickerAudio.play();
         //wait 100ms and then remove the class for normal background
         setTimeout(function () {
             introBatesGlow.classList.remove("intro-bates-glow");
         }, 100);
         console.log("intro-still-active")
         //wait random between 500ms and 6000ms to change background again
         let interval = random(800, 4000);
         setTimeout(introRandomBates, interval);
     } else {
         console.log("intro-deactivated");
     }
 }

 let introVacancyGlow = document.querySelector(".intro-vacany-sign")

 setTimeout(introRandomVacancy, random(2000, 4000));

 function introRandomVacancy() {
     // check if introActive is true, if so, continue, otherwhise, stop function
     // by not calling it again
     if (introActive === true) {
         //adding class intro-anim... to change background and play flicker sound
         introVacancyGlow.classList.add("intro-vacancy-glow");
         neonFlickerAudio.play();
         //wait 100ms and then remove the class for normal background
         setTimeout(function () {
             introVacancyGlow.classList.remove("intro-vacancy-glow");
         }, 100);
         console.log("intro-still-active")
         //wait random between 500ms and 6000ms to change background again
         let interval = random(800, 4000);
         setTimeout(introRandomVacancy, interval);
     } else {
         console.log("intro-deactivated");
     }
 }






 //preLoad Images for next Scene for clean transition on Windows Load
 preLoadImage("scene1/scene1-background.jpg");
 preLoadImage("scene1/glowy-windows.png");
 preLoadImage("scene1/neon-sign-glow.png");


 introClickToStart.addEventListener('click', leaveIntroScene);

 function leaveIntroScene() {
     console.log("leave intro scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene2/screen2-background.jpg");
     preLoadImage("scene2/screen2-object1-window.png");
     preLoadImage("scene2/screen2-object2-lamp.png");
     preLoadImage("scene2/screen2-object3-key.png");
     preLoadImage("scene2/screen2-object4-vase.png");
     preLoadImage("scene2/screen2-object5-plant.png");

     //fade out audio and stop flicker audio
     /*fadeOutAudio(neonAudio);
     fadeOutAudio(rainThunderAudio);
     neonFlickerAudio.pause();*/




     //fade out intro scene
     fadeOut(intro);
     setTimeout('fadeIn(scene1)', 1200);

     //Activate functions from scene 1
     sc1NeonSignRandomGlow();
     sc1WindowRandomGlow();

     //disable the introRandomBackground() function
     introActive = false;
     sc1Active = true;

 }


 // ===========================  FIRST SCENE =======================================
 // ================================================================================

 //initialize let
 let scene1 = document.querySelector("#sc-1");
 let sc1Window = document.querySelector(".sc-1-window");
 let sc1Active = true;
 let sc1NeonSign = document.querySelector(".sc-1-neon-sign");



 // Neon sign random flicker with sound
 function sc1NeonSignRandomGlow() {

     // check if scene Active is true, if so, continue, otherwhise, stop function by not calling it again
     if (sc1Active === true) {
         //adding class for animation
         sc1NeonSign.classList.add("sc-1-neon-sign-flickering");
         neonFlickerAudio.play();
         //wait some time and then remove the class for normal state (animation disabled)
         setTimeout(function () {
             sc1NeonSign.classList.remove("sc-1-neon-sign-flickering");
         }, 100);
         console.log("sc1NeonSign-still-active")
         //wait random to change run function again for animation
         let interval = random(500, 4000)
         setTimeout(sc1NeonSignRandomGlow, interval);
     } else {
         console.log("sc1NeonSign-deactivated");
     }
 }


 // Window with random flash/glowing
 function sc1WindowRandomGlow() {

     // check if scene Active is true, if so, continue, otherwhise, stop function by not calling it again
     if (sc1Active === true) {
         //adding class for animation
         sc1Window.classList.add("sc-1-window-glow");

         //wait some time and then remove the class for normal state (animation disabled)
         setTimeout(function () {
             sc1Window.classList.remove("sc-1-window-glow");
         }, 401);
         console.log("sc1-still-active")
         //wait random to change run function again for animation
         let interval = random(10, 2000)
         setTimeout(sc1WindowRandomGlow, interval);
     } else {
         console.log("sc1-deactivated");
     }
 }


 //Adding click event listener to Window Area
 sc1Window.addEventListener('click', leaveFirstScene);

 // Do stuff after the click on Window
 function leaveFirstScene() {
     console.log("leave first scene");


     //preLoad Images for next Scene for clean transition
     preLoadImage("scene3/scene3-background.jpg");
     preLoadImage("scene3/scene3-object1.png");
     preLoadImage("scene3/scene3-object2.png");
     preLoadImage("scene3/scene3-object3.png");
     preLoadImage("scene3/scene3-object4.png");


     //fade out audio and stop flicker audio
     fadeOutAudio(neonAudio);
     rainThunderAudio.volume = .10;
     neonFlickerAudio.pause();

     //fade out scene
     fadeOut(scene1);
     setTimeout('fadeIn(scene2)', 1200);
     setTimeout('nobodyEverA.play()', 3200);

     //disable the sc1WindowRandomGlow() function
     sc1Active = false;

 }


 // ===========================  SECOND SCENE =======================================
 // ================================================================================
 let scene2 = document.querySelector("#sc-2");
 let sc2Active = false;
 let scene2Continue = document.querySelector(".sc-2-continue");
 let nobodyEverA = document.querySelector(".nobodyEverA")

 console.log("Second Scene")


 scene2Continue.addEventListener('click', leaveSecondScene);

 function leaveSecondScene() {
     console.log("leave second scene");



     //preLoad Images for next Scene for clean transition
     preLoadImage("scene4/scene4-background.jpg");
     preLoadImage("scene4/scene4-object1.png");
     preLoadImage("scene4/scene4-object2.png");
     preLoadImage("scene4/scene4-object3.png");
     preLoadImage("scene4/scene4-object4.png");
     preLoadImage("scene4/scene4-object5.png");


     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene2);
     setTimeout('fadeIn(scene3)', 1200);

     //disable the function of the scene and activate next scene
     sc2Active = false;
     sc3Active = true;

 }




 // ===========================  THIRD SCENE ======================================
 // ================================================================================
 let scene3 = document.querySelector("#sc-3");
 let sc3Active = false;
 let scene3Continue = document.querySelector(".sc-3-continue");

 console.log("Third Scene")


 scene3Continue.addEventListener('click', leaveThirdScene);

 function leaveThirdScene() {
     console.log("leave third scene");


     //preLoad Images for next Scene for clean transition
     preLoadImage("scene5/scene5-background.jpg");
     preLoadImage("scene5/scene5-foreground.png");
     preLoadImage("scene5/scene5-object1.png");
     preLoadImage("scene5/scene5-object2.png");
     preLoadImage("scene5/scene5-object3.png");
     preLoadImage("scene5/scene5-object4.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene3);
     setTimeout('fadeIn(scene4)', 1200);

     //disable the function of the scene and activate next scene
     sc3Active = false;
     sc4Active = false;

 }




 // ===========================  FOURTH SCENE ======================================
 // ================================================================================
 let scene4 = document.querySelector("#sc-4");
 let sc4Active = false;
 let scene4Continue = document.querySelector(".sc-4-continue");

 console.log("Fourth Scene")


 scene4Continue.addEventListener('click', leaveFourthScene);

 function leaveFourthScene() {
     console.log("leave fourth scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene6/scene6-background.jpg");
     preLoadImage("scene6/scene6-object1.png");
     preLoadImage("scene6/scene6-object2.png");
     preLoadImage("scene6/scene6-object3.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .40;

     //fade out scene and fade in next one
     fadeOut(scene4);
     setTimeout('fadeIn(scene5)', 1200);

     //disable the function of the scene and activate next scene
     sc4Active = false;
     sc5Active = true;


 }




 // ===========================  FIFTH SCENE ======================================
 // ================================================================================
 let scene5 = document.querySelector("#sc-5");
 let sc5Active = false;
 let scene5Continue = document.querySelector(".sc-5-continue");

 console.log("Fifth Scene")


 scene5Continue.addEventListener('click', leaveFifthScene);

 function leaveFifthScene() {
     console.log("leave fifth scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene7/scene7-background.jpg");
     preLoadImage("scene7/scene7-object1.png");
     preLoadImage("scene7/scene7-object2.png");
     preLoadImage("scene7/scene7-object3.png");
     preLoadImage("scene7/scene7-object4.png");
     preLoadImage("scene7/scene7-object5.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene5);
     setTimeout('fadeIn(scene6)', 1200);

     //disable the function of the scene and activate next scene
     sc5Active = false;
     sc6Active = true;

 }


 // ===========================  SIXTH SCENE ======================================
 // ================================================================================
 let scene6 = document.querySelector("#sc-6");
 let sc6Active = false;
 let scene6Continue = document.querySelector(".sc-6-continue");

 console.log("Sixth Scene")


 scene6Continue.addEventListener('click', leaveSixthScene);

 function leaveSixthScene() {
     console.log("leave sixth scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene8/scene8-background.jpg");
     preLoadImage("scene8/scene8-object1.png");
     preLoadImage("scene8/scene8-object2.png");
     preLoadImage("scene8/scene8-object3.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene6);
     setTimeout('fadeIn(scene7)', 1200);

     //disable the function of the scene and activate next scene.
     sc6Active = false;
     sc7Active = true;


 }



 // ===========================  SEVENTH SCENE ======================================
 // ================================================================================
 let scene7 = document.querySelector("#sc-7");
 let sc7Active = false;
 let scene7Continue = document.querySelector(".sc-7-continue");

 console.log("Seventh Scene")


 scene7Continue.addEventListener('click', leaveSeventhScene);

 function leaveSeventhScene() {
     console.log("leave seventh scene");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene7);
     setTimeout('fadeIn(scene8)', 1200);

     //disable the function of the scene and activate next scene
     sc7Active = false;
     sc8Active = true;

 }


 // ===========================  EIGTH SCENE ======================================
 // ================================================================================
 let scene8 = document.querySelector("#sc-8");
 let sc8Active = false;
 let scene8Continue = document.querySelector(".sc-8-continue");

 console.log("Eigth Scene")


 scene8Continue.addEventListener('click', leaveEightScene);

 function leaveEightScene() {
     console.log("leave eigth scene");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene8);
     setTimeout('fadeIn(credits)', 1200);

     //disable the function of the scene and activate next scene
     sc8Active = false;
     //sc7Active = true;

 }

 // ===========================  CREDITS ===========================================
 // ================================================================================
 let credits = document.querySelector("#credits");


 console.log("Credits Scene")









 // ================================================================================
 // ================================================================================
 // ===========================  OTHER STUFF =======================================
 // ================================================================================

 // Function to fade away elements
 function fadeOut(element) {
     var op = 1; // initial opacity
     var timer = setInterval(function () {
         // if completely faded away, stop timer and add .hide class to element
         if (op <= 0.1) {
             clearInterval(timer);
             element.classList.add("hide");
         }
         // else, continue fading away
         element.style.opacity = op;
         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
         op -= op * 0.1;
     }, 50);
 }

 function fadeIn(element) {

     var op = 0.1; // initial opacity
     var timer = setInterval(function () {
         // if completely faded away, stop timer and add .hide class to element
         if (op >= 0.9) {
             clearInterval(timer);
             element.classList.remove("hide");
             console.log("delay finished")
         }
         // else, continue fading in
         element.style.opacity = op;
         element.style.filter = 'alpha(opacity=' + op + ")";
         op = op + 0.1;
         element.classList.remove("hide");
     }, 50);
 }

 // Function to fade away audio
 function fadeOutAudio(audio) {
     var vol = .2;
     var timer = setInterval(function () {
         // if completely faded away, stop timer and add .hide class to element
         if (audio.volume <= vol) {
             clearInterval(timer);
             audio.pause();
         } else {
             // else, continue fading away
             audio.volume = audio.volume - 0.1;
         }
     }, 50);
 }


 // Switch button in the beginning to hide or display the rain
 // based on the status of rainActive
 let rainSwitch = document.querySelector(".switch input")
 let rainActive = true;
 rainSwitch.addEventListener('click', rainStatus);

 function rainStatus() {
     let rainClass = document.querySelectorAll(".rain");

     if (rainActive === true) {
         var n = rainClass.length;
         for (var i = 0; i < n; ++i) {
             rainClass[i].classList.add("hide");
         }
         rainActive = false;
     } else {
         var n = rainClass.length;
         for (var i = 0; i < n; ++i) {
             rainClass[i].classList.remove("hide");
         }
         rainActive = true;
     }
 }

 // JavaScript to actually make the rain (in combination with jQuery)
 // Create 858 times the CCS class .drop and add the to the <div class="rain"><div>
 // and then make them fall from top to bottom with a keyframes (in CSS)
 var nbDrop = 858;

 function randRange(minNum, maxNum) {
     return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
 }

 function createRain() {

     for (i = 1; i < nbDrop; i++) {
         var dropLeft = randRange(0, 1300);
         var dropTop = randRange(-1000, 725);

         $('.rain').append('<div class="drop dropNbr' + i + '"></div>');
         $('.dropNbr' + i).css('left', dropLeft);
         $('.dropNbr' + i).css('top', dropTop);
     }

 }
 createRain();



 // Function to use random number with a given Min and Max.
 function random(minNum, maxNum) {
     return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
 }

 function delay(functionToDelay, time) {
     console.log("delay started")
     setTimeout(functionToDelay, time);
 }



 // Play Raind and Thunder Audio in loop without a gap between each loop
 rainThunderAudio.addEventListener('timeupdate', function () {
     var buffer = .44
     if (this.currentTime > this.duration - buffer) {
         this.currentTime = 0
         this.play()
     }
 }, false);

 function preLoadImage(imageFileName) {
     var my_image = new Image();
     my_image.src = imageFileName;
     console.log("Preload Image" + imageFileName);
 }




 /* OLIIIIIIVVIIIIIIAAAAAAAAAAA START*/









 /* OLIIIIIIVVIIIIIIAAAAAAAAAAA END*/
