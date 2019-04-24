# frozen_string_literal: true

class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  # Include default devise modules.
  devise :rememberable, :omniauthable

  enum role: { member: 0, admin: 1 }

  has_many :articles
end
