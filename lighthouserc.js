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
            chromePath: process.env.CHROME_PATH,
            settings: {
                chromeFlags: [
                    "--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--headless",
                    "--disable-gpu",
                    "--disable-dev-shm-usage",
                    "--disable-extensions",
                    "--no-first-run",
                    "--disable-background-timer-throttling",
                    "--disable-backgrounding-occluded-windows",
                    "--disable-renderer-backgrounding",
                    "--disable-features=TranslateUI",
                    "--disable-ipc-flooding-protection",
                    "--disable-background-networking",
                    "--disable-default-apps",
                    "--disable-hang-monitor",
                    "--disable-popup-blocking",
                    "--disable-sync",
                    "--metrics-recording-only",
                    "--no-default-browser-check",
                    "--no-pings",
                    "--password-store=basic",
                    "--use-mock-keychain"
                ]
            }
        },
        upload: {
            target: "temporary-public-storage"
        },
        assert: {
            assertions: {
                "categories:performance": ["warn", { minScore: 0.6 }],
                "categories:accessibility": ["error", { minScore: 0.8 }],
                "categories:best-practices": ["warn", { minScore: 0.75 }],
                "categories:seo": ["error", { minScore: 0.8 }]
            }
        }
    }
};
