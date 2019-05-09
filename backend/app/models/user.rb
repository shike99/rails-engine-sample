# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User

  enum role: { member: 0, admin: 1 }

  has_many :articles

  def token_validation_response
    as_json(only: [:id, :email, :uid, :name, :nickname, :image, :role])
  end
end
