"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer, MobileActionBar, Navbar } from "@/components/restaurant/home-sections";
import { allergens, chefSpecials, menuCategories, menuSections, shareableCombos } from "@/lib/menu";

const Arrow = () => <span aria-hidden="true">↗</span>;

function MenuItem({ item, onAdd }) {
  return <article className="menu-item"><div><div className="menu-item-title"><h3>{item.name}</h3>{item.tags?.map((tag) => <span className="menu-tag" key={tag}>{tag}</span>)}</div><p>{item.description}</p></div><div className="menu-item-action"><strong>{item.price}</strong><button type="button" onClick={() => onAdd(item.name)} aria-label={`Add ${item.name} to order`}>+</button></div></article>;
}

function FeaturedDish({ item, onAdd }) {
  return <article className="menu-featured"><div className="menu-featured-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 760px) 100vw, 38vw"/></div><div className="menu-featured-copy"><p className="eyebrow">CHEF&apos;S SPECIAL</p><h3>{item.name}</h3><p>{item.description}</p><div><strong>{item.price}</strong><button type="button" onClick={() => onAdd(item.name)}>Add to order <Arrow /></button></div></div></article>;
}

export default function MenuPage() {
  const [order, setOrder] = useState([]);
  const addToOrder = (name) => setOrder((current) => current.includes(name) ? current : [...current, name]);
  return <><Navbar/><main className="menu-page"><section className="menu-hero"><div><p className="eyebrow">THE ROYAL SPICE <span>·</span> KANPUR</p><h1>Come for the<br/><i>flavour.</i> Stay for the story.</h1><p>Our menu follows the seasons, the markets, and the memories that make Indian food feel like home.</p></div><span className="menu-hero-note">Lunch · Dinner<br/>12:00 PM — 11:00 PM</span></section><nav className="menu-category-nav" aria-label="Menu categories">{menuCategories.map((category) => <a href={`#${category.id}`} key={category.id}>{category.label}</a>)}</nav><section className="menu-intro"><div><p className="eyebrow">A TABLE FULL OF STORIES</p><h2>Made slowly.<br/><i>Shared freely.</i></h2></div><p>Every plate begins with a familiar spice and ends somewhere unexpected. Order for yourself, or let the table decide.</p></section><section className="menu-specials"><div className="menu-section-heading"><div><p className="eyebrow">THE KITCHEN&apos;S PICKS</p><h2>Chef&apos;s <i>specials.</i></h2></div><span>01 — 02</span></div><div className="menu-special-grid">{chefSpecials.map((item) => <FeaturedDish item={item} onAdd={addToOrder} key={item.name}/>)}</div></section>{menuSections.map((section) => <section className="menu-section" id={section.id} key={section.id}><div className="menu-section-heading"><div><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div><span>{String(menuSections.indexOf(section) + 1).padStart(2, "0")}</span></div>{section.featured && <FeaturedDish item={section.featured} onAdd={addToOrder}/>}<div className="menu-list">{section.items.map((item) => <MenuItem item={item} onAdd={addToOrder} key={item.name}/>)}</div></section>)}<section className="share-section"><div><p className="eyebrow">MADE TO SHARE</p><h2>Bring everyone<br/><i>to the table.</i></h2></div><div className="combo-grid">{shareableCombos.map((combo) => <article className="combo-card" key={combo.name}><h3>{combo.name}</h3><p>{combo.description}</p><strong>{combo.price}</strong><button type="button" onClick={() => addToOrder(combo.name)}>Add <Arrow/></button></article>)}</div></section><section className="menu-cta"><p className="eyebrow light">YOUR TABLE IS WAITING</p><h2>Ready when<br/><i>you are.</i></h2><p>Reserve a table for dinner, or order in for the whole table.</p><Link className="button button-light" href="/order">Reserve or order <Arrow /></Link></section><p className="menu-allergens">{allergens}</p></main><Footer/><MobileActionBar/>{order.length > 0 && <aside className="order-drawer" aria-live="polite"><strong>{order.length} item{order.length === 1 ? "" : "s"} ready</strong><span>{order[order.length - 1]} added</span><Link href="/order">Review order <Arrow /></Link></aside>}</>;
}
