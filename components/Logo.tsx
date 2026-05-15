import Image from "next/image";
import { asset } from "@/lib/paths";

/**
 * OneFrame logo mark — the real company icon (1 + frame + dispersing pixels).
 * Icon only; the wordmark "OneFrame" is rendered separately in the Nav/Footer.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={asset("/logo-mark.png")}
      alt="OneFrame"
      width={120}
      height={120}
      className={`object-contain ${className}`}
      priority
    />
  );
}
