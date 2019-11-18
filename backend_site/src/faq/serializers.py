from rest_framework import serializers
from faq.models import FAQ




class SerializerFaq(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

        