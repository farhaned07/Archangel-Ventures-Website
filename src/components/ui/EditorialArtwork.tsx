import Image from "next/image";

export function OperatingMapArtwork({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="relative overflow-hidden rounded-[1.75rem] border border-[#d8d8d2] bg-[#efefe8] shadow-[0_30px_90px_rgba(20,20,18,0.09)]">
      <Image
        src="/visuals/archangel-operating-map.svg"
        alt="Archangel operating map showing business workflows prioritized by value and readiness"
        width={1440}
        height={1080}
        priority={priority}
        className="block h-auto w-full"
      />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full border border-white/50 bg-[#f7f7f2]/88 px-4 py-2.5 text-[11px] text-[#60605b] shadow-sm backdrop-blur-md sm:inset-x-auto sm:left-5 sm:right-5 sm:text-xs">
        <span>Operating map</span>
        <span className="text-[#8c8c86]">Value → readiness → implementation</span>
      </figcaption>
    </figure>
  );
}

export function DecisionPackArtwork() {
  return (
    <figure className="relative overflow-hidden rounded-[1.75rem] border border-[#d8d8d2] bg-[#efefe8] shadow-[0_30px_90px_rgba(20,20,18,0.08)]">
      <Image
        src="/visuals/archangel-decision-pack.svg"
        alt="Archangel AI transformation decision pack visual with ranked priorities and an implementation plan"
        width={1320}
        height={980}
        className="block h-auto w-full"
      />
      <figcaption className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/50 bg-[#f7f7f2]/90 px-4 py-3 text-xs text-[#60605b] shadow-sm backdrop-blur-md sm:left-auto sm:right-5 sm:max-w-[300px]">
        A tangible management output, not a generic AI presentation.
      </figcaption>
    </figure>
  );
}
