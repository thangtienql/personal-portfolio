"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const CLIENTS = [
  "client1",
  "client2",
  "client3",
  "client4",
  "client5",
  "client6",
  "client7",
  "client8",
];

export default function Clients() {
  return (
    <section id="clients" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Clients"
            title={
              <>
                Work with <span className="text-accent">60+ Brands</span>{" "}
                Worldwide
              </>
            }
          />

          <div className="mt-16 grid grid-cols-2 gap-6 min-w-0 sm:grid-cols-4">
            {CLIENTS.map((client, idx) => {
              const animations = [
                "fade_from_left",
                "fade_from_bottom",
                "fade_from_top",
                "fade_from_right",
              ] as const;
              return (
                <ScrollAnimation
                  key={client}
                  animation={animations[idx % 4]}
                  delay={idx * 0.08}
                >
                  <div className="flex h-24 items-center justify-center rounded-xl border border-[#333] bg-[#252525] opacity-40 transition-all hover:opacity-100 hover:border-accent/50">
                    <img
                      src={`/images/clients/client-${idx + 1}.png`}
                      alt={`Client ${idx + 1}`}
                      className="max-h-16 max-w-[120px] object-contain"
                    />
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
