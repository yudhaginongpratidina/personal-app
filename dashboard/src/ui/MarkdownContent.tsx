import MDEditor from "@uiw/react-md-editor";

export default function MarkdownContent({ content }: { content: string }) {
    return (
        <MDEditor.Markdown source={content}/>
    )
}