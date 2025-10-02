"use client";

import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  email?: string;
  linkedinUrl?: string | null;
  size?: number;
  className?: string;
  asCard?: boolean;
};

export default function ContactLinks({email = "graig.kolodziejczyk@icloud.com", linkedinUrl, size = 20, className, asCard = true,}: Props) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        asChild
        variant="secondary"
        size="icon"
        className="rounded-full"
        aria-label="Envoyer un email"
        title={email}
      >
        <a href={`mailto:${email}?subject=Contact%20depuis%20le%20site`}>
          <Mail style={{ width: size, height: size }} />
        </a>
      </Button>

      {linkedinUrl && (
        <Button
          asChild
          variant="secondary"
          size="icon"
          className="rounded-full"
          aria-label="Profil LinkedIn"
          title="LinkedIn"
        >
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" style={{ width: size, height: size }} />
          </a>
        </Button>
      )}
    </div>
  );

  if (!asCard) return content;

  return (
    <Card className="rounded-3xl p-5 ring-1 ring-border/60 bg-card">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
        <div className="text-sm text-muted-foreground">
          Dispo pour échanger 📬
        </div>
        {content}
      </div>
    </Card>
  );
}
