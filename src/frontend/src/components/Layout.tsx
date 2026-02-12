import { Outlet, Link, useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Layout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex flex-col">
            <h1 className="font-serif text-xl font-bold tracking-tight md:text-2xl">
              Vinayak Suthar Arts
            </h1>
            <p className="text-xs text-muted-foreground">Handmade Portrait Artist</p>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              Gallery
            </Link>
            <Link
              to="/order"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              Commission
            </Link>
            <a
              href="https://wa.me/919636760657"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              WhatsApp
            </a>
            <Button
              onClick={() => navigate({ to: '/order' })}
              size="sm"
              className="ml-2"
            >
              Order Now
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 pt-8">
                <Link
                  to="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/order"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Commission
                </Link>
                <a
                  href="https://wa.me/919636760657"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
                <Button onClick={() => { navigate({ to: '/order' }); setIsOpen(false); }} className="mt-4">
                  Order Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2026 Vinayak Suthar Arts. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built with ❤️ using{' '}
                <a
                  href="https://caffeine.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/vinayaksuthar_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919636760657"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
