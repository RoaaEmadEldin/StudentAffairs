$(document).on('submit', '#assignForm', function(event){
    event.preventDefault();
    $.ajax({
        type:'POST',
        url:'/Assign',
        data:{
            id: $('#ID').val(),
            department: $('#dep').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(data){
            $('#successMessages').html(data).show();
        }
        
        
    });
});
