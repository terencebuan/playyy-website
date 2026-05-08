import { useEffect, useMemo, useState } from "react";
import {
  Crown,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
  Flame,
  FileText,
  Building2,
  CheckCircle2,
  BadgeDollarSign,
} from "lucide-react";

type ReviewItem = {
  name: string;
  tag: string;
  message: string;
};

type PackageItem = {
  php: number;
  appPhp: number;
  appCoins: number;
  note: string;
};

function getCommentTag(text: string) {
  const lower = text.toLowerCase();

  if (
    lower.includes("trusted") ||
    lower.includes("legit") ||
    lower.includes("professional")
  ) {
    return "TRUSTED";
  }

  if (
    lower.includes("fast") ||
    lower.includes("mabilis") ||
    lower.includes("smooth")
  ) {
    return "FAST";
  }

  if (
    lower.includes("sulit") ||
    lower.includes("worth") ||
    lower.includes("value")
  ) {
    return "VALUE";
  }

  return "REPEAT BUYER";
}

function SimpleCard({
  children,
  className = "",
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border transition-all duration-300 ${
        highlight
          ? "border-[#d6b36a]/20 bg-[linear-gradient(180deg,rgba(31,24,17,0.98),rgba(18,15,12,0.94))] shadow-[0_10px_26px_rgba(214,179,106,0.06)]"
          : "border-[#d6b36a]/12 bg-[linear-gradient(180deg,rgba(24,19,15,0.98),rgba(15,12,9,0.96))] shadow-[0_10px_22px_rgba(0,0,0,0.18)]"
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent group-hover:animate-[luxSweep_1.4s_linear_1]" />
      </div>
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ComparisonCard({
  title,
  subtitle,
  badge,
  items,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  badge: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <SimpleCard className="p-7 md:p-8" highlight={highlight}>
      <div className="mb-5">
        <div
          className={`mb-3 inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] ${
            highlight
              ? "border-yellow-200/25 bg-yellow-300/10 text-yellow-100"
              : "border-white/10 bg-white/5 text-white/70"
          }`}
        >
          {badge}
        </div>

        <h3
          className={`text-2xl font-black tracking-tight md:text-3xl ${
            highlight
              ? "bg-gradient-to-r from-white via-yellow-100 to-[#f6d365] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          {title}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-white/65 md:text-[15px]">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl border px-4 py-3 transition-all duration-300 ${
              highlight
                ? "border-yellow-200/12 bg-white/[0.04] hover:border-yellow-100/20"
                : "border-white/8 bg-white/[0.03] hover:border-white/12"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${
                  highlight
                    ? "bg-gradient-to-r from-yellow-200 to-white shadow-[0_0_8px_rgba(255,220,120,0.55)]"
                    : "bg-white/60 shadow-[0_0_5px_rgba(255,255,255,0.22)]"
                }`}
              />
              <p className="text-sm leading-6 text-white/82 md:text-[15px]">{item}</p>
            </div>
          </div>
        ))}
      </div>

      {highlight && (
        <div className="mt-6 rounded-2xl border border-yellow-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,215,120,0.04))] px-4 py-4">
          <p className="text-sm font-medium leading-6 text-yellow-50/90">
            Better value, a more personal service, and a smoother buying experience trusted by repeat buyers.
          </p>
        </div>
      )}
    </SimpleCard>
  );
}

