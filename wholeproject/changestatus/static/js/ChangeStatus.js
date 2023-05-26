$(document).ready(function() {
    $('.status-form').submit(function(event) {
      event.preventDefault();
      var form = $(this);
      var studentId = form.find('input[name="student_id"]').val();
      var statusCell = $('td[data-student-id="' + studentId + '"][data-field="status"]');
      $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form.serialize(),
        success: function(response) {
          var newStatus = statusCell.text() === 'Active' ? 'Inactive' : 'Active';
          statusCell.text(newStatus);
        },
        error: function(xhr, errmsg, err) {
          console.log(xhr.status + ": " + xhr.responseText);
        }
      });
    });
  });
  