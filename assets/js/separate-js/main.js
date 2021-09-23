
"use strict";
if (window.innerWidth > 1200) {
    var docWidth, docHeight, docScroll, homeresize, cases_canvas, render;
    var _class = '';
    var _href = '';
    var page;
    var link;
    var music_sound = document.getElementById('music_sound');
    var music_close = document.getElementById('music_close');
    var music_hover = document.getElementById('music_hover');
    var music_open = document.getElementById('music_open');
    var music_click = document.getElementById('music_click');
    music();
}
if (window.innerWidth < 720) {
    var docWidth, docHeight, docScroll, homeresize, cases_canvas, render;
    var _class = '';
    var _href = '';
    var page;
    var link;
    $('.txta').appendTo($('.json'));
}
$(document).ready(function() {
    resize();
    $('.title span, .cases_title span').each(function() {
        var _text = $(this).text();
        $(this).html('<span class="hide">' + _text + '</span>')
    });
    
    if (docWidth < 1200) {
        $('video').each(function () {
            $(this).attr('controls', 'true');
        })
    }
    });
    $(window).resize(function() {
    resize()
    });

$(document).scroll(function() {
    docScroll = $(window).scrollTop();
    if (docScroll > 100 && docScroll < $(document).height() - docHeight - 100) {
        $('.header_logo span, .social, .email, .head_scroll').addClass('hide');

    } else {
        $('.header_logo span, .social, .email, .head_scroll').removeClass('hide');
    }
    if (docScroll > 100) {
        $('.header_logo span, .email, .head_scroll').addClass('hide');
    }

    var _classNext = '';
    var _hrefNext = '';
    var _cases = '';
    $('.section').each(function() {
        var _top = $(this).offset().top;
        if (docScroll > _top - docHeight / 2) {
            _classNext = $(this).data('class');
            _hrefNext = $(this).data('id');
        }
    });
    $('.cases_item:visible').each(function() {
        var _top = $(this).offset().top;
        if (docScroll > _top - docHeight / 2) {
            _cases = $(this);
        }
    });
    $('.cases_item').removeClass('active');
    if (_cases) _cases.addClass('active');
    if (_href != _hrefNext) {
        _href = _hrefNext;
        if (_class != _classNext) {
            _class = _classNext;
            $('body').removeClass().addClass(_class);
        }
        $('.header_text').removeClass('active');
        $('.section').removeClass('active');
        $('#' + _href).addClass('active');
        $('.' + _href + '-text').addClass('active');
        $('.menu_in-page li').removeClass('active');
        $('.menu_in-page a[href="#' + _href + '"]').parent().addClass('active');
    }
    $('.cases_line').each(function() {
        var _this = $(this);
        var translate = _this.next().offset().top - docScroll - (docHeight / 2 - _this.next().height() / 2);
        _this.css({
            transform: 'translateY(' + translate / 5 + 'px)'
        });
    });

    $('video').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + docHeight > offset && docScroll < offset + $(this).height() && docWidth > 1200) {
            $(this)[0].play();
        }
        else {
            $(this)[0].pause();
        }
    });
    $('.head').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + 300 > offset) {
            $(this).removeClass("border");
        }

    });
    link = $('.link-next').last().attr('href');

    if ($('.case') && page != link && window.location.pathname != link && docScroll > $(document).height() - docHeight - 100) {

        page = link;
        $('.end-load').load(link + ' #case', function () {
            var html = $('.end-load .case').html();
            $(this).before(html).remove();
            $('.head').each(function () {
                $(this).addClass('border');
            });
            $("img.img_cases").each(function () {
                var src = $(this).data('src');
                $(this).attr('src', src);
            });
        });

    }

    $('.case-anim').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + docHeight * .7 > offset) {
            $(this).addClass("active");
        }
        else {
            $(this).removeClass('active');
        }
    });

});

function resize() {
    docWidth = $(window).width();
    docHeight = $(window).height();
    docScroll = $(window).scrollTop();
    if (homeresize != null) {
        homeresize();
    }
}
$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        if ($('.menu_open.active').length) {
            if (window.innerWidth > 1200) {
                music_close.play();
            }
            $('.menu_ico').fadeIn();
            $('.menu_open').removeClass('active');
            setTimeout(function() {
                $('body').removeClass('hidden');
            }, 500);
        }
    }
});

