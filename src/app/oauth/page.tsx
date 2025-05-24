// temp until i get domain for loopr
"use client";

import { useEffect } from "react";

export default function OAuthRedirect() {
  useEffect(() => {
    const query = window.location.search;
    window.location.href = `loopr://auth/callback${window.location.search}`;
  }, []);

  return <p>Redirecting to loopr iOS...</p>;
}
