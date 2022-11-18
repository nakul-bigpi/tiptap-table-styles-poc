import { Document } from "@tiptap/extension-document";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Paragraph } from "@tiptap/extension-paragraph";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Text } from "@tiptap/extension-text";

import { CustomTable, CustomTableRow } from "../TiptapExtensions";

export const TiptapExtensions2 = [
  CustomTable,
  CustomTableRow,

  Document,
  Gapcursor,
  Paragraph,
  TableCell,
  TableHeader,
  Text,
];
