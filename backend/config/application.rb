require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsEngineSample
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.generators do |g|
      g.test_framework :rspec, view_specs: false, helper_specs: false, controller_specs: false
      g.helper false
      g.stylesheets false
      g.javascripts false
      g.fixture_replacement :factory_bot, dir: 'spec/factories'
    end

    # config.middleware.use Rack::MethodOverride
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::Flash

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*',
                 :headers => :any,
                 :expose => ['access-token', 'expiry', 'token-type', 'uid', 'client'],
                 :methods => [:get, :post, :options, :delete, :put]
      end
    end

    config.middleware.insert_before Rack::Runtime, Rack::Rewrite do
      rewrite %r{\A/admin(/\w+)?}, '/admin'
      rewrite %r{\A/(\w+)?}, '/', not: %r{\A/api(/\w+)?}
    end
  end
end
