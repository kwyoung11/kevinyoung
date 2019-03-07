class Api::NodesController < ApplicationController
	def index
		nodes = PushType::Node.where(type: params[:node][:type]).where(status: PushType::Node.statuses[:published]).all
		render json: nodes.map {|n| resolve_ids(extract_field_store(n))}
	end

	def show
		node = PushType::Node.where(slug: params[:id]).where(status: PushType::Node.statuses[:published]).first
		render json: extract_field_store(node)
	end

	protected
	def extract_field_store(obj)
		obj = obj.as_json
		if !obj.nil? && !obj["field_store"].nil?
			obj["field_store"].keys.each do |k|
				obj[k] = obj["field_store"][k]
			end
			obj.delete("field_store")
		end
		obj
	end

	def resolve_ids(obj)
		obj.keys.each do |k|
			if k[k.length - 3, k.length] == "_id"
				obj[k] = PushType::Node.where(id: obj[k]).first
			end
		end
		obj
	end
end