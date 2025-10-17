"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1128 0%, #001f54 40%, #034078 100%)",
        color: "#ffffff",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "fixed",
          top: "-50%",
          right: "-10%",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,119,186,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-30%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,134,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "140px 40px 80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Home Section */}
        <section
          id="home"
          style={{
            scrollMarginTop: "80px",
            textAlign: "center",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              fontSize: "4.5rem", // 調整字體更大
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            HUI-YU HUANG
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #3a86ff 0%, #0177ba 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            
          </h1>

          <p
            style={{
              fontSize: "1.4rem",
              color: "#8ab4f8",
              fontWeight: 300,
              marginBottom: "30px",
            }}
          >
            Department of Technology Application and Human Resource Development
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>C++</SkillBadge>
            <SkillBadge>Arduino</SkillBadge>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="👤">About Me</SectionTitle>
          <div
            style={{
              background: "rgba(1,119,186,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "35px 40px",
              border: "1px solid rgba(58,134,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <InfoItem icon="🎓">
              Currently a sophomore at National Taiwan Normal University, Department of Technology Application and Human Resource Development
            </InfoItem>
            <InfoItem icon="✂️">
              Passionate about crafts; member of the NTNU Craft Club, serving as Treasurer
            </InfoItem>
            <InfoItem icon="📚">
              Enthusiastic about teaching, currently tutoring one student each in Grade 5, 7, 8, and 9
            </InfoItem>
            <InfoItem icon="💻">
              Programming skills include C++, Python, and JavaScript
            </InfoItem>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginTop: "80px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="💼">Skills</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <SkillCard title="Web Development" items={["JavaScript", "Next.js", "React"]} />
            <SkillCard title="Programming" items={["Python", "C++", "Data Analysis"]} />
            <SkillCard title="Tools & Platforms" items={["Gradio", "Google Colab", "Git"]} />
            <SkillCard title="Hardware & Design" items={["Arduino", "Scratch", "Onshape"]} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="🎨">Projects</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            <AnimatedCard
              title="Eye-duino Guardian"
              desc="Arduino program + electronic circuit, integrated with Telegram for automatic alerts."
              tags={["Arduino", "IoT", "Telegram"]}
              img="電子電路預覽.png"
              url="電子電路.pdf"
            />
            <AnimatedCard
              title="Club Finance Tracker"
              desc="Using Colab + Excel to track club finances, presented via Gradio."
              tags={["Python", "Gradio", "Data"]}
              img="第二預覽.png"
              url="https://github.com/41371116h/PL-Repo."
            />
            <AnimatedCard
              title="Text Analysis & Web Scraping"
              desc="Python web scraping to collect daily news data with real-time updates."
              tags={["Python", "Web Scraping", "NLP"]}
              img="作品三預覽.png"
              url="https://drive.google.com/drive/folders/1w-jXAdac2nVxBavQ_4rGfKTTlmVO0kj1?usp=drive_link"
            />
            <AnimatedCard
              title="Ghost Intern Training Camp"
              desc="A mini-game collection with ghost theme: find & catch, whack-a-mole, and connect-the-dots."
              tags={["Scratch", "Game Design"]}
              img="作品四.png"
              url="https://scratch.mit.edu/projects/1110961532/"
            />
            <AnimatedCard
              title="JavaScript Bouncing Ball"
              desc="Simulate a ball bouncing in a confined space using JavaScript."
              tags={["JavaScript", "Physics", "Canvas"]}
              img="作品五預覽.png"
              url="https://drive.google.com/file/d/1YiU5KPJLVKIx825K_lpClrlHdF_ehzXH/view?usp=drive_link"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="📬">Contact Me</SectionTitle>
          <div
            style={{
              background: "rgba(1,119,186,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(58,134,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <p style={{ ...textStyle, fontSize: "1.1rem", marginBottom: "30px" }}>
              Feel free to contact me for collaboration or to learn more about my projects.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
              <ContactButton
                icon="📧"
                label="Email"
                href="mailto:41371116h@ntnu.edu.tw"
                text="41371116h@ntnu.edu.tw"
              />
              <ContactButton
                icon="🌐"
                label="GitHub"
                href="https://github.com/41371116h"
                text="github.com/41371116h"
              />
            </div>
          </div>
        </section>

        <footer
          style={{
            marginTop: "100px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(58,134,255,0.2)",
            color: "#8ab4f8",
            textAlign: "center",
            fontSize: "0.95rem",
          }}
        >
          © 2025 HUI-YU HUANG | Designed & Built with Next.js
        </footer>
      </div>
    </main>
  );
}

// ---------- Components ----------

// Navbar with Responsive Hamburger Menu
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "75px",
    display: "flex",
    justifyContent: isMobile ? "space-between" : "center",
    alignItems: "center",
    backgroundColor: scrolled ? "rgba(10,17,40,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    transition: "all 0.3s ease",
    zIndex: 1000,
    borderBottom: scrolled ? "1px solid rgba(58,134,255,0.2)" : "none",
    padding: "0 30px",
  };

  const hamburgerStyle: React.CSSProperties = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "6px",
    cursor: "pointer",
    zIndex: 1001,
  };

  const barStyle = (index: number): React.CSSProperties => ({
    width: "30px",
    height: "3px",
    backgroundColor: "#fff",
    borderRadius: "3px",
    transition: "all 0.3s ease",
    transform: menuOpen
      ? index === 0
        ? "rotate(45deg) translate(9px, 9px)"
        : index === 1
        ? "opacity(0)"
        : "rotate(-45deg) translate(9px, -9px)"
      : "none",
  });

  const mobileMenuStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "280px",
    height: "100vh",
    backgroundColor: "rgba(10,17,40,0.98)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    zIndex: 999,
    borderRight: "1px solid rgba(58,134,255,0.2)",
  };

  const desktopMenuStyle: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const handleClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={navStyle}>
        {isMobile && (
          <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={barStyle(0)} />
            <div style={barStyle(1)} />
            <div style={barStyle(2)} />
          </div>
        )}
        <div style={desktopMenuStyle}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeSection === item.id}
              onClick={handleClick}
            />
          ))}
        </div>
        {isMobile && (
          <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>HUI-YU</div>
        )}
      </nav>
      {isMobile && (
        <>
          <div style={mobileMenuStyle}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                active={activeSection === item.id}
                onClick={handleClick}
              />
            ))}
          </div>
          {menuOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 998,
              }}
              onClick={() => setMenuOpen(false)}
            />
          )}
        </>
      )}
    </>
  );
}

