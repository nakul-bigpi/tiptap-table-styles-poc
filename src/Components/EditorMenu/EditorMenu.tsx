import { Box, AppBar, Toolbar } from "@mui/material";
import { TableViewOutlined } from "@mui/icons-material";

import MenuButton from "../MenuButton/MenuButton";

import "./EditorMenu.css";

const EditorMenuButtonTooltips = {
  INSERT_TABLE: "Insert Table",
};

interface EditorMenuProps {
  editor: any;
}

const EditorMenu = (props: EditorMenuProps) => {
  const { editor } = props;

  if (!editor) return null;

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Box component="span">
          <MenuButton
            Icon={TableViewOutlined}
            tooltip={EditorMenuButtonTooltips.INSERT_TABLE}
            onClick={() => editor.chain().focus().insertTable().run()}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default EditorMenu;
