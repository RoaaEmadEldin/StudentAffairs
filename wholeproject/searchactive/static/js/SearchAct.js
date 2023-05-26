$(document).ready(function() {
    // Intercept form submission
    $('#search-form').on('submit', function(e) {
        e.preventDefault();  // Prevent form submission

        // Get the entered name
        var name = $('#name').val();

        // Send AJAX request
        $.ajax({
            url: 'searchactive/',  // URL mapped to your searchactive view
            data: {
                'name': name
            },
            success: function(response) {
                // Update the table with the received data
                var rows = '';
                $.each(response, function(index, student) {
                    rows += '<tr>';
                    rows += '<td>' + student.id + '</td>';
                    rows += '<td>' + student.name + '</td>';
                    rows += '<td>' + student.gpa + '</td>';
                    rows += '<td>' + student.email + '</td>';
                    rows += '<td>' + student.phone + '</td>';
                    rows += '<td>' + student.dep + '</td>';
                    rows += '<td>' + student.status + '</td>';
                    rows += '<td>' + student.level + '</td>';
                    rows += '<td>' + student.dob + '</td>';
                    rows += '<td>' + student.gender + '</td>';
                    rows += '</tr>';
                });
                $('#result-body').empty().append(rows);
            }
        });
    });
});