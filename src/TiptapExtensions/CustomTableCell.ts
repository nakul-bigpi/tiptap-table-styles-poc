import { mergeAttributes } from "@tiptap/react";
import { TableCell } from "@tiptap/extension-table-cell";

export const CustomTableCell = TableCell.extend({
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
      "td",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },
});
