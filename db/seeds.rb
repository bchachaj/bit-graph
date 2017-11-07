# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CoinPrice.destroy_all



SAMPLE_DATA = [
7382.45,
7352.04,
7332.41,
7231.93,
7188.16,
7304,
7317.26,
7294.26,
7352.13,
7319.02,
7320.31,
7335.1,
7412.96,
7344.71,
7285.07,
7263.83,
7156.53,
7107,
7005.89,
7109.5,
6967.87,
7063.76,
7076.46,
7123.89,
7199.97,
7123.12,
7188.33,
7174.39,
7196.07,
7154.01 ]

i = 0
24.times do
  CoinPrice.create!(coin_price: SAMPLE_DATA[i])
  i+=1
end
