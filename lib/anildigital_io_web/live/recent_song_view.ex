defmodule AnildigitalIoWeb.RecentSongView do
  use Phoenix.LiveView

  # def render(assigns) do
  #   ~L"""
  #   <div class="">
  #     <div>
  #       <%= @recent_song %>
  #     </div>
  #   </div>
  #   """
  # end

  def render(assigns) do
    AnildigitalIoWeb.PageView.render("recent_song.html", assigns)
  end

  def handle_event("get_recent_song", _value, socket) do
    # do the deploy process
    send(self(), :got_recent_song)
    {:noreply, assign(socket, recent_song: "Getting recent song...")}
  end

  def handle_info(:got_recent_song, socket) do
    send(self(), :done)
    {:noreply, assign(socket, recent_song: "Got recent song.. processing.")}
  end

  def handle_info(:done, socket) do
    :timer.sleep(1000)
    {:noreply, assign(socket, recent_song: "Done!")}
  end

  def mount(_session, socket) do
    {:ok, assign(socket, recent_song: "Click button to get recent song!")}
  end
end
