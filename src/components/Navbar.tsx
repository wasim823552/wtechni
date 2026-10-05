"use client";

import { useState } from "react";
import { Menu, X, Search, Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "AI Tools", href: "/tools" },
    { label: "Comparisons", href: "/compare" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-600 text-white font-black text-sm">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-foreground leading-none">
                WTechni
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase leading-none mt-0.5">
                AI Tools & Reviews
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* CTA - Desktop */}
            <Button className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm gap-1.5" asChild>
              <a href="/tools" data-umami-event="cta:explore-tools" data-umami-event-location="navbar">
                <Zap className="h-4 w-4" />
                Explore Tools
              </a>
            </Button>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-border/40 py-3 animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search 500+ AI tools..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-muted/50 border border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 placeholder:text-muted-foreground/60"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm gap-1.5" asChild>
                <a href="/tools" data-umami-event="cta:explore-tools" data-umami-event-location="mobile-menu">
                  <Zap className="h-4 w-4" />
                  Explore Tools
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
