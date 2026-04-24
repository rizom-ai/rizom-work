import { Section } from "@rizom/ui";

export type EcosystemSuffix = "ai" | "foundation" | "work";

export interface EcosystemCard {
  suffix: EcosystemSuffix;
  title: string;
  body: string;
  linkLabel: string;
  linkHref: string;
}

export interface EcosystemContent {
  eyebrow: string;
  headline: string;
  cards: EcosystemCard[];
}

const LINK_CLASS: Record<EcosystemSuffix, string> = {
  ai: "text-secondary",
  foundation: "text-secondary",
  work: "text-accent",
};

const BAR_CLASS: Record<EcosystemSuffix, string> = {
  work: "before:bg-[linear-gradient(90deg,transparent,var(--color-accent)_30%,var(--color-accent)_70%,transparent)]",
  foundation: "before:bg-[linear-gradient(90deg,transparent,var(--color-secondary)_30%,var(--color-secondary)_70%,transparent)]",
  ai: "before:bg-[linear-gradient(90deg,transparent,var(--palette-amber-light)_30%,var(--color-secondary)_70%,transparent)]",
};

export const EcosystemLayout = ({ cards }: EcosystemContent) => {
  return (
    <Section id="ecosystem" className="py-[120px] pb-24 max-[768px]:pt-[72px] max-[768px]:pb-16">
      <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
        {cards.map((card) => {
          const isHere = card.linkLabel === "You are here";
          const isDisabled = card.linkHref.trim().length === 0;
          const barClass = isHere ? BAR_CLASS.work : BAR_CLASS[card.suffix];
          return (
            <div
              key={card.suffix}
              className={`relative flex flex-col gap-2 overflow-hidden rounded-2xl border p-8 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:opacity-70 before:content-[''] hover:-translate-y-1 hover:border-white/12 hover:before:opacity-100 max-[768px]:rounded-xl max-[768px]:p-6 ${barClass} ${isHere ? "border-accent/25 bg-[linear-gradient(135deg,rgb(from_var(--color-accent)_r_g_b_/_0.12)_0%,rgb(from_var(--color-accent)_r_g_b_/_0.03)_100%)] before:h-[3px] before:opacity-100" : "border-white/6 bg-[linear-gradient(135deg,rgb(from_var(--color-secondary)_r_g_b_/_0.06)_0%,rgb(from_var(--color-accent)_r_g_b_/_0.03)_100%)]"}`}
            >
              <div className="mb-2 flex items-center gap-1 font-nav text-[16px]">
                <span className="font-bold">rizom</span>
                <span className="font-bold text-accent">.</span>
                <span className="text-theme-muted">{card.suffix}</span>
              </div>
              <div className="font-nav text-[22px] font-bold text-theme max-[768px]:text-[18px]">
                {card.title}
              </div>
              <p className="font-body text-[14px] leading-[1.7] text-theme-muted max-[768px]:text-[13px]">
                {card.body}
              </p>
              {isHere || isDisabled ? (
                <span className={`mt-2 font-body text-[14px] font-medium ${LINK_CLASS[card.suffix]}`}>
                  {card.linkLabel}
                </span>
              ) : (
                <a href={card.linkHref} className={`mt-2 font-body text-[14px] font-medium transition-opacity hover:opacity-70 ${LINK_CLASS[card.suffix]}`}>
                  {card.linkLabel}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
