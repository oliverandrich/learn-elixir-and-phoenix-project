defmodule ReadItLater.Repo do
  use Ecto.Repo,
    otp_app: :read_it_later,
    adapter: Ecto.Adapters.Postgres
end
