class RegistrationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :created_at
  has_one :user
  has_one :event
end
