import { mergeAttributes } from "@tiptap/react";
import { TableRow } from "@tiptap/extension-table-row";

export const CustomTableRow = TableRow.extend({
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
      "tr",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },
});
