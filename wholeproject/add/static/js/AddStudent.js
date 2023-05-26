$(document).on('submit', '#myForm', function(event){
    event.preventDefault();
    $.ajax({
        type:'POST',
        url:'addstudent',  // Use the correct URL for the update view
        data:{
            id: $('#ID').val(),
            name:$('#Name').val(),
            gpa: $('#gpa').val(),
            phone: $('#phone').val(),
            dob: $('#date').val(),
            level: $('#level').val(),
            gender: $('#gender').val(),
            status: $('#status').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(data){
            $('#Messages').html(data).show();
            if (data.clearFields) {
                $('#Messages').html("Student added successfully.").show();
                $('#myForm')[0].reset();
            }
        }
    });
});

