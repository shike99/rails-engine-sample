# frozen_string_literal: true

module Api
  class Engine < ::Rails::Engine
    isolate_namespace Api
    config.generators.api_only = true
  end
end
