/**
 * remark-mermaid — converts ```mermaid fenced code blocks into <Mermaid> MDX components.
 *
 * This plugin runs during MDX compilation (before expressive-code), so mermaid
 * blocks are intercepted and rendered as interactive diagrams instead of code.
 */
import { visit } from "unist-util-visit";

/**
 * @param { import('mdast').Root } tree
 */
export default function remarkMermaid() {
  return function (tree) {
    visit(tree, "code", function (node, index, parent) {
      if (node.lang !== "mermaid") return;
      if (!parent || index === undefined) return;

      // Build a template literal attribute value AST for the mermaid code.
      // This safely passes the diagram source as a JS prop, avoiding any
      // MDX parse issues with special characters ({, }, etc.) in the content.
      const escaped = node.value
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$/g, "\\$");

      parent.children[index] = {
        type: "mdxJsxFlowElement",
        name: "Mermaid",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "code",
            value: {
              type: "mdxJsxAttributeValueExpression",
              value: "`" + escaped + "`",
              data: {
                estree: {
                  type: "Program",
                  sourceType: "module",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "TemplateLiteral",
                        quasis: [
                          {
                            type: "TemplateElement",
                            value: { raw: escaped, cooked: null },
                            tail: true,
                          },
                        ],
                        expressions: [],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
        children: [],
      };
    });
  };
}
