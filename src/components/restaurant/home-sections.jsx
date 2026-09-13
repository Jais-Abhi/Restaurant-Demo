"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import restaurant, { navigation } from "@/lib/restaurant";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function Navbar() {
  return <header className="site-nav"><Link href="/" className="wordmark">Royal <em>Spice</em></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="nav-actions"><Link className="text-link" href="/order">Reserve Table <Arrow /></Link><Link className="menu-trigger" href="/order">Order Now</Link></div></header>;
}

export function HeroSection() {
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event) => {
      if (window.matchMedia("(pointer: fine)").matches) {
        target.current = {
          x: (event.clientX / window.innerWidth - 0.5) * 2,
          y: (event.clientY / window.innerHeight - 0.5) * 2,
        };
      }
    };
    const animate = () => {
      setPointer((current) => {
        const next = {
          x: current.x + (target.current.x - current.x) * 0.12,
          y: current.y + (target.current.y - current.y) * 0.12,
        };
        return Math.abs(next.x - current.x) < 0.001 && Math.abs(next.y - current.y) < 0.001 ? current : next;
      });
      frame.current = requestAnimationFrame(animate);
    };
    window.addEventListener("pointermove", move, { passive: true });
    frame.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <section className="hero"><Image src={restaurant.heroImage} alt="Warmly lit dining room at The Royal Spice" fill priority sizes="100vw" className="hero-image" style={{ transform: `scale(1.12) translate(${pointer.x * -15}px, ${pointer.y * -12}px)` }} /><div className="hero-shade"/><div className="hero-spice hero-spice-one" aria-hidden="true" style={{ transform: `translate(${pointer.x * 18}px, ${pointer.y * 14}px) rotate(${pointer.x * 16}deg)` }}>✦</div><div className="hero-spice hero-spice-two" aria-hidden="true" style={{ transform: `translate(${pointer.x * -12}px, ${pointer.y * -10}px) rotate(${pointer.y * -20}deg)` }}>✧</div><div className="hero-content" style={{ transform: `translate(${pointer.x * 10}px, ${pointer.y * 7}px)` }}><p className="eyebrow light">EST. 2014 <span>·</span> KANPUR</p><h1>Authentic<br/><i>Indian</i> Flavours</h1><p className="hero-sub">Made to bring people together.</p><p className="hero-copy">{restaurant.description}</p><div className="hero-buttons"><Link className="button button-light" href="/menu">Explore Menu <Arrow /></Link><Link className="button button-ghost" href="/order">Reserve a Table</Link></div></div><div className="rating-badge"><strong>★</strong><span><b>{restaurant.rating}</b> on Google<br/><small>{restaurant.reviewsCount} reviews</small></span></div><span className="hero-scroll">Scroll to discover ↓</span></section>;
}

export function HighlightsSection() { return <section className="highlights">{[["★", restaurant.rating, "Google Rating"],["01", restaurant.reviewsCount, "Happy Reviews"],["12", restaurant.experience, "Years of warmth"],["✦", "50+", "Signature dishes"]].map(([mark, value, label]) => <div className="stat" key={label}><span className="stat-mark">{mark}</span><div><strong>{value}</strong><small>{label}</small></div></div>)}</section>; }

export function AboutPreview() { return <section className="about-section section-pad"><div className="about-image"><Image src={restaurant.aboutImage} alt="Interior of The Royal Spice" fill sizes="(max-width: 768px) 100vw, 46vw"/></div><div className="about-copy"><p className="eyebrow">OUR STORY</p><h2>Rooted in tradition.<br/><i>Made for today.</i></h2><p>At The Royal Spice, recipes passed down through generations meet the energy of a new India.</p><p>Come for the slow-cooked flavours. Stay for the stories around the table.</p><Link className="underlined-link" href="/about">Discover our story <Arrow /></Link><div className="dish-note"><span>Tonight&apos;s favourite</span><b>Royal Dum Biryani</b><small>Slow-cooked basmati · ₹329</small></div></div></section>; }

