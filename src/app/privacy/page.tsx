import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PureWay OC',
  description: 'PureWay OC privacy policy including SMS/text messaging data practices.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="font-heading text-4xl text-[var(--color-secondary)] mb-3">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-[var(--color-text-muted)] mb-12">
          Last updated: March 16, 2026
        </p>

        <div className="prose-policy space-y-8 font-body text-[var(--color-text-secondary)] leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              1. Introduction
            </h2>
            <p>
              PureWay OC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website, use our services,
              or communicate with us, including via SMS/text messaging. By using our services you
              agree to the practices described in this policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following information when you request a free water test, fill out a contact form, or otherwise engage with us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (including mobile)</li>
              <li>Mailing address and zip code</li>
              <li>Service interest and water concerns</li>
              <li>How you heard about us</li>
            </ul>
            <p className="mt-4 font-semibold">SMS/Text Messaging Data:</p>
            <p>
              When you opt in to receive text messages from us, we collect your mobile phone number,
              the date and time of your consent, and a record of the opt-in method (web form or
              keyword). No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our water filtration services</li>
              <li>To respond to your inquiries and schedule appointments</li>
              <li>To send appointment reminders and service updates</li>
              <li>To send promotional offers related to our water treatment products and services (only with your consent)</li>
              <li>To communicate water quality alerts relevant to your area</li>
            </ul>
            <p className="mt-3">
              <span className="font-semibold">SMS Use:</span> We use your mobile phone number solely
              for sending updates, promotions, appointment reminders, and service-related
              notifications related to our water treatment products and services.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              4. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal information,
              including encryption and secure storage. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as you remain subscribed to our
              services or text messaging program. You may request deletion of your data at any time
              by contacting us at{' '}
              <a href="mailto:purewayoc@gmail.com" className="text-[var(--color-primary)] hover:underline">
                purewayoc@gmail.com
              </a>.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              6. Information Sharing
            </h2>
            <p className="mb-3">
              Mobile numbers and opt-in consent data will NOT be shared with any third parties or
              affiliates for marketing purposes.
            </p>
            <p className="mb-3">
              We may share your information with subcontractors or service providers who assist in
              our operations, under strict confidentiality agreements, solely for operational
              purposes.
            </p>
            <p>
              All text-messaging originator opt-in records and associated consent are kept private
              and will never be transferred to third-party marketers.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              7. Your Rights &mdash; SMS Opt-Out
            </h2>
            <p className="mb-3">You may opt out of receiving text messages at any time by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Replying <span className="font-semibold">STOP</span>, STOPALL, UNSUBSCRIBE, CANCEL,
                END, or QUIT to any text message you receive from us
              </li>
              <li>
                Emailing us at{' '}
                <a href="mailto:purewayoc@gmail.com" className="text-[var(--color-primary)] hover:underline">
                  purewayoc@gmail.com
                </a>
              </li>
              <li>
                Calling us at{' '}
                <a href="tel:9499989443" className="text-[var(--color-primary)] hover:underline">
                  (949) 998-9443
                </a>
              </li>
            </ul>
            <p className="mt-3">
              After opting out you will receive one final confirmation message. No further texts
              will be sent unless you re-subscribe.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              8. California Privacy Rights (CCPA)
            </h2>
            <p>
              If you are a California resident, you have the right to know what personal information
              we collect, request its deletion, and opt out of its sale. We do not sell your personal
              information. To exercise your rights, contact us at{' '}
              <a href="mailto:purewayoc@gmail.com" className="text-[var(--color-primary)] hover:underline">
                purewayoc@gmail.com
              </a>.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              10. Cookies
            </h2>
            <p className="mb-3">Our website may use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Essential:</span> Required for basic website functionality</li>
              <li><span className="font-semibold">Analytics:</span> Help us understand how visitors interact with the website</li>
              <li><span className="font-semibold">Functional:</span> Remember your preferences and settings</li>
              <li><span className="font-semibold">Marketing:</span> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date. Your continued use of our services after any
              changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-heading text-xl text-[var(--color-secondary)] mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
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
            href="/terms"
            className="font-body text-sm text-[var(--color-primary)] hover:underline"
          >
            View Terms of Service
          </Link>
        </div>
      </div>
    </main>
  )
}
