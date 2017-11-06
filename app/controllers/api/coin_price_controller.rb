class CoinPriceController < ApplicationController
  def index
    @coins = CoinPrice.all
  end

  def create
    @coin = CoinPrice.new(coin_params)
    if @coin.save
      #
    else
      render json: @coin.errors.full_messages, status: 422
    end
  end

  private

  def coin_params
    params.require(:coin_price).permit(:coin_price)
  end
end
