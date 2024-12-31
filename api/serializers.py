from rest_framework import serializers
from .models import Room

class RoomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

    def validate_votes_to_skip(self, value):
        """Validate that votes_to_skip is greater than 0."""
        if value <= 0:
            raise serializers.ValidationError("Votes to skip must be greater than 0.")
        return value

    def validate_guest_can_pause(self, value):
        """Additional validation can be added here if needed."""
        return value