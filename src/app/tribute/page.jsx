'use client'

import CinematicPresentation from "./components/CinematicPresentation";
import teachers from "./components/data/teachers";


export default function TributePage() {
  return (
  <main className="fixed inset-0">
      <CinematicPresentation teachers={teachers} />
    </main>
  );
}


