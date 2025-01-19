"use client";

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutPut:string
}

const OutputSection = ({aiOutPut}:PROPS) => {
  const editorRef = useRef<Editor | null>(null);

  // useEffect(()=>{
  //   const editorInterface = editorRef.current?.getInstance()
  //   editorInterface.setMarkdown(aiOutPut)
  // },[aiOutPut])

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (aiOutPut) {
      // Enforcing Markdown format
      editorInstance?.setMarkdown(aiOutPut);
    }
  }, [aiOutPut]);
  

  const handleCopy = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    if (markdownContent) {
      navigator.clipboard.writeText(markdownContent);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2>Your Result</h2>
        <Button onClick={handleCopy} className="flex gap-2"> <Copy className="w-4 h-4" /> Copy </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
