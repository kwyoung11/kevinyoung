Webpacker::Compiler.env['FRONTEND_API_PUBLIC_KEY'] = Rails.application.secrets.secret_key_base
Rails.application.secrets["FRONTEND_API_SECRET"] = Base64.encode64(SecureRandom.hex(8))