$(function () {
    count_down($("#contest-time-remaining"));

    var selected = null,
        x_pos = 0, y_pos = 0,
        x_elem = 0, y_elem = 0;

    $('#contest-info').mousedown(function () {
        selected = $(this);
        x_elem = x_pos - selected.offset().left;
        y_elem = y_pos - (selected.offset().top - $(window).scrollTop());
        return false;
    });

    if (localStorage.getItem("contest_timer_pos")) {
        var data = localStorage.getItem("contest_timer_pos").split(":");
        $("#contest-info").css({
            left: data[0],
            top: data[1]
        });
    }

    $("#contest-info").show();

    $(document).mousemove(function (e) {
        x_pos = e.screenX;
        y_pos = e.screenY;
        x_pos = Math.max(Math.min(x_pos, window.innerWidth), 0);
        y_pos = Math.max(Math.min(y_pos, window.innerHeight), 0);

        if (selected !== null) {
            var elementWidth = selected.outerWidth();
            var elementHeight = selected.outerHeight();
            var padding = 10;

            var left_px = Math.max(padding, Math.min((x_pos - x_elem), window.innerWidth - elementWidth - padding)) + 'px';
            var top_px = Math.max(padding, Math.min((y_pos - y_elem), window.innerHeight - elementHeight - padding)) + 'px';

            localStorage.setItem("contest_timer_pos", left_px + ":" + top_px);

            selected.css({
                left: left_px,
                top: top_px
            });
        }
    });

    $(document).mouseup(function () {
        selected = null;
    });
});
