var randomuserURL = 'https://randomuser.me/api/';
$.ajax({
url: randomuserURL,
}).done(function(data){
    //console.log(data);
    var firstName = data.results[0].name.first; 
    var lastName = data.results[0].name.last;
    var photo = data.results[0].picture.large;
    var state = data.results[0].location.state;
    $("body").append("This is " + firstName + " " +lastName + "    ");
    $("body").append("Photo:");
    $('<img />', {
    src: photo,
    }).appendTo($('body'))
    $("body").append("and " + firstName + " " +lastName + " lives in " + state);
    
});  