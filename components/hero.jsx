// "use client";

// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import { Button } from "./ui/button";
// import Image from "next/image";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;
//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       }
//       else{
//         imageElement.classList.remove("scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text:7xl xl:text-8xl gradient-title">
//             Your AI Career Coach for
//             <br />
//             Professional Success
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Advance your career with personalised guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8" variant="outline">
//               Get Started
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src={"/banner4.png"}
//               width={1280}
//               height={720}
//               alt="Banner Sensai"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Your AI Career Coach for
            <br />
            <span className="gradient-title">Professional Success</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools designed for job market success.
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 text-lg">
              Get Started for Free
            </Button>
          </Link>
        </div>
        <div className="mt-16">
          <Image
            src={"/banner4.png"}
            width={1280}
            height={720}
            alt="CareerGenie AI assistant helping with a resume"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;