require IEx

defmodule AnildigitalIo.Magic do
  use GenServer

  def init({pid, magic}) do
    {:ok, {pid, magic}}
  end

  def start_link({pid, magic}) do
    {:ok, new_pid} = GenServer.start_link(__MODULE__, {pid, magic}, [])

    GenServer.call(new_pid, {new_pid, :create_circle})
  end

  def handle_call({new_pid, :create_circle}, _from, {pid, magic}) do
    circle = %{top: Enum.random(0..300), left: Enum.random(0..300)}
    magic = [{new_pid, circle} | magic]

    send(pid, {:got_magic, magic})

    send(new_pid, {pid, new_pid, :update_circle})

    {:reply, magic, magic}
  end

  def handle_info({pid, new_pid, :update_circle}, magic) do
    t = Enum.find(magic, fn x -> elem(x, 0) == new_pid end)
    circle = elem(t, 1)

    circle = update_in(circle[:top], &(&1 + Enum.random(-2..2)))
    circle = update_in(circle[:left], &(&1 + Enum.random(-2..2)))

    magic = Enum.reject(magic, fn x -> elem(x, 0) == new_pid end)

    magic = [{new_pid, circle} | magic]

    :timer.sleep(100)
    send(pid, {:got_magic, magic})

    send(new_pid, {pid, new_pid, :update_circle})
    {:noreply, magic}
  end
end
