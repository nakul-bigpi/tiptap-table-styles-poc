import { Document } from "@tiptap/extension-document";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Paragraph } from "@tiptap/extension-paragraph";
import { TableHeader } from "@tiptap/extension-table-header";
import { Text } from "@tiptap/extension-text";

import {
  CustomTable,
  CustomTableCell,
  CustomTableRow,
} from "../TiptapExtensions";

export const TiptapExtensions = [
  CustomTable,
  CustomTableCell,
  CustomTableRow,

  Document,
  Gapcursor,
  Paragraph,
  TableHeader,
  Text,
];
