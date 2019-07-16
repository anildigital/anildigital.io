# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :anildigital_io, AnildigitalIoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "09oGTEPXIx3ZV8gyUqAXGdmhhCJFAlL0uQq1th/8zn3nkKmwZNIAZK7RfPSYOmDz",
  render_errors: [view: AnildigitalIoWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: AnildigitalIo.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [
    signing_salt: "KAXXkR57PSs4Wgpj5osmbkqkbgWTRqZU8obmNPmbzJDwCToA+OSnylPZdAfL6evf"
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
