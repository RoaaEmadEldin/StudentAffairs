from django.shortcuts import render, redirect, reverse
from django.core.exceptions import ObjectDoesNotExist
from .models import Admin

# Create your views here.
def main(request):
    return render(request, 'LogIn.html')

def login(request):
    error_message = []
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            admin = Admin.objects.get(admin_email=email)
            if(password == admin.password):
                return redirect(reverse('homepage:homepage'))
            else:
                error_message.append("Invalid Account")
                return render(request, 'Login.html', {'error_message': error_message})
        except ObjectDoesNotExist:
            error_message.append("Invalid Account")
            return render(request, 'Login.html', {'error_message': error_message})