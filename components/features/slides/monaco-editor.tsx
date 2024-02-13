"use client";

import Editor, { useMonaco } from "@monaco-editor/react";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

import { useSearchParams } from "next/navigation";

export default function MonacoEditor() {
  const monaco = useMonaco();
  // const { pin }: any = useWorkspaceContext();
  // const { data } = pin?.pinQuery;
  const data: any = null;
  const { theme, setTheme } = useTheme();

  const q: any = useSearchParams();

  const page = parseInt(q.get("page"));

  console.log("page", page);
  useEffect(() => {
    if (theme && monaco) {
      import("monaco-themes/themes/Monokai.json")
        .then((data: any) => {
          monaco.editor.defineTheme("monokai", data);
        })
        .then(() => {
          monaco.editor.setTheme(theme === "light" ? "light" : "monokai");
        });
    }
  }, [theme, monaco, page]);
  return (
    <div className="h-[100%] w-full ">
      <Editor
        options={{
          wordWrap: "on",
          minimap: { enabled: true },
          trimAutoWhitespace: true,
          //    readOnly: true,
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: "smart",
          cursorBlinking: "blink",
          cursorStyle: "line",
          cursorSmoothCaretAnimation: "on",
          copyWithSyntaxHighlighting: true,
          fontSize: 20,
        }}
        height={"100%"}
        defaultLanguage="markdown"
        defaultValue={data?.slides[page || 0]?.raw || ""}
        value={data?.slides[page || 0]?.raw || ""}
        onChange={() => {}}
      />
    </div>
  );
}
