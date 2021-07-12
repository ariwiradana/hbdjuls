$(document).ready(function () {
    $('body').css("overflow", "hidden")
    $('.gift-box').click(function () {
        $('.bg').fadeOut();
        $('#bg-video').show().trigger('play');
        $('.bg-music').trigger('play');
        alertStart();
    });
});

function alertStart() {
    title = "Are u Readyy?!!";
    caption = "Apakah kamu sudah siappp?!!";
    btnAcc = "Siapp";
    btnDiss = "Enggak";
    id = "alert-start"

    alert2Btn(id, title, caption, btnAcc, btnDiss);

    $('#alert-start').find(".btn-accept, .btn-dismiss").click(function () {
        $('#alert-start').remove();
        harusSiap();
    })
}

function harusSiap() {
    title = "Harus siap donggg";
    caption = "mau gak mau sih harus siap ya emg programnya kayak gitu!! :D qiqiqi...";
    btnAcc = "Tutup";
    id = "alert-siap"

    alert1Btn(id, title, caption, btnAcc)

    $('#alert-siap').find("button").click(function () {
        $('#alert-siap').remove();
        alertSelanjutnya();
    })
}

function alertSelanjutnya() {
    title = "Hmmm?";
    caption = "Kasii kejutan apaa yaaa?? hmmmmm";
    btnAcc = "Hmmmm :(";
    id = "alert-selanjutnya"

    alert1Btn(id, title, caption, btnAcc);
    $('#alert-selanjutnya').find("button").click(function () {
        $('#alert-selanjutnya').remove();
        $('#bg-video').remove();
        $('#video-juli').show().trigger('play');
        setInterval(function () {
            alertBercanda();
        }, 4000)
    })
}

function alertBercanda() {
    title = "Sorry Bertjanda, hihihi";
    caption = "oiya kamu lg ulang tahun ya? :p";
    btnAcc = "Iya excited";
    btnDiss = "Iya excited bgt";
    id = "alert-bercanda"

    alert2Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-bercanda').find(".btn-accept, .btn-dismiss").click(function () {
        $('#alert-bercanda').remove();
        Ucapan();
    })
}

function Ucapan() {
    title = "Selamat ulang tahun ya sayangku❤️";
    caption = "Selamat ulang tahun buat Ni Putu Juli Astuti, semoga diumur yang sudah 22 ini kamu semakin jadi orang yang dewasa, lebih sayang keluarga, lebih rajin, lebih lebih lebih ++++++";
    btnAcc = "Lanjott";
    id = "alert-ucapan"

    alert1Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan').find("button").click(function () {
        $('#alert-ucapan').remove();
        Ucapan2();
    })
}

function Ucapan2() {
    title = "Skripsinya lancarrrr";
    caption = "Aku doain semoga cepet lulus, skripsinya lancar semuanya lancar deh pokooknyaa buat kamuuuu & doain aku jg biar wisuda bareng kamu hehehehe :)";
    btnAcc = "Lanjott";
    id = "alert-ucapan2"

    alert1Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan2').find("button").click(function () {
        $('#alert-ucapan2').remove();
        ucapan3();
    })
}

function ucapan3() {
    title = "Apalagi ya doanya? hmm :D";
    caption = "Cie udah tua, umurnya 22 gedean dia dripada aku qiqiqi, tp bocil masih ada didalam dirinya qiqiqi, NgakaK AbiEzzZz🤣";
    btnAcc = "Lanjott";
    id = "alert-ucapan3"

    alert1Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan3').find("button").click(function () {
        $('#alert-ucapan3').remove();
        ucapan4();
    })
}

function ucapan4() {
    title = "Kamu mau dibuatin video kann?? hihihi";
    caption = "itu videonya yg skrg kamu liat di belakangnya :p";
    btnAcc = "Lanjott";
    id = "alert-ucapan4"

    alert1Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan4').find("button").click(function () {
        $('#alert-ucapan4').remove();
        ucapan5();
    })
}

