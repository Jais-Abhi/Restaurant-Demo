"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import restaurant from "@/lib/restaurant";
import { menuSections } from "@/lib/menu";

const experiences = [
  { id: "dine-in", icon: "Dine in", title: "Reserve a Table", description: "Reserve a table and enjoy the full restaurant experience." },
  { id: "delivery", icon: "Delivery", title: "Order for Delivery", description: "Get your favourite dishes delivered to your doorstep." },
  { id: "takeaway", icon: "Takeaway", title: "Order for Takeaway", description: "Order ahead and pick up from the restaurant." },
];

const popularDishes = menuSections.flatMap((section) => section.items).slice(0, 6).map((dish, index) => ({ ...dish, image: restaurant.dishes[index % restaurant.dishes.length].image }));

function Field({ label, name, type = "text", placeholder, required = true }) {
  return <label className="order-field"><span>{label}</span><input name={name} type={type} placeholder={placeholder} required={required} /></label>;
}

function ReservationForm({ onSubmit }) {
  return <form className="order-form" onSubmit={onSubmit}><div className="order-form-grid"><Field label="Name" name="name" placeholder="Your name" /><Field label="Phone number" name="phone" type="tel" placeholder="+91 98765 43210" /><Field label="Date" name="date" type="date" /><Field label="Time" name="time" type="time" /><Field label="Guests" name="guests" type="number" placeholder="2" /><label className="order-field"><span>Special request</span><input name="request" placeholder="Anything we should know?" required={false} /></label></div><p className="order-note">Reservation requests are subject to availability.</p><button className="button button-dark" type="submit">Confirm Reservation <span aria-hidden="true">↗</span></button></form>;
}

function OrderMenu({ cart, setCart, mode }) {
  const add = (dish) => setCart((current) => ({ ...current, [dish.name]: { ...dish, quantity: (current[dish.name]?.quantity || 0) + 1 } }));
  return <div className="order-menu"><div className="order-menu-heading"><div><p className="eyebrow">POPULAR DISHES</p><h3>Something delicious, <i>coming up.</i></h3></div><span>{mode === "delivery" ? "Delivery" : "Takeaway"}</span></div><div className="order-dishes">{popularDishes.map((dish) => <article className="order-dish" key={dish.name}><Image src={dish.image} alt={dish.name} width={120} height={120} /><div><div className="order-dish-top"><h4>{dish.name}</h4><strong>{dish.price}</strong></div><p>{dish.description}</p><small>{dish.tags?.includes("Vegetarian") ? "Vegetarian" : "Chef selection"}</small></div><button type="button" aria-label={`Add ${dish.name}`} onClick={() => add(dish)}>+</button></article>)}</div></div>;
}

function CartSummary({ cart, mode }) {
  const items = Object.values(cart);
  const subtotal = items.reduce((sum, item) => sum + Number(item.price.replace("₹", "")) * item.quantity, 0);
  return <aside className="cart-summary"><p className="eyebrow">YOUR ORDER</p><h3>{items.length ? "Ready when you are." : "Add a favourite."}</h3>{items.length ? <div className="cart-lines">{items.map((item) => <div key={item.name}><span>{item.quantity} × {item.name}</span><strong>₹{Number(item.price.replace("₹", "")) * item.quantity}</strong></div>)}<div className="cart-total"><span>Subtotal</span><strong>₹{subtotal}</strong></div><div className="order-form-grid"><Field label="Name" name="order-name" placeholder="Your name" /><Field label="Phone" name="order-phone" type="tel" placeholder="Phone number" />{mode === "delivery" ? <label className="order-field order-field-wide"><span>Delivery address</span><input name="address" placeholder="Your address" required /></label> : <Field label="Pickup time" name="pickup" type="time" placeholder="" />}</div><button className="button button-dark" type="button">Continue <span aria-hidden="true">↗</span></button></div> : <p className="cart-empty">Choose something from the menu and it will appear here.</p>}</aside>;
}

export default function OrderPage() {
  const [mode, setMode] = useState("dine-in");
  const [cart, setCart] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const selected = experiences.find((experience) => experience.id === mode);
  const itemCount = useMemo(() => Object.values(cart).reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const submitReservation = (event) => { event.preventDefault(); setSubmitted(true); };

  return <main className="order-page"><section className="order-hero"><Image src={restaurant.gallery[0].src} alt="Warmly lit dining room at The Royal Spice" fill priority sizes="100vw" /><div className="final-shade" /><div className="order-hero-content"><p className="eyebrow light">ORDER &amp; RESERVE</p><h1>How would you like to enjoy <i>The Royal Spice?</i></h1><p>Order your favourites for takeaway or delivery, or reserve a table for your next visit.</p></div></section><section className="order-section experience-section"><div className="section-heading"><div><p className="eyebrow">CHOOSE YOUR EXPERIENCE</p><h2>One place. <i>Your way.</i></h2></div><span className="order-count">{itemCount ? `${itemCount} item${itemCount > 1 ? "s" : ""} selected` : ""}</span></div><div className="experience-options">{experiences.map((experience) => <button type="button" className={`experience-option ${mode === experience.id ? "is-selected" : ""}`} key={experience.id} onClick={() => { setMode(experience.id); setSubmitted(false); }}><span className="experience-icon" aria-hidden="true">{experience.icon === "Dine in" ? "01" : experience.icon === "Delivery" ? "02" : "03"}</span><span><strong>{experience.title}</strong><small>{experience.description}</small></span><span className="experience-arrow" aria-hidden="true">↗</span></button>)}</div></section><section className="order-section order-dynamic" aria-live="polite"><div className="selected-label"><span>Selected</span><strong>{selected.title}</strong></div>{mode === "dine-in" ? submitted ? <div className="success-state"><p className="eyebrow">THANK YOU</p><h2>Reservation Request <i>Received.</i></h2><p>Our team will be in touch shortly to confirm availability for your preferred time.</p><button type="button" className="underlined-link" onClick={() => setSubmitted(false)}>Make another request ↗</button></div> : <ReservationForm onSubmit={submitReservation} /> : <div className="order-content-grid"><OrderMenu cart={cart} setCart={setCart} mode={mode} /><CartSummary cart={cart} mode={mode} /></div>}</section><section className="visit order-visit"><div><p className="eyebrow">VISIT US</p><h2>See you around<br/><i>the table.</i></h2></div><div className="order-contact"><strong>{restaurant.name}</strong><span>{restaurant.contact.address}</span><span>{restaurant.hours.map((hour) => <span key={hour}>{hour}<br /></span>)}</span><div><a className="button button-dark" href={`tel:${restaurant.contact.phone}`}>Call</a><a className="button button-outline" href={`https://wa.me/${restaurant.contact.whatsapp}`}>WhatsApp</a><a className="underlined-link" href="https://maps.google.com/?q=The+Royal+Spice+Kanpur" target="_blank" rel="noreferrer">Get directions ↗</a></div></div></section><section className="final-cta order-final-cta"><Image src={restaurant.gallery[0].src} alt="Guests enjoying an evening at The Royal Spice" fill sizes="100vw" /><div className="final-shade" /><div className="final-content"><p className="eyebrow light">UNTIL THEN</p><h2>See you at The Royal Spice.</h2><div><Link className="button button-light" href="/menu">Explore Menu</Link><Link className="button button-ghost" href="/order">Order &amp; Reserve</Link></div></div></section></main>;
}

