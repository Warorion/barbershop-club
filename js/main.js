new WOW({    animateClass: 'animate__animated',}).init();$(document).ready(() => {    $('#masters-slick').slick({        centerMode: true,        centerPadding: '0',        slidesToShow: 3,        slidesToScroll: 1,        dots: true,        variableWidth: true,        infinite: true,        lazyLoad: 'progressive',        responsive: [            {                breakpoint: 1024,                settings: {                    arrows: false,                    centerMode: true,                    centerPadding: '0',                    slidesToShow: 1,                    slidesToScroll: 1,                    speed: 1                }            },            {                breakpoint: 480,                settings: {                    arrows: true,                    centerMode: true,                    centerPadding: '0',                    slidesToShow: 1,                    dots: false,                    speed: 1                }            }        ]    });    $('#discount-btn').click(()=>{        $('#discount-popup-container').css('display','flex');    });    $('#discount-close').click(()=>{        $('#discount-popup-container').hide();    });    $('.open-reservation').click(()=>{        $('#request').css('display', 'flex');    });    $('#request-close-img, #request').click((e)=>{        if(e.target.id === 'request' || e.target.id === 'request-close-img') {            $('#request').hide();        }    });    let name = $('#name');    let service= $('#service-option');    let date = $('#date');    let phone = $('#number');    let master = $('#reserve-master');    let time = $('#time');    $('#reserve-button > button').click(()=>{        let error = 0;        let nameError = $('#name-error');        let inputName = $('#input-name');        if(!name.val()) {            error = 1;            nameError.show();            inputName.css('borderColor', 'red');        } else {            nameError.hide();            inputName.css('borderColor', 'rgb(174, 137, 89)');        }        let servError = $('#service-error');        let inputService =  $('#input-service');        if(!service.val()) {            error = 1;            servError.show();            inputService.css('borderColor', 'red');        } else {            servError.hide();            inputService.css('borderColor', 'rgb(174, 137, 89)');        }        let dateError = $('#date-error');        let inputDate = $('#input-date');        if(!date.val()) {            error = 1;            dateError.show();            inputDate.css('borderColor', 'red');        } else {            dateError.hide();            inputDate.css('borderColor', 'rgb(174, 137, 89)');        }        let phoneError = $('#phone-error');        let inputPhone = $('#input-phone');        if(!phone.val()) {            error = 1;            phoneError.show();            inputPhone.css('borderColor', 'red');        } else {            phoneError.hide();            inputPhone.css('borderColor', 'rgb(174, 137, 89)');        }        let masterError = $('#master-error');        let inputMaster = $('#input-master');        if(!master.val()) {            error = 1;            masterError.show();            inputMaster.css('borderColor', 'red');        } else {            masterError.hide();            inputMaster.css('borderColor', 'rgb(174, 137, 89)');        }        let timeError = $('#time-error');        let inputTime = $('#input-time');        if(!time.val()) {            error = 1;            timeError.show();            inputTime.css('borderColor', 'red');        } else {            timeError.hide();            inputTime.css('borderColor', 'rgb(174, 137, 89)');        }        if(error === 0) {            $.ajax({                type: 'post',                url: 'mail.php',                data: 'name=' + name.val() + '&service' + service.val() + '&date=' + date.val() + '&phone' + phone.val() +                    '&master=' + master.val() + '&time=' + time.val(),                success: () => {                    $('#reservation-content').hide();                    $('#reservation-send').show();                },                error: () => {                    $('#request').hide();                    alert('Ошибка сервера. Запись не удалась. Свяжитесь с нами по номеру телефона.')                },            })        }    })    $('#burger').click(() => {        $('#header').toggleClass('menu-open');    })    $('#menu .menu-item').click(() => {        $('#header').removeClass('menu-open');    })});