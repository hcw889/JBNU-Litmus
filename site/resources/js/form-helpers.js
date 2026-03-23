$(function () {
    // navicon toggle binding
    $(document).on('click', '#navicon', function () {
        toggleMenu();
    });

    // language selector auto-submit
    $('select[name="language"]').on('change', function () {
        $(this).closest('form').submit();
    });
});
