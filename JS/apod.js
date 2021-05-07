function fotoDoDia() {
var pegaData = $('#date')
    $.ajax({
        url: ("https://api.nasa.gov/planetary/apod?api_key=Jr3TCpHgawOkKr8GdZcVgFLcmqdOYqSCx3sHWZua" ),
        type: "get",
        data: {
        date: $('#date').val(),
        },

        success: function (response) {
            var tipoConteudo = JSON.stringify(response.media_type);
            var pegaLink = response.url;
            if (tipoConteudo === "\"image\"") {
                $('#fotoDoDia').attr("src", pegaLink);
                $('#fotoDoDia').css("display", "flex");

            }
            else if (tipoConteudo === "\"video\"") {
                $('#videoDoDia').attr("src", pegaLink);
                $('#videoDoDia').css("display", "block");
            }
            $("h2").html(response.title);
            $("h2").css("display", "block");

            $("h3").html(response.explanation);
            $("h3").css("display", "block");



            console.log(response)
        },
        error: function (xhr) {

        }
    });

}
