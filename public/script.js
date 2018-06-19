$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:3099/meteo/reunion',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('.ir').append('La température du jour à la Réunion:' +' '+ donnees.main.temp +'</br>')
            // console.log(donnees);
            console.log(data.body);

            // $('.met').append('<div> </div>')
       
        },

        error: function () {
            console.log('La requête n\'a pas abouti');
        }
    })


})

$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:3099/meteo/marseille',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('.ir').append('La température du jour à Marseille :' +' '+ donnees.main.temp +'</br>')
            // console.log(donnees);
            console.log(data.body);

            // $('.met').append('<div> </div>')
       
        },

        error: function () {
            console.log('La requête n\'a pas abouti');
        }
    })


})

$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:3099/meteo/paris',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('.ir').append('La température du jour à Paris :' +' '+ donnees.main.temp +'</br>')
            // console.log(donnees);
            console.log(data.body);

            // $('.met').append('<div> </div>')
       
        },

        error: function () {
            console.log('La requête n\'a pas abouti');
        }
    })


})

$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:3099/meteo/moscou',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('.ir').append('La température du jour à Moscou :' +' '+ donnees.main.temp +'</br>')
            // console.log(donnees);
            console.log(data.body);

            // $('.met').append('<div> </div>')
       
        },

        error: function () {
            console.log('La requête n\'a pas abouti');
        }
    })


})