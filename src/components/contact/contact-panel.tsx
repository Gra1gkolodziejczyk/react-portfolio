"use client";

import * as React from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/hero/logo.tsx";
import {useTranslation} from "react-i18next";

type Props = {
  email?: string;
  linkedinUrl?: string | null;
  className?: string;
};

export default function ContactPanel({email = "graig.kolodziejczyk@icloud.com", linkedinUrl, className = ""}: Props) {
  const { t } = useTranslation();
  const [copied, setCopied] = React.useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // nothing to do here, just ignore the error
    }
  }

  return (
    <Card
      className={[
        "relative overflow-hidden rounded-3xl ring-1 ring-border/60 bg-card",
        "p-5 md:p-6",
        className,
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(600px 260px at 0% 0%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(600px 260px at 0% 0%, black, transparent 70%)",
          background:
            "radial-gradient(1000px 400px at -10% -20%, hsl(var(--primary)/0.18), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-primary">{t('contact.title')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('contact.emailDispo')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="rounded-full px-4 text-white">
            <a
              href={`mailto:${email}?subject=Contact%20depuis%20le%20site`}
              aria-label={`Envoyer un email à ${email}`}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('contact.writeMe')}
            </a>
          </Button>

          <Button
            variant="secondary"
            className="rounded-full px-3"
            onClick={copyEmail}
            title="Copier l’adresse e-mail"
            aria-label="Copier l’adresse e-mail"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span className="sr-only">{t('contact.copied')}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="sr-only">{t('contact.copy')}</span>
              </>
            )}
          </Button>

          {linkedinUrl && (
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="rounded-full"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Logo name="linkedin" size={20} theme="auto" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="relative mt-4 text-sm flex justify-center">
        <a
          href={`mailto:${email}`}
          className="group flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-foreground hover:bg-white/10 max-sm:flex-col max-sm:items-center max-sm:gap-1 max-sm:text-center"
        >
          <Mail className="h-4 w-4 opacity-80" />
          <span className="font-medium">{email}</span>
          <span className="ml-1 text-muted-foreground group-hover:underline">
            {t('contact.openMail')}
          </span>
        </a>
      </div>
    </Card>
  );
}
