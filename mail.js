let mail = [
    {
        id: 1,
        from : "aaa@example.com",
        to : "zzz.zzz@example.com",
        subject : "[ HR-888 ] Notice of official announcement", 
        toCount : 1,
        attachment : 0,
        date : "0:20"
    },
    {   
        id: 2,
        from : "bbb.bbbb@example.com",
        to : "yyy@example.com",
        subject : '[web:333] "Web Contact"', 
        toCount : 1,
        attachment : 0,
        date : "0:10"
    },
    {   
        id: 3,
        from : "ccc@example.com",
        to : "xxx@example.com",
        subject : 'Happy New Year! Greetings for the New Year.', 
        toCount : 2,
        attachment : 1,
        date : "0:00"
    },
    {   
        id: 4,
        from : "ddd.dddd@example.com",
        to : "vvv.vvv@example.com",
        subject : '[HR-887(Revised: Office Expansion Project Team)] Notice of off...', 
        toCount : 3,
        attachment : 0,
        date : "Jan 01"
    }
]
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function getMail() {
    let mailRender = '';
    if (window.mobileCheck()) {
        mailRender = ""
        for (let index = 0; index < mail.length; index++) {
            mailRender += '<div class="border-bottom clearfix p1">' +                
                '<div class="flex">' +
                    '<div class="mr1 pt2">' +
                        '<div>' +
                            '<input type="checkbox" id="check' + index + '" name="check' + index + '" >' +
                        '</div>' +
                        '<i class="material-icons md-dark md-cstm ln1-4">delete</i>' +
                    '</div>' +
                    '<div class="flex-auto">' +
                        '<div class="flex">' +
                            '<div class="flex-auto bold"><i class="material-icons md-cstm valign-sub">email</i> ' + mail[index].from + '</div>';
            if (mail[index].attachment > 0) {
                mailRender += '<div>' +
                                '<i class="material-icons md-dark md-cstm valign-sub mr1">attach_file</i>' +
                            '</div>'
            }                 
            mailRender +=   '<div>0:20 <i class="material-icons md-cstm valign-sub">chevron_right</i></div>' +
                        '</div>' +
                        '<div class="m-7"><i class="material-icons m0 p0 ln0 md-10 pl-2-5">arrow_downward</i></div>' +
                        '<div class="flex">' +
                            '<div class="flex-auto">' +
                                '<i class="material-icons md-dark md-10 px-2-5">radio_button_unchecked</i>' +
                                mail[index].to + 
                            '</div>';
            if (mail[index].toCount > 1) {
                if (mail[index].toCount === 2) {
                    mailRender += '<div class="bg-lightgrey mr1 pl1 pr1 rounded">' +
                                '<i class="material-icons md-dark md-cstm valign-sub m-7">exposure_plus_1</i>' +
                            '</div>';
                } else {
                    mailRender += '<div class="bg-lightgrey mr1 pl1 pr1 rounded">' +
                                '<i class="material-icons md-dark md-cstm valign-sub m-7">exposure_plus_2</i>' +
                            '</div>';
                }
            }
            mailRender +='</div>' +
                        '<div class="pt1">' + mail[index].subject + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
        document.getElementById('mblMailCnt').innerHTML = mailRender;
        document.getElementById('resultCntMbl').style.display = 'block';
        document.getElementById('noResultCntMbl').style.display = 'none';
        document.getElementById('mailCountMbl').innerHTML = mail.length;
    } else {
        mailRender = ''
        for (let index = 0; index < mail.length; index++) {
            mailRender += '<div class="flex border-bottom" id="mail' + index + '">' +
                '<div class="pl1 no-wrap">' +
                    '<input type="checkbox" id="lgcheck' + index + '" name="scales" class="valign-top ">' +
                    '<i class="material-icons md-dark md-cstm ln1-4">delete</i>' +
                '</div>' +
                '<div class="flex-auto">' +
                    '<div class=" clearfix p1" onmouseover="blueText(' + index + ')" onmouseleave="normalText(' + index + ')">' +
                        '<div class="col col-3">' + mail[index].from + '</div>' +
                        '<div class="col col-3 flex">' +
                            '<div class="flex-auto">' +
                                mail[index].to +
                            '</div>';
            if (mail[index].toCount > 1) {
                if (mail[index].toCount === 2) {
                    mailRender += '<div class="bg-lightgrey mr1 pl1 pr1 rounded">' +
                                '<i class="material-icons md-dark md-cstm valign-sub m-7">exposure_plus_1</i>' +
                            '</div>';
                } else {
                    mailRender += '<div class="bg-lightgrey mr1 pl1 pr1 rounded">' +
                                '<i class="material-icons md-dark md-cstm valign-sub m-7">exposure_plus_2</i>' +
                            '</div>';
                }
            }
            mailRender += '</div>' +
                        '<div class="col col-5 flex">' +
                            '<div class="flex-auto elipsis pr1">' +
                                mail[index].subject + 
                            '</div>';
            if (mail[index].attachment > 0) {
                mailRender += '<div>' +
                                '<i class="material-icons md-dark md-cstm valign-sub m-7 mr1">attach_file</i>' +
                            '</div>';
            }                
            mailRender += '</div>' +
                        '<div id="date' + index + '" class="col col-1 bold">' + mail[index].date + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
        document.getElementById('lgMailCnt').innerHTML = mailRender;
        document.getElementById('resultCntDesktop').style.display = 'block';
        document.getElementById('noResultCntDesktop').style.display = 'none';
        document.getElementById('mailCountDesktop').innerHTML = mail.length;
    }
}

function blueText(id){
    let dom = document.getElementById('mail' + id)
    dom.style.color = 'blue'
    dom.style.background = 'aliceblue'
    dom.style.cursor = "grab"
    document.getElementById('date' + id).style.color = 'black'
}

function normalText(id){
    let dom = document.getElementById('mail' + id)
    dom.style.color = 'black'
    dom.style.cursor = "auto"
    dom.style.background = 'white'
}

function checkAll(that){
    for (let index = 0; index < mail.length; index++) {
        document.getElementById('lgcheck' + index).checked = that.checked
    }
}

function mblBulkCheck(that) {
    for (let index = 0; index < mail.length; index++) {
        document.getElementById('check' + index).checked = that.checked
    }
}