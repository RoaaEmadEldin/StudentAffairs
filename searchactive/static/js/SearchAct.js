$(document).ready(function() {
    // Intercept form submission
    $('#search-form').on('submit', function(e) {
        e.preventDefault();  // Prevent form submission

        // Get the entered name
        var name = $('#name').val();

        // Clear the message and table
        $('#notfound').empty();
        $('#result-head').empty();
        $('#result-body').empty();

        // Send AJAX request if a name is entered
        if (name.trim() !== '') {
            $.ajax({
                url: 'searchactive/',  // URL mapped to your searchactive view
                data: {
                    'name': name
                },
                success: function(response) {
                    if (response.length === 0 && response !== 'notentered') {
                        var x = 'No Such Active Students';
                        $('#notfound').empty().append(x);
                    } else {
                        var rows = '';
                        var header = '';
                        $.each(response, function(index, student) {
                            header = '<tr><th>Student ID</th><th>Name</th><th>GPA</th><th>Email</th><th>Phone Number</th><th>Department</th>' +
                                        '<th>Status</th><th>Level</th><th>Date of Birth</th><th>Gender</th></tr>'
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
                        $('#result-head').empty().append(header);
                        $('#result-body').empty().append(rows);
                    }
                }
            });
        }
    });
});
