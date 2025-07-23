import CloseButton from "./CloseButton";

export default function OAuthCallbackPage() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-8">
      <div className="max-w-md w-full animate-[fadeIn_0.5s_ease-out]">
        <div className="text-center">
          <div className="mb-6 inline-flex">
            <div className="relative">
              {/* Animation Options - Uncomment one: */}

              {/* Option 1: One-time scale-in glow (default) */}
              {/* <div className="absolute inset-0 bg-amber-500 opacity-20 blur-xl animate-[glow_0.5s_ease-out_forwards]"></div> */}

              {/* Option 2: Ripple effect that fades out */}
              {/* <div className="absolute inset-0 bg-amber-500 opacity-0 blur-md animate-[ripple_0.8s_ease-out_forwards]"></div> */}

              {/* Option 3: Subtle breathing (very gentle, almost imperceptible) */}
              <div className="absolute inset-0 bg-amber-500 opacity-20 blur-xl animate-[breathe_3s_ease-in-out_infinite]"></div>

              {/* Option 4: Shimmer effect (one-time sweep) */}
              {/* <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-xl animate-[shimmer_1s_ease-out_forwards] -skew-x-12"></div>
              </div> */}

              {/* Option 5: Static glow (no animation) */}
              {/* <div className="absolute inset-0 bg-amber-500 opacity-20 blur-xl"></div> */}

              <svg
                className="relative w-16 h-16 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  className="animate-[draw_0.6s_ease-out_forwards]"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-stone-50 mb-3 font-[family-name:var(--font-geist-sans)]">
            Connection successful
          </h1>

          <p className="text-stone-400 mb-8 font-[family-name:var(--font-geist-sans)]">
            Your account has been connected to Kairos. You can now close this
            window.
          </p>

          <div className="border-t border-stone-800 pt-6">
            <CloseButton />
          </div>
        </div>
      </div>
    </div>
  );
}
