"use client";

import { useState } from "react";
import MarkdownEditor from "@/ui/MarkdownEditor";
import MarkdownContent from "@/ui/MarkdownContent";


export default function Page() {
    const [content, setContent] = useState("");

    return (
        <div className="w-full p-4 flex flex-col gap-4 bg-white min-h-screen">

            <MarkdownEditor
                name="content"
                value={content}
                onChange={(value) => setContent(value || "")}
                mode="edit"
                hideToolbar={false}
                dataColorMode="light"
                required={false}
                hideLabel={true}
            />

            <MarkdownContent content={content} />
        </div>
    );
}
