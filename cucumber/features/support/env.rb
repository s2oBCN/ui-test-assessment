require 'capybara'
require 'capybara/dsl'
require 'capybara/cucumber'
require 'selenium-webdriver'
require 'rspec'
require 'yaml'
require 'fileutils'
require 'pry'

BROWSER = ENV['BROWSER']
ENVIRONMENT_TYPE = ENV['ENVIRONMENT_TYPE']


Capybara.app = Rack::File.new(File.dirname(__FILE__) + "employees.html")


## variable which loads the data file according to the environment
CONFIG = YAML.load_file(File.dirname(__FILE__) + "/config/#{ENVIRONMENT_TYPE}.yaml")

## register driver according with browser chosen
Capybara.register_driver :selenium do |app|
  if BROWSER.eql?('chrome')
    Capybara::Selenium::Driver.new(app,
    :browser => :chrome,
    :desired_capabilities => Selenium::WebDriver::Remote::Capabilities.chrome(
      'chromeOptions' => {
        'args' => [ "--start-maximized" ]
      }
    )
  )
  elsif BROWSER.eql?('chrome_headles')
    Capybara::Selenium::Driver.new(app,
    :browser => :chrome,
    :desired_capabilities => Selenium::WebDriver::Remote::Capabilities.chrome(
    'chromeOptions' => {
      'args' => ["--headless", "--disable-gpu", "--no-sandbox", "--window-size=1920,1080"]
        }
      )
    )
  end
end
