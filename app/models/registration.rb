class Registration < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates :participants, presence: true
    # validates :user, uniqueness: true
end
