var $messages = $('.messages-content'),
    d, h, m,
    i = 0;
var informations = {
    date: null,
    object: null,
    damage: null,
    type: null
};

callback = null;

$(window).load(function() {
    $messages.mCustomScrollbar();
    setTimeout(function() {
        welcomeMessage();
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage() {
    executeCallback();
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('input[type="text"].message-input').val(null);
    updateScrollbar();
}

$('.message-submit').click(function() {
    if ($('input[type="text"].message-input').length > 0) {
        insertMessage();
    }
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        $('.message-submit').click();
        return false;
    }
})

function insertBotMessage(obj) {
    $('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + obj.text + '</div>').appendTo($('.mCSB_container'));
    obj.callback();
    updateScrollbar();
}

function welcomeMessage() {
    insertBotMessage({text:"Hey, what's going on?", callback: function () {
            askFor("img");
        }});
}

function askFor(what) {
    switch (what) {
        case 'date':
            $( function() {
                $( ".message-input" ).datepicker();
            });
            break;
        case 'object':
            insertBotMessage({text:"On which object did that damage happened?",
                callback: function() {
                    askMultipleChoice(["Object 1", "Object 2"]);
                }
            });
            break;
        case 'damage':
            break;
        case 'type':
            break;
        case 'img':
            $(".message-input").replaceWith("<input type=\"file\" class=\"message-input\" placeholder=\"Type message...\"/>");
            $(".message-submit").click(function () {
                if ($('input[type="file"]')) {
                    $('<div class="message message-personal"><img width="200" height="200" class="upload-img" /></div>').appendTo($('.mCSB_container')).addClass('new');
                    if ($('input[type="file"]')[0] && $('input[type="file"]')[0].files && $('input[type="file"]')[0].files[0]) {
                        var img = document.querySelectorAll('.upload-img');
                        img[img.length - 1].src = URL.createObjectURL($("input[type=file]")[0].files[0]);
                        $('.message-input').val(null);
                    }
                    setDate();
                    updateScrollbar();
                    $(".message-input").replaceWith("<input type=\"text\" class=\"message-input\" placeholder=\"Type message...\"/>");
                    executeCallback();
                }
            });
            break;
        default:
    }
}

function executeCallback() {
    if (callback != null) {
        callback();
        callback = null;
    }
}

/*function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="img/bat.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').replaceWith('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + Fake[i] + '</div>');
        setDate();
        updateScrollbar();
        i++;
    }, 1000 + (Math.random() * 20) * 100);

}*/

function askMultipleChoice(choices) {
    $(".message-input").hide();
    $(".message-submit").hide();
    choices.forEach(function(choice) {
       $("#multiple-choice").append("<li>" + choice + "</li>");
    });
    $("#multiple-choice li").click(function() {
        $(".message-input").val(this.innerHTML);
        $(".message-submit").click();
        $("#multiple-choice").hide();
        $(".message-input").show().disable();
        $(".message-submit").show().disable();
    });
}