export function FeaturedDishes() { return <section className="dishes-section section-pad"><div className="section-heading"><div><p className="eyebrow">FROM OUR KITCHEN</p><h2>A few guest <i>favourites.</i></h2></div><Link className="underlined-link desktop-only" href="/menu">View full menu <Arrow /></Link></div><div className="dish-grid">{restaurant.dishes.map((dish, index) => <article className="dish-card" key={dish.name}><div className="dish-image"><Image src={dish.image} alt={dish.name} fill sizes="(max-width: 768px) 44vw, 22vw"/><span className="dish-index">0{index + 1}</span></div><div className="dish-meta"><div><h3>{dish.name}</h3><p>{dish.description}</p></div><strong>{dish.price}</strong></div></article>)}</div><Link className="underlined-link mobile-only" href="/menu">View full menu <Arrow /></Link></section>; }

export function ExperienceGallery() { return <section className="experience section-pad"><div className="experience-intro"><p className="eyebrow">THE ROYAL SPICE EXPERIENCE</p><h2>More than a meal.<br/><i>It&apos;s an experience.</i></h2><p>Long lunches, late dinners, and everything worth gathering for.</p><Link className="underlined-link" href="/gallery">View gallery <Arrow /></Link></div><div className="gallery-grid">{restaurant.gallery.map((item, index) => <div className={`gallery-image gallery-${index}`} key={item.src}><Image src={item.src} alt={item.alt} fill sizes={index === 0 ? "50vw" : "25vw"}/></div>)}</div></section>; }

export function ReviewsLocation() { return <section className="visit section-pad"><div className="reviews"><p className="eyebrow">KIND WORDS</p>{restaurant.reviews.map((review) => <blockquote key={review.author}><span>★★★★★</span><p>“{review.quote}”</p><footer>{review.author} <small>· {review.place}</small></footer></blockquote>)}</div><div className="location"><p className="eyebrow">COME BY</p><h2>Find your way<br/><i>to us.</i></h2><p>{restaurant.contact.address}</p><p>{restaurant.hours.map((hour) => <span key={hour}>{hour}<br/></span>)}</p><a className="underlined-link" href="https://maps.google.com/?q=The+Royal+Spice+Kanpur" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div></section>; }

export function FinalCTA() { return <section className="final-cta"><Image src={restaurant.gallery[0].src} alt="Guests enjoying an evening at The Royal Spice" fill sizes="100vw"/><div className="final-shade"/><div className="final-content"><p className="eyebrow light">A TABLE FOR EVERY OCCASION</p><h2>Your table is <i>waiting.</i></h2><p>Come hungry. Leave happy.</p><div><Link className="button button-light" href="/order">Reserve a Table <Arrow /></Link><Link className="button button-ghost" href="/order">Order Now</Link></div></div></section>; }

export function Footer() { return <footer className="footer"><div className="footer-brand"><Link href="/" className="wordmark">Royal <em>Spice</em></Link><p>{restaurant.description}</p><small>© 2024 The Royal Spice</small></div><div><p className="footer-label">Explore</p>{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><p className="footer-label">Visit</p><a href={`tel:${restaurant.contact.phone}`}>{restaurant.contact.phone}</a><a href={`https://wa.me/${restaurant.contact.whatsapp}`}>WhatsApp us</a><span>{restaurant.contact.address}</span></div><div><p className="footer-label">Follow along</p><a href={restaurant.social.instagram}>Instagram ↗</a><a href={restaurant.social.facebook}>Facebook ↗</a><span>Privacy · Terms</span></div></footer>; }

export function MobileActionBar() { return <div className="mobile-action-bar"><a href={`tel:${restaurant.contact.phone}`}>Call</a><a href={`https://wa.me/${restaurant.contact.whatsapp}`}>WhatsApp</a><Link href="/order">Order</Link></div>; }
