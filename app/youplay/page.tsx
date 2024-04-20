'use client'

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Separator } from "@/components/ui/separator"
import { H1, P } from "@/components/ui/typography"

const YouPlayRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to YouPlay
    window.location.href = siteConfig.links.youplay;
  }, []);

  return (
    <div className="container grid pt-8 text-center md:py-14">
      <H1 className="text-center">Redirecting to YouPlay...</H1>
      <Separator />
      <P>Thank you for your patience!</P>
    </div>
  )
};

export default YouPlayRedirect;
