'use client';

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Calculator, Home as HomeIcon, Menu, DollarSign } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="border-b bg-background sticky top-0 z-30" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="font-bold text-lg">PercentageCalculator</span>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium hover:text-primary transition-colors flex items-center gap-1"><Calculator className="w-4 h-4" />Percentage</Link>
          <Link href="/finance" className="hover:text-primary transition-colors flex items-center gap-1"><DollarSign className="w-4 h-4" />Finance</Link>
          <Link href="/real-estate" className="hover:text-primary transition-colors flex items-center gap-1"><HomeIcon className="w-4 h-4" />Real Estate</Link>
          <div className="w-px h-4 bg-border mx-2"></div>
          <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
        </nav>
        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 p-6 border-b">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-lg">Menu</span>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col gap-1">
                    <Link 
                      href="/" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium" 
                      onClick={()=>setOpen(false)}
                    >
                      <Calculator className="w-4 h-4" />
                      Percentage Calculator
                    </Link>
                    <Link 
                      href="/finance" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors" 
                      onClick={()=>setOpen(false)}
                    >
                      <DollarSign className="w-4 h-4" />
                      Finance Calculator
                    </Link>
                    <Link 
                      href="/real-estate" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors" 
                      onClick={()=>setOpen(false)}
                    >
                      <HomeIcon className="w-4 h-4" />
                      Real Estate Calculator
                    </Link>
                    <div className="h-px bg-border my-3"></div>
                    <Link 
                      href="/guides" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors" 
                      onClick={()=>setOpen(false)}
                    >
                      Guides
                    </Link>
                    <Link 
                      href="/about" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors" 
                      onClick={()=>setOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/privacy" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors" 
                      onClick={()=>setOpen(false)}
                    >
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop ThemeToggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 