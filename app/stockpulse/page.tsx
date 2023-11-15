'use client'

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Separator } from "@/components/ui/separator"
import { H1, P } from "@/components/ui/typography"

const StockPulseRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to StockPulse
    window.location.href = siteConfig.links.stockpulse;
  }, []);

  return (
    <div className="container grid pt-8 text-center md:py-14">
      <H1 className="text-center">Redirecting to StockPulse...</H1>
      <Separator />
      <P>Thank you for your patience!</P>
    </div>
  )
};

export default StockPulseRedirect;
