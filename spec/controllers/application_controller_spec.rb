require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do 
    describe 'CSRF Protection' do 
        it 'protects from forgery' do 
            expect(ApplicationController.new.forgery_protection_strategy).not_to be_nil
        end
    end
end