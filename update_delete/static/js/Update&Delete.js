$(document).on('submit', '#update_form', function(event){
    event.preventDefault();
    $.ajax({
        type:'POST',
        url:'update',
        data:{
            id: $('#ID').val(),
            name:$('#Name').val(),
            gpa: $('#gpa').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            level: $('#level').val(),
            gender: $('#gender').val(),
            status: $('#status').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(data){
            $('#Messages').html(data).show();
            if (data.clearFields) {
                $('#Messages').html("Student updated successfully.").show();
                $('#update_form')[0].reset();
            }
        }
    });
});

$(document).on('submit', '#delete_form', function(event){
    event.preventDefault();
    $.ajax({
        type:'POST',
        url:'delete',  // Use the correct URL for the delete view
        data:{
            id2: $('#ID2').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(data){
            $('#Messages2').html(data).show();
            if (data.clearFields) {
                $('#Messages2').html("Student deleted successfully.").show();
                $('#delete_form')[0].reset();
            }
        }
    });
});
