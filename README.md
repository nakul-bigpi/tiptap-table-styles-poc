# Titap Table Styles POC

- Component `Tiptap` uses a custom `TableCell` extension which can be found [here](./src/TiptapExtensions/CustomTableCell.ts). This custom extension tries to retain the existing styles on the passed content.
- Component `Tiptap2` uses the `TableCell` extension in it's original form.
- `Tiptap` is being used right now in the `App` component [here](./src/App.tsx), you can comment/ uncomment few lines to use `Tiptap2`
