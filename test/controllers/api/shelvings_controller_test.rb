require 'test_helper'

class Api::ShelvingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_shelvings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_shelvings_destroy_url
    assert_response :success
  end

end
