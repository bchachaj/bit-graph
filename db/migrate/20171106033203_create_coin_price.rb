class CreateCoinPrice < ActiveRecord::Migration[5.1]
  def change
    create_table :coin_prices do |t|
      t.integer :coin_price, null: false
      t.timestamps 
    end
  end
end
