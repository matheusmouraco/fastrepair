import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Zap, 
  Lightbulb, 
  Hammer, 
  Paintbrush, 
  CheckCircle,
  Clock,
  Shield,
  Star,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CoverageArea from "../components/CoverageArea";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <CoverageArea />
      <Testimonials />
      <ContactSection />
    </div>
  );
}