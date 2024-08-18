import { jsxRenderer } from "hono/jsx-renderer";
import { Badge } from "../components/Badge/badge";

export default jsxRenderer(({ children, title, frontmatter }) => {
	return (
		<html lang="ja">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
				{import.meta.env.MODE === "client" ? (
					<link rel="stylesheet" href="/static/style.css" />
				) : (
					<link rel="stylesheet" href="/app/style.css" />
				)}
			</head>
			<body>
				<header>
					<h1>
						<a href="/">My Blog</a>
					</h1>
					<Badge>test</Badge>
				</header>
				<main class="prose">
					<article>{children}</article>
				</main>
				<footer>
					<p>&copy; 2024 My Blog. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
});
