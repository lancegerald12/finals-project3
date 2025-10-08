"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="w-full bg-white/70 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left side - Title */}
        <div className="text-2xl font-extrabold text-sky-700 drop-shadow-sm transition hover:text-sky-500">
          API-Keys
        </div>

        <SignedOut>
          <div className="cursor-pointer">
            <SignInButton>
              <span className="rounded-lg bg-gradient-to-r from-sky-500 via-pink-500 to-purple-600 px-5 py-2 font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg">
                Sign In
              </span>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
