import SitemapGenerator from "sitemap-generator";

// Create a generator
const generator = SitemapGenerator("https://fameplacehotels.com", {
  stripQuerystring: false,
});

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap generated successfully!");
});

// Start the crawler
generator.start();
