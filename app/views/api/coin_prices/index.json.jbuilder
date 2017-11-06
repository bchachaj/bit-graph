# json.array! @coins, :coin_price, :created_at
@coins.each do |coin|
  json.set! coin.id do
    json.extract! coin, :coin_price, :created_at
  end
end
