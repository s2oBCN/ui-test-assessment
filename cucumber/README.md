# Ui test assessment - Challenge Roche

The objective of this repository is to perform automated tests on the functional layer with functional language **Gherkin** for **BDD** purposes.
The ecosytem is based on **cucumber, capybara (framework), rspec (for asserts), SitePrism (for page object concepts)**.

## Getting Started
### Cloning the repository

```git
git clone git@github.com:thiagomarquessp/ui-test-assessment.git
```
### Installing

- Ruby 2.4.2 or higher should be installed;
- Bundler gem should be installed:

```ruby
gem install bundler
```
Execute the bundle command in root path where Gemfile is:

```shell
bundle install
```

- Chrome and Firefox drivers should be installed so that selenium can start in a browser (configured in env.rb file):

```shell
#First install the Nodejs package:
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install jq nodejs curl -qy

#After install the chrome and firefox drivers
npm install -g geckodriver
npm install -g chromedriver
```

## Project Structure

The test suite consists of automated functional tests.

- To run all the features for a certain environment, in the /cucumber path execute:

```shell
cucumber -p chrome -p env
```

- To run a specific scenario, execute:

```shell
cucumber -p chrome -p env --tags @tagname

#You can find tags before each Scenario in the .feature files.
```
