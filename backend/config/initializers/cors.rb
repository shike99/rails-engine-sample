module AppName
  class Application < Rails::Application
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '/api/*',
          headers: :any,
          expose:  %i[access-token expiry token-type uid client],
          methods: %i[get post options delete put]
      end
    end
  end
end
