class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :registrations
  has_many :events
end
