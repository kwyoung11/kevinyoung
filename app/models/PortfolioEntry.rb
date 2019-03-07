class PortfolioEntry < PushType::Node
	has_child_nodes :none

	before_save :get_link_to_screenshot

	field :screenshot_id, :asset
	field :screenshot_url, :string
	field :summary, :wysiwyg
	field :description, :wysiwyg
	field :link, :string
	field :technologies, :tag_list


	protected
	def get_link_to_screenshot
		if self.screenshot
			self.screenshot_url = Dragonfly.app.remote_url_for(self.screenshot.file_uid)
		end
	end
end