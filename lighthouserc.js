module.exports = {
    ci: {
        collect: {
            numberOfRuns: 5,
            staticDistDir: "./out",
            url: ["http://localhost:3000"],
            onlyCategories: [
                "performance",
                "accessibility",
                "best-practices",
                "seo"
            ],
            chromeFlags: "--no-sandbox"
        },
        upload: {
            target: "temporary-public-storage"
        },
        assert: {
            assertions: {
                "categories:performance": ["warn", { minScore: 0.7 }],
                "categories:accessibility": ["error", { minScore: 0.8 }],
                "categories:best-practices": ["error", { minScore: 0.8 }],
                "categories:seo": ["error", { minScore: 0.8 }]
            }
        }
    }
};
