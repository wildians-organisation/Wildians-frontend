module.exports = {
    ci: {
      collect: {
        numberOfRuns: 5,
        staticDistDir: './out',
        url: ['http://localhost:3000'],
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        chromeFlags: '--no-sandbox',
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}],
          'categories:best-practices': ['error', {minScore: 1}],
          'categories:seo': ['error', {minScore: 1}],
        }
      },
    },
  };