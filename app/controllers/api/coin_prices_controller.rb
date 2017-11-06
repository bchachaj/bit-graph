class Api::CoinPricesController < ApplicationController
  def index
    @coins = CoinPrice.last(20).reverse
  end

  def show
    @coin.find(params[:id])
  end

  def create
    @coin = CoinPrice.create!(coin_price: params[:coin])
    if @coin.save
      render :show
    else
      render json: @coin.errors.full_messages, status: 422
    end
  end

end
