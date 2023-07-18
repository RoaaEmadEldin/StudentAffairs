from django.shortcuts import render, redirect
from shared_app.models import Student

# Create your views here.
def changestatus(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id')
        try:
            student = Student.objects.get(student_id=student_id)
            if student.status == 'Active':
                student.status = 'Inactive'
            else:
                student.status = 'Active'
            student.save()
        except Student.DoesNotExist:
            pass
    students = Student.objects.all()
    context = {'students': students}
    return render(request, 'ChangeStatus.html', context)

    
