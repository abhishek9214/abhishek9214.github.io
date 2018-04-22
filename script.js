$(document).ready(() => {

    $('.js--about').waypoint((direction)=>{
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '80px'
    });

    $('nav').waypoint((direction)=>{
        if (direction == "down") {
            $('.resume-contents').css({
                'border': 'none',
                'color' : '#950740',
                'background-color':'rgba(255,255,255,0.7)',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s'
            });
            $('.resume-download').css({
                'border': '2px solid rgba(64,64,64)',
                'color': 'rgba(64,64,64)',
                'background-color': 'rgba(255,255,255,0.7)',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s, padding 0.2s'
            });
        }
        else {
            $('.resume-contents').css({
                'border': '4px solid #fff',
                'color' : '#eee',
                'background-color':'transparent',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s'                
            });
            $('.resume-download').css({
                'border': '2px solid whitesmoke',
                'color': '#eee',
                'background-color': '#e67e22',
                'transition': 'border 0.2s, color 0.2s, background-color 0.2s, padding 0.2s'
            });
        }
    },{
        offset: '450px'
    })
});