class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_date, :end_date
  has_many :users
  has_many :registrations
end
