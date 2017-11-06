class CreateCoinPrices < ActiveRecord::Migration[5.1]
  def change
    create_table :coin_prices do |t|

      t.timestamps
    end
  end
end
