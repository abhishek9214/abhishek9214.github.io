$(document).ready(() => {

    $('.js--about').waypoint((direction) => {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '80px'
        });

    $('nav').waypoint((direction) => {
        if (direction == "down") {
            $('.resume-contents').css({
                'border': 'none',
                'color': '#950740',
                'background-color': 'rgba(255,255,255,0.7)',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s'
            });
            $('.resume-download').css({
                'border': '2px solid rgba(64,64,64)',
                'color': '#404040',
                'background-color': 'rgba(255,255,255,0.7)',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s, padding 0.2s'
            });
        }
        else {
            $('.resume-contents').css({
                'border': '4px solid #fff',
                'color': '#eee',
                'background-color': 'transparent',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s'
            });
            $('.resume-download').css({
                'border': '2px solid whitesmoke',
                'color': '#eee',
                'background-color': '#e67e22',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s, padding 0.2s'
            });
        }
    }, {
            offset: '450px'
        });

    var noOfmails = 0;
    $('.contact-button').click(() => {
        var contactName = document.getElementById('contact-name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        console.log(contactName);
        console.log(email);
        console.log(message);

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById("demo").innerHTML = this.responseText;
                console.log(this.responseText);
            }
        };

        xhttp.open("POST", "https://afternoon-stream-61459.herokuapp.com/sendMail", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("contactName="+contactName+"&email="+email+"&message="+message);

    })

    // $('.js-clickAbout').click(function() {
    //     $('html,body').animate({scrollTop: $('.js--about').offset.top}, 1000)
    // });
});