# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :read_it_later,
  ecto_repos: [ReadItLater.Repo]

# Configures the endpoint
config :read_it_later, ReadItLaterWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "0J69zRL8FjuCR1286ueCDUQXzTLd9NvZNyXaObVla2M+LlZIasrKglo/UtUIw1Mi",
  render_errors: [view: ReadItLaterWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReadItLater.PubSub,
  live_view: [signing_salt: "Q8FKjBOE"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
