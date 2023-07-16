class Registration < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates :participants, presence: true
    validates :participants, numericality: { only_integer: true, greater_than: 0 }
end
