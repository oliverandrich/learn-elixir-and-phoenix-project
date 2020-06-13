defmodule ReadItLaterWeb.Pow.Routes do
  use Pow.Phoenix.Routes
  alias ReadItLaterWeb.Router.Helpers, as: Routes

  @impl true
  def after_sign_in_path(conn), do: Routes.page_path(conn, :protected_index)

  @impl true
  def after_sign_out_path(conn), do: Routes.page_path(conn, :index)
end
