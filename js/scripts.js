$(document).ready(function() { 
/* 
MENÚS
=============================================================
*/
// Menús activos
  function menuActivos () {
    if ($("body").is("#home"))
    {
        $('.menu-home').addClass("active");  
    }

    if ($("body").is("#menu"))
    {
        $('.menu-').addClass("active");  
    }

    if ($("body").is("#menu"))
    {
        $('.menu-').addClass("active");  
    }

    if ($("body").is("#menu"))
    {
        $('.menu-').addClass("active");  
    }

    if ($("body").is("#contacto"))
    {
        $('.menu-contacto').addClass("active");  
    }

  }

  menuActivos();

// Cerrar menú móvil al click
    $('.nav li a').click(function(){
        $('.navbar-collapse').removeClass('in');
    });

/* 
FORMULARIO
=============================================================
*/
    $('#contactForm').submit(function( event ) {
        // console.log( "Handler for .submit() called." );
        event.preventDefault();

        var contact = $(this);
        var method = 'POST';
        var url = 'form.php'
        var dataString = contact.serialize();

        $.ajax({
            type: method,
            url : url,
            data : dataString,
            success : function(data){
            console.log(data);
            contact[0].reset();

            if (data == 1) {
                contact.addClass('hide-form');
                $('#contactForm button').addClass('opac');
                $('#contactForm svg').addClass('opac');
                $("#contactForm button").addClass('false-click');

                $('#retro').html('Gracias por tu mensaje, nos pondremos en contacto contigo a la brevedad.');
            } else {
                contact.addClass('hide-form');
                $('#contactForm button').addClass('opac');
                $('#contactForm svg').addClass('opac');

                $('#retro').html('Hubo un problema, intenta mas tarde.');
            }

            $('#retro').show();

            }
        })

        .fail(function() {
         });

      });

      $('#contactForm').keydown(function(e) {
        if (e.keyCode == 13) {
            $("#contactForm button").click();
        }
      });

/* 
VARIOS
=============================================================
*/
/*************** Slider ***************/
// Tiempo entre cada slide
    $('.carousel').carousel({
        interval: 6000
    })

// Soporte touch para móviles
    $(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;

        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $(".carousel").carousel('prev');
            }
        });

        $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });  

// Botón Arriba
    // $('.boton-arriba').localScroll({
    //     target:'body'
    // });

// Abrir acordeones
    // var anchor = window.location.hash.replace("#", "");
    // $(".collapse").collapse('hide');
    // $("#" + anchor).collapse('show');

// Abrir tabs específicas con una liga
    (function activateTabFromHash() { if (location.hash) { var tabLink = document.querySelector('a[href="' + location.hash + '"]'); if (!tabLink) { return false; } tabLink.click(); if (location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    } } })();

// Detener un video en el modal (colocar el ID del modal)
    $("#modal").on('hidden.bs.modal', function (e) {
        $("#modal iframe").attr("src", $("#modal iframe").attr("src"));
    });

// Liga de teléfonos en móvil
    // if(isMobile.phone) {
    //     $('.tel-num').each(function() {
    //         $(this).replaceWith(
    //             $('<a href="tel:' + this.innerHTML + '">' + this.innerHTML + '</a>')
    //         );
    //     });
    // }
});
