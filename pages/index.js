// app/page.js
import { useEffect, useState } from "react";

export default function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/index.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}