import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import honox from 'honox/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'
import path from 'node:path';

const entry = './app/server.ts'

export default defineConfig(() => {
  if (process.env.MODE === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    }
  }
  return {
    plugins: [
      honox(),
      ssg({ entry }),
      mdx({
        jsxImportSource: 'hono/jsx',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'app'),
      },
    },
  }
})
