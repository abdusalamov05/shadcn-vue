import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['src/**/*.vi.test.ts'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./vitest/setup.ts'],
      coverage: {
        // enabled: true,
        provider: 'v8',
        reportsDirectory: 'coverage',
        reporter: ['text', 'html'],
        include: ['src'],
        exclude: ['src/App.vue', 'src/main.ts', 'src/**/*.stories.ts'],
        all: true,
      },
    },
  }),
)
