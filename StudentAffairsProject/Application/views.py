from django.shortcuts import render, redirect
from .models import Student
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.contrib import messages
from django.urls import reverse
import json
from django.http import JsonResponse

def HomePage(request):
    template = loader.get_template('HomePageSA.html')
    return HttpResponse(template.render({}, request))

def AssignDep(request):
    template = loader.get_template('AssignDep.html')
    return HttpResponse(template.render({}, request))

def Assign(request, ID, Department):
    StudentID = request.GET.get("ID")
    StudentDep = request.GET.get("Department")
    messagesList = []
    successMessage = []
    try:
        student = Student.objects.get(student_id = StudentID)
    except Student.DoesNotExist:
        messagesList.clear()
        successMessage.clear()
        messagesList.append("There is no such Student with the provided ID")
        return render(request, 'AssignDep.html', {'messagesList': messagesList})

    if (student.level > 2):
        student.department = StudentDep
        student.save()
        messagesList.clear()
        successMessage.clear()
        successMessage.append("Department is Assigned Successfully")
        return render(request, 'AssignDep.html', {'successMessage': successMessage})

    messagesList.clear()
    successMessage.clear()
    messagesList.append("The Studnet's Level is Less than 2, Can't Assign a Department!")
    return render(request, 'AssignDep.html', {'messagesList': messagesList})







# def Assign(request, ID, Department):
#     StudentID = request.GET.get("ID")
#     StudentDep = request.GET.get("Department")
#     context = {}
#     try:
#         student = Student.objects.get(student_id = StudentID)
#     except Student.DoesNotExist: 
#         errorMessage = "There is no such Student with the provided ID"
#         context = {
#             'ErrorMessage': errorMessage
#         }
#         return render(request, 'AssignDep.html', context)
#         # context['success'] = False
#         # context['generalFeedback'] = "There is no such Student with the provided ID"
#         # return JsonResponse(context)

#     if (student.level > 2):
#         student.department = StudentDep
#         student.save()
#         return HttpResponse(reverse('AssignDep'))
#         # context['success'] = True
#         # response_data['redirectUrl'] = reverse('AssignDep')
#         # return JsonResponse(response_data)
#         # return HttpResponse("Success")

#     # return HttpResponse("Level < 2")
#     # context['success'] = False
#     # context['departmentFeedback'] = "The Studnet's Level is Less than 2, Can't Assign a Department!"
#     # return JsonResponse(context)
#     # return JsonResponse({
#     #         'success': False,
#     #         'idFeedback': 'ID feedback message',  # Customize the error messages here
#     #         'departmentFeedback': 'Department feedback message',
#     #         'generalFeedback': 'General feedback message',
#     #     })
    
#     errorMessage = "The Studnet's Level is Less than 2, Can't Assign a Department!"
#     context = {
#         'ErrorMessage': errorMessage
#     }
#     return render(request, 'AssignDep.html', context)

    










# {% if messages %}
# <ul class = "messages" id = "messageList">
#                     {% for message in messages %}
#                     <li {% if message.tags %} class = "{{ message.tags }}"{% endif %}>{{ message }}</li>
#                     {% endfor %}
#                 </ul>
#                 {% endif %}