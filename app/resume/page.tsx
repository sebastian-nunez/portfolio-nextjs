"use client"

import { useEffect } from "react"

import { ToastAction } from "@/components/ui/toast"
import { Anchor, P } from "@/components/ui/typography"
import { useToast } from "@/components/ui/use-toast"

const Resume: React.FC = () => {
  const { toast } = useToast()
  // Document ID of the Google Drive file
  const docId = "1CRTWwB-ksKgEoLYOHgQ1rZK0mF59ND-B3SyU3cla2Mc"

  useEffect(() => {
    toast({
      title: "Awesome! Let's have a look, shall we?",
      description: "Generating a PDF preview...",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
    })
  }, [])

  return (
    <div className="h-screen" style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <iframe
        src={`https://docs.google.com/gview?url=https://docs.google.com/document/d/${docId}/export?format=pdf&embedded=true`}
        style={{ width: "100%", height: "100%" }}
      >
        <P>
          Unable to display PDF file.{" "}
          <Anchor
            href={`https://docs.google.com/document/d/${docId}/export?format=pdf"`}
          >
            Download
          </Anchor>{" "}
          instead.
        </P>
      </iframe>
    </div>
  )
}

export default Resume
