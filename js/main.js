$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger)


  if(document.querySelector(".splide__health") != null)
  {
    var splide = new Splide( '.splide__health', {
      type   : 'loop',
      focus  : 'center',
      perPage: 2,
      autoWidth:true,
      breakpoints: {
        780: {
          perPage:1,
          autoWidth:false,
        },
      }
    } );
    splide.mount();
  }

  if(document.querySelector(".splide__review") != null)
  {
    
    var spliderev = new Splide( '.splide__review', {
      type   : 'loop',
      focus  : 'center',
      perPage: 2,
      autoWidth:true,
      drag   : 'free',
      autoScroll: {
        speed: 1,
      }
    } );
    spliderev.mount(window.splide.Extensions );
  }
 
    let firstsection = document.querySelectorAll(".animate-heading-first");
    firstsection.forEach(function (elem, index) {
      const text = new SplitType(elem);
      let textwords = text.words;
      
      gsap.from(textwords, {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        ease: Power3.out,
        stagger: 0.05,
        scrub: 0.25
      });
    });

    let totalSection = document.querySelectorAll(".animate-heading");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelector(".animate-header"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: textwords,
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "restart none none reverse"
        },
        duration: 1,
        opacity: 0,
        yPercent: 100,
        ease: Power3.out,
        stagger: 0.15,
      });

      var ch = elem.querySelectorAll(".animate-child");
      if(ch.length > 0)
      {
        ch.forEach(function (elemc, index) {
        var delay = elemc.getAttribute("delay");
        delay = delay == null ? 0.25 : delay
        gsap.from(elemc, {
              scrollTrigger: {
                trigger: elemc,
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "restart none none reverse"
              },
              duration: 1,
              opacity: 0,
              yPercent: 50,
              ease: Power3.out,
              stagger: 0.15,
              delay: delay
            });
        })
      }


      var fade = elem.querySelectorAll(".animate-child-fade");
      if(fade.length > 0)
      {
        fade.forEach(function (elemf, index) {
        var delay = elemf.getAttribute("delay");
        delay = delay == null ? 0.25 : delay
        gsap.from(elemf, {
              scrollTrigger: {
                trigger: elemf,
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "restart none none reverse"
              },
              duration: 1,
              opacity: 0,
              ease: Power3.out,
              stagger: 0.15,
              delay: delay
            });
        })
      }


    });



    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get the email input value
      const email = document.getElementById("email").value;
      const phone  = document.getElementById("phone").value;
      const lastname = document.getElementById("lastname").value; 
      const firstname  = document.getElementById("firstname").value;
      
     
      // Send AJAX request to your API
      fetch("https://seal-app-2-2v33o.ondigitalocean.app/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({text :  "Altor Crossfit New Contact : \n Firstname: "+firstname+"\n Lastname: "+lastname+"\n Email: "+email+"\n Phone:"+phone })
      })
      .then(response => response.json())
      .then(data => {
        $("#contact-form").css("display", "none");;
        $("#message").css("display", "block");;
         
      })
      .catch(error => {
          
        $("#contact-form").css("display", "none");;
        $("#message").css("display", "block");;
      });
  });

  


});