function RealPdfPreview({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#dbcaa1]/60 bg-[linear-gradient(180deg,#fffdf8,#f7f0e1)] p-3 shadow-[0_16px_28px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-[18px] border border-[#d8c7a0]/70 bg-white shadow-inner">
        <div className="flex items-center justify-between gap-3 border-b border-[#e8dcc0] bg-[linear-gradient(180deg,#fffdf7,#f7efdf)] px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-[11px] font-bold uppercase tracking-[0.16em] text-[#4b4030]">
              Actual document preview
            </div>
            <div className="truncate text-[12px] text-[#7a6b54]">{title}</div>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full border border-[#d7c49e] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4b4030]"
          >
            Open
          </a>
        </div>

        <div className="bg-[#f7f1e4] p-2">
          <iframe
            src={`${href}#view=FitH`}
            title={title}
            className="h-[480px] w-full rounded-[14px] bg-white"
          />
        </div>
      </div>
    </div>
  );
}

function DocumentVisualCard({
  title,
  badge,
  description,
  bullets,
  href,
  icon,
  docType,
}: {
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  href: string;
  icon: React.ReactNode;
  docType: "DTI" | "BIR";
}) {
  return (
    <SimpleCard className="p-6 h-full" highlight>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e5cf97] bg-[#1c1710]/80">
            {icon}
            {badge}
          </div>

          <h4 className="mt-4 text-2xl md:text-3xl font-black">{title}</h4>

          <p className="mt-3 text-sm leading-7 text-[#cfc6b8] max-w-xl">
            {description}
          </p>
        </div>

        <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d6b36a]/14 bg-[linear-gradient(180deg,rgba(34,26,17,0.96),rgba(17,15,12,0.92))] text-[#e5cf97] shadow-[0_8px_20px_rgba(214,179,106,0.08)]">
          {icon}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div>
          <RealPdfPreview
            href={href}
            title={docType === "DTI" ? "DTI Registration PDF" : "BIR Registration PDF"}
          />
        </div>

        <div className="rounded-[24px] border border-[#d6b36a]/12 bg-[linear-gradient(180deg,rgba(20,17,13,0.92),rgba(12,10,8,0.96))] p-5">
          <div className="grid gap-3">
            {bullets.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] px-4 py-3"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#d6b36a]" />
                <p className="text-sm leading-7 text-[#e5dccf]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 bg-[#d6b36a] text-black text-sm sm:text-base font-semibold shadow-[0_6px_16px_rgba(214,179,106,0.12)] hover:scale-[1.02] transition-transform overflow-hidden"
        >
          View Full Document
          <ArrowRight size={16} />
          <div className="pointer-events-none absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent group-hover:animate-[luxSweep_1.5s_linear_1]" />
        </a>

        <div className="inline-flex items-center gap-2 rounded-2xl border border-[#d6b36a]/12 bg-[#14110d] px-4 py-3 text-sm text-[#cfc6b8]">
          <CheckCircle2 size={16} className="text-[#d6b36a]" />
          Actual PDF shown on page
        </div>
      </div>
    </SimpleCard>
  );
}

export default function PlayyyCoinSellerWebsite() {
  const packages: PackageItem[] = [
    { php: 100, appPhp: 49, appCoins: 60, note: "Starter top up" },
    { php: 300, appPhp: 449, appCoins: 425, note: "36% starts here" },
    { php: 500, appPhp: 599, appCoins: 610, note: "Best for regular buyers" },
    { php: 1000, appPhp: 1290, appCoins: 1230, note: "Popular package" },
    { php: 3000, appPhp: 2990, appCoins: 3100, note: "High value recharge" },
    { php: 5000, appPhp: 5990, appCoins: 6250, note: "VIP friendly" },
  ];

  const initialReviews: ReviewItem[] = [
    {
      name: "Aira",
      tag: "Repeat buyer",
      message: "Fast reply and smooth transaction. Sulit and easy to order.",
    },
    {
      name: "Ken",
      tag: "VIP buyer",
      message: "Trusted seller. Clean process and mabilis pumasok ang coins.",
    },
    {
      name: "Mica",
      tag: "Regular client",
      message: "Very easy kausap and clear instructions before payment.",
    },
    {
      name: "Josh",
      tag: "Returning buyer",
      message: "Sulit, smooth process, and easy to repeat order. Recommended.",
    },
    {
      name: "Ella",
      tag: "Satisfied buyer",
      message: "Professional and premium looking service. Legit transaction.",
    },
  ];

  const [amount, setAmount] = useState(300);
  const [reviews, setReviews] = useState(initialReviews);
  const [buyerName, setBuyerName] = useState("");
  const [buyerComment, setBuyerComment] = useState("");
  const [copied, setCopied] = useState(false);

  const getBonusRate = (value: number) => {
    if (value >= 300 && value <= 50000) return 0.36;
    if (value >= 100 && value <= 299) return 0.35;
    return 0.36;
  };

  const calculator = useMemo(() => {
    const cleanAmount = Number.isFinite(amount) ? amount : 0;
    const safeAmount = Math.min(50000, Math.max(100, cleanAmount || 100));
    const bonusRate = getBonusRate(safeAmount);
    const baseCoins = safeAmount;
    const bonusCoins = Math.round(baseCoins * bonusRate);
    const totalCoins = Math.round(baseCoins + bonusCoins);

    return {
      safeAmount,
      bonusRate,
      baseCoins,
      bonusCoins,
      totalCoins,
    };
  }, [amount]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const formatPHP = (value: number) =>
    new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(value);

  const formatCoins = (value: number) =>
    new Intl.NumberFormat("en-PH", {
      maximumFractionDigits: 0,
    }).format(value);

  const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

  const generateMessage = () => {
    return `Hi, I want to order ${formatPHP(
      calculator.safeAmount
    )} with ${formatPercent(calculator.bonusRate)} bonus. Total coins: ${
      calculator.totalCoins
    }`;
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateMessage());
      setCopied(true);
    } catch {
      alert("Unable to copy message");
    }
  };

  const submitReview = () => {
    const name = buyerName.trim();
    const message = buyerComment.trim();

    if (!name || !message) {
      alert("Please enter your name and comment first.");
      return;
    }

    setReviews((prev) => [{ name, tag: getCommentTag(message), message }, ...prev]);
    setBuyerName("");
    setBuyerComment("");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0a08] text-[#f7f1e6]">
      <style>{`
        @keyframes diamondFlow {
          0% { background-position: 0% 0% }
          50% { background-position: 100% 100% }
          100% { background-position: 0% 0% }
        }

        @keyframes luxSweep {
          0% { transform: translateX(-100%) rotate(12deg); opacity: 0 }
          40% { opacity: .28 }
          70% { opacity: .38 }
          100% { transform: translateX(320%) rotate(12deg); opacity: 0 }
        }

        @keyframes glowPulse {
          0% { opacity:.10; transform: scale(1) }
          50% { opacity:.18; transform: scale(1.03) }
          100% { opacity:.10; transform: scale(1) }
        }

        @keyframes badgeFloat {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-3px) }
          100% { transform: translateY(0px) }
        }

        @keyframes heroReveal {
          0% { opacity:0; transform: translateY(14px) }
          100% { opacity:1; transform: translateY(0) }
        }

        @keyframes reviewScroll {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,224,137,0.08),transparent_22%),linear-gradient(to_bottom,#0a0907,#110f0c,#17130f)]" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.015)_24%,transparent_42%,rgba(255,215,120,0.03)_52%,transparent_72%,rgba(255,255,255,0.015)_84%,transparent_100%)] bg-[length:220%_220%] animate-[diamondFlow_20s_linear_infinite]" />
      <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-yellow-300/6 blur-[55px] animate-[glowPulse_12s_ease-in-out_infinite]" />

      <div className="relative z-10">
        <div className="relative overflow-hidden text-center text-[8.5px] sm:text-[10px] md:text-xs py-1.5 sm:py-2 px-3 tracking-[0.12em] sm:tracking-[0.22em] uppercase bg-[linear-gradient(90deg,#f9ebb7,#d6b36a,#fff4c8,#c99534,#f9ebb7)] text-black shadow-[0_4px_14px_rgba(214,179,106,0.14)] leading-4">
          High demand today • Priority for repeat buyers • Limited daily slots
        </div>

        <header className="sticky top-0 z-30 border-b border-[#d6b36a]/10 backdrop-blur-md bg-[#0b0a08]/78">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
            <div>
              <div className="uppercase leading-none">
                <div className="text-[17px] sm:text-xl md:text-2xl font-black tracking-[0.22em] sm:tracking-[0.28em] text-white whitespace-nowrap">
                  𝐏 𝐋 𝐀 𝐘 𝐘 𝐘 💯
                </div>
                <div className="mt-1 text-[15px] sm:text-lg md:text-xl font-black tracking-[0.18em] sm:tracking-[0.24em] text-[#d6b36a] whitespace-nowrap">
                  COIN SELLER
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-[#c5b89d] tracking-[0.12em] sm:tracking-[0.18em] uppercase leading-4">
                StarMaker recharge coins top ups
              </div>
            </div>

            <a
              href="#calculator"
              className="relative rounded-2xl px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold bg-[#d6b36a] text-black shadow-[0_6px_16px_rgba(214,179,106,0.12)] hover:scale-[1.02] transition-transform overflow-hidden shrink-0"
            >
              Bonus Calculator
              <div className="pointer-events-none absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent animate-[luxSweep_4.5s_linear_infinite]" />
            </a>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            {[
              "Trusted by Many StarMaker Users",
              "BIR Registered Business",
              "Fast and Verified Transactions",
              "Priority Handling for Repeat Buyers",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#d6b36a]/14 bg-[linear-gradient(180deg,rgba(31,24,17,0.98),rgba(18,15,12,0.94))] p-3 sm:p-4 text-center text-[11px] sm:text-sm leading-4 sm:leading-5 shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
                style={{
                  animation: "heroReveal .45s ease-out both",
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="rounded-[28px] sm:rounded-[32px] border border-[#d6b36a]/14 bg-[radial-gradient(circle_at_top_right,rgba(255,229,156,0.08),transparent_24%),linear-gradient(to_bottom_right,#1b160f,#120f0b,#0f0c09)] p-5 sm:p-7 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#e5cf97] bg-[#1c1710]/80 animate-[badgeFloat_4s_ease-in-out_infinite]">
                <Sparkles size={14} /> Trusted and premium
              </div>

              <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-6xl font-black leading-[1.08] sm:leading-tight animate-[heroReveal_.6s_ease-out]">
                Better value
                <span className="block bg-clip-text text-transparent bg-[linear-gradient(90deg,#fff1be,#d6b36a,#fff5d7)]">
                  for Direct Top Up Orders
                </span>
              </h1>

              <p className="mt-3 sm:mt-5 text-sm sm:text-base text-[#d7ccb9] leading-6 sm:leading-8 max-w-2xl">
                Clean pricing, better coin value, and a smoother order flow for buyers who want a more trusted recharge experience.
              </p>

              <div className="mt-5 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href={`https://wa.me/639955248326?text=${encodeURIComponent(generateMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 bg-[#d6b36a] text-black text-sm sm:text-base font-semibold shadow-[0_6px_16px_rgba(214,179,106,0.12)] hover:scale-[1.02] transition-transform overflow-hidden"
                >
                  Order via WhatsApp
                  <ArrowRight size={16} />
                  <div className="pointer-events-none absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent group-hover:animate-[luxSweep_1.5s_linear_1]" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 border border-[#d6b36a]/16 bg-[#17130f] text-[#f2e7d0] text-sm sm:text-base font-semibold hover:border-[#d6b36a]/28 hover:bg-[#1c1712] transition-colors"
                >
                  View Packages
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-5 sm:mt-7">
                {[
                  { value: "35%–36%", label: "Bonus value" },
                  { value: "100", label: "Minimum amount" },
                  { value: "50k", label: "Max per transaction" },
                  { value: "Legit", label: "Trusted" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#d6b36a]/10 bg-[linear-gradient(180deg,rgba(34,26,17,0.96),rgba(17,15,12,0.92))] p-3 sm:p-4"
                  >
                    <div className="text-lg sm:text-2xl font-black text-[#f3e4b9]">{item.value}</div>
                    <div className="text-xs uppercase tracking-[0.16em] text-[#a99d89] mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SimpleCard className="p-5 sm:p-7" highlight>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#e5cf97] bg-[#1c1710]/80">
                <ShieldCheck size={14} /> Important note
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-4 sm:mt-5">
                Please wait for my reply first
              </h2>

              <div className="mt-4 sm:mt-5 rounded-2xl border border-[#d6b36a]/12 bg-[#120f0b] p-4 sm:p-5 text-sm sm:text-base text-[#ddd3c5] leading-6 sm:leading-8">
                Do not send any payment until you get a reply from me first. This helps avoid delays, duplicate payments, or processing issues during high demand periods. Maximum allowed amount is ₱50,000 per transaction.
              </div>

              <div className="mt-4 text-sm text-[#b9ae9a] leading-7">
                For smoother processing, send your StarMaker ID and preferred amount first, then wait for confirmation before paying.
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mt-4 sm:mt-6">
                <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#120f0b] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#d6b36a]">Safe flow</div>
                  <div className="mt-2 text-sm text-[#dbd1c4]">Message first before payment</div>
                </div>
                <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#120f0b] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#d6b36a]">
                    Buyer priority
                  </div>
                  <div className="mt-2 text-sm text-[#dbd1c4]">
                    Repeat buyers may get faster queue priority
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>
        </section>

        <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="mb-6 grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Crown size={16} />,
                title: "Trusted by many",
                text: "Buyers choose this because the value is better compared with regular in app purchase.",
              },
              {
                icon: <ShieldCheck size={16} />,
                title: "Legit business",
                text: "BIR registered setup with cleaner and more professional transaction flow.",
              },
              {
                icon: <Wallet size={16} />,
                title: "Fast processing",
                text: "Priority is given to confirmed orders and repeat buyers during busy hours.",
              },
            ].map((item) => (
              <SimpleCard key={item.title} className="p-5 text-sm text-[#ddd3c5]">
                <div className="inline-flex items-center gap-2 text-[#d6b36a] text-xs uppercase tracking-[0.16em] mb-3">
                  {item.icon}
                  {item.title}
                </div>
                {item.text}
              </SimpleCard>
            ))}
          </div>

          <SimpleCard className="p-8 md:p-10" highlight>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#e5cf97] bg-[#1c1710]/80">
                  <Sparkles size={14} /> Dynamic Bonus Calculator
                </div>

                <h2 className="text-3xl md:text-5xl font-black mt-4">
                  Custom Amount Calculator
                </h2>

                <p className="mt-4 text-[#cfc6b8] leading-8">
                  Enter any amount from ₱100 up to ₱50,000.
                </p>
                <p className="mt-2 text-sm text-[#d6b36a] leading-7">
                  ₱100 to ₱299 = 35% bonus • ₱300 to ₱50,000 = 36% bonus
                </p>

                <input
                  type="number"
                  min={100}
                  max={50000}
                  value={amount}
                  onChange={(e) => {
                    let value = e.target.value;

                    if (value.length > 1 && value.startsWith("0")) {
                      value = value.replace(/^0+/, "");
                    }

                    setAmount(Number(value || 0));
                  }}
                  className="mt-5 w-full rounded-2xl border border-[#d6b36a]/15 px-4 py-4 text-2xl font-bold bg-[#1a1712] outline-none focus:border-[#d6b36a]/35"
                />
              </div>

              <div className="rounded-[26px] border border-[#d6b36a]/12 bg-[linear-gradient(to_bottom,#14120e,#100d09)] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-4xl font-black">{formatPHP(calculator.safeAmount)}</div>
                  <div className="rounded-full border border-[#d6b36a]/18 bg-[#1a1712] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#d6b36a]">
                    {formatPercent(calculator.bonusRate)} bonus
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-[#e8dfd1]">
                  <div className="flex items-center justify-between rounded-2xl bg-[#11100c] p-4">
                    <span>Base coins</span>
                    <span className="font-bold">{formatCoins(calculator.baseCoins)}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-[#11100c] p-4">
                    <span>{formatPercent(calculator.bonusRate)} bonus</span>
                    <span className="font-bold text-[#d6b36a]">
                      {formatCoins(calculator.bonusCoins)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-[#1b1710] p-4 border border-[#d6b36a]/15">
                    <span>Total coins</span>
                    <span className="font-black text-2xl">
                      {formatCoins(calculator.totalCoins)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={copyMessage}
                    className="rounded-2xl px-5 py-3 bg-[#f7f3ea] text-black font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Copy Order Message
                  </button>

                  <a
                    href={`https://wa.me/639955248326?text=${encodeURIComponent(generateMessage())}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative overflow-hidden rounded-2xl px-5 py-3 bg-[#d6b36a] text-black font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Order via WhatsApp
                    <div className="pointer-events-none absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent animate-[luxSweep_4.5s_linear_infinite]" />
                  </a>

                  {copied && <span className="text-sm text-[#e6d2a0]">Copied successfully</span>}
                </div>
              </div>
            </div>
          </SimpleCard>
        </section>

        <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/18 bg-[#17130f] px-3 py-1.5 text-[10px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#d6b36a]">
              <BadgeDollarSign size={13} /> Compare value
            </div>
            <h3 className="mt-2 text-[28px] sm:text-3xl md:text-4xl font-black leading-tight">
              In App vs
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-[#d6b36a] bg-clip-text text-transparent">Your Deal</span>
            </h3>

            <div className="mt-4 rounded-[22px] sm:rounded-[26px] border border-[#d6b36a]/18 bg-[linear-gradient(180deg,rgba(39,29,18,0.98),rgba(24,18,12,0.96))] p-4 sm:p-5 shadow-[0_12px_26px_rgba(214,179,106,0.05)]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d6b36a]/18 bg-[#1c1710] text-[#d6b36a]">
                  <BadgeDollarSign size={18} />
                </div>

                <div>
                  <div className="text-base sm:text-xl md:text-2xl font-black text-[#fff0c3] leading-tight">
                    Cash payment rates only.
                  </div>
                  <div className="mt-1.5 text-xs sm:text-base md:text-lg font-medium text-[#eadfcb] leading-5 sm:leading-7">
                    Other arrangements may have separate terms. Please wait for confirmation before paying.
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 rounded-2xl border border-[#d6b36a]/14 bg-[#15110d] px-3 py-2 text-[12px] sm:text-sm leading-5 text-[#d6b36a]">
              ₱100 to ₱299 = 35% bonus • ₱300 to ₱50,000 = 36% bonus
            </p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-5">
            {packages.map((item) => {
              const bonusRate = getBonusRate(item.php);
              const yourCoins = Math.round(item.php * (1 + bonusRate));

              return (
                <SimpleCard key={item.php} className="p-3 sm:p-6 h-full" highlight={item.php === 1000}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/5 bg-black/14 p-2.5 sm:p-4">
                      <div className="text-[9px] sm:text-xs uppercase tracking-[0.12em] text-[#a99d89]">
                        In app
                      </div>
                      <div className="mt-1 text-[11px] sm:text-sm text-[#a99d89]">{formatPHP(item.appPhp)}</div>
                      <div className="text-sm sm:text-lg font-semibold leading-tight text-[#cfc6b8]">
                        {formatCoins(item.appCoins)}
                        <span className="block text-[9px] sm:text-xs uppercase tracking-[0.12em] text-[#7f7668]">coins</span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#d6b36a]/16 bg-[#1a140d] p-2.5 sm:p-4 text-right">
                      <div className="text-[9px] sm:text-xs uppercase tracking-[0.12em] text-[#d6b36a]">
                        Your deal
                      </div>
                      <div className="mt-1 text-lg sm:text-3xl font-black leading-tight">{formatPHP(item.php)}</div>
                      <div className="text-sm sm:text-xl text-[#e6d2a0] font-bold leading-tight">
                        {formatCoins(yourCoins)}
                        <span className="block text-[9px] sm:text-xs uppercase tracking-[0.12em] text-[#d6b36a]">coins</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <div className="text-[9px] sm:text-xs uppercase tracking-[0.12em] text-[#d6b36a]">
                      {formatPercent(bonusRate)} bonus
                    </div>
                    {(item.php === 1000 || item.php === 5000) && (
                      <div className="inline-flex items-center gap-1 rounded-full border border-[#d6b36a]/18 bg-[#19140f] px-2 py-1 text-[8px] sm:text-[10px] uppercase tracking-[0.12em] text-[#e8cf94]">
                        <Flame size={10} /> hot
                      </div>
                    )}
                  </div>

                  <div className="mt-1.5 text-[9px] sm:text-xs leading-3.5 sm:leading-4 text-[#b9ae9a]">{item.note}</div>
                </SimpleCard>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="mb-5 sm:mb-6 text-center">
            <div className="text-[11px] sm:text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
              Premium Value Comparison
            </div>
            <h3 className="text-[28px] sm:text-3xl md:text-5xl font-black mt-2 leading-tight">
              See the{" "}
              <span className="bg-gradient-to-r from-white via-yellow-100 to-[#f6d365] bg-clip-text text-transparent">
                smarter deal
              </span>
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-6 text-[#c9bfae] max-w-2xl mx-auto">
              Quick side-by-side view so buyers can understand the value faster on mobile.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <ComparisonCard
              title="In App Top Up"
              badge="Standard"
              subtitle="The usual option inside the app, but often with less value and a less personal experience."
              items={[
                "Higher pricing for the same amount of coins",
                "Less bonus value for your money",
                "Limited flexibility during transaction",
              ]}
            />

            <ComparisonCard
              title="Your Deal With Me"
              badge="Best Value"
              subtitle="A more practical, trusted, and buyer-focused option designed for better value and smoother transactions."
              items={[
                "35% bonus for ₱100 to ₱299",
                "36% bonus for ₱300 to ₱50,000",
                "Faster and more direct communication",
                "Trusted by repeat buyers",
                "Smoother and more personal transaction experience",
              ]}
              highlight
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-6 text-center">
            <div className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
              Registered business documents
            </div>
            <h3 className="text-3xl md:text-5xl font-black mt-6">
              Verified
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-[#f6d365] bg-clip-text text-transparent">
                business registration
              </span>
            </h3>
            <p className="mt-3 text-[#c9bfae] max-w-3xl mx-auto">
              Buyers can immediately see that this business operates with official registration for better trust and transparency.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <DocumentVisualCard
              title="DTI Registration"
              badge="DTI Verified"
              description="Official Department of Trade and Industry business name registration for Terence Buan Digital Marketing Services."
              bullets={[
                "Actual PDF preview is shown directly on this page",
                "Business name: Terence Buan Digital Marketing Services",
                "Issued to: Terence Andrew De Dios Buan",
                "Open full file anytime for exact full view",
              ]}
              href="/DTI.pdf"
              icon={<Building2 size={16} />}
              docType="DTI"
            />

            <DocumentVisualCard
              title="BIR Registration"
              badge="BIR Verified"
              description="Official BIR Form 2303 Certificate of Registration confirming registered taxpayer details and business tax registration."
              bullets={[
                "Actual PDF preview is shown directly on this page",
                "Document type: BIR Form 2303 Certificate of Registration",
                "Official registration file is viewable on page",
                "Open full file anytime for exact full view",
              ]}
              href="/BIR.pdf"
              icon={<FileText size={16} />}
              docType="BIR"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
                Buyer feedback
              </div>
              <h3 className="text-3xl font-black mt-2">Recent buyer feedback</h3>
            </div>
            <div className="text-sm text-[#b9ae9a]">What buyers are saying</div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#d6b36a]/12 bg-[linear-gradient(180deg,rgba(24,19,15,0.98),rgba(15,12,9,0.96))] p-5 shadow-[0_12px_26px_rgba(0,0,0,0.16)]">
            <div
              className="flex gap-4 w-max"
              style={{ animation: "reviewScroll 42s linear infinite" }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-[300px] shrink-0 rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-[#f6edd8]">{review.name}</div>
                      <div className="text-xs uppercase tracking-[0.14em] text-[#cba95c] mt-1">
                        {review.tag}
                      </div>
                    </div>

                    <div className="flex text-[#f0cf77]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#d8cebf]">{review.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6 mt-6">
            <SimpleCard className="p-6" highlight>
              <div className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
                Leave feedback
              </div>
              <h4 className="text-2xl font-black mt-2">Share your experience</h4>
              <p className="mt-3 text-[#cfc6b8] leading-7">
                Share your experience after your transaction to help other buyers.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <input
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Buyer name"
                  className="rounded-2xl border border-[#d6b36a]/15 bg-[#1a1712] px-4 py-3 outline-none focus:border-[#d6b36a]/35"
                />
                <div className="rounded-2xl border border-[#d6b36a]/12 bg-[#14110d] px-4 py-3 text-sm text-[#cfbf9e] flex items-center gap-2">
                  <BadgeCheck size={16} className="text-[#d6b36a]" />
                  Auto tag from your message
                </div>
              </div>

              <textarea
                value={buyerComment}
                onChange={(e) => setBuyerComment(e.target.value)}
                placeholder="Write your feedback here"
                rows={5}
                className="mt-4 w-full rounded-2xl border border-[#d6b36a]/15 bg-[#1a1712] px-4 py-3 outline-none resize-none focus:border-[#d6b36a]/35"
              />

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={submitReview}
                  className="rounded-2xl px-5 py-3 bg-[#d6b36a] text-black font-semibold hover:scale-[1.02] transition-transform"
                >
                  Post Feedback
                </button>
                <div className="rounded-2xl border border-[#d6b36a]/12 bg-[#14110d] px-4 py-3 text-sm text-[#cfc6b8]">
                  New feedback appears instantly on the page
                </div>
              </div>
            </SimpleCard>

            <SimpleCard className="p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
                Why buyers trust this
              </div>
              <h4 className="text-2xl font-black mt-2">
                Built for a smooth and reliable experience
              </h4>

              <div className="mt-5 space-y-4 text-[#d8cebf] leading-7">
                <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-4">
                  Fast replies and clear instructions before payment.
                </div>
                <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-4">
                  Better coin value compared with regular in app top up.
                </div>
                <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-4">
                  Smooth and verified transaction process for buyers.
                </div>
              </div>
            </SimpleCard>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <SimpleCard className="p-6" highlight>
            <div className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
              Contact and payment
            </div>
            <h4 className="text-2xl font-black mt-2">Order and payment details</h4>
            <p className="mt-3 text-[#cfc6b8] leading-7">
              For faster processing, message first before sending any payment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-[#d6b36a] mb-3">
                  Contact
                </div>
                <div className="space-y-3 text-[#f2e7d0]">
                  <p>WhatsApp: +63 995 524 8326</p>
                  <p>Seller username: 𝐏 𝐋 𝐀 𝐘 𝐘 𝐘 💯</p>
                </div>

                <a
                  href={`https://wa.me/639955248326?text=${encodeURIComponent(generateMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#d6b36a] text-black font-semibold hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#14110d] p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-[#d6b36a] mb-3">
                  Payment options
                </div>
                <div className="space-y-3 text-[#f2e7d0]">
                  <p>GCash: 09955248326</p>
                  <p>Maya: 09955248326</p>
                  <p>BPI: Ask first before payment</p>
                </div>

                <p className="mt-5 text-sm text-[#c9bfae] leading-7">
                  All posted rates are for cash payment only.
                </p>
                <p className="mt-2 text-sm text-[#c9bfae] leading-7">
                  Please do not send payment until you get a reply and confirmation from me first.
                </p>
              </div>
            </div>
          </SimpleCard>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="rounded-[32px] border border-[#d6b36a]/14 bg-[radial-gradient(circle_at_top,rgba(255,236,180,0.06),transparent_24%),linear-gradient(to_bottom,#17130f,#0f0d09)] p-8 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#e5cf97] bg-[#1c1710]/80 animate-[badgeFloat_4s_ease-in-out_infinite]">
              <Crown size={14} /> premium seller
            </div>

            <h4 className="mt-5 text-3xl md:text-5xl font-black">
              Ready to order your next
              <span className="block bg-clip-text text-transparent bg-[linear-gradient(90deg,#fff1be,#d6b36a,#fff5d7)]">
                premium top up
              </span>
            </h4>

            <p className="mt-8 max-w-2xl mx-auto text-[#cfc6b8] leading-8">
               
              Send your StarMaker ID and preferred amount first. Wait for confirmation before paying to keep your transaction smooth and secure.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={`https://wa.me/639955248326?text=${encodeURIComponent(generateMessage())}`}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-[#d6b36a] text-black font-semibold shadow-[0_6px_16px_rgba(214,179,106,0.12)] hover:scale-[1.03] transition-transform overflow-hidden"
              >
                Order Now
                <ArrowRight size={16} />
                <div className="pointer-events-none absolute -left-[45%] top-0 h-full w-[35%] rotate-12 bg-gradient-to-r from-transparent via-white/28 to-transparent group-hover:animate-[luxSweep_1.5s_linear_1]" />
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-[#9d927e] py-12">
          © 2026 playyy💯 Coin Seller • Recharge coins top up page
        </footer>
      </div>
    </div>
  );
}