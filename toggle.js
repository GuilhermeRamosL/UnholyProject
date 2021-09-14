//Gen0 Toggle
$(document).ready(function(){
    $('.vt-gen0').toggle();
    $('.vt-gen1').toggle();
    $('.vt-gen2').toggle();
    $('.gamers-card').toggle();
    $('.vt-gen3').toggle();
    $('.vt-gen4').toggle();
    $('.vt-gen5').toggle();

    $('#gen0-card').on('click', ()=> {
           $('.vt-gen0').toggle(1000);
           $('.cards-display').toggle();
    });

    $('#gen1-card').on('click', ()=> {
           $('.vt-gen1').toggle();
           $('.cards-display').toggle();
    });

    $('#gen2-card').on('click', ()=> {
           $('perfil').toggle();
           $('.cards-display').toggle();
    });

    $('#gamers-card').on('click', ()=> {
           $('perfil').toggle();
           $('.cards-display').toggle();
    });

    $('#gen3-card').on('click', ()=> {
           $('perfil').toggle();
           $('.cards-display').toggle();
    });

    $('#gen4-card').on('click', ()=> {
           $('perfil').toggle();
           $('.cards-display').toggle();
    });

    $('#gen5-card').on('click', ()=> {
           $('perfil').toggle();
           $('.cards-display').toggle();
    });

    $('.perfil-0').on('click', ()=> {
           $('.vt-gen0').toggle();
           $('.cards-display').toggle();
        });

    $('.perfil-1').on('click', ()=> {
           $('.vt-gen1').toggle();
           $('.cards-display').toggle();
        });

    $('.perfil-2').on('click', ()=> {
           $('.vt-gen2').toggle();
           $('.cards-display').toggle();
        });
       
    });
    