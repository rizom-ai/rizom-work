import type { JSX } from "preact";
import type { WorkHeroContent } from "./schema";
import { Button, Section, renderHighlightedText } from "@rizom/ui";

const HIGHLIGHT_CLS = "italic text-accent";
const RADAR_RING_CLASS = "fill-none stroke-white/13 [stroke-width:1.2]";
const RADAR_OUTER_RING_CLASS = "fill-none stroke-white/26 [stroke-width:1.5]";
const RADAR_AXIS_CLASS =
  "stroke-white/11 [stroke-width:1.2] [stroke-dasharray:2_4]";
const RADAR_SHAPE_CLASS =
  "fill-accent/20 stroke-accent [stroke-width:2.5] [stroke-linejoin:round]";
const RADAR_NODE_CLASS = "fill-white stroke-[var(--color-bg)] [stroke-width:2]";
const RADAR_LABEL_CLASS =
  "font-mono text-[9px] font-semibold uppercase tracking-[1.2px] fill-white/82 md:text-[10.5px] md:tracking-[1.4px]";

const RADAR_RINGS = [
  "180,130 197.32,140 197.32,160 180,170 162.68,160 162.68,140",
  "180,110 214.64,130 214.64,170 180,190 145.36,170 145.36,130",
  "180,90 231.96,120 231.96,180 180,210 128.04,180 128.04,120",
  "180,70 249.28,110 249.28,190 180,230 110.72,190 110.72,110",
] as const;

const RADAR_AXES = [
  { x2: "180", y2: "50" },
  { x2: "266.60", y2: "100" },
  { x2: "266.60", y2: "200" },
  { x2: "180", y2: "250" },
  { x2: "93.40", y2: "200" },
  { x2: "93.40", y2: "100" },
] as const;

const RADAR_NODES = [
  { cx: "180", cy: "95" },
  { cx: "233.69", cy: "119" },
  { cx: "209.44", cy: "167" },
  { cx: "180", cy: "171" },
  { cx: "154.89", cy: "164.5" },
  { cx: "143.63", cy: "129" },
] as const;

const RADAR_LABELS = [
  { x: "180", y: "34", textAnchor: "middle", label: "Specialization" },
  { x: "270", y: "94", textAnchor: "start", label: "Credibility" },
  { x: "270", y: "214", textAnchor: "start", label: "Coordination" },
  { x: "180", y: "282", textAnchor: "middle", label: "Info flow" },
  { x: "82", y: "214", textAnchor: "end", label: "Authority" },
  { x: "82", y: "94", textAnchor: "end", label: "AI ready" },
] as const;

