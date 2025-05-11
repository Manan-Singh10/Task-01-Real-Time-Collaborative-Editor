import {
  Bold,
  Code,
  EllipsisVertical,
  Heading1,
  Heading2,
  Heading3,
  HighlighterIcon,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";

function MenuBar({ editor }) {
  return (
    <div className="flex gap-4 items-center justify-cente">
      <Bold
        onClick={() => editor.chain().focus().toggleBold().run()}
        size={22}
      />
      <Italic
        onClick={() => editor.chain().focus().toggleItalic().run()}
        size={22}
      />
      <Underline
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        size={22}
      />
      <Strikethrough
        onClick={() => editor.chain().focus().toggleStrike().run()}
        size={22}
      />
      <Code
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        size={22}
      />
      <HighlighterIcon
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        size={22}
      />
      <Heading1
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        size={22}
      />
      <Heading2
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        size={22}
      />
      <Heading3
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        size={22}
      />
      <EllipsisVertical
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        size={22}
      />
    </div>
  );
}

export default MenuBar;
