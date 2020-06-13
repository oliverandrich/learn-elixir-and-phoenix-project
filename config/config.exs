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
  secret_key_base: "bv7u6g+eRjOwzHBrabilVGUyH68i3yfvPv1Z3b7QNhAN1wsLA7d2a98fQiKNrHYQ",
  render_errors: [view: ReadItLaterWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReadItLater.PubSub,
  live_view: [signing_salt: "KtfGNxCr"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :read_it_later, :pow,
  user: ReadItLater.Users.User,
  repo: ReadItLater.Repo,
  extensions: [PowResetPassword, PowEmailConfirmation],
  controller_callbacks: Pow.Extension.Phoenix.ControllerCallbacks,
  web_module: ReadItLaterWeb,
  mailer_backend: ReadItLaterWeb.Pow.Mailer,
  web_module_mailer: ReadItLaterWeb,
  routes_backend: ReadItLaterWeb.Pow.Routes

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
