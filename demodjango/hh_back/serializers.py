from rest_framework.renderers import serializers

from .models import Vacancy, Company


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class ReadCompanySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=555)
    city = serializers.CharField(max_length=200)
    address = serializers.CharField(max_length=555)
