import type { JSX } from "preact";
import { Section } from "@rizom/ui";
import { WORK_KICKER, WORK_RULE } from "../styles";
import type { ProofContent } from "./schema";

export const ProofLayout = ({
  kicker,
  headline,
  quote,
  attribution,
  partnersLabel,
  partners,
}: ProofContent): JSX.Element => {
  return (
    <Section id="proof" className="reveal py-[128px] text-center max-[768px]:py-20">
      <div className={`${WORK_RULE} mb-16 -mt-16 max-[768px]:-mt-10 max-[768px]:mb-12`} />

      <div className="mx-auto mb-20 max-w-[720px] text-center max-[768px]:mb-14">
        <span className={`${WORK_KICKER} mb-3`}>{kicker}</span>
        <h2 className="mt-3 font-display text-[clamp(32px,4.5vw,56px)] font-[520] leading-[1.05] tracking-[-1.4px] text-theme max-[768px]:text-[30px] max-[768px]:tracking-[-0.9px]">
          {headline}
        </h2>
      </div>

      <blockquote className="relative mx-auto mb-24 max-w-[720px] px-10 text-left max-[768px]:mb-16 max-[768px]:px-4">
        <p className="relative mb-7 pl-14 font-display text-[clamp(24px,3vw,38px)] italic leading-[1.28] tracking-[-0.6px] text-theme before:absolute before:-left-1.5 before:-top-10 before:font-display before:text-[180px] before:font-medium before:leading-none before:text-accent/35 before:content-['\u201C'] max-[768px]:pl-8 max-[768px]:text-[22px] max-[768px]:before:-left-1 max-[768px]:before:-top-6 max-[768px]:before:text-[120px]">
          {quote}
        </p>
        <footer className="pl-14 font-label text-[12px] font-semibold uppercase tracking-[1.8px] text-theme-muted max-[768px]:pl-8">
          {attribution}
        </footer>
      </blockquote>

      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-7">
        <span className="font-label text-[10px] font-semibold uppercase tracking-[2.5px] text-theme-light">
          {partnersLabel}
        </span>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 max-[768px]:gap-x-6">
          {partners.map((partner) => (
            <span key={partner} className="font-display text-[20px] italic text-theme-muted transition-colors hover:text-accent max-[768px]:text-[16px]">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};
