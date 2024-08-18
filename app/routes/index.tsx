import { Button } from "../components/ui/button";
import type { Meta } from "../types";

export default function Top() {
	const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.mdx", {
		eager: true,
	});
	return (
		<div>
			<h1 class="text-3xl font-bold underline">Hello!</h1>
			<h2>Posts</h2>
			<Button>Click me</Button>
			<ul class="article-list">
				{Object.entries(posts).map(([id, module]) => {
					if (module.frontmatter) {
						return (
							<li>
								<a href={`${id.replace(/\.mdx$/, "")}`}>
									{module.frontmatter.title}
								</a>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
}
