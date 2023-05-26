from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'MainPage.html')

def humanresources(request):
    return render(request, 'HR.html')

def lab(request):
    return render(request, 'Lab.html')

def higherstudies(request):
    return render(request, 'HS.html')