function ucapan5() {
    title = "Tapi boongg !!! HAHAHAHA";
    caption = "kamu mau nonton ndakk???";
    btnAcc = "Mau!";
    btnDiss = "Mau lahhhh";
    id = "alert-ucapan5"

    alert2Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan5').find(".btn-accept, .btn-dismiss").click(function () {
        $('#alert-ucapan5').remove();
        ucapan6();
    })
}

function ucapan6() {
    title = "Sabarr!! gak sabaran banget sihhh";
    caption = "videonya gak bagus2 amat sih hihihi :(";
    btnAcc = "Tonton videonya sekarang";
    id = "alert-ucapan6"

    alert1Btn(id, title, caption, btnAcc);
    $('#alert-ucapan6').find("button").click(function () {
        $('#alert-ucapan6').remove();
        hitungMundur();
        $('#video-juli').fadeOut();
    })
}

function ucapan7() {
    title = "hahaha kena tipu dehh :p";
    caption = "yayaya sekarang beneran kok qiqiqiqi Ngakak AbIEZZZzz";
    btnAcc = "Play";
    id = "alert-ucapan7"

    alert1Btn(id, title, caption, btnAcc);
    $('#alert-ucapan7').find("button").click(function () {
        $('#alert-ucapan7').remove();
        $('.bg-music').trigger('pause');
        $('body').css("overflow", "visible");
        $('.timer-container').fadeOut();
        mainVideo();
    })
}

function hitungMundur() {
    $('.timer-container').fadeIn();
    let timeleft = 5;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            ucapan7();
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

function mainVideo() {
    $('#video-main').fadeIn().trigger('play');
    $('#video-main').on('ended', function () {
        $('#bg-video').fadeIn();
        ucapan8();
    });
}

function ucapan8() {
    title = "Gimana videonya?";
    caption = "biasa ajaa ya kan videonya wkwkwkwkwkwk, semoga kamu suka yaaa :)";
    btnAcc = "Sukaaaa";
    btnDiss = "Enggakkk";
    id = "alert-ucapan8"

    alert2Btn(id, title, caption, btnAcc, btnDiss);
    $('#alert-ucapan8').find(".btn-accept").click(function () {
        $('#alert-ucapan8').remove();
        suka();
    })

    $('#alert-ucapan8').find(".btn-dismiss").click(function () {
        $('#alert-ucapan8').remove();
        tidak();
    })
}

function suka() {
    title = "Yeyyyy baguss deh kalo sukaa qiqiqii";
    caption = "Kasik nilai 1 - 10";
    btnAcc = "Kasik nilai";
    id = "alert-suka"

    alertForm(id, title, caption, btnAcc);
    $('#alert-suka').find("button").click(function () {
        let text = $('#form').val();
        $('#alert-suka').remove();
        penutup();
        window.open(`https://api.whatsapp.com/send?phone=6281246768627&text=Nilainyaaa adalahhhh ${text}`);
    })
}

function tidak() {
    title = "Hmmm ndak suka ya :(";
    caption = "Kasik nilai 1 - 10";
    btnAcc = "Kasik nilai";
    id = "alert-tidak"

    alertForm(id, title, caption, btnAcc);

    $('#alert-tidak').find("button").click(function () {
        let text = $('#form').val();
        penutup();
        $('#alert-tidak').remove();
        window.open(`https://api.whatsapp.com/send?phone=6281246768627&text=Nilainyaaa adalahhhh ${text}
        
        harus dikirim ni awas enggakkk!!`);
    })
}

function penutup() {
    title = "Maaci sayanggg";
    caption = "Sekali lagii Happy Birthday yaa Sayangkuuuu, i love u so much";
    btnAcc = "Byebyeee";
    id = "alert-penutup"

    alert1Btn(id, title, caption, btnAcc);
    $('#alert-penutup').find("button").click(function () {
        $('#alert-penutup').fadeOut();
    })
}