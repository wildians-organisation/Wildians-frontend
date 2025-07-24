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
                    "--disable-features=TranslateUI,VizDisplayCompositor,AudioServiceOutOfProcess",
                    "--disable-ipc-flooding-protection",
                    "--disable-background-networking",
                    "--disable-background-mode",
                    "--disable-client-side-phishing-detection",
                    "--disable-default-apps",
                    "--disable-hang-monitor",
                    "--disable-popup-blocking",
                    "--disable-prompt-on-repost",
                    "--disable-sync",
                    "--disable-web-security",
                    "--metrics-recording-only",
                    "--no-default-browser-check",
                    "--no-pings",
                    "--password-store=basic",
                    "--use-mock-keychain",
                    "--disable-component-extensions-with-background-pages",
                    "--disable-field-trial-config",
                    "--disable-back-forward-cache",
                    "--disable-breakpad",
                    "--disable-component-update",
                    "--disable-domain-reliability",
                    "--run-all-compositor-stages-before-draw",
                    "--disable-threaded-animation",
                    "--disable-threaded-scrolling",
                    "--disable-checker-imaging",
                    "--disable-image-animation-resync",
                    "--single-process"
                ]
            }
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
