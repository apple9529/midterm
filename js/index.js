$(document).ready(function () {
    var button_status = 0;
    $(".sosim").on("click", function () {
        if (button_status == 1) {
            $(".colored-background1").css("width", "100%")
            $(".colored-background2").css("opacity", "0")
            $(".colored-background3").css("opacity", "0")
            $(".colored-background4").css("opacity", "0")
            $(".colored-background5").css("opacity", "0")
            $(".앉으나서나걱정이군").css("opacity", "100")
            $(".소심이설명").css("opacity", "100")

            $(".anger").css("opacity", "0")
            $(".joy").css("opacity", "0")
            $(".disgust").css("opacity", "0")
            $(".sadness").css("opacity", "0")

            $(".burrurk").css("opacity", "0")
            $(".gibbumm").css("opacity", "0")
            $(".kkachill").css("opacity", "0")
            $(".sullpum").css("opacity", "0")
            button_status = 0;
        } else if (button_status == 0) {
            $(".colored-background1").css("opacity", "100")
            $(".colored-background2").css("opacity", "100")
            $(".colored-background2").css("opacity", "100")
            $(".colored-background3").css("opacity", "100")
            $(".colored-background4").css("opacity", "100")
            $(".colored-background5").css("opacity", "100")
            $(".앉으나서나걱정이군").css("opacity", "0")
            $(".소심이설명").css("opacity", "0")

            $(".anger").css("opacity", "100")
            $(".joy").css("opacity", "100")
            $(".disgust").css("opacity", "100")
            $(".sadness").css("opacity", "100")

            $(".burrurk").css("opacity", "100")
            $(".gibbumm").css("opacity", "100")
            $(".kkachill").css("opacity", "100")
            $(".sullpum").css("opacity", "100")
            button_status = 1;

        }
    })
})

$(document).ready(function () {
    var button_status = 0;
    $(".burrurk").on("click", function () {
        if (button_status == 1) {
            $(".colored-background1").css("opacity", "0%")
            $(".colored-background2").css("width", "100%")
            $(".colored-background2").css("position", "unset")
            $(".colored-background3").css("opacity", "0%")
            $(".colored-background4").css("opacity", "0%")
            $(".colored-background5").css("opacity", "0%")
            $(".화가난다화가나").css("opacity", "100")
            $(".버럭이설명").css("opacity", "100")

            $(".fear").css("opacity", "0")
            $(".joy").css("opacity", "0")
            $(".disgust").css("opacity", "0")
            $(".sadness").css("opacity", "0")

            $(".sosim").css("opacity", "0")
            $(".gibbumm").css("opacity", "0")
            $(".kkachill").css("opacity", "0")
            $(".sullpum").css("opacity", "0")
            button_status = 0;
        } else if (button_status == 0) {
            $(".colored-background1").css("opacity", "100")
            $(".colored-background2").css("width", "20%")
            $(".colored-background2").css("position", "absolute")
            $(".colored-background3").css("opacity", "100")
            $(".colored-background4").css("opacity", "100")
            $(".colored-background5").css("opacity", "100")
            $(".화가난다화가나").css("opacity", "0")
            $(".버럭이설명").css("opacity", "0")

            $(".fear").css("opacity", "100")
            $(".joy").css("opacity", "100")
            $(".disgust").css("opacity", "100")
            $(".sadness").css("opacity", "100")

            $(".sosim").css("opacity", "100")
            $(".gibbumm").css("opacity", "100")
            $(".kkachill").css("opacity", "100")
            $(".sullpum").css("opacity", "100")
            button_status = 1;

        }
    })
})

