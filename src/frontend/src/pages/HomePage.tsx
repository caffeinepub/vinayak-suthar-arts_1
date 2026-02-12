import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Award, Truck, PenTool } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const artworks = [
  {
    id: 1,
    src: '/assets/InShot_20260113_205558602.jpg',
    alt: 'Portrait Artwork 1',
    title: 'Classic Portrait',
  },
  {
    id: 2,
    src: '/assets/IMG_20250718_202606.jpg',
    alt: 'Portrait Artwork 2',
    title: 'Character Sketch',
  },
  {
    id: 3,
    src: '/assets/IMG_20250317_193403.jpg',
    alt: 'Portrait Artwork 3',
    title: 'Realistic Portrait',
  },
  {
    id: 4,
    src: '/assets/IMG_20250803_175446.jpg',
    alt: 'Portrait Artwork 4',
    title: 'Ganesha Art',
  },
  {
    id: 5,
    src: '/assets/IMG_20250813_170229.jpg',
    alt: 'Portrait Artwork 5',
    title: 'Traditional Portrait',
  },
  {
    id: 6,
    src: '/assets/IMG_20250808_225301.jpg',
    alt: 'Portrait Artwork 6',
    title: 'Business Card Design',
  },
  {
    id: 7,
    src: '/assets/sample1.jpg',
    alt: 'Portrait Artwork 7',
    title: 'Formal Portrait',
  },
  {
    id: 8,
    src: '/assets/sample2.jpg',
    alt: 'Portrait Artwork 8',
    title: 'Ganesha with Veena',
  },
  {
    id: 9,
    src: '/assets/sample3.jpg',
    alt: 'Portrait Artwork 9',
    title: 'Elephant Sketch',
  },
  {
    id: 10,
    src: '/assets/sample4.jpg',
    alt: 'Portrait Artwork 10',
    title: 'Double Portrait',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="container py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <Badge variant="outline" className="w-fit">
                <Award className="mr-1 h-3 w-3" />
                Golden Artist Certified
              </Badge>
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Turning Photos Into Handmade Art
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Professional portrait artist specializing in realistic handmade sketches and portraits.
                Every piece is crafted with premium materials and signed by the artist.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => navigate({ to: '/order' })}>
                  Order Custom Portrait
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#gallery">View Gallery</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src="/assets/InShot_20260113_205558602.jpg"
                  alt="Featured Artwork"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border bg-background py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">100% Handmade</h3>
                <p className="text-sm text-muted-foreground">Every artwork is hand-drawn with care</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Artist-grade paper and materials</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Artist Signed</h3>
                <p className="text-sm text-muted-foreground">Certified and authenticated</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">All India Delivery</h3>
                <p className="text-sm text-muted-foreground">Safe and secure shipping</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="border-b border-border bg-muted/20 py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h3 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Gallery</h3>
            <p className="mt-2 text-muted-foreground">
              Explore our collection of handmade portraits and artworks
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {artworks.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <button
                    className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-lg"
                    onClick={() => setSelectedImage(artwork.src)}
                  >
                    <img
                      src={artwork.src}
                      alt={artwork.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-medium text-white">{artwork.title}</p>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    className="h-auto w-full rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="border-b border-border bg-background py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Me?
            </h3>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    '100% Handmade Artwork',
                    'Premium Quality Paper',
                    'Artist Signed',
                    'All India Delivery',
                    'Golden Artist Certified By The Indian Art Fest',
                    'Certified ID FINE-ART-0019 & IND1A039',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Artist Section */}
      <section className="bg-muted/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
              About Artist
            </h3>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    'Vinayak Suthar is a professional portrait artist with years of experience.',
                    'Specializes in realistic handmade sketches and portraits.',
                    'Uses premium quality paper and materials for every artwork.',
                    'Offers custom commissions with 100% satisfaction guarantee.',
                    'Certified by The Indian Art Fest with multiple awards.',
                    'Believes in preserving the beauty of traditional art in every piece.',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16">
        <div className="container text-center">
          <h3 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Commission Your Portrait?
          </h3>
          <p className="mb-8 text-lg text-muted-foreground">
            Get your custom handmade portrait today
          </p>
          <Button size="lg" onClick={() => navigate({ to: '/order' })}>
            Order Custom Portrait
          </Button>
        </div>
      </section>
    </div>
  );
}
