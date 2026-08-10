import { useState, type FormEvent } from 'react'
import { Check, Mail, MapPin, Phone } from 'lucide-react'
import { brand } from '../data/products'

type FormState = {
  name: string
  email: string
  topic: string
  message: string
}

const empty: FormState = {
  name: '',
  email: '',
  topic: 'order',
  message: '',
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [sent, setSent] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-shell contact-page">
      <section className="page-hero" aria-labelledby="contact-heading">
        <p className="eyebrow">Contact us</p>
        <h1 id="contact-heading">We&apos;re here to help</h1>
        <p>
          Questions about Multani Mitti soap, custom boxes, or your order —
          reach the {brand.name} studio.
        </p>
      </section>

      <div className="contact-layout">
        <aside className="contact-aside">
          <div className="contact-card">
            <Mail size={18} aria-hidden="true" />
            <div>
              <h2>Email</h2>
              <a href="mailto:hello@aureva.care">hello@aureva.care</a>
            </div>
          </div>
          <div className="contact-card">
            <Phone size={18} aria-hidden="true" />
            <div>
              <h2>Phone</h2>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
          <div className="contact-card">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <h2>Studio</h2>
              <p>12 Clay Lane, Bandra West, Mumbai 400050</p>
            </div>
          </div>
          <p className="contact-hours">
            Studio hours: Mon–Sat, 10:00–18:00 IST. We reply within one
            business day.
          </p>
        </aside>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success" role="status">
              <Check size={28} aria-hidden="true" />
              <h2>Message received</h2>
              <p>
                Thank you, {form.name || 'friend'}. Our team will get back to
                you shortly.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setForm(empty)
                  setSent(false)
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label>
                <span>Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@email.com"
                />
              </label>
              <label>
                <span>Topic</span>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={(e) => update('topic', e.target.value)}
                >
                  <option value="order">Order support</option>
                  <option value="product">Product question</option>
                  <option value="box">Custom box</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="full">
                <span>Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="How can we help?"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
