'use client';

export default function NewsletterForm() {
  return (
    <div className="newsletter-cta">
      <h3>🐾 New pet gear reviews every week</h3>
      <p>From indestructible toys to orthopedic beds — tested by real pets, reviewed by real owners.</p>
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Newsletter signup coming soon!");
        }}
      >
        <input type="email" placeholder="your@email.com" required />
        <button type="submit">Join the pack</button>
      </form>
      <p className="text-xs mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
