# frozen_string_literal: true

require_dependency 'api_admin/application_controller'

module ApiAdmin
  class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]

    # GET /articles
    def index
      @articles = ApiAdmin::Article.all

      render file: '/api_admin/app/views/api_admin/articles/index'
    end

    # GET /articles/1
    def show
      render file: '/api_admin/app/views/api_admin/articles/show'
    end

    # POST /articles
    def create
      @article = ApiAdmin::Article.new(article_params)

      if @article.save
        render json: @article, status: :created, location: @article
      else
        render json: @article.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /articles/1
    def update
      if @article.update(article_params)
        render json: @article
      else
        render json: @article.errors, status: :unprocessable_entity
      end
    end

    # DELETE /articles/1
    def destroy
      @article.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_article
        @article = ApiAdmin::Article.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def article_params
        params.require(:article).permit(:title, :text, :author_id)
      end
  end
end
