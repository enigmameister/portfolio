$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(2)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(4)").delay(800).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(5)").delay(800).animate({ "left":"0%"}, 700 ); 
$(".animation span:nth-child(7)").delay(1600).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(8)").delay(1600).animate({ "left":"0%"}, 700 ); 

$('.scroll-btn').on('click', function(event) {
    event.preventDefault();
  
    const scrollTo = $(this).data('scroll-to');
    
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top
    }, 'slow');
  });
  
  $(document).ready(function() {
    $('#btn-home').click(function(event) {
      event.preventDefault();
      
      $(".about").fadeTo(50, 0, function() {
        $('html, body').animate({ scrollTop: 0 }, 0);
        $(this).fadeTo(1000, 1);
      });
    });
  });

$(document).ready(function()
{
                  $('.toggle-menu').click(function()
                  {
                    $('nav').toggleClass('active')
                  })
        })

$(document).ready(function()
{
                  $('nav ul li a').click(function()
                  {
                    $('nav').removeClass('active')
                  })
        })

$(document).ready(function()
{
	$('.toggle-menu').click(function()
    {
		$(this).toggleClass('open');
	});
});

$(document).ready(function()
{
	$('nav').click(function()
    {
		$('.toggle-menu').removeClass('open');
	});
});

$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );

let wel1 = document.getElementsByClassName('animation');
	
$(document).ready(function()
{
  $(window).scroll(function()
  {
    let scroll = $(window).scrollTop();
      if (scroll > 50) 
      {
        $("header").css({"display":"none"});
          $(".scroll-up").css({"display":"block"});
      }

      else
     {
          $("header").css({"display":"block"});  
          $(".scroll-up").css({"display":"none"}); 
          $(".scroll-down").css({"display":"none"});  
      }  
  })
})

$(".scroll-up").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        500);
	});


/* toggle theme/lang */
$('.theme-picker').hide();
$('.toggle-theme, .theme-closepicker, #theme-red, #theme-lime, #theme-white, #theme-default').click(function()
 {
    $('.toggle-theme, .theme-picker').toggle('1000')
  });


  $('.lang-picker').hide();
  $('.toggle-lang, .lang-closepicker, #lang-en, #lang-pl, #lang-ua, #lang-de').click(function() 
  {
    $('.toggle-lang, .lang-picker').toggle('1000');
  });

/* theme change session */
  let swapStyleSheet = function (sheet) 
    {
        document.getElementById('theme_css').setAttribute('href', sheet);
        storebackground(sheet);
    }

    let storebackground = function (swapstylesheet) 
    {
        localStorage.setItem("href", swapstylesheet);
    }

    let loadbackground = function () 
    {
        document.getElementById('theme_css').setAttribute('href', localStorage.getItem('href'));
    }
    window.onload = loadbackground();

/* lang change */

