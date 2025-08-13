import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-6xl bg-black text-white md:leading-[5rem]  tracking-[-0.02em] Tan">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
            BASED PROJECT REACT
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
         BASED PROJECT REACT
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
