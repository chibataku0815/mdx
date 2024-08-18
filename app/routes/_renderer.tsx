import { jsxRenderer } from "hono/jsx-renderer";
import { Badge } from "../components/Badge/badge";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title, frontmatter }) => {
	return (
		<html lang="ja">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
				<Script src="/app/client.ts" />
				{import.meta.env.PROD ? (
					<link href="/static/style.css" rel="stylesheet" />
				) : (
					<>
						<link href="/app/style.css" rel="stylesheet" />
						<link href="/static/style.css" rel="stylesheet" />
					</>
				)}
			</head>
			<body>
				<header>
					<p>{import.meta.env.PROD}</p>
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
