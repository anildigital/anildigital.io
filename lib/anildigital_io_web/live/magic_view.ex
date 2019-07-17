defmodule AnildigitalIoWeb.MagicView do
  use Phoenix.LiveView

  def render(assigns) do
    AnildigitalIoWeb.PageView.render("magic.html", assigns)
  end

  def handle_event("do_magic", _value, socket) do
    magic = socket.assigns.magic

    send(self(), {:create_magic, magic})

    {:noreply, assign(socket, magic: magic)}
  end

  def handle_info({:create_magic, magic}, socket) do
    spec = {AnildigitalIo.Magic, {self(), magic}}

    DynamicSupervisor.start_child(
      AnildigitalIo.DynamicSupervisor,
      spec
    )

    {:noreply, assign(socket, magic: magic)}
  end

  def handle_info({:got_magic, magic}, socket) do
    {:noreply, assign(socket, magic: magic)}
  end

  def mount(_session, socket) do
    {:ok, assign(socket, magic: [])}
  end
end
