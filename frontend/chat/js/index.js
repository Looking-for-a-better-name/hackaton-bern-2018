// this code need a review, be indulgent only 4h of sleep..
var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

var informations = {
    date: null,
    object: null,
    damage: null,
    name: null,
    time: null,
    cause: null,
    loc: null
};

callback = null;
lastValue = "";

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
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    lastValue = msg
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('input[type="text"].message-input').val(null);
    updateScrollbar();
}

$('.message-submit').click(function() {
    if ($('input[type="text"].message-input').length > 0) {
        executeCallback();
    }
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        $('.message-submit').click();
        return false;
    }
})

function insertBotMessage(obj) {
    setloading();
    var time = 0
    if (!obj.hideAnimation || obj.hideAnimation == true) {
        time = obj.text.length * 15;
    }
    setTimeout(function () {
        $('.message.loading:last-of-type').replaceWith('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + obj.text + '</div>');
        $(".message-input").disabled = "";
        $(".message-submit").disabled = "";
        if (obj.callback) {
            setTimeout(function () {
                obj.callback();
            }, 100);
        }
        setDate();
        updateScrollbar();
    }, time);
    /*if ($('.loading.new').length > 0) {
        $('.message.loading').replaceWith('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + obj.text + '</div>');
    } else {
        $('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + obj.text + '</div>').appendTo($('.mCSB_container'));
    }*/
}

function welcomeMessage() {
    insertBotMessage({text: "Hi Jeff, I'm Gooby. Your personnal damage report assistant.", callback: function() {
            insertBotMessage({text:"How can I help you? 🤪"});
            askFor(null);
            askMagicApi();
        }
    })
}

function askMagicApi() {
    callback = function () {
        $.ajax({
            url : 'http://228b22d5.ngrok.io/',
            type : 'GET',
            data : 'text=' + getText(),
            success : function(parsed_json, statut){
                console.log(parsed_json);
                // dont care about errors
                if (parsed_json.PERSON && parsed_json.PERSON.length > 0) {
                    parsed_json.PERSON.forEach(function (person) {
                        if (informations.name != null) {
                            informations.name += ", " + person;
                        } else {
                            informations.name = person;
                        }
                    });
                }

                if (parsed_json.DATE && parsed_json.DATE.length > 0) {
                    parsed_json.DATE.forEach(function (date) {
                        if (informations.date != null) {
                            informations.date += " " + date;
                        } else {
                            informations.date = date;
                        }
                    });
                }
                if (parsed_json.CAUSE && parsed_json.CAUSE.length > 0) {
                    parsed_json.CAUSE.forEach(function (cause) {
                        if (informations.cause != null) {
                            informations.cause += ", " + cause;
                        } else {
                            informations.cause = cause;
                        }
                    });
                }
                if (parsed_json.TIME && parsed_json.TIME.length > 0) {
                    parsed_json.TIME.forEach(function (time) {
                        if (informations.time != null) {
                            informations.time += " " + time;
                        } else {
                            informations.time = time;
                        }
                    });
                }
                if (parsed_json.DAMAGE) {
                    informations.damage = parsed_json.DAMAGE;
                }
                if (parsed_json.LOCATION) {
                    informations.loc = parsed_json.LOCATION;
                }
                //giveInformationFeedback();
                insertBotMessage({text: "I've found that your dammage goes in the category <b>" + informations.damage + "</b>", callback: function () {
                    insertBotMessage({text:"Is it right?", callback: function () {

                            tmpcallback1 = function () {
                                if (lastValue == "Yes") {
                                    insertBotMessage({text:"Perfect, let's continue...", callback: function () {
                                            if (informations.loc != null) {
                                                checkForMissingData()
                                            } else {
                                                categorySelector(informations.damage);
                                            }
                                        }
                                    })
                                } else {
                                    insertBotMessage({text:"I'm sorry, please choose", callback: function () {
                                            tmpcallback2 = function () {
                                                switch (lastValue) {
                                                    case 'electrical':
                                                        informations.damage = "electrical";
                                                        break;
                                                    case 'water':
                                                        informations.damage = "water";
                                                        break;
                                                    case 'vandalism':
                                                        informations.damage = "vandalism";
                                                        break;
                                                    case 'other':
                                                        informations.damage = "other";
                                                        break;
                                                    default:
                                                }
                                                if (informations.loc != null) {
                                                    checkForMissingData()
                                                } else {
                                                    categorySelector(informations.damage);
                                                }
                                            };
                                            askMultipleChoice(["electrical", "water", "vandalism", "other"], tmpcallback2);
                                        }
                                    })
                                }
                            }
                            askMultipleChoice(["Yes", "No"], tmpcallback1);
                        }
                    });
                }})
            }
        });
        insertMessage();
        setloading();

        //categorySelector("0");
    }
}

function showLink(text) {
    $('<div class="message new"><figure class="avatar"><img src="img/bat.png" /></figure>' + text + '</div>').appendTo($('.mCSB_container'));
    updateScrollbar();
}

function categorySelector(category) {
    var loc = "Bern";
    if (informations.loc != null) {
        loc = informations.loc;
    }
    switch (category) {
        case 'electrical':
            insertBotMessage({text: "I'm sorry to hear about that... Maybe one of our electrician near " + loc + " can help you", callback: function () {
                    showLink("Elektro Burkhalter AG<br/><a href='tel:0000000000'>031 996 33 33</a><br/><hr/>Aerni Elektro<br/><a href='tel:0000000000'>031 371 30 31</a><br/><hr/>Elektro Hardy Walther AG<br/><a href='tel:0000000000'>031 381 33 55</a>");
                }
            });
            break;
        case 'water':
            /*insertBotMessage({text: "I'm sorry to hear about that... Maybe one of our plumber near Bern can help you", callback: function () {
                    showLink("Jost Spenglerei AG<br/><a href='tel:0000000000'>031 381 70 35</a><br/><hr/>planBAD gmbh<br/><a href='tel:0000000000'>031 312 24 12</a><br/><hr/>Bieri San. Anlagen & Spenglerei AG<br/><a href='tel:0000000000'>031 301 41 81</a>");
                }
            });*/
            insertBotMessage({text: "That seems serious, can you upload a picture please?", callback: function () {
                    askFor('img');
                }})
            break;
        case 'vandalism':
            insertBotMessage({text: "I'm sorry to hear about that... Maybe one of our painter near " + loc + " can help you", callback: function () {
                    showLink("You should think about to <a href='tel:000'>call the police...</a>")
                    showLink("Tekari AG<br/><a href='tel:0000000000'>031 992 55 83</a><br/><hr/>Aebi Malerei Bodenbeläge Reinigung Bern AG<br/><a href='tel:0000000000'>031 941 21 71</a><br/><hr/>Gebr. Martino AG<br/><a href='tel:0000000000'>031 747 89 40</a>");
                }
            });
            break;
        case 'other':
            insertBotMessage({text: "I'm sorry to hear about that... Maybe one of our employees can help you", callback: function () {
                    showLink("<a href='tel:0000000000'>📞 Talk with our team</a> or <a href='mailto:no@email.com'>✉️ send us an email</a>");
                }
            });
            break;
        case '4':
            insertBotMessage({text: "I'm sorry to hear about that... Maybe one of our exterminator near " + loc + " can help you", callback: function () {
                    showLink("Desinfecta AG Bern<br/><a href='tel:0000000000'>031 333 20 30</a><br/><hr/>Alder Ungeziefer- u. Schädlingsbekämpfung<br/><a href='tel:0000000000'>031 381 09 55</a><br/>");
                }
            });
            setTimeout(function () {
                new BugController();
                new SpiderController();
            }, 1000);
            break;
        default:
    }
}

function giveInformationFeedback() {
    var message = "";
    if (informations.damage) {
        message += "I've found what happened was damaged: " + informations.damage + "<br/>";
    }
    if (informations.object) {
        message += "I've found on which property this happened: " + informations.object + "<br/>";
    }
    if (informations.date) {
        message += "I've found when this happened: " + informations.date + "<br/>";
    }
    if (informations.name) {
        message += "I've found who is involved: " + informations.name + "<br/>";
    }
    if (informations.type) {
        message += "I've found the type of damage: " + informations.type + "<br/>";
    }
    insertBotMessage({text: message, callback: function() {
        //checkForMissingData();
        },
        hideAnimation: false
    });
}

function checkForMissingData() {
    /*if (!informations.name) {
        insertBotMessage({text: "Who is involved?", callback: function () {
            askFor(null);
            askMagicApi();
            }
        });
        return;
    }*/
    /*if (!informations.damage) {
            insertBotMessage({text: "Can you say me what happened?", callback: function () {
                    askFor(null);
                    askMagicApi();
                }
            });
        return;
    }*/
    /*if (!informations.date) {
        insertBotMessage({text: "Can you say me when this happened?"});
        askFor('date');
        callback = function () {
            informations.date = getText();
            insertMessage();
            checkForMissingData();
        };
        return;
    }*/
    if (!informations.object) {
        insertBotMessage({text: "Oww snap... it seems that you have two property in " + informations.loc + ". Can you say me which one it is?", callback: function() {
                askMultipleChoice(["master villa in the center of " + informations.loc, "Small apartment in the " + informations.loc + " countryside"], function () {
                    informations.object = getText();
                    insertMessage();
                    insertBotMessage({text: "Analysing your damage...", callback: function () {
                            categorySelector(informations.damage);
                        }
                    });
                });
            }
        });
        /*callback = function () {
            informations.object = getText();
            insertMessage();
            checkForMissingData();
        };*/
        return;
    }
    /*insertBotMessage({text: "So Jeff,", callback: function () {
        insertBotMessage({text: "I have all the required informations! Let's continue..."})
        }
    });*/
}

function getText() {
    return $('.message-input').val();
}

function setloading() {
    $(".message-input").disabled = "disabled";
    $(".message-submit").disabled = "disabled";
    if ($('.message.loading').length == 0) {
        $('<div class="message loading new"><figure class="avatar"><img src="img/bat.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();
    }
}

function askFor(what) {
    switch (what) {
        case 'date':
            $( function() {
                $( ".message-input" ).datepicker();
            });
            break;
        case 'object':
            askMultipleChoice(["master villa in the center of " + informations.loc, "Small apartment in the " + informations.loc + " countryside"], null);
            break;
        case 'damage':
            break;
        case 'type':
            break;
        case 'img':
            $(".message-input").replaceWith("<input type=\"file\" class=\"message-input\" placeholder=\"Type message...\"/>");
            $(".message-submit").click(function () {
                if ($('input[type="file"]')) {
                    if ($('input[type="file"]')[0] && $('input[type="file"]')[0].files && $('input[type="file"]')[0].files[0]) {
                        $('<div class="message message-personal"><img width="200" height="200" class="upload-img" /></div>').appendTo($('.mCSB_container')).addClass('new');
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

function askMultipleChoice(choices, func) {
    callback = func;
    $("#multiple-choice").empty();
    $(".message-input").hide();
    $(".message-submit").hide();
    $('#multiple-choice').show();
    choices.forEach(function(choice) {
        $("#multiple-choice").append("<li>" + choice + "</li>");
    });
    updateScrollbar()
    var test = callback;
    $("#multiple-choice li").click(function(e) {
        // hate javascript sometimes
        callback = test;
        $(".message-input").val(this.innerHTML);
        $("#multiple-choice").hide();
        $(".message-input").show();
        $(".message-submit").show();
        insertMessage();
        executeCallback();
        //$(".message-submit").click();
    });
}
