import { mergeAttributes } from "@tiptap/react";
import { Table } from "@tiptap/extension-table";

export const CustomTable = Table.extend({
  addAttributes() {
    return {
      style: {
        default: null,
        parseHTML: (element) => {
          return element.hasAttribute("style")
            ? element.getAttribute("style")
            : null;
        },
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "table",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      ["tbody", 0],
    ];
  },
});