function NavLink({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: (id: string) => void }) {
  const [hover, setHover] = useState(false);
  const linkStyle: React.CSSProperties = {
    color: active ? "#3a86ff" : hover ? "#8ab4f8" : "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "0.95rem",
    fontWeight: active ? 600 : 500,
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "8px",
    background: active ? "rgba(58,134,255,0.15)" : hover ? "rgba(58,134,255,0.08)" : "transparent",
    border: active ? "1px solid rgba(58,134,255,0.3)" : "1px solid transparent",
  };
  return (
    <a
      onClick={() => onClick(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={linkStyle}
      href={`#${id}`}
    >
      {label}
    </a>
  );
}

function SectionTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "2.2rem",
        fontWeight: 700,
        color: "#ffffff",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "2rem" }}>{icon}</span>
      <span
        style={{
          background: "linear-gradient(135deg, #3a86ff 0%, #0177ba 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </span>
    </h2>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        padding: "8px 20px",
        background: "rgba(58,134,255,0.15)",
        borderRadius: "25px",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "#8ab4f8",
        border: "1px solid rgba(58,134,255,0.3)",
      }}
    >
      {children}
    </span>
  );
}

function InfoItem({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "15px",
        marginBottom: "20px",
        fontSize: "1.05rem",
        lineHeight: "1.7",
        color: "#e3f2fd",
      }}
    >
      <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "rgba(1,119,186,0.15)" : "rgba(1,119,186,0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "25px",
        border: `1px solid ${hover ? "rgba(58,134,255,0.4)" : "rgba(58,134,255,0.2)"}`,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hover
          ? "0 12px 40px rgba(58,134,255,0.2)"
          : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <h3 style={{ color: "#3a86ff", fontSize: "1.15rem", fontWeight: 600, marginBottom: "15px" }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ color: "#e3f2fd", fontSize: "0.95rem", marginBottom: "8px", paddingLeft: "15px", position: "relative" }}
          >
            <span style={{ position: "absolute", left: 0, color: "#3a86ff" }}>▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactButton({ icon, label, href, text }: { icon: string; label: string; href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 18px",
        background: "rgba(58,134,255,0.15)",
        borderRadius: "12px",
        color: "#e3f2fd",
        textDecoration: "none",
        fontWeight: 500,
        border: "1px solid rgba(58,134,255,0.3)",
        transition: "all 0.3s ease",
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </a>
  );
}

// AnimatedCard with unified height
function AnimatedCard({ title, desc, tags, img, url }: { title: string; desc: string; tags: string[]; img: string; url: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        color: "#fff",
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        height: "100%", // 讓外部 grid 自動統一高度
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: hover ? "rgba(1,119,186,0.15)" : "rgba(1,119,186,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          overflow: "hidden",
          border: `1px solid ${hover ? "rgba(58,134,255,0.4)" : "rgba(58,134,255,0.2)"}`,
          boxShadow: hover ? "0 12px 40px rgba(58,134,255,0.2)" : "0 4px 20px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ width: "100%", height: "220px", overflow: "hidden", flexShrink: 0 }}>
          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "10px" }}>{title}</h3>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "auto" }}>{desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
            {tags.map((tag, idx) => (
              <span key={idx} style={{ fontSize: "0.8rem", color: "#3a86ff" }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

const textStyle: React.CSSProperties = {
  color: "#e3f2fd",
  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
};


