"use client"
import { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import SmoothScroll from "./SmoothScroll";

export default function BrandLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      <SmoothScroll>
        <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}