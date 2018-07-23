Given("I access the employees page") do
  visit 'employees.html'
end

When("I select all users on checkbox") do
  @find = Find.new
  @find.select_all_users
end

When("click on View select data button") do
  @find.click_view_button
end

Then("all users is presented") do
  @find.validate_all_informations
end