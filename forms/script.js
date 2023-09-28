$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        e.preventDefault();

        // Obtenha os valores dos campos
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        // Simule o envio de e-mail (substitua por sua lógica real)
        var emailData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        $.ajax({
            type: "POST",
            url: "smtp.office365.com", // Substitua pelo seu servidor SMTP emulado
            data: emailData,
            success: function (response) {
                // Lógica para lidar com a resposta do servidor SMTP emulado
                console.log("E-mail enviado com sucesso!");
                // Limpe o formulário
                $("#contact-form")[0].reset();
            },
            error: function () {
                console.error("Erro ao enviar o e-mail.");
            }
        });
    });
});