$('.menu_ico').mousemove(function() {
    $('.menu').addClass('hover');
    $('.header_left').addClass('hover');
});
$('.menu_ico').hover(function() {
    $('.menu').addClass('hover');
    $('.header_left').addClass('hover');
}, function() {
    $('.menu').removeClass('hover');
    $('.header_left').removeClass('hover');
});
$('.menu_ico, .header_tab_menu').click(function() {
    $(this).fadeOut();
    $('.menu_open ').addClass('active');
    $('body').addClass('hidden');
    if (homeresize != null) {
        $('.section').each(function() {
            var _top = $(this).offset().top;
            if (docScroll > _top - docHeight / 2) {
                var _e = $(this).find('.section_title_text').eq(0);
                $('.other-2').css('top', _e.offset().top - docScroll).text(_e.text());
            }
        });
    }

});
$('.menu_open_close').click(function() {
    if (window.innerWidth > 1200) {
        music_close.play();
    }
    if ($('.menu_open.active').length) {
        $('.menu_ico').fadeIn();
        $('.menu_open').removeClass('active');
        setTimeout(function() {
            $('body').removeClass('hidden');
        }, 500);
    }
});
$('.menu_in-page a').click(function() {
    var href = $(this).attr('href');
    var _e = $(href).find('.section_title_text').eq(0);
    $('.other-2').fadeOut(300, function() {
        $(this).css('top', _e.position().top).text(_e.text()).fadeIn(300, function() {
            $('.menu_ico').fadeIn();
            $('.menu_open').removeClass('active');
            setTimeout(function() {
                $('body').removeClass('hidden');
            }, 500);
        });
    });


});

$('.open_ul').click(function() {
    var _t = 0;
    $(this).parent().toggleClass('open').find('ul').slideToggle().find('a').each(function() {
        var _this = $(this);
        setTimeout(function() {
            _this.toggleClass('open');
        }, _t++ * 100);
    });
});

$('.careers_item').click(function() {
    $('.careers_item').removeClass('active');
    $('.careers_content').stop().slideUp();
    $(this).addClass('active').next().stop().slideDown();
});


function music() {
    $('a, .services_item, .header_sound, .menu_open_close, .open_ul, .careers_item, .menu_ico').mouseenter(function() {
        music_hover.play();
    });

    $('a,.menu_ico, .services_item, .header_sound, .menu_open_close, .open_ul, .careers_item').click(function() {
        music_click.play();
    });
    $('.careers_item, .cases_link, .menu_ico ').click(function() {
        music_open.play();
    });

    $('.header_sound').click(function() {
        $('.header_sound').toggleClass('mute');
        if ($('.header_sound').hasClass('mute')) {
            music_sound.pause();
            document.cookie = "sound = off";
        } else {
            music_sound.play();
            document.cookie = "sound = on";
        }
    });

}

