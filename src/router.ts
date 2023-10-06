import App from "./App.svelte";
import Home from "./pages/Home.svelte";
import NotFound from "./pages/NotFound.svelte";
import User from "./pages/User.svelte";

export const routes = {
  '/': Home,
  '/user': User,
  '*': NotFound,
}

