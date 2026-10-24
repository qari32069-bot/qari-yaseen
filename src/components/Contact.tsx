import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';

export const Contact: React.FC = () => {
  const [selectedFlavour, setSelectedFlavour] = useState<string>('General Inquiry');
  const [guestCount, setGuestCount] = useState<string>('Family / Group');
  const [notes, setNotes] = useState<string>('');
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESTAURANT_CONFIG.contact.phoneCall);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  // Generate customized WhatsApp inquiry string
  const customMessage = `Assalam-o-Alaikum Bao Di Sajji! I would like to ask about your sajji menu. ${
    selectedFlavour !== 'General Inquiry' ? `Interested in: ${selectedFlavour}.` : ''
  } ${guestCount ? `Serving: ${guestCount}.` : ''} ${notes ? `Note: ${notes}` : ''}`.trim();

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber, customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & TikTok Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Contact & <span className="gold-gradient-text">Follow Us</span>
              </h2>

              <p className="mt-4 text-neutral-300 text-base leading-relaxed">
                Reach out directly to order your favorite sajji, check daily freshly roasted availability, or arrange dining with family and friends.
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 space-y-4">
                {/* Clickable Phone Number */}
                <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-amber-500/40 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-medium block">
                        Official Phone / Call Now
                      </span>
                      <a
                        href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                        className="font-display text-xl sm:text-2xl font-bold text-white hover:text-amber-400 transition-colors"
                        aria-label={`Call ${RESTAURANT_CONFIG.contact.phoneDisplay}`}
                      >
                        {RESTAURANT_CONFIG.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyPhone}
                      type="button"
                      className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                      title="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      {phoneCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                      className="px-4 py-2 text-xs font-bold text-black gold-button-gradient rounded-lg shadow hover:opacity-95 transition-opacity whitespace-nowrap"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* Official TikTok Card */}
                <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-amber-500/40 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Stylized TikTok Logo Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#fe2c55]/10 border border-[#fe2c55]/20 flex items-center justify-center text-[#fe2c55] shrink-0">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.9.14V9.06a6.47 6.47 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.41a8.38 8.38 0 0 0 3.76.9V5.88a4.84 4.84 0 0 1-.01.81z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-medium block">
                        Official TikTok Account
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-white">
                        {RESTAURANT_CONFIG.social.tiktokName}
                      </span>
                    </div>
                  </div>

                  <a
                    href={RESTAURANT_CONFIG.social.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-white bg-[#fe2c55] hover:bg-[#e0264b] rounded-lg shadow-md transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe2c55]"
                    aria-label={`Follow ${RESTAURANT_CONFIG.social.tiktokName} on TikTok`}
                  >
                    Follow on TikTok
                  </a>
                </div>

                {/* WhatsApp Quick Chat Card */}
                <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-emerald-500/40 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageCircle className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-medium block">
                        WhatsApp Ordering & Inquiries
                      </span>
                      <span className="text-sm font-semibold text-emerald-400">
                        Instant chat with our team
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-600/50 hover:bg-emerald-900/60 rounded-lg shadow transition-colors whitespace-nowrap"
                    aria-label="Chat with Bao Di Sajji on WhatsApp"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 mt-6">
              * Note: Online payment gateway and order tracking are not automated; all orders and queries are confirmed directly by phone or WhatsApp with our staff.
            </p>
          </div>

          {/* Interactive Sajji Inquiry & Pre-Order Composer */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-amber-500/30 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Direct WhatsApp Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Choose your preferred flavour and send a pre-formatted message straight to our team in Kamoke.
              </p>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label htmlFor="flavour-select" className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Select Sajji Flavour
                  </label>
                  <select
                    id="flavour-select"
                    value={selectedFlavour}
                    onChange={(e) => setSelectedFlavour(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry / Menu Details</option>
                    {RESTAURANT_CONFIG.menu.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} ({m.tagline})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="portion-select" className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Serving / Quantity Preference
                  </label>
                  <select
                    id="portion-select"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    <option value="1 Whole Sajji">1 Whole Sajji</option>
                    <option value="2 Whole Sajjis">2 Whole Sajjis</option>
                    <option value="3+ Whole Sajjis (Dawaat)">3+ Whole Sajjis (Dawaat)</option>
                    <option value="Half Sajji">Half Sajji</option>
                    <option value="Family / Group Dining">Family / Group Dining</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Special Note / Pickup Time (Optional)
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Extra spicy, want fragrant pulao, dining in at 8 PM..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Live Message Preview */}
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
                  <span className="text-neutral-400 block mb-1 font-medium">WhatsApp Message Preview:</span>
                  <p className="text-amber-200/90 italic leading-snug">
                    &ldquo;{customMessage}&rdquo;
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-black gold-button-gradient shadow-xl hover:shadow-amber-500/30 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp (03090111218)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
