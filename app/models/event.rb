class Event < ApplicationRecord
    has_many :registrations
    has_many :users, through: :registrations

    validates :title, :description, :location, :start_date, :end_date, presence: true
    validates :title, uniqueness: true
end
