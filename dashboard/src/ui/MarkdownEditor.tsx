// components/MarkdownEditor.tsx
"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

// Lazy-load the MDEditor, SSR disabled
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

// Import styles normally
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

interface MarkdownEditorProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  mode: "edit" | "preview";
  hideToolbar?: boolean;
  height?: number;
  dataColorMode: "light" | "dark";
  required?: boolean;
  hideLabel?: boolean;
  optilnal?: boolean;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  name,
  value,
  onChange,
  mode = "edit",
  hideToolbar = false,
  dataColorMode = "light",
  required = false,
  hideLabel = false,
  optilnal = false,
  height = 200,
}) => {
  const editorRef = useRef<any>(null);

  return (
    <div className="w-full">
      {!hideLabel && (
        <label
          htmlFor={name}
          className="text-sm capitalize flex items-center gap-0.5 text-gray-600"
        >
          {name.replace(/_/g, " ").toLowerCase()}
          {required && <span className="text-red-500">*</span>}
          {optilnal && <span className="lowercase text-gray-500">(optional)</span>}
        </label>
      )}
      <div className="w-full rounded-sm border border-gray-300">
        <MDEditor
          ref={editorRef}
          value={value}
          onChange={(value) => onChange(value || "")}
          preview={mode}
          data-color-mode={dataColorMode}
          hideToolbar={hideToolbar}
          height={height}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
