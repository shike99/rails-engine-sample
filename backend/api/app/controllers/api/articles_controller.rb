require_dependency "api/application_controller"

module Api
  class ArticlesController < ApplicationController
    def index
      @articles = Api.Article.all

      render json: @articles
    end

    def show
      @article = Api.Article.find(params[:id])

      render file: '/api/app/views/api/articles/show'
    end
  end
end
