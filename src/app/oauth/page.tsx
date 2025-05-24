// temp until i get domain for loopr
"use client";

import { useEffect } from "react";

export default function OAuthRedirect() {
  useEffect(() => {
    window.location.href = `loopr://auth/callback${window.location.search}`;
  }, []);

  return <p>Redirecting to loopr iOS...</p>;
}