function changeLanguage(lang)
{
    let translations = language[lang];
    Object.keys(translations).forEach((key) => {
        $(`#${key}`).text(translations[key]);
    });
}
    let language = 
    {
        en:
        {
            h_nav: "Home",
            a_nav: "About me",
            p_nav: "Portfolio",
            c_nav: "Contact",

            welcomeText: "Welcome",
            aboutText:"About Me",
            portfolioText:"Projects",
            contactText: "Contact",

            aboutText2: "Hello, my name is Łukasz and for several years I have been interested in web programming of websites as well as computer games."+
                        "Currently, I am a third-year student of Computer Science and Econometrics with a specialization in game and VR application programming at the Frycz Modrzewski Academy in Krakow."+
                        "In free time, I actively practice martial arts and engage in various physical activities, as well as expand my knowledge of algorithms and technologies."+
                        "If you are interested in create your own project, you can go to contact section.",

            aboutText3: "My skills",

            skillsText1: "Technologies",
            skillsText2: "Frameworks",


            contactName: "Your name",
            contactMail: "Your e-mail",
            contactSubject: "Subject",
            contactMsg: "Your Messange",
            contactSubmit: "Submit",
        },

        pl:
        {
            h_nav: "Glowna",
            a_nav: "O mnie",
            p_nav: "Projekty",
            c_nav: "Kontakt",

            aboutText: "O mnie",
            portfolioText: "Projekty",
            contactText: "Kontakt",
            welcomeText: "Witaj",

            aboutText2: "Cześć, mam na imię Łukasz i od paru lat interesuje się programowaniem webowym stron internetowych, a także gier komputerowych."+ 
                         "Obecnie jestem studentem III roku Informatyki i Ekonometrii ze specjalizacją projektowanie gier i aplikacji VR, na Krakowskiej Akademii Im.Frycza Modrzewskiego w Krakowie."+
                         "W wolnym czasie czynnie trenuje sztuki walki i wszelkiego rodzaju aktywność fizyczną, a także poszerzam swoją wiedzę z algorytmiki i technologii."+
                         "Jeśli jesteś zaintersowany lub zainteresowana stworzeniem własnego projektu, zapraszam do kontaktu.",

            aboutText3: "Co potrafie",

            skillsText1: "Technologie",
            skillsText2: "Frameworki",

            aboutSkillsKnowledge1: "Rozwiązywanie problemów",
            aboutSkillsKnowledge2: "Znajomośc algorytmów",

            contactName: "Imie",
            contactMail: "Adres e-mail",
            contactSubject: "Temat wiadomosci",
            contactMsg: "Tresc wiadomosci",
            contactSubmit: "Wyslij",
        },

        ua:
        {
            h_nav: "додому",
            a_nav: "про мене",
            p_nav: "портфоліо",
            c_nav: "контакт",

            welcomeText: "Привіт",

            goText: " старт",
            aboutText:"про мене",
            aboutText2: "Привіт!, мене звати Лукаш і я вже декілька років захоплююся веб-програмуванням сторінок та комп'ютерних ігор."+ 
                         "Наразі я є студентом третього курсу комп'ютерних наук та економіки зі спеціалізацією на розробці ігор та VR-додатків в Краківській Академії імені Анджей Фрич Моджевський в Кракові."+
                         "У вільний час я активно займаюся бойовими мистецтвами та різними фізичними активностями, а також поглиблюю свої знання з алгоритміки та технологій."+
                         "Якщо ви зацікавлені у створенні власного проекту, запрошую до контакту.",
            
            aboutText3: "що я знаю:",

            skillsText1: "Технології",
            skillsText2: "Каркаси",

            portfolioText:"портфолі",
            contactText:"контакт",

            contactName: "твоє ім'я",
            contactMail: "ваша пошта",
            contactSubject: "тема",
            contactMsg: "повідомлення",
            contactSubmit: "відправити",
        },

        de:
        {
            h_nav: "Heim",
            a_nav: "Über mich",
            p_nav: "Portfolio",
            c_nav: "Kontakt",

            welcomeText: "Hallo",
            aboutText:"Über mich",
            aboutText2: "Hallo, mein Name ist Lukasz und seit einigen Jahren interessiere ich mich für das Web-Programmieren von Websites sowie Computerspielen."+ 
                         "Derzeit bin ich ein Student im dritten Jahr Informatik und Econometrics mit einer Spezialisierung auf die Gestaltung von Spielen und VR-Anwendungen an der Andrzej Frycz Modrzewski Akademie in Krakau."+
                         "In meiner Freizeit trainiere ich aktiv Kampfkünste und betreibe verschiedene körperliche Aktivitäten, sowie erweitere mein Wissen über Algorithmen und Technologie."+
                         "Wenn Sie an der Erstellung Ihres eigenen Projekts interessiert sind, lade ich Sie ein, mich zu kontaktieren.",

            aboutText3: "Fähigkeiten",

            skillsText1: "Technologien",
            skillsText2: "Framework",

            portfolioText:"Portfolio",
            contactText:"Kontakt",

            contactName: "Ihren Namen",
            contactMail: "E-mail Adresse",
            contactSubject: "Betreff der Nachricht",
            contactMsg: "Nachrichteninhalt",
            contactSubmit: "Schicken",
        }
    };

        $(document).ready(function()
        {
            changeLanguage("en");
        });

        $("#en").click(() => changeLanguage("en"));
        $("#pl").click(() => changeLanguage("pl"));
        $("#ua").click(() => changeLanguage("ua"));
        $("#de").click(() => changeLanguage("de"));