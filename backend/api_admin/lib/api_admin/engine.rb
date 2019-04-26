module ApiAdmin
  class Engine < ::Rails::Engine
    isolate_namespace ApiAdmin
    config.generators.api_only = true
  end
end
