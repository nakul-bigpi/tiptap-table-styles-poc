import { useEditor, EditorContent } from "@tiptap/react";
import { Box } from "@mui/material";

import { HTML_CONTENT } from "../../Common/Content";
import { TiptapExtensions } from "../../Common/TiptapExtensions";
import EditorMenu from "../EditorMenu/EditorMenu";

import "../../Common/Tiptap.css";

const Tiptap = () => {
  const editor = useEditor({
    extensions: TiptapExtensions,
    content: HTML_CONTENT,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <EditorMenu editor={editor} />

      <div className="test_tiptap document">
        <EditorContent editor={editor} />
      </div>
    </Box>
  );
};

export default Tiptap;
