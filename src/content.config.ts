import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { locales } from "@/docs/config/siteSettings.json";
import type { DocsTab } from "@/docs/config/types/configDataTypes";
import { dataTranslations } from "@/docs/config/translationData.json";

// Extract all unique section IDs from all tabs in all locales
const allTabIds = new Set<string>();

// For each configured locale
for (const locale of locales) {
  // Read sidebar metadata directly so content config stays isolated from runtime helpers.
  const sidebarData = dataTranslations[locale].sidebarNavData;

  // For each tab in this locale's data
  if (sidebarData.tabs) {
    sidebarData.tabs.forEach((tab: DocsTab) => {
      // Add the tab ID itself as a valid section
      allTabIds.add(tab.id);
    });
  }
}

// Convert Set to Array for z.enum
const tabIds = [...allTabIds].length > 0 ? [...allTabIds] : ["main"];

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/docs/data/docs" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Tab field is used to associate individual docs with specific tabs
      tab: z.enum(tabIds as [string, ...string[]]).default("main"),
      sidebar: z
        .object({
          label: z.string().optional(),
          order: z.number().optional(),
          badge: z
            .object({
              text: z.string(),
              variant: z.enum(["note", "tip", "caution", "danger", "info"]).default("note"),
            })
            .optional(),
        })
        .optional(),
      tableOfContents: z
        .object({
          minHeadingLevel: z.number().min(1).max(6).optional(),
          maxHeadingLevel: z.number().min(1).max(6).optional(),
        })
        .optional(),
      pagefind: z.boolean().optional(),
      mappingKey: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  docs: docsCollection,
};
