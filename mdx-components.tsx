import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...defaultComponents,
  };
}
