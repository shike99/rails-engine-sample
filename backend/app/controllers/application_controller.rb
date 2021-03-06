# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action do
    tokens = cookies['session'] ? JSON.parse(cookies.fetch('session')).fetch('tokens') : {}
    relevant_headers = tokens.symbolize_keys.slice(*DeviseTokenAuth.headers_names.keys)

    relevant_headers.each do |k, v|
      request.headers[k] = v
    end
  end
end
