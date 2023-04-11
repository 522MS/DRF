from rest_framework.viewsets import ModelViewSet

from todo.models import Project, Todo
from todo.serializers import ProjectModelSerializer, TodoModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from todo.filters import ProjectFilter, TodoFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination
    filterset_class = TodoFilter
