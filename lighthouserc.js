module.exports = {
    ci: {
      collect: {
        numberOfRuns: 5,
        staticDistDir: './out',
        // startServerCommand: 'yarn run dev',
        url: ['http://localhost:3000']
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.7}],
          'categories:accessibility': ['error', {minScore: 0.8}],
          'categories:best-practices': ['error', {minScore: 0.8}],
          'categories:seo': ['error', {minScore: 0.8}],
        }
      },
    },
  };