export const WorkHeroLayout = ({
  kicker,
  headline,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  diagnosticTitle,
  diagnosticTag,
  verdictLabel,
  verdictValue,
  findingsLabel,
  findings,
  diagnosticCtaLabel,
  diagnosticCtaHref,
}: WorkHeroContent): JSX.Element => {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[100dvh] items-start overflow-hidden pt-[104px] pb-[132px] md:items-center md:pt-[120px] md:pb-16"
    >
      <div className="grid w-full items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-0 max-[1100px]:pt-10 max-[768px]:pt-0">
        <div className="relative z-[2] order-1 lg:col-start-1 lg:row-start-1">
          <div className="mb-5 inline-flex items-center gap-[14px] font-label text-[11px] font-semibold uppercase text-accent opacity-0 animate-hero-rise [animation-delay:0.1s] [letter-spacing:2.8px] before:block before:h-px before:w-8 before:bg-accent before:opacity-80 before:content-[''] max-[768px]:gap-3 max-[768px]:text-[10px] max-[768px]:tracking-[2.4px] max-[768px]:before:w-6 md:mb-6">
            <span>{kicker}</span>
          </div>
          <h1 className="mb-6 max-w-full font-display text-[34px] font-[520] leading-[1.04] tracking-[-0.9px] text-theme opacity-0 animate-hero-rise [animation-delay:0.2s] min-[420px]:text-[36px] md:mb-7 md:text-[clamp(36px,5.2vw,76px)] md:leading-none md:tracking-[-2px] lg:max-w-[14ch]">
            {renderHighlightedText(headline, HIGHLIGHT_CLS)}
          </h1>
          <p className="max-w-[500px] font-body text-[15.5px] leading-[1.68] text-theme-muted opacity-0 animate-hero-rise [animation-delay:0.4s] md:mb-10 md:text-[18px] md:leading-[1.65]">
            {subtitle}
          </p>
        </div>

        <div className="order-2 flex flex-col gap-3 opacity-0 animate-hero-rise [animation-delay:0.6s] md:flex-row md:flex-wrap md:gap-[14px] max-[768px]:[&_.rizom-btn]:w-full max-[768px]:[&_.rizom-btn]:justify-center max-[768px]:[&_.rizom-btn]:px-6 max-[768px]:[&_.rizom-btn]:py-[15px] lg:order-3 lg:col-start-1 lg:row-start-2">
          <Button href={primaryCtaHref} variant="primary" block>
            {primaryCtaLabel}
          </Button>
          <Button href={secondaryCtaHref} variant="secondary" block>
            {secondaryCtaLabel}
          </Button>
        </div>

        <div className="rizom-diagnostic-panel order-3 relative z-[2] ml-auto w-full max-w-[540px] rounded-[14px] border border-accent/30 px-[18px] py-5 opacity-0 animate-hero-rise [animation-delay:0.75s] md:rounded-2xl md:px-[30px] md:pt-7 md:pb-[26px] max-[1100px]:mx-auto max-[1100px]:max-w-[520px] max-[768px]:mt-4 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="rizom-diagnostic-panel-bar absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" />
          <div className="mb-0 flex items-baseline justify-between gap-4 border-b border-white/12 pb-3 md:mb-4 md:pb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-[var(--color-work-diagnostic-label)] md:text-[10.5px]">
              {diagnosticTitle}
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-theme-light md:text-[9.5px] md:tracking-[0.15em]">
              {diagnosticTag}
            </span>
          </div>

          <div className="py-2">
            <svg
              viewBox="0 0 360 310"
              className="block h-auto w-full"
              role="img"
              aria-label="Six-axis radar chart showing team coordination scores"
            >
              <g opacity="0.95">
                {RADAR_RINGS.map((points) => (
                  <polygon key={points} className={RADAR_RING_CLASS} points={points} />
                ))}
                <polygon
                  className={RADAR_OUTER_RING_CLASS}
                  points="180,50 266.60,100 266.60,200 180,250 93.40,200 93.40,100"
                />
                {RADAR_AXES.map(({ x2, y2 }) => (
                  <line key={`${x2}-${y2}`} className={RADAR_AXIS_CLASS} x1="180" y1="150" x2={x2} y2={y2} />
                ))}
              </g>
              <g>
                <polygon className={RADAR_SHAPE_CLASS} points="180,95 233.69,119 209.44,167 180,171 154.89,164.5 143.63,129" />
                {RADAR_NODES.map(({ cx, cy }) => (
                  <circle key={`${cx}-${cy}`} className={RADAR_NODE_CLASS} cx={cx} cy={cy} r="4" />
                ))}
              </g>
              <g className={RADAR_LABEL_CLASS}>
                {RADAR_LABELS.map(({ x, y, textAnchor, label }) => (
                  <text key={label} x={x} y={y} textAnchor={textAnchor}>
                    {label}
                  </text>
                ))}
              </g>
            </svg>
          </div>

          <div className="mt-0 flex items-start justify-between gap-3 border-t border-white/12 py-2.5 md:mt-2 md:items-baseline md:gap-4 md:pt-5 md:pb-4">
            <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.16em] text-theme-light md:text-[10px] md:tracking-[0.14em]">
              {verdictLabel}
            </span>
            <span className="whitespace-nowrap text-right font-display text-[16px] italic leading-[1.1] text-theme md:text-[18px]">
              {verdictValue}
            </span>
          </div>

          <div className="border-t border-white/12 pt-2.5 md:pt-5">
            <span className="block whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.16em] text-theme-light md:text-[9.5px] md:tracking-[0.18em]">
              {findingsLabel}
            </span>
            <ul className="mt-2.5 flex flex-col gap-1.5 md:mt-4 md:gap-3">
              {findings.map((finding, index) => (
                <li key={finding} className="flex items-baseline gap-2.5 text-[11.5px] leading-[1.38] text-white/84 md:gap-3 md:text-body-xs md:leading-[1.5]">
                  <span className="min-w-[18px] font-mono text-[10px] text-white/42">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={diagnosticCtaHref}
            className="mt-3 inline-flex w-full items-center justify-center rounded-[10px] border border-white/18 px-3 py-2.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/88 hover:border-white/36 hover:bg-white/5 md:mt-5 md:px-4 md:py-3 md:text-[10.5px]"
          >
            {diagnosticCtaLabel}
          </a>
        </div>
      </div>

      <a className="scroll-cue max-[768px]:bottom-7 max-[768px]:opacity-60" href="#problem" aria-label="Scroll to content">
        <span>Scroll</span>
        <span className="scroll-cue-line"></span>
      </a>
    </Section>
  );
};
