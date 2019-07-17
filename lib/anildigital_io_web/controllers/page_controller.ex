defmodule AnildigitalIoWeb.PageController do
  use AnildigitalIoWeb, :controller

  alias Phoenix.LiveView

  def index(conn, _params) do
    # render(conn, "index.html")
    LiveView.Controller.live_render(conn, AnildigitalIoWeb.MagicView, session: %{})
  end
end
