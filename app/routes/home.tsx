import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "Welcome to Todo App!" },
  ];
}

export default function Home() {
  return <>Home</>;
}
