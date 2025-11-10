'use client';

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Home as HomeIcon, Menu, DollarSign, TrendingUp, BookOpen, Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { trackNavClick } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="border-b bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur sticky top-0 z-30" role="banner">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2" onClick={() => trackNavClick('/', 'desktop')}>
          <Calculator className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="font-bold text-lg">PercentageCalculator</span>
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <Link 
            href="/" 
            className={`font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent ${isActive('/') ? 'bg-accent text-primary' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
            onClick={() => trackNavClick('/', 'desktop')}
          >
            <HomeIcon className="w-4 h-4" />
            Home
          </Link>
          
          {/* Calculators Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 rounded-md hover:bg-accent">
                <Calculator className="w-4 h-4" />
                Calculators
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              <DropdownMenuLabel>All Calculators</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className={isActive('/') ? 'bg-accent' : ''}>
                <Link href="/" className="flex items-center gap-2 w-full" aria-current={isActive('/') ? 'page' : undefined} onClick={() => trackNavClick('/', 'dropdown')}>
                  <Calculator className="w-4 h-4" />
                  Percentage Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={isActive('/finance') ? 'bg-accent' : ''}>
                <Link href="/finance" className="flex items-center gap-2 w-full" aria-current={isActive('/finance') ? 'page' : undefined} onClick={() => trackNavClick('/finance', 'dropdown')}>
                  <DollarSign className="w-4 h-4" />
                  Finance Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={isActive('/real-estate') ? 'bg-accent' : ''}>
                <Link href="/real-estate" className="flex items-center gap-2 w-full" aria-current={isActive('/real-estate') ? 'page' : undefined} onClick={() => trackNavClick('/real-estate', 'dropdown')}>
                  <HomeIcon className="w-4 h-4" />
                  Real Estate Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={isActive('/compound-interest') ? 'bg-accent' : ''}>
                <Link href="/compound-interest" className="flex items-center gap-2 w-full" aria-current={isActive('/compound-interest') ? 'page' : undefined} onClick={() => trackNavClick('/compound-interest', 'dropdown')}>
                  <TrendingUp className="w-4 h-4" />
                  Compound Interest Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={isActive('/education') ? 'bg-accent' : ''}>
                <Link href="/education" className="flex items-center gap-2 w-full" aria-current={isActive('/education') ? 'page' : undefined} onClick={() => trackNavClick('/education', 'dropdown')}>
                  <BookOpen className="w-4 h-4" />
                  Education Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={isActive('/freelance') ? 'bg-accent' : ''}>
                <Link href="/freelance" className="flex items-center gap-2 w-full" aria-current={isActive('/freelance') ? 'page' : undefined} onClick={() => trackNavClick('/freelance', 'dropdown')}>
                  <Briefcase className="w-4 h-4" />
                  Freelance Calculator
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/guides" className={`transition-colors px-3 py-2 rounded-md hover:bg-accent ${isActive('/guides') ? 'bg-accent text-primary' : ''}`} aria-current={isActive('/guides') ? 'page' : undefined} onClick={() => trackNavClick('/guides', 'desktop')}>
            Guides
          </Link>
          <Link href="/about" className={`transition-colors px-3 py-2 rounded-md hover:bg-accent ${isActive('/about') ? 'bg-accent text-primary' : ''}`} aria-current={isActive('/about') ? 'page' : undefined} onClick={() => trackNavClick('/about', 'desktop')}>
            About
          </Link>
          <Link href="/privacy" className={`transition-colors px-3 py-2 rounded-md hover:bg-accent ${isActive('/privacy') ? 'bg-accent text-primary' : ''}`} aria-current={isActive('/privacy') ? 'page' : undefined} onClick={() => trackNavClick('/privacy', 'desktop')}>
            Privacy
          </Link>
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
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium ${isActive('/') ? 'bg-accent text-primary' : ''}`} 
                      aria-current={isActive('/') ? 'page' : undefined}
                      onClick={()=>{ trackNavClick('/', 'mobile'); setOpen(false); }}
                    >
                      <HomeIcon className="w-4 h-4" />
                      Home
                    </Link>
                    
                    {/* Calculators Section */}
                    <div className="px-3 py-2">
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Calculators</div>
                      <div className="space-y-1">
                        <Link 
                          href="/" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/', 'mobile'); setOpen(false); }}
                        >
                          <Calculator className="w-4 h-4" />
                          Percentage Calculator
                        </Link>
                        <Link 
                          href="/finance" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/finance') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/finance') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/finance', 'mobile'); setOpen(false); }}
                        >
                          <DollarSign className="w-4 h-4" />
                          Finance Calculator
                        </Link>
                        <Link 
                          href="/real-estate" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/real-estate') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/real-estate') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/real-estate', 'mobile'); setOpen(false); }}
                        >
                          <HomeIcon className="w-4 h-4" />
                          Real Estate Calculator
                        </Link>
                        <Link 
                          href="/compound-interest" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/compound-interest') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/compound-interest') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/compound-interest', 'mobile'); setOpen(false); }}
                        >
                          <TrendingUp className="w-4 h-4" />
                          Compound Interest Calculator
                        </Link>
                        <Link 
                          href="/education" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/education') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/education') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/education', 'mobile'); setOpen(false); }}
                        >
                          <BookOpen className="w-4 h-4" />
                          Education Calculator
                        </Link>
                        <Link 
                          href="/freelance" 
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm ${isActive('/freelance') ? 'bg-accent text-primary' : ''}`} 
                          aria-current={isActive('/freelance') ? 'page' : undefined}
                          onClick={()=>{ trackNavClick('/freelance', 'mobile'); setOpen(false); }}
                        >
                          <Briefcase className="w-4 h-4" />
                          Freelance Calculator
                        </Link>
                      </div>
                    </div>
                    
                    <div className="h-px bg-border my-3"></div>
                    <Link 
                      href="/guides" 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors ${isActive('/guides') ? 'bg-accent text-primary' : ''}`} 
                      aria-current={isActive('/guides') ? 'page' : undefined}
                      onClick={()=>{ trackNavClick('/guides', 'mobile'); setOpen(false); }}
                    >
                      Guides
                    </Link>
                    <Link 
                      href="/about" 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors ${isActive('/about') ? 'bg-accent text-primary' : ''}`} 
                      aria-current={isActive('/about') ? 'page' : undefined}
                      onClick={()=>{ trackNavClick('/about', 'mobile'); setOpen(false); }}
                    >
                      About
                    </Link>
                    <Link 
                      href="/privacy" 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors ${isActive('/privacy') ? 'bg-accent text-primary' : ''}`} 
                      aria-current={isActive('/privacy') ? 'page' : undefined}
                      onClick={()=>{ trackNavClick('/privacy', 'mobile'); setOpen(false); }}
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
