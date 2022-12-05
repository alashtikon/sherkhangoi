$(document).ready(function () {

    AOS.init({ once: true });
    $("[type='tel']").mask("+7(999)999-99-99");

    $("form").not('.no-js').submit(function() {
        var th = $(this);
        var options = {
            url: "send.php", // путь к php обработчику
            beforeSubmit: showRequest,
            error: showError,
            success: showResponse,
            resetForm: true,
        };
        $(this).ajaxSubmit(options);
        return false;

        function showRequest(data, $form, opts) {
            $form.find('button[type=submit]').addClass("disabled").click(function(e){
                e.preventDefault();
                return false;
            });
        }

        function showResponse(data, textStatus, jqXHR, $form) {
            window.location.href = "";
            // alert('Спасибо за заявку!');
            // $('#formModal').modal('hide');
            $form.find('button[type=submit]').removeClass("disabled")
        }
        function showError() {
            alert('При отправке произошла ошибка, попробуйте еще раз.');
        }
    });

});
