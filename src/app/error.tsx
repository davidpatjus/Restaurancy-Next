"use client";

export default function ErrorPage({error}: {error: Error}) {
  return (
    <div className="error-page">
      <h1>{error.message}</h1>
    </div>
  );
}