function musicRender() {

    document.cookie = "musicRender = " + music_sound.currentTime;
    requestAnimationFrame(musicRender);
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp (
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

$(document).on('click', '.btn', function(e) {
    e.preventDefault();
    $('#form').addClass('active');
    $('input.f').click().focus();
    $('form,#form .btn ,#form .title:not(.center)').show(); 
    $('#form .title.center').hide();
});
$('.form_close').click(function(e) {
    e.preventDefault();
    $('#form').removeClass('active');
});


$(document).on('click', '#form .btn', function(e) {
    $("form").submit();
});

$(document).on('submit', "form.json", function(e) {
    e.preventDefault();
    var error = false;
    $(this).find('.form-group').each(function() {
        if ($(this).hasClass('required')) {
            var input = $(this).find("input");
            if (input.val() == '') {
                input.parent().addClass('has-error');
                error = true;
            } else {
                input.parent().removeClass('has-error');
            }
        }
        if ($(this).find("input.mail").length) {
            var email = $(this).find("input.mail");

            if (!validateEmail(email.val())) {

                email.parent().addClass('has-error');
                error = true;
            } else {
                email.parent().removeClass('has-error');
            }
        }
    });
    if (error == true) {
        return false;
    }
    var _this = this;
    var _data = $(this).serialize();
    var _action = $(this).attr('action');
    $.post(
        _action,
        _data,
        onAjaxSuccess(_this)
    )
});

function onAjaxSuccess(el) {
    $('form,#form .btn ,#form .title:not(.center)').hide();
    $('#form .title.center').fadeIn('400');
    $('.form-control').val('')
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[­[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

formLable()

function formLable() {
    $('.form-control').each(function() {
        if ($(this).val() != '') $(this).parent().addClass('focus');
    });
    $('.form-control').blur(function() {
        if ($(this).val() == '') $(this).parent().removeClass('focus');
    });
    $('.form-control').focus(function() {
        $(this).parent().addClass('focus');
    });
    $('.form-control').mouseover(function() {
        if ($(this).val() != '') $(this).parent().addClass('focus');
    });
}


var _font = "300px Gotham Pro Bold";


var homeresize = function () {
    $('.section_title').height(docHeight);
    $('.menu_open_content').width(docWidth);
    var _classNext = '';
    $('.section').each(function () {
        var _top = $(this).offset().top;
        if (docScroll > _top - docHeight / 2) {
            var _e = $(this).find('.section_title_text').eq(0);
            _classNext = $(this).data('class');
            $('.other-2').css('top', _e.offset().top - docScroll).text(_e.text());
        }
    });
    $('body').removeClass().addClass(_classNext);
    $('.careers_text').css('column-gap', $('.wrapper').width() / 12);
    if (window.innerWidth > 1200) {
        requestAnimationFrame(cases_canvas);
    }
};


function cases_canvas() {

    if (docWidth < 1600) {
        _font = "200px Gotham Pro Bold";
    }

    $('.cases_image').each(function () {
        $('.cases_item').not('fade').show();
        $(this).addClass('load');

        if ($(this).width() / $(this).height() > $(this).find('img').width() / $(this).find('img').height()) {
            $(this).find('img').height('auto');
            $(this).find('img').width('100%');
        }
        else {
            $(this).find('img').width('auto');
            $(this).find('img').height('100%');
        }

        $('.cases_item:gt(3)').not('fade').hide();

    });

    $('.cases_canvas').each(function () {
        $('.cases_item').not('fade').show();
        var _this = this;
        var img = $(this).prev();
        _this.width = img.width();
        _this.height = img.height();
        var ctx = _this.getContext('2d');
        var pic = new Image();
        pic.src = img.attr('src');
        pic.onload = function () {
            ctx.globalCompositeOperation = 'source-out';
            ctx.font = _font;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText($(_this).data('text'), _this.width / 2, _this.height / 2);
            ctx.drawImage(pic, 0, 0, _this.width, _this.height);
            $('.cases_image').removeClass('load');
            if (window.innerWidth > 1200) {
                $('.cases_item:gt(3)').not('fade').hide();
            }
        };
    });

}

$('.cases_link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('fader');
    $('.cases_item:gt(3)').toggle().toggleClass('fade');
    $(document).scroll();
    $('html,body').animate({scrollTop: $('.cases_item').eq(3).offset().top + $('.cases_item').eq(3).height() / 2});
});
var wi = 0;
$('.head_title_text').each(function () {
    wi += $(this).width() / $('.head_title_text').length;
    $('.head_title_span').width(wi);
});

var _count = 0;
loadProces(_count += 10);
$("img").one("load", function () {
    var len = document.getElementsByTagName('img').length;
    loadProces(_count += (60 / len));
});
function loadProces(_count) {
    $('.count').each(function () {
        $(this).stop().prop('Counter', $(this).text()).animate({
            Counter: _count
        }, {
            duration: 4000,
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
if (music_sound != null) {
    if (getCookie('sound') == 'off') {
        $('.header_sound').addClass('mute');
        $('.offf span').text('sound off');
    }
}
window.onload = function () {
    if (window.innerWidth > 1200) {
        if (getCookie('musicRender')) {
            music_sound.currentTime = getCookie('musicRender');
            if (music_sound != null) {
                if (getCookie('sound') == 'off') {
                    $('.header_sound').addClass('mute');
                    $('.offf span').text('sound off');
                }
                else {
                    music_sound.play();
                } 
            }
        }
        musicRender()

    }
    if (render) {
        render();
    }
    $('html,body').scrollTop(0).addClass('hidden');
    $('.count').each(function () {
        $(this).stop().prop('Counter', $(this).text()).animate({
            Counter: 100
        }, {
            duration: 4000,
            step: function (now) {
                $(this).text(Math.ceil(now));
                if (now == 100) {
                    if (music_sound != null) {
                        if (getCookie('sound') == 'off') {
                            $('.header_sound').addClass('mute');
                            $('.offf span').text('sound off');

                        }
                        else {
                            music_sound.play();
                        }

                    }
                    $(this).fadeOut(function () {

                        $('#load').removeClass('active');
                        setTimeout(function () {

                            $('#load').hide();
                            $("img.img_cases").each(function () {
                                var src = $(this).data('src');
                                $(this).attr('src', src);
                            });
                            $('html,body').removeClass('hidden');
                            if (render) {
                                if (window.location.hash) {
                                    $('html,body').animate({scrollTop: $(window.location.hash).offset().top})
                                }
                                time();
                                resize();
                                canvas.setAttribute('width', docWidth);

                            }

                        }, 1000)
                    });
                }
            }
        });
    });
    if (window.innerWidth > 1200) {
        if (cases_canvas != null) {
            cases_canvas()
        }
    }
};