defmodule ReadItLaterWeb.PageController do
  use ReadItLaterWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
