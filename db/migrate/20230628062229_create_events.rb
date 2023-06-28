class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :start_date
      t.string :end_date
      t.string :created_by

      t.timestamps
    end
  end
end
