class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_node_action only: [:post] do
  	puts @node.inspect
  end

  def home
  	render "nodes/home"
  end
end
