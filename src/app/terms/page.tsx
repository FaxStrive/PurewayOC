import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | PureWay OC',
  description: 'PureWay OC terms of service including SMS/text messaging terms and conditions.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="font-heading text-4xl text-[var(--color-secondary)] mb-3">
          Terms of Service
        </h1>
        <p className="font-body text-sm text-[var(--color-text-muted)] mb-12">
          Last updated: March 16, 2026
        </p>

        <div className="prose-terms space-y-8 font-body text-[var(--color-text-secondary)] leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the PureWay OC website and services, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our
              website or services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              2. Services
            </h2>
            <p>
              PureWay OC provides residential and commercial water filtration products and services
              in Orange County, California. Our services include whole-house filtration, reverse
              osmosis systems, water softeners, well water filtration, commercial systems,
              maintenance, and free water testing.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              3. Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not
              infringe on the rights of others. You may not attempt to gain unauthorized access to
              any part of the website or its systems.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              4. SMS/Text Messaging Terms
            </h2>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.1 Program Description
            </h3>
            <p>
              By opting in to our text messaging program, you consent to receive text messages from
              PureWay OC including: appointment confirmations, service updates, promotional offers,
              water quality alerts, and follow-up messages related to our water treatment products
              and services.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.2 Message Frequency
            </h3>
            <p>
              You may receive approximately 4&ndash;8 messages per month. Message frequency may vary
              depending on your account activity and service schedule.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.3 Opt-Out
            </h3>
            <p>
              You may opt out at any time by texting <span className="font-semibold">STOP</span> to{' '}
              <a href="tel:9499989443" className="text-[var(--color-primary)] hover:underline">
                (949) 998-9443
              </a>. You may also reply with: STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT. After
              opting out, you will receive one final confirmation message. No further messages will
              be sent unless you re-subscribe.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.4 Help
            </h3>
            <p>
              For help, reply <span className="font-semibold">HELP</span> to any text message or contact us at{' '}
              <a href="mailto:purewayoc@gmail.com" className="text-[var(--color-primary)] hover:underline">
                purewayoc@gmail.com
              </a>{' '}
              or{' '}
              <a href="tel:9499989443" className="text-[var(--color-primary)] hover:underline">
                (949) 998-9443
              </a>.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.5 Message and Data Rates
            </h3>
            <p>
              Message and data rates may apply. Please contact your wireless carrier for details
              about your messaging plan.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.6 Carrier Liability
            </h3>
            <p>
              Carriers are not liable for delayed or undelivered messages.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.7 Supported Carriers
            </h3>
            <p>
              Our SMS program is compatible with most major U.S. carriers including AT&amp;T, Verizon
              Wireless, T-Mobile, Sprint, U.S. Cellular, Cricket Wireless, MetroPCS, Boost Mobile,
              Virgin Mobile, and others.
            </p>

            <h3 className="font-heading text-lg text-[var(--color-secondary)] mt-5 mb-2">
              4.8 Privacy
            </h3>
            <p>
              Your mobile phone number and opt-in consent data will not be shared with third parties
              for marketing purposes. For full details, see our{' '}
              <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              5. Product and Service Information
            </h2>
            <p>
              We make reasonable efforts to accurately display our products and services. However, we
              do not warrant that descriptions, pricing, or other content is accurate, complete, or
              error-free. We reserve the right to correct errors and update information at any time.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the
              property of PureWay OC or its licensors and is protected by copyright and trademark
              laws. You may not reproduce, distribute, or create derivative works without our written
              consent.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              PureWay OC shall not be liable for any indirect, incidental, special, or consequential
              damages arising from your use of our website or services. Our total liability shall not
              exceed the amount you have paid for our services.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              8. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the
              State of California. Any disputes shall be resolved in the courts of Orange County,
              California.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              9. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Changes will be posted on this
              page with an updated revision date. Your continued use of our website and services
              after changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, contact us at:
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                Email:{' '}
                <a href="mailto:purewayoc@gmail.com" className="text-[var(--color-primary)] hover:underline">
                  purewayoc@gmail.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:9499989443" className="text-[var(--color-primary)] hover:underline">
                  (949) 998-9443
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <Link
            href="/privacy"
            className="font-body text-sm text-[var(--color-primary)] hover:underline"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  )
}
