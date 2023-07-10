class AddParticipantsToRegistration < ActiveRecord::Migration[6.1]
  def change
    add_column :registrations, :participants, :integer
  end
end
