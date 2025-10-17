"use client";
import React, { useEffect, useRef, useState } from "react";

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
      {/* 背景裝飾元素 */}
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
              display: "inline-block",
              marginBottom: "20px",
              padding: "8px 20px",
              background: "rgba(1,119,186,0.2)",
              borderRadius: "30px",
              border: "1px solid rgba(58,134,255,0.3)",
            }}
          >

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

        <section id="about" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="👤">個人簡介</SectionTitle>
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
              就讀於師範大學科技應用暨人力資源發展學系，目前大二
            </InfoItem>
            <InfoItem icon="✂️">
              熱愛手作，加入「師大手工藝研究社」並擔任總務職務
            </InfoItem>
            <InfoItem icon="📚">
              對教學充滿熱忱，目前有小五、國一、國二、國三學生各一位
            </InfoItem>
            <InfoItem icon="💻">
              程式基礎包含 C++、Python 與 JavaScript
            </InfoItem>
          </div>
        </section>

        <section id="skills" style={{ marginTop: "80px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="💼">技能專長</SectionTitle>
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

        <section id="projects" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="🎨">作品集</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            <AnimatedCard
              title="Eye-duino 視界守護者"
              desc="Arduino 程式 + 電子電路，並結合 Telegram 自動提醒。"
              tags={["Arduino", "IoT", "Telegram"]}
              img="電子電路預覽.png"
              url="電子電路.pdf"
            />
            <AnimatedCard
              title="社團收支紀錄系統"
              desc="使用 Colab + Excel 製作社團收支紀錄表，並用 Gradio 呈現成果。"
              tags={["Python", "Gradio", "Data"]}
              img="第二預覽.png"
              url="https://github.com/41371116h/PL-Repo."
            />
            <AnimatedCard
              title="文本分析 & 爬蟲"
              desc="用 Python 寫爬蟲抓取每日新聞資料，並可即時更新。"
              tags={["Python", "Web Scraping", "NLP"]}
              img="作品三預覽.png"
              url="https://drive.google.com/drive/folders/1w-jXAdac2nVxBavQ_4rGfKTTlmVO0kj1?usp=drive_link"
            />
            <AnimatedCard
              title="獵鬼實習生訓練營"
              desc="以鬼為主題的小遊戲集合：找找看、打地鼠與接接樂。"
              tags={["Scratch", "Game Design"]}
              img="作品四.png"
              url="https://scratch.mit.edu/projects/1110961532/"
            />
            <AnimatedCard
              title="JavaScript 密室小球"
              desc="利用 JavaScript 製作小球在密室反彈的情形，模擬物理運動的遊戲。"
              tags={["JavaScript", "Physics", "Canvas"]}
              img="作品五預覽.png"
              url="https://drive.google.com/file/d/1YiU5KPJLVKIx825K_lpClrlHdF_ehzXH/view?usp=drive_link"
            />
          </div>
        </section>

        <section id="contact" style={{ marginTop: "100px", scrollMarginTop: "80px" }}>
          <SectionTitle icon="📬">聯絡我</SectionTitle>
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
              如果想與我合作或了解更多作品，歡迎透過以下方式聯絡我
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
          © 2025 黃惠榆 | Designed & Built with Next.js
        </footer>
      </div>
    </main>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // 偵測當前區塊
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: scrolled ? "rgba(10,17,40,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    transition: "all 0.3s ease",
    zIndex: 1000,
    borderBottom: scrolled ? "1px solid rgba(58,134,255,0.2)" : "none",
  };

  const handleClick = (id: string) => {
    setActiveSection(id);
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
    <nav style={navStyle}>
      <div style={{ display: "flex", gap: "10px" }}>
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
    </nav>
  );
}

function NavLink({
  id,
  label,
  active,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}) {
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
        boxShadow: hover ? "0 12px 40px rgba(58,134,255,0.2)" : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <h3
        style={{
          color: "#3a86ff",
          fontSize: "1.15rem",
          fontWeight: 600,
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              color: "#e3f2fd",
              fontSize: "0.95rem",
              marginBottom: "8px",
              paddingLeft: "15px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "#3a86ff",
              }}
            >
              ▹
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactButton({
  icon,
  label,
  href,
  text,
}: {
  icon: string;
  label: string;
  href: string;
  text: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "20px 30px",
        background: hover ? "rgba(58,134,255,0.2)" : "rgba(58,134,255,0.1)",
        borderRadius: "12px",
        border: `1px solid ${hover ? "rgba(58,134,255,0.5)" : "rgba(58,134,255,0.3)"}`,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <span style={{ fontSize: "2rem" }}>{icon}</span>
      <span style={{ color: "#3a86ff", fontWeight: 600, fontSize: "1rem" }}>{label}</span>
      <span style={{ color: "#8ab4f8", fontSize: "0.9rem" }}>{text}</span>
    </a>
  );
}

const textStyle: React.CSSProperties = {
  lineHeight: "1.8",
  color: "#e3f2fd",
};

function Card({
  title,
  desc,
  tags,
  img,
  url,
}: {
  title: string;
  desc: string;
  tags?: string[];
  img?: string;
  url?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: hover
            ? "rgba(1,119,186,0.2)"
            : "rgba(1,119,186,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: hover
            ? "0 15px 50px rgba(58,134,255,0.3)"
            : "0 8px 30px rgba(0,0,0,0.3)",
          transform: hover ? "translateY(-10px) scale(1.02)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          border: `1px solid ${hover ? "rgba(58,134,255,0.5)" : "rgba(58,134,255,0.2)"}`,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: "420px",
        }}
      >
        {img && (
          <div
            style={{
              width: "100%",
              height: "220px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: hover
                  ? "linear-gradient(180deg, transparent 0%, rgba(1,119,186,0.3) 100%)"
                  : "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%)",
                zIndex: 1,
                transition: "all 0.4s ease",
              }}
            />
            <img
              src={img}
              alt={title}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transform: hover ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
        )}
        <div style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              color: "#ffffff",
              marginBottom: "12px",
              fontSize: "1.2rem",
              fontWeight: 600,
              lineHeight: "1.4",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              color: "#b3d9ff",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              marginBottom: "15px",
              flexGrow: 1,
            }}
          >
            {desc}
          </p>
          {tags && tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: "5px 12px",
                    background: "rgba(58,134,255,0.2)",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    color: "#8ab4f8",
                    border: "1px solid rgba(58,134,255,0.3)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function AnimatedCard(props: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Card {...props} />
    </div>
  );
}
