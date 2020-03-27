Rails.application.routes.draw do
  
  root to: "application#home"

  namespace :api do
    resources :nodes, only: [:index, :show], defaults: {format: :json}
  end

  PushType.rails_engines.each do |k, (mod, default_path)|
    mount mod::Engine => default_path
  end

  get 'media/*file_uid' => Dragonfly.app.endpoint { |params, app|
    file_name = [ params[:file_uid], params[:format] ].join('.')
    asset = PushType::Asset.find_by_file_uid! file_name
    asset.media params[:style]
  }, as: 'media'

  get '/node/preview/:id' => 'front_end#preview', as: 'preview_node'

  get "*foo" => "application#home", to: redirect { |path_params, req| "/admin"}

  
  # Mount all the registered PushType Rails Engines. This should be placed
  # at the end of your routes.rb file to ensure your application routes are
  # not overidden by PushType.
  #
  # Overide the default mount points by passing a hash of options.
  # Example:
  #
  #   mount_push_type admin: 'cms', front_end: 'blog'
  #
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
