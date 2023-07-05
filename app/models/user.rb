class User < ApplicationRecord
    has_many :registrations
    has_many :events, through: :registrations
    has_secure_password

    validates :username, :password_digest, presence: true
    # validates :username, uniqueness: { case_sensitive: true }
    # validates :password_digest, length: { minimum: 5}
end
