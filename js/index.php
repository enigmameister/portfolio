<!DOCTYPE HTML>
<html lang = "en">
<head>
<title>Lukasz Jowik - Portfolio</title>
<meta charset="utf-8">
<link href="favicon.ico" rel="icon" type="image/x-icon"/>
<meta name="description" content="Frontend developer">
<meta name="keywords" content="Lukasz Jowik, Jowik, HTML, CSS, JAVASCRIPT, JS, jquery, rwd, portfolio, frontend, front end, layout">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="" id="theme_css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Jua" rel="stylesheet"> 
</head>

<body>
<div class="container">
	<header>

		<div class="container-logo">
			<a href="index.html"></a>Łukasz Jowik
		</div>

			<div class="toggle-theme">
				<i class="fas fa-fill-drip"></i>
			</div>

				<div class="theme-picker">
					<div class="theme-closepicker">
						<button id="theme-close">X</button>
                  </div>
					<button id="theme-default" onclick="swapStyleSheet('css/style.css')"></button>
                    <button id="theme-red" onclick="swapStyleSheet('css/style-red.css')"></button>
                    <button id="theme-lime" onclick="swapStyleSheet('css/style-lime.css')"></button>
					<button id="theme-white" onclick="swapStyleSheet('css/style-white.css')"></button>
				</div>

				<div class="toggle-lang">
					<i class="fa-solid fa-language"></i>
				</div>

				<div class="lang-picker">
					<div class="lang-closepicker">
						<button id="lang-close">X</button>
					</div>

				<button onclick="changeLanguage('en')" id="lang-en"><img src="lang-en.png" alt="en" width="20" height="20"></button>
				<button onclick="changeLanguage('pl')" id="lang-pl"><img src="lang-pl.png" alt="pl" width="20" height="20"></button>
				<button onclick="changeLanguage('ua')" id="lang-ua"><img src="lang-ua.png" alt="ua" width="20" height="20"></button>
				<button onclick="changeLanguage('de')" id="lang-de"><img src="lang-de.png" alt="de" width="20" height="20"></button>
			</div>

            <nav><ul>	<!-- Main menu -->
				<li><a href="#" class="active" id="h_nav">Home</a></li>
				<li><a href="#" id="a_nav">About Me</a></li>
				<li><a href="#" id="p_nav">Portfolio</a></li>
				<li><a href="#" id="c_nav">Contact</a></li>
            </ul></nav> <!-- Main menu ends -->  
			
         <div class="toggle-menu">
              <span></span>
              <span></span>
              <span></span>
        </div>

    </header>  
	 
	    <main>
		    <h1 id="welcomeText">Welcome</h1>
<div class="animation">  
		<span>Acuracy.</span><span>Clean code.</span><p></p>
		<span>Passion.</span><span>Idea and unique projects.</span><p></p>
		<span>Talk is cheap.</span><span>Show me the code.</span><p></p>
</div>
	    </main>
			<button type="button" id="btn-go"><i class="fas fa-arrow-circle-down"></i><span id="goText"> START </span></button>
</div> <!-- conteiner ends-->

<div class="scroll-up"><i class="fas fa-arrow-circle-up"></i></div> <!-- scrolling arrow-->

<div class="about">
<div class="about-content">
<h2 id="aboutText">About Me</h2>
<p id="aboutText2">My name is Łukasz and Im 29 years old. 
In my free time i like to program, its my passion and i think its a lot of fun to do.
Im not horrible at computer related things and tend to pick it up fast.
In addition to work I like to play sports in my free time and listen to "good" music.
Actually not hiring anywhere (in IT), just improving my skills and discover new technologies.</p>

</div>

</div>

<div class="portfolio"> <!-- porfolio-->
	<div class="projects-box">
		<h2 id="portfolioText">Projects</h2>
		<div class="projectsConteiner">
	
	<div class="project"> <!-- project1-->
			<div class="overlay"><a href="www.lukaszjowik.pl">
					<div class="content">
							Portfolio <span><i class="fab fa-html5"></i>
                			<i class="fab fa-css3-alt"></i>
                		<i class="fab fa-js-square"></i></span>
					</div>
				</a>
			</div>
	</div>

	<div class="project"> <!--project2-->
		<div class="overlay"><a href="https://youtu.be/wF1GMU11w-4">
				<div class="content">
							R1SEN Demo<span><i class="fab fa-unity"></i>
						<i class="fa-solid fa-c">#</i>
                	</span>
				</div>
			</a>
		</div>
	</div>                

	<div class="project"> <!--project3-->
		<div class="overlay">
			<div class="content">
				Project .3 <span></span>
			</div>
		</div> 
	</div>             

	<div class="project"> <!--project4-->
		<div class="overlay">
			<div class="content">
				Project.4 <span></span>
			</div>
		</div>        
	</div> 

	<div class="project"> <!-- project5-->
		<div class="overlay">
			<div class="content">
				Project.5 <span></span>
			</div>
		</div>
	</div>               

	<div class="project"> <!--project6-->
		<div class="overlay">
			<div class="content">
				Project.6 <span></span>
			</div>
		</div>
	</div>               

	<div class="project"> <!--project7-->
		<div class="overlay">
			<div class="content">
				Project.7 <span></span>
			</div>
		</div> 
	</div>                 

	<div class="project"> <!--project8-->
		<div class="overlay">
			<div class="content">
				Project.8 <span></span>
			</div>
		</div>     
	</div>

	<div class="project"> <!--project9-->
		<div class="overlay">
			<div class="content">
				Project.9 <span></span>
			</div>
		</div> 
	</div>  

		</div> <!--porfolio-container-->
	</div>	<!-- portfolio-box-->
</div> <!-- portfolio end -->



<div class="contact">

		<div class="contact-box">
			<form action="send_email.php" method="get">
				<h1 id="contactText">Contact</h1>

				<input type="text" name="name" id="contactName" required placeholder="Your name" autocomplete="off">
				<input type="email" name="mail" id="contactMail" required placeholder="Your email" autocomplete="off">
				<input type="text" name="subject" id="contactSubject" reguired placeholder="Subject" autocomple="off">
				<textarea name="msg" id="contactMsg" placeholder="Your Messange" autocomplete="off"></textarea>
				<p><input type="submit" id="contactSubmit" value="Submit"></p>
			</form> 
		</div> 
	
		<footer>
			<p> Website created by Lukasz Jowik (c)</p>
				<div class="icon-container">          <!-- Icon + link-->
					<a href="https://github.com/enigmameister" target="_blank"> 
						<i class="fa-brands fa-github"></i>
					</a>
		
					<a href="https://steamcommunity.com/id/Enigmameister/" target="_blank"> 
						<i class="fa-brands fa-steam"></i>
					</a>
					
					<a href="https://www.facebook.com/lukasz.jowik9/" target="_blank">
						<i class="fa-brands fa-facebook"></i>
					</a>
		
					<a href="https://www.youtube.com/channel/UConkqw2xpHLUkpDb8YB_AGg" >
						<i class="fa-brands fa-youtube"></i>
					</a>
				</div>
		</footer>

</div>
<script src="js/jquery.js"></script><script src="js/scripts.js"></script>
</body>
</html>