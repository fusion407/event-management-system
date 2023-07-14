class User < ApplicationRecord
    has_many :registrations
    has_many :events, through: :registrations
    has_secure_password

    # validates :username, presence: true
    # validates :username, uniqueness: { case_sensitive: true }
end
