"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Enhanced particles system
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.color = `hsl(${Math.random() * 40 + 250}, 80%, 70%)`;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        const pulsedOpacity = this.opacity * (0.8 + 0.2 * Math.sin(this.pulse));
        ctx.globalAlpha = pulsedOpacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance) / 120 * 0.2;
            ctx.strokeStyle = '#A855F7';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    }
    animate();

    // Text animation
    const text1 = "WEB DESIGN";
    const text2 = "INNOVATORS";
    
    const chars1 = text1.split('').map((char, i) => 
      `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    
    const chars2 = text2.split('').map((char, i) => 
      `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    
    textRef.current.innerHTML = `
      <div class="line1">${chars1}</div>
      <div class="line2">${chars2}</div>
    `;

    const allChars = textRef.current.querySelectorAll('.char');

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete && onComplete();
      }
    });

    gsap.set(allChars, {
      opacity: 0,
      y: 60,
      rotationX: 45,
      scale: 0.8
    });

    tl.to(allChars, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: {
        amount: 0.6,
        from: "start"
      }
    })
    .to(allChars, {
      color: "#8B5CF6",
      textShadow: "0 0 20px #8B5CF6",
      duration: 0.1,
      stagger: {
        amount: 0.4,
        from: "start"
      }
    }, "-=0.3")
    .to(allChars, {
      color: "#fff",
      textShadow: "0 0 10px rgba(255,255,255,0.8)",
      duration: 0.2
    })
    .to(loaderRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.95,
      duration: 0.6,
      ease: "power2.in",
      delay: 0.4
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at center, #0F0F23 0%, #000000 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      />

      <div
        ref={textRef}
        className="page-loader-text"
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 0.9,
          fontFamily: "system-ui, sans-serif",
          perspective: "1000px",
          zIndex: 1
        }}
      >
        <style jsx>{`
          .line1 {
            margin-bottom: 20px;
          }
          .char {
            display: inline-block;
            transform-style: preserve-3d;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PageLoader;