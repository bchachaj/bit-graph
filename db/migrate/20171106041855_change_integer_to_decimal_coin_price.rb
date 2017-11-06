class ChangeIntegerToDecimalCoinPrice < ActiveRecord::Migration[5.1]
  def change
    change_column :coin_prices, :coin_price, :decimal
  end
end
