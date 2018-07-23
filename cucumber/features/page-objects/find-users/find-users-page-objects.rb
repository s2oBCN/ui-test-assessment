class Find < SitePrism::Page
    include Capybara::DSL
    include RSpec::Matchers
  
    def select_all_users
      find('#row0treeGrid .jqx-tree-grid-checkbox').click
      find('#row1treeGrid .jqx-tree-grid-checkbox').click
      find('#row2treeGrid .jqx-tree-grid-checkbox').click
      find('#row3treeGrid .jqx-tree-grid-checkbox').click
      find('#row4treeGrid .jqx-tree-grid-checkbox').click
      find('#row5treeGrid .jqx-tree-grid-checkbox').click
      find('#row6treeGrid .jqx-tree-grid-checkbox').click
      find('#row7treeGrid .jqx-tree-grid-checkbox').click
      find('#row8treeGrid .jqx-tree-grid-checkbox').click
    end

    def click_view_button
      find('#btn').click
    end

    def validate_all_informations
      expect(page).to_have_content 'Andrew is from Tacoma'
      expect(page).to_have_content 'Nancy is from Seatle'
      expect(page).to_have_content 'Janet is from Kirkland'
      expect(page).to_have_content 'Margaret is from Redmond'
      expect(page).to_have_content 'Steven is from London'
      expect(page).to_have_content 'Michael is from London'
      expect(page).to_have_content 'Robert is from London'
      expect(page).to_have_content 'Anne is from London'
      expect(page).to_have_content 'Laura is from Seatle'
    end
end
  