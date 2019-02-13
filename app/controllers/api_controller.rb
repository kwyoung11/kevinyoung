class ApiController < PushType::Api::NodesController
	PUBLIC_RESOURCES = ["Post", "PostSite"]
  
  	def public_resources
  		PUBLIC_RESOURCES
  	end
end
