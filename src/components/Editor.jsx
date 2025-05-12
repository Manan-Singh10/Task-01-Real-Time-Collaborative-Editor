import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import ListItem from "@tiptap/extension-list-item";
import { WebsocketProvider } from "y-websocket";
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from "yjs";

import { useMemo } from "react";
import MenuBar from "./MenuBar";
import Signout from "./Signout";

function Editor({ name, onSignout }) {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const user = {
    name: name,
    color: getRandomColor(),
  };

  const { ydoc, provider } = useMemo(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      "wss://y-websocket-server-lcra.onrender.com",
      "roomID",
      ydoc
    );
    return { ydoc, provider };
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        heading: false,
        bulletList: false,
        listItem: false,
      }),
      Underline,
      Highlight,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user,
      }),
      BulletList,
      ListItem,
    ],
  });

  return (
    <>
      <header className="flex items-center gap-10">
        <MenuBar editor={editor} />
        <Signout onSignout={onSignout} />
      </header>
      <EditorContent
        className="tiptap bg-white p-8 text-lg w-full max-w-[794px] min-h-[1123px] mx-auto shadow-md rounded-md"
        editor={editor}
      />
    </>
  );
}

export default Editor;
