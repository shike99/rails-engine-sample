# frozen_string_literal: true

$:.push File.expand_path('lib', __dir__)

# Maintain your gem's version:
require 'api_admin/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = 'api_admin'
  spec.version     = ApiAdmin::VERSION
  spec.authors     = ['Write your name']
  spec.email       = ['Write your email address']
  spec.homepage    = ''
  spec.summary     = 'Summary of ApiAdmin.'
  spec.description = 'Description of ApiAdmin.'
  spec.license     = 'MIT'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "Set to 'http://mygemserver.com'"
  else
    raise 'RubyGems 2.0 or newer is required to protect against ' \
      'public gem pushes.'
  end

  spec.files = Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  spec.add_dependency 'rails', '~> 5.2.3'

  spec.add_development_dependency 'pg'
  spec.add_development_dependency 'devise_token_auth'
  spec.add_development_dependency 'pundit'
  spec.add_development_dependency 'jbuilder'
end