$(document).ready(function () {
    var button_status = 0;
    $(".gibbumm").on("click", function () {
        if (button_status == 1) {
            $(".colored-background1").css("opacity", "0")
            $(".colored-background2").css("opacity", "0")
            $(".colored-background3").css("width", "100%")
            $(".colored-background3").css("position", "unset")
            $(".colored-background4").css("opacity", "0")
            $(".colored-background5").css("opacity", "0")
            $(".모든게다").css("opacity", "100")
            $(".잘될거야").css("opacity", "100")
            $(".기쁨이설명").css("opacity", "100")

            $(".fear").css("opacity", "0")
            $(".anger").css("opacity", "0")
            $(".disgust").css("opacity", "0")
            $(".sadness").css("opacity", "0")

            $(".sosim").css("opacity", "0")
            $(".burrurk").css("opacity", "0")
            $(".kkachill").css("opacity", "0")
            $(".sullpum").css("opacity", "0")
            button_status = 0;
        } else if
            (button_status == 0) {
            $(".colored-background1").css("opacity", "100")
            $(".colored-background2").css("opacity", "100")
            $(".colored-background3").css("width", "20%")
            $(".colored-background3").css("position", "absolute")
            $(".colored-background4").css("opacity", "100")
            $(".colored-background5").css("opacity", "100")
            $(".모든게다").css("opacity", "0")
            $(".잘될거야").css("opacity", "0")
            $(".기쁨이설명").css("opacity", "0")

            $(".fear").css("opacity", "100")
            $(".anger").css("opacity", "100")
            $(".disgust").css("opacity", "100")
            $(".sadness").css("opacity", "100")

            $(".sosim").css("opacity", "100")
            $(".burrurk").css("opacity", "100")
            $(".kkachill").css("opacity", "100")
            $(".sullpum").css("opacity", "100")
            button_status = 1;
        }
    })
})

$(document).ready(function () {
    var button_status = 0;
    $(".kkachill").on("click", function () {
        if (button_status == 1) {
            $(".colored-background1").css("opacity", "0")
            $(".colored-background2").css("opacity", "0")
            $(".colored-background3").css("opacity", "0")
            $(".colored-background4").css("width", "100%")
            $(".colored-background4").css("position", "unset")
            $(".colored-background5").css("opacity", "0")
            $(".어쩌라고").css("opacity", "100")
            $(".까칠이설명").css("opacity", "100")

            $(".fear").css("opacity", "0")
            $(".anger").css("opacity", "0")
            $(".joy").css("opacity", "0")
            $(".sadness").css("opacity", "0")

            $(".sosim").css("opacity", "0")
            $(".burrurk").css("opacity", "0")
            $(".gibbumm").css("opacity", "0")
            $(".sullpum").css("opacity", "0")
            button_status = 0;
        } else if
            (button_status == 0) {
            $(".colored-background1").css("opacity", "100")
            $(".colored-background2").css("opacity", "100")
            $(".colored-background3").css("opacity", "100")
            $(".colored-background4").css("width", "20%")
            $(".colored-background4").css("position", "absolute")
            $(".colored-background5").css("opacity", "100")
            $(".어쩌라고").css("opacity", "0")
            $(".까칠이설명").css("opacity", "0")

            $(".fear").css("opacity", "100")
            $(".anger").css("opacity", "100")
            $(".joy").css("opacity", "100")
            $(".sadness").css("opacity", "100")

            $(".sosim").css("opacity", "100")
            $(".burrurk").css("opacity", "100")
            $(".gibbumm").css("opacity", "100")
            $(".sullpum").css("opacity", "100")
            button_status = 1;
        }
    })
})

$(document).ready(function () {
    var button_status = 0;
    $(".sullpum").on("click", function () {
        if (button_status == 1) {
            $(".colored-background1").css("opacity", "0")
            $(".colored-background2").css("opacity", "0")
            $(".colored-background3").css("opacity", "0")
            $(".colored-background4").css("opacity", "0")
            $(".colored-background5").css("width", "100%")
            $(".세상은너무슬퍼").css("opacity", "100")
            $(".슬픔이설명").css("opacity", "100")

            $(".fear").css("opacity", "0")
            $(".anger").css("opacity", "0")
            $(".joy").css("opacity", "0")
            $(".disgust").css("opacity", "0")

            $(".sosim").css("opacity", "0")
            $(".burrurk").css("opacity", "0")
            $(".gibbumm").css("opacity", "0")
            $(".kkachill").css("opacity", "0")
            button_status = 0;
        } else if
            (button_status == 0) {
            $(".colored-background1").css("opacity", "100")
            $(".colored-background2").css("opacity", "100")
            $(".colored-background3").css("opacity", "100")
            $(".colored-background4").css("opacity", "100")
            $(".colored-background5").css("width", "20%")
            $(".세상은너무슬퍼").css("opacity", "0")
            $(".슬픔이설명").css("opacity", "0")

            $(".fear").css("opacity", "100")
            $(".anger").css("opacity", "100")
            $(".joy").css("opacity", "100")
            $(".disgust").css("opacity", "100")

            $(".sosim").css("opacity", "100")
            $(".burrurk").css("opacity", "100")
            $(".gibbumm").css("opacity", "100")
            $(".kkachill").css("opacity", "100")
            button_status = 1;
        }
    })
})