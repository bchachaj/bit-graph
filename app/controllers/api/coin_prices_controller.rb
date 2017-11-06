class Api::CoinPricesController < ApplicationController
  def index
    @coins = CoinPrice.all
    # render 'coin_prices/index.json.builder'
  end

  def show
    @coin.find(params[:id])
  end

  def create
    @coin = CoinPrice.new(coin_params)
    if @coin.save
      render :show
    else
      render json: @coin.errors.full_messages, status: 422
    end
  end

  private

  def coin_params
    params.require(:coin_price).permit(:coin_price)
  end
end
