defmodule ReadItLaterWeb.PageController do
  use ReadItLaterWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def protected_index(conn, _params) do
    render(conn, "protected_index.html")
  end
end
