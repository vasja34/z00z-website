import type { JSX, SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function FillIconBase({
  children,
  viewBox,
  ...props
}: SVGProps<SVGSVGElement> & { viewBox: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="currentColor"
      {...props}
    >
      {children}
    </svg>
  );
}

const HomeIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75" />
  </FillIconBase>
);

const BookIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H16v14H6.5A2.5 2.5 0 0 0 4 18.5z" />
    <path d="M4 4.5V18" />
    <path d="M8 6.5h5" />
  </IconBase>
);

const LearnOutlineIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z" />
  </FillIconBase>
);

const LayersIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m10 3 6 3.1-6 3.1-6-3.1L10 3Z" />
    <path d="m4 10 6 3.1 6-3.1" />
    <path d="m4 13.8 6 3.2 6-3.2" />
  </IconBase>
);

const CodeIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m7 6.2-3.5 3.8L7 13.8" />
    <path d="m13 6.2 3.5 3.8-3.5 3.8" />
    <path d="M11.2 4.5 8.8 15.5" />
  </IconBase>
);

const WalletIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h7.5v12H7A2.5 2.5 0 0 1 4.5 13.5z" />
    <path d="M14.5 7.5h2v4h-2a2 2 0 1 1 0-4Z" />
    <path d="M7 4v2.5h7.5" />
  </IconBase>
);

const NetworkIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="5" cy="10" r="1.7" />
    <circle cx="15" cy="5" r="1.7" />
    <circle cx="15" cy="15" r="1.7" />
    <path d="M6.5 9.2 13.4 5.8" />
    <path d="M6.5 10.8 13.4 14.2" />
    <path d="M15 6.8v6.4" />
  </IconBase>
);

const SparkIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m10 2 1.4 4.6L16 8l-4.6 1.4L10 14l-1.4-4.6L4 8l4.6-1.4L10 2Z" />
    <path d="m15.5 13 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  </IconBase>
);

const UsersIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="7" cy="7" r="2.2" />
    <circle cx="13.5" cy="7.8" r="1.8" />
    <path d="M3.8 15.5c.3-2.2 2.2-3.8 4.5-3.8s4.2 1.6 4.5 3.8" />
    <path d="M11.7 15.5c.2-1.7 1.6-3 3.3-3 1.2 0 2.3.6 2.9 1.6" />
  </IconBase>
);

const ShieldIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 2.5 15.5 4v4.7c0 3.3-2.1 6.2-5.5 8.8C6.6 14.9 4.5 12 4.5 8.7V4z" />
    <path d="m7.6 10.2 1.7 1.7 3.5-4.2" />
  </IconBase>
);

const FlaskIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M8 2.8h4" />
    <path d="M9 2.8v4.4L4.8 15a1.8 1.8 0 0 0 1.6 2.7h7.2a1.8 1.8 0 0 0 1.6-2.7L11 7.2V2.8" />
    <path d="M6.9 12.3h6.2" />
  </IconBase>
);

const SupportIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4.5 9.2a5.5 5.5 0 1 1 11 0v3.3a1.5 1.5 0 0 1-1.5 1.5H12.5" />
    <path d="M4.5 10.5H3.8A1.8 1.8 0 0 0 2 12.3v.9A1.8 1.8 0 0 0 3.8 15h.7Z" />
    <path d="M15.5 10.5h.7a1.8 1.8 0 0 1 1.8 1.8v.9a1.8 1.8 0 0 1-1.8 1.8h-.7Z" />
    <path d="M8.5 15h3" />
  </IconBase>
);

const ScalesIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 3v12.5" />
    <path d="M5 6.5h10" />
    <path d="m6.5 6.5-2.5 4.3h5Z" />
    <path d="m13.5 6.5-2.5 4.3h5Z" />
    <path d="M7.2 17h5.6" />
  </IconBase>
);

const PaletteIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 3a7 7 0 1 0 0 14h1.1a2 2 0 0 0 0-4H10a1.7 1.7 0 1 1 0-3.4h1.4A4.6 4.6 0 0 0 16 5c0-1.1-.4-2-1.1-2.6C13.7 1.6 11.9 1.2 10 3Z" />
    <circle cx="6.1" cy="8.1" r=".7" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="5.7" r=".7" fill="currentColor" stroke="none" />
    <circle cx="12.1" cy="5.8" r=".7" fill="currentColor" stroke="none" />
    <circle cx="13.7" cy="9.1" r=".7" fill="currentColor" stroke="none" />
  </IconBase>
);

const MapIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m3 5 4-1.5 6 2 4-1.5v11L13 16.5l-6-2-4 1.5Z" />
    <path d="M7 3.5v11" />
    <path d="M13 5.5v11" />
  </IconBase>
);

const CompassIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="10" cy="10" r="6.8" />
    <path d="m12.9 7.1-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
  </IconBase>
);

const ChartIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4 16V4" />
    <path d="M4 16h12" />
    <path d="m6.5 12 2.7-2.8 2.3 1.7 3.5-4.2" />
  </IconBase>
);

const MonitorIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="14" height="9.5" rx="1.5" />
    <path d="M8 16.5h4" />
    <path d="M10 13.5v3" />
  </IconBase>
);

const EyeIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M2.6 10s2.7-4.5 7.4-4.5 7.4 4.5 7.4 4.5-2.7 4.5-7.4 4.5S2.6 10 2.6 10Z" />
    <circle cx="10" cy="10" r="2" />
  </IconBase>
);

const FileIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M6 2.5h5l4 4V17.5H6z" />
    <path d="M11 2.5v4h4" />
  </IconBase>
);

const ScrollIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M6.5 4.5h6.8a1.7 1.7 0 0 1 1.7 1.7v8.1a1.7 1.7 0 0 1-1.7 1.7H8.2a2.2 2.2 0 1 1 0-4.4H15" />
    <path d="M6.5 4.5A2.2 2.2 0 1 0 8.7 6.7V15" />
    <path d="M9.5 8h3.5" />
    <path d="M9.5 11h3.5" />
  </IconBase>
);

const BrochureIcon: IconComponent = ({ children, ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 256 256"
    fill="none"
    stroke="currentColor"
    strokeWidth="16"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
    <g>
      <path d="M 16.110084,16.110084 H 160.04176 L 96.072129,64.087313" />
      <path d="m 16.110084,16.110084 -0.000002,175.916496 h 79.962047" />
      <path d="M 96.072132,64.087313 H 240.00381 V 240.0038 H 96.072129 l 0.000003,-175.916487" />
      <path d="M 160.04176,16.110084 V 64.087313" />
    </g>
  </svg>
);

const BankOutlineIcon: IconComponent = ({ children, ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    {children}
    <path d="M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z" />
  </svg>
);

const UnknownIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="22.5" r="1.5" />
    <path d="M17 19h-2v-4h2c1.103 0 2-.897 2-2s-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.5h-2V13c0-2.206 1.794-4 4-4h2c2.206 0 4 1.794 4 4s-1.794 4-4 4z" />
    <path d="M29.391 14.527L17.473 2.609A2.08 2.08 0 0 0 16 2c-.533 0-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 28.036L3.965 16L16 3.964L28.036 16z" />
  </FillIconBase>
);

const BasicDifficultyIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M11 7h2a2 2 0 0 1 2 2v8h-2v-4h-2v4H9V9a2 2 0 0 1 2-2m0 2v2h2V9zm1 11a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2" />
  </FillIconBase>
);

const IntermediateDifficultyIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M15 10.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5V15a2 2 0 0 1-2 2H9V7h4a2 2 0 0 1 2 2zM13 15v-2h-2v2zm0-4V9h-2v2zm-1-9a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8" />
  </FillIconBase>
);

const AdvancedDifficultyIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M11 7h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m1-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8" />
  </FillIconBase>
);

const ExpertDifficultyIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M9 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9zm2 2v6h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8" />
  </FillIconBase>
);

const SpecialistDifficultyIcon: IconComponent = (props) => (
  <FillIconBase viewBox="0 0 24 24" {...props}>
    <path d="M9 7h6v2h-4v2h4v2h-4v2h4v2H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8" />
  </FillIconBase>
);

const icons: Record<string, IconComponent> = {
  "bank-outline": BankOutlineIcon,
  book: BookIcon,
  brochure: BrochureIcon,
  "carbon:unknown": UnknownIcon,
  chart: ChartIcon,
  compass: CompassIcon,
  code: CodeIcon,
  demo: PaletteIcon,
  eye: EyeIcon,
  file: FileIcon,
  flask: FlaskIcon,
  home: HomeIcon,
  layers: LayersIcon,
  legal: ScalesIcon,
  map: MapIcon,
  "material-symbols:home-outline": HomeIcon,
  "mdi:learn-outline": LearnOutlineIcon,
  "mdi:alpha-a": BasicDifficultyIcon,
  "mdi:alpha-a-box-outline": BasicDifficultyIcon,
  "mdi:alpha-a-circle-outline": BasicDifficultyIcon,
  "mdi:alpha-b": IntermediateDifficultyIcon,
  "mdi:alpha-b-box-outline": IntermediateDifficultyIcon,
  "mdi:alpha-b-circle-outline": IntermediateDifficultyIcon,
  "mdi:alpha-c-box-outline": AdvancedDifficultyIcon,
  "mdi:alpha-c-circle-outline": AdvancedDifficultyIcon,
  "mdi:alpha-d-box-outline": ExpertDifficultyIcon,
  "mdi:alpha-d-circle-outline": ExpertDifficultyIcon,
  "mdi:alpha-e-box-outline": SpecialistDifficultyIcon,
  "mdi:alpha-e-circle-outline": SpecialistDifficultyIcon,
  monitor: MonitorIcon,
  network: NetworkIcon,
  palette: PaletteIcon,
  protocol: LayersIcon,
  research: FlaskIcon,
  scroll: ScrollIcon,
  scales: ScalesIcon,
  security: ShieldIcon,
  shield: ShieldIcon,
  spark: SparkIcon,
  support: SupportIcon,
  users: UsersIcon,
  wallet: WalletIcon,
};

export function NavIcon({
  className = "h-4 w-4",
  icon = "file",
}: {
  className?: string;
  icon?: string;
}) {
  const Icon = icons[icon] ?? icons.file;

  return <Icon className={`${className} block`} />;
}
