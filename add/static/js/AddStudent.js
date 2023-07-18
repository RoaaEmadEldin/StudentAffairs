$(document).on('submit', '#myForm', function(event){
    event.preventDefault();
    $.ajax({
        url:'addstudent',  // Use the correct URL for the update view
        data:{
            id: $('#ID').val(),
            name:$('#Name').val(),
            gpa: $('#gpa').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            level: $('#level').val(),
            gender: $('#gender').val(),
            status: $('#status').val(),
            email:$('#email').val(),
            department: $('#dep').val(), 
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