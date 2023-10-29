from rest_framework import mixins, generics
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import User
from .serializers import UserModelSerializer, UserSerializerStatus


# class UserModelViewSet(mixins.RetrieveModelMixin,
#                        mixins.UpdateModelMixin,
#                        mixins.ListModelMixin,
#                        mixins.CreateModelMixin,
#                        GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer


class UserModelViewSet(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        print(self.request.version)
        if self.request.version == '1':
            return UserSerializerStatus
        return UserModelSerializer
