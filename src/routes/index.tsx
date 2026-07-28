import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SponsorLanding = lazy(() => import("@/components/sponsor/SponsorLanding"));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SponsorLanding />
    </Suspense>
  );
}
