 // ===========================  INTRO SCENE =======================================
 // ================================================================================
 //Initialize let and give values
 let intro = document.querySelector("#intro");
 let introClickToStart = document.querySelector(".intro-click-to-start");
 let introActive = false;


 //Audio of INTRO SCENE (but also used in other scenes such as Rain thunder and neon flickering)

 let neonFlickerAudio = document.querySelector(".neon-flickerA")
 neonFlickerAudio.volume = .5;
 let neonAudio = document.querySelector(".neonA")
 neonAudio.play();
 neonAudio.volume = .5;
 let rainThunderAudio = document.querySelector(".rain-thunder-audioA")
 rainThunderAudio.play();
 rainThunderAudio.volume = .5;


 // Change Intro Bates Sign randomly with flickering sound
 let introBatesGlow = document.querySelector(".intro-bates-sign")

 introRandomBates()

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

 // Change Intro Vacancies sign randomly with flickering sound
 let introVacancyGlow = document.querySelector(".intro-vacany-sign")

 introRandomVacancy();

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


 // Do Stuff when we click on the introClicktoStart Button, such as fade out scene, change sound volume, play another sound,
 // preload already sound for next scene.
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


     //fade out intro scene and fade in scene 1 after 1200ms -
     // because it takes around 1200ms for fadeOut to finish
     fadeOut(intro);
     setTimeout('fadeIn(scene1)', 1200);
     setTimeout('goodAfterNoonA.play()', 1800);
     neonFlickerAudio.volume = .3;
     neonAudio.volume = .3;
     rainThunderAudio.volume = .3;

     //Activate functions from scene 1
     sc1NeonSignRandomGlow();

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
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

 let goodAfterNoonA = document.querySelector(".goodAfterNoonA");
 goodAfterNoonA.volume = .4;
 // Neon sign random flicker with sound
 function sc1NeonSignRandomGlow() {

     // check if sceneActive is true, if so, continue, otherwhise, stop function by not calling it again
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

 goodAfterNoonA.onended = function () {
     sc1WindowRandomGlow();
 };
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
     fadeOutAudio(goodAfterNoonA);
     rainThunderAudio.volume = .10;
     neonFlickerAudio.pause();

     //fade out scene
     fadeOut(scene1);
     setTimeout('fadeIn(scene2)', 1200);
     setTimeout('keysA.play();', 4400);
     setTimeout('dinnerA.play();', 1000);
     setTimeout(function () {
         scene2Continue.classList.add("glow");
     }, 14500);


     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc1Active = false;
     sc2Active = true;

 }


 // ===========================  SECOND SCENE =======================================
 // ================================================================================
 let scene2 = document.querySelector("#sc-2");
 let sc2Active = false;
 let scene2Continue = document.querySelector(".sc-2-continue");
 let dinnerA = document.querySelector(".dinnerA")
 let keysA = document.querySelector(".keysA")


 console.log("Second Scene")
 keysA.volume = 0.7;



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
     setTimeout('parlourA.play()', 1800);
     fadeOutAudio(dinnerA);

     setTimeout(function () {
         pictureFrame.classList.add("glow");
         pictureFrame.style.cursor = "pointer";
         sc3Clickable = true;
     }, 12000);


     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc2Active = false;
     sc3Active = true;
 }



 // ===========================  THIRD SCENE ======================================
 // ================================================================================
 let scene3 = document.querySelector("#sc-3");
 let sc3Active = false;
 let scene3Continue = document.querySelector(".sc-3-continue");
 let parlourA = document.querySelector(".parlourA");
 let sc3ZoomContainer = document.querySelector("#sc-3-zoomContainer");
 let sc3Clickable = false;
 let sc3Clickable2 = false;
 let pictureFrame = document.querySelector(".sc-3-object-2")

 parlourA.volume = .6;

 console.log("Third Scene")


 pictureFrame.addEventListener('click', function () {
     if (sc3Clickable === true) {
         pictureFrame.classList.remove("glow");
         pictureFrame.style.cursor = "auto";
         pictureFrame.classList.add("sc-3-object-2-Animate");
         pictureFrame.style.pointerEvents = "none";
     }
 })

 parlourA.onended = function () {
     sc3Clickable2 = true;
     scene3Continue.style.cursor = "pointer";
     scene3Continue.classList.add('glow');
 }





 scene3Continue.addEventListener('click', preLeaveThirdScene);

 function preLeaveThirdScene() {

     if (sc3Clickable2 === true) {
         console.log("change Scene");
         sc3ZoomContainer.classList.add("sc-3-zoomIn");
         setTimeout(leaveThirdScene, 5500);

     }
 }

 function leaveThirdScene() {
     console.log("leave third scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene5/scene5-background.jpg");
     preLoadImage("scene5/scene5-foreground.png");
     preLoadImage("scene5/scene5-object1.png");
     preLoadImage("scene5/scene5-object2.png");
     preLoadImage("scene5/scene5-object3.png");
     preLoadImage("scene5/womanshadow1.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene3);
     setTimeout('fadeIn(scene4)', 1200);
     setTimeout('bathroomA.play()', 1800);
     fadeOutAudio(parlourA);

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc3Active = false;
     sc4Active = false;

     setTimeout(function () {
         scene4Continue.classList.add("glow");
     }, 4500)

 }




 // ===========================  FOURTH SCENE ======================================
 // ================================================================================
 let scene4 = document.querySelector("#sc-4");
 let sc4Active = false;
 let scene4Continue = document.querySelector(".sc-4-continue");
 let bathroomA = document.querySelector(".bathroomA");
 bathroomA.volume = .4;

 console.log("Fourth Scene")



 let sc4bathRings = document.querySelector(".sc-4-object-4")
 let sc4bathCurtain = document.querySelector(".sc-4-object-5")
 let plant = document.querySelector(".sc-4-object-1");
 let vaseBreakSound = document.querySelector(".vaseBreaking");


 sc4bathCurtain.addEventListener("click", function () {

     scene4Continue.classList.remove("glow");
     console.log("move curtain");
     sc4bathCurtain.classList.add("sc-4-moveCurtain");
     sc4bathRings.classList.add("sc-4-moveCurtain");

     setTimeout(function () {
         console.log("plant falling");
         plant.classList.add("plantFalling");
         vaseBreakSound.play();
         vaseBreakSound.volume = 0.1;
     }, 1600);
     setTimeout(leaveFourthScene, 2300);
 })

 /* bathroomA.onended = function () {
     scene4Continue.classList.add("glow");
 }; */




 function leaveFourthScene() {
     console.log("leave fourth scene");

     //preLoad Images for next Scene for clean transition
     preLoadImage("scene6/scene6-background.jpg");
     preLoadImage("scene6/scene6-object1.png");
     preLoadImage("scene6/scene6-object2.png");
     preLoadImage("scene6/scene6-object3.png");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .30;

     //fade out scene and fade in next one
     fadeOut(scene4);
     setTimeout('fadeIn(scene5)', 1200);
     setTimeout('fadeIn(humanShadow)', 2800);
     setTimeout('windowSeenA.play()', 1800);
     setTimeout('motherTalkingA.play()', 2800);
     fadeOutAudio(bathroomA);

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc4Active = false;
     sc5Active = true;


 }




 // ===========================  FIFTH SCENE ======================================
 // ================================================================================
 let scene5 = document.querySelector("#sc-5");
 let sc5Active = false;
 let scene5Continue = document.querySelector(".sc-5-continue");
 let humanShadow = document.querySelector(".sc-5-object-4");
 let windowSeenA = document.querySelector(".windowSeenA");
 let motherTalkingA = document.querySelector(".motherTalkingA");

 windowSeenA.volume = .4;

 console.log("Fifth Scene")

 motherTalkingA.onended = function () {
     scene5Continue.classList.add('glow2');
 };



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
     setTimeout('stairsA.play()', 1800);
     fadeOutAudio(windowSeenA);
     fadeOutAudio(motherTalkingA);

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc5Active = false;
     sc6Active = true;

     chandelierMoving();

 }


 // ===========================  SIXTH SCENE ======================================
 // ================================================================================
 let scene6 = document.querySelector("#sc-6");
 let sc6Active = false;
 let scene6Continue = document.querySelector(".sc-6-continue");
 let stairsA = document.querySelector(".stairsA");
 stairsA.volume = 1;

 console.log("Sixth Scene")


 let chandelier = document.querySelector(".sc-6-object-3");
 let chandelierSound = document.querySelector(".chandelierA");
 let stairCase = document.querySelector(".sc-6-object-2");


 /*
 stairsA.onended = function () {
     console.log("chandelier glow");
     chandelier.classList.add('glow');
     setTimeout(function () {
         console.log("staircase glow");
         stairCase.classList.add('glow');
     }, 10000)
 }; */




 function chandelierMoving() {
     console.log("play chandelier sound");

     chandelierSound.play();
     chandelierSound.volume = .1;
     chandelier.classList.add('swingChandelier');
     setTimeout(function () {
         console.log("staircase glow");
         stairCase.classList.add('glow');
     }, 8500);
 }









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
     fadeOutAudio(chandelierSound);

     //fade out scene and fade in next one
     fadeOut(scene6);
     fadeOutAudio(stairsA);
     setTimeout('fadeIn(scene7)', 1200);
     setTimeout('motherBedroomA.play()', 1800);

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc6Active = false;
     sc7Active = true;

     runSeventhScene();


 }



 // ===========================  SEVENTH SCENE ======================================
 // ================================================================================
 let scene7 = document.querySelector("#sc-7");
 let sc7Active = false;
 let scene7Continue = document.querySelector(".sc-7-continue");

 let motherBedroomA = document.querySelector(".motherBedroomA");
 motherBedroomA.volume = .5;
 let murdererCreptA = document.querySelector(".murdererCreptA");
 murdererCreptA.volume = .7;

 motherBedroomA.onended = function () {
     murdererCreptA.play();
 };


 let chairBedroom = document.querySelector('.sc-7-object-5');
 let pictureBedroom = document.querySelector('.sc-7-object-1');
 let windowBedroom = document.querySelector('.sc-7-object-6');

 function runSeventhScene() {
     setTimeout(function () {
         chairBedroom.classList.add('chairMoves');
         console.log("chair moving")
     }, 5500);

     setTimeout(function () {
         console.log("frame falls");
         pictureBedroom.classList.add('pictureFalls');
     }, 7500);
     setTimeout(function () {
         console.log("window glow");
         windowBedroom.classList.add('glow');

     }, 11000);
 };

 scene7Continue.addEventListener('click', leaveSeventhScene);

 function leaveSeventhScene() {
     console.log("leave seventh scene");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene7);
     fadeOutAudio(motherBedroomA);
     setTimeout('fadeIn(scene8)', 1200);


     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc7Active = false;
     sc8Active = true;

     sc8SinkCar();

 }


 // ===========================  EIGTH SCENE ======================================
 // ================================================================================
 let scene8 = document.querySelector("#sc-8");
 let sc8Active = false;
 let sc8Car = document.querySelector(".sc-8-object-2");
 let sc8Swamp = document.querySelector(".sc-8-object-1");
 let sc8Lights = document.querySelector(".sc-8-object-3");
 let rainClass2 = document.querySelector(".rainClass");


 // sc8Car.addEventListener('click', sc8SinkCar);

 function sc8SinkCar() {
     fadeOut(rainClass2);
     setTimeout('finalSoundA.play()', 500);
     setTimeout('swampSoundA.play()', 1400);
     setTimeout(function () {
         sc8Swamp.classList.add("sc-8-object-1Scale");
         sc8Car.classList.add("sc-8-object-SinkCar");
         sc8Lights.classList.add("hide");
     }, 2000);
     setTimeout('fadeInSlow(creditsHeader)', 2300);
     setTimeout(leaveEightScene, 6000);


 }
 sc8Car.addEventListener("animationend", preLeaveEightScene);

 function preLeaveEightScene() {

 }



 function leaveEightScene() {
     console.log("leave eigth scene");

     //fade out audio and start next scenes audio
     rainThunderAudio.volume = .10;

     //fade out scene and fade in next one
     fadeOut(scene8);
     setTimeout('fadeIn(credits)', 3200);

     //stop all running functions from the scene for better performance
     // and unlock the functions for next scene
     sc8Active = false;
     //credits = true;

 }

 // ===========================  CREDITS ===========================================
 // ================================================================================
 let credits = document.querySelector("#credits");
 let creditsHeader = document.querySelector(".credits-header");
 let creditsNames = document.querySelector(".credits-names");
 let creditsActive = false;


 let finalSoundA = document.querySelector(".finalSoundA");
 finalSoundA.volume = .4;
 let swampSoundA = document.querySelector(".swampSoundA");
 swampSoundA.volume = .4;


 creditsHeaderRandomFlickering();

 // Neon sign random flicker with sound
 function creditsHeaderRandomFlickering() {

     // check if sceneActive is true, if so, continue, otherwhise, stop function by not calling it again
     if (creditsActive === true) {
         //adding class for animation
         creditsHeader.classList.add("credits-header-flickering");
         neonFlickerAudio.play();
         //wait some time and then remove the class for normal state (animation disabled)
         setTimeout(function () {
             creditsHeader.classList.remove("credits-header-flickering");
         }, 120);
         console.log("credits-still-active")
         //wait random to change run function again for animation
         let interval = random(121, 4000)
         setTimeout(creditsHeaderRandomFlickering, interval);
     } else {
         console.log("credits-deactivated");
     }
 }

 creditsNamesRandomFlickering();

 // Neon sign random flicker with sound
 function creditsNamesRandomFlickering() {

     // check if sceneActive is true, if so, continue, otherwhise, stop function by not calling it again
     if (creditsActive === true) {
         //adding class for animation
         creditsNames.classList.add("credits-names-flickering");
         neonFlickerAudio.play();
         //wait some time and then remove the class for normal state (animation disabled)
         setTimeout(function () {
             creditsNames.classList.remove("credits-names-flickering");
         }, 120);
         console.log("credits-still-active")
         //wait random to change run function again for animation
         let interval = random(121, 4000)
         setTimeout(creditsNamesRandomFlickering, interval);
     } else {
         console.log("credits-deactivated");
     }
 }

 console.log("Credits Scene")


 // Reload page on click
 let refreshButton = document.querySelector(".reload-button")

 creditsNames.addEventListener('animationend', function () {
     fadeIn(refreshButton);

 });

 refreshButton.addEventListener('click', function () {
     var sounds = document.getElementsByTagName('audio');
     for (i = 0; i < sounds.length; i++) {
         sounds[i].pause()
     };

     neonFlickerAudio.volume = .5;
     neonAudio.play();
     neonAudio.volume = .5;
     rainThunderAudio.play();
     rainThunderAudio.volume = .5;
     fadeOutAudio(finalSoundA);

     introRandomBates();
     introRandomVacancy();
     fadeOut(credits);
     fadeIn(intro);
     window.location.reload()
 });









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

 function fadeInSlow(element) {

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
     }, 150);
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

 // Function to preload images - using this maybe increases the user experience by not loading images when needed, but before
 function preLoadImage(imageFileName) {
     var my_image = new Image();
     my_image.src = imageFileName;
     console.log("Preload Image" + imageFileName);
 }


 let fullscreenButton = document.querySelector(".fullscreenSwitch");
 let fullScreenActive = false;
 fullscreenButton.addEventListener('click', goFullScreen)

 function goFullScreen() {
     if (!document.fullscreenElement && // alternative standard method
         !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
         if (document.documentElement.requestFullscreen) {
             document.documentElement.requestFullscreen();
         } else if (document.documentElement.msRequestFullscreen) {
             document.documentElement.msRequestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
             document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
             document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
     } else {
         if (document.exitFullscreen) {
             document.exitFullscreen();
         } else if (document.msExitFullscreen) {
             document.msExitFullscreen();
         } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
         } else if (document.webkitExitFullscreen) {
             document.webkitExitFullscreen();
         }
     }

 }


 // Switch button in the beginning to hide or display the rain
 // based on the status of rainActive
 let rainSwitch = document.querySelector(".rainSwitch input")
 let rainActive = true;
 let rainClass = document.querySelectorAll(".rain");

 rainSwitch.addEventListener('click', rainStatus);

 function rainStatus() {
     if (rainActive == true) {
         var n = rainClass.length;
         for (var i = 0; i < n; ++i) {
             rainClass[i].classList.add("hide");
         }
         rainActive = false;
         console.log("RAIN DE-ACTIVATED")

     } else {
         var n = rainClass.length;
         for (var i = 0; i < n; ++i) {
             rainClass[i].classList.remove("hide");
         }
         rainActive = true;
         console.log("RAIN DE-ACTIVATED")


     }
     console.log(rainActive);
 }

 /*if (rainActive === true) {

          return;
      } else if (rainActive === false){
          var n = rainClass.length;
          for (var i = 0; i < n; ++i) {
              rainClass[i].classList.remove("hide");
          }
          rainActive = true;
          console.log("RAIN ACTIVATED")
          return;
      }




  /* OLIIIIIIVVIIIIIIAAAAAAAAAAA START*/









 /* OLIIIIIIVVIIIIIIAAAAAAAAAAA END*/
