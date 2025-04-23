import { route, index } from "@react-router/dev/routes";

export const publicRoutes = [
  index("pages/home.tsx"),
  route("services", "pages/public/services.tsx"),
  route("about", "pages/public/about.tsx"),
  route("portfolio", "pages/public/portfolio.tsx"),
  route("career", "pages/public/career.tsx"),
  route("blog", "pages/public/blog.tsx"),
];
