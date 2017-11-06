class CoinPrice < ApplicationRecord
  validates :coin_price, presence: true
  
end
