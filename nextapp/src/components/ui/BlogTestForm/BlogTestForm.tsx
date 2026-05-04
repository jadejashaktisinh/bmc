"use client";
import { useState } from "react";

export default function BlogTestForm() {
  const [response, setResponse] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("http://localhost:5000/api/blog/create", { method: "POST", body: formData });
    const json = await res.json();
    setResponse(JSON.stringify(json, null, 2));
  }

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Blog Create — API Test</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input name="title" placeholder="Title" required />
        <textarea name="content" placeholder="Content" rows={4} required />
        <input name="tenant_id" placeholder="Tenant ID" required />
        <input name="file" type="file" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
      {response && <pre style={{ marginTop: 16, background: "#f4f4f4", padding: 12 }}>{response}</pre>}
    </div>
  );
}
