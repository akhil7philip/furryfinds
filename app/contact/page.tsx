import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Furry Finds for questions, feedback, partnerships, or media inquiries.',
  alternates: {
    canonical: '/contact/',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d3436] tracking-tight mb-4">
        Contact Us
      </h1>
      <p className="text-[#636e72] mb-8">
        Have a question about pet products, want to submit something for review, or have a partnership idea? We&apos;d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#fff5e6] border border-[#ffe0b2] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#2d6a4f] mb-2">General Inquiries</h2>
          <p className="text-[#636e72] text-sm mb-4">
            For questions about our reviews, recommendations, or site feedback.
          </p>
          <a
            href="mailto:hello@furryfinds.club"
            className="text-[#2d6a4f] hover:text-[#1b4332] font-medium"
          >
            hello@furryfinds.club
          </a>
        </div>

        <div className="bg-[#fff5e6] border border-[#ffe0b2] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#2d6a4f] mb-2">Partnerships</h2>
          <p className="text-[#636e72] text-sm mb-4">
            For brand collaborations, product testing requests, or affiliate partnerships.
          </p>
          <a
            href="mailto:partners@furryfinds.club"
            className="text-[#2d6a4f] hover:text-[#1b4332] font-medium"
          >
            partners@furryfinds.club
          </a>
        </div>

        <div className="bg-[#fff5e6] border border-[#ffe0b2] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#2d6a4f] mb-2">Media</h2>
          <p className="text-[#636e72] text-sm mb-4">
            For press inquiries, interview requests, or media kit requests.
          </p>
          <a
            href="mailto:media@furryfinds.club"
            className="text-[#2d6a4f] hover:text-[#1b4332] font-medium"
          >
            media@furryfinds.club
          </a>
        </div>

        <div className="bg-[#fff5e6] border border-[#ffe0b2] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#2d6a4f] mb-2">Social</h2>
          <p className="text-[#636e72] text-sm mb-4">
            Follow us for daily pet gear finds and behind-the-scenes testing.
          </p>
          <a
            href="https://instagram.com/FurryFindsReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d6a4f] hover:text-[#1b4332] font-medium"
          >
            @FurryFindsReviews on Instagram
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#2d3436] mb-4">Response Time</h2>
        <p className="text-[#636e72]">
          We aim to respond to all inquiries within 48 hours during weekdays. For urgent
          partnership or media requests, please mention &quot;URGENT&quot; in your subject line.
        </p>
      </div>
    </div>
  )
}