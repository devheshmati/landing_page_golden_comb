<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <main
    class="page min-h-screen w-full font-primary bg-hive-card text-cream px-5 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24 lg:py-20"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Top Back Link -->
      <div>
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-honey hover:text-honey-glow transition-colors duration-300"
        >
          <span
            aria-hidden="true"
            class="transition-transform duration-300 group-hover:-translate-x-1"
          >
            &larr;
          </span>
          <span>Return To Home</span>
        </NuxtLink>
      </div>

      <!-- Contact Notice Callout -->
      <div
        class="bg-hive-dark mt-4 p-5 sm:p-8 lg:p-10 flex flex-col gap-3 sm:gap-4 text-sm sm:text-base leading-relaxed text-cream/80 rounded-card border border-honey/15 shadow-card"
      >
        <p>
          For any questions, concerns, or requests related to this Privacy Policy
          or the handling of your information, please visit the
          <NuxtLink
            to="/contact"
            class="font-semibold text-honey hover:text-honey-glow underline underline-offset-4 transition-colors duration-300"
          >
            Contact page</NuxtLink
          >.
        </p>

        <p>
          Please do not send privacy-related requests to any other address
          displayed on this website. The Contact page is the designated channel
          for all privacy inquiries.
        </p>
      </div>

      <!-- Page Title -->
      <header class="mt-12 sm:mt-16 lg:mt-20 border-b border-white/10 pb-6">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
        >
          Privacy Policy
        </h1>
        <div
          class="mt-2.5 text-xs sm:text-sm text-muted flex flex-wrap items-center gap-1.5"
        >
          <span>Last updated:</span>
          <time datetime="2026-11-04" class="text-honey-light/80 font-medium">
            4 November 2026
          </time>
        </div>
      </header>

      <!-- Policy Sections -->
      <div class="divide-y divide-white/10 text-sm sm:text-base leading-relaxed text-cream/80">
        <!-- Section 1 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Introduction: About This Website
          </h2>
          <div class="mt-3 sm:mt-4 space-y-4 text-left sm:text-justify">
            <p>
              Golden Comb is a demonstration website designed to represent a bee
              farm business. An independent portfolio project by
              <strong class="text-honey-glow font-semibold">Reza Heshmati</strong>
              (online alias:
              <strong class="text-honey-glow font-semibold">devheshmati</strong>)
              for resume and professional showcase purposes.
            </p>
            <p>
              This website does not represent an active commercial enterprise.
              Any products, services, orders, or bookings displayed here are
              simulated for demonstration. No real commercial transactions are
              processed, and no personal data is collected for commercial gain.
            </p>
            <p>
              This Privacy Policy explains how information is handled when you
              browse this website, submit a contact form, or interact with any
              demonstration features. It applies only to this website and not to
              any third-party platforms linked from it.
            </p>
            <p>
              If you have questions about this policy or wish to exercise any
              privacy-related right, please use the Contact page to get in
              touch.
            </p>
          </div>
        </section>

        <!-- Section 2 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Information We Collect
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              We may collect two types of information through this website:
            </p>

            <h3 class="text-honey-light font-bold text-base sm:text-lg mt-5">
              Information you voluntarily provide
            </h3>
            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Your name, email address, and phone number when you submit the
                contact form.
              </li>
              <li>
                Your name, email address, phone number, and shipping address when
                you place a simulated order.
              </li>
              <li>
                Any message or special instructions you include in a contact form
                or order note.
              </li>
            </ul>

            <h3 class="text-honey-light font-bold text-base sm:text-lg mt-6">
              Information collected automatically
            </h3>
            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Browser type, device type, operating system, and IP address.
              </li>
              <li>
                Pages visited, links clicked, and approximate time spent on the
                site (if analytics tools are used).
              </li>
            </ul>

            <h3 class="text-honey-light font-bold text-base sm:text-lg mt-6">
              Payment information
            </h3>
            <p class="mt-2">
              This website does not process real payments. If a checkout
              demonstration is included, payment fields are simulated and no
              real card numbers or bank details are stored or transmitted.
            </p>
          </div>
        </section>

        <!-- Section 3 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            How We Use Your Information
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              Information collected through this website is used only for the
              following purposes:
            </p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Responding to inquiries submitted through the contact form.
              </li>
              <li>
                Simulating order processing for demonstration purposes.
              </li>
              <li>
                Managing demonstration bookings for hive visits or workshops, if
                such a feature is included.
              </li>
              <li>
                Improving the website by understanding how visitors interact
                with its pages.
              </li>
              <li>
                Sending optional updates (such as a demonstration newsletter)
                only if you explicitly opt in.
              </li>
            </ul>

            <p class="mt-4">
              We do not use your information for automated decision-making,
              profiling, or targeted advertising.
            </p>
          </div>
        </section>

        <!-- Section 4 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Sharing Your Information
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              We do not sell, rent, or trade your personal information.
              Information may be shared only in the following limited
              circumstances:
            </p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                With service providers that support the operation of this
                website (for example, hosting providers, email delivery
                services, or privacy-friendly analytics tools), strictly for
                the purposes described in this policy.
              </li>
              <li>
                With competent authorities if required by applicable law or a
                valid legal request.
              </li>
            </ul>

            <p class="mt-4">
              Because this is a demonstration website, the scope of any
              third-party sharing is minimal and limited to what is necessary
              for the technical operation of the site.
            </p>
          </div>
        </section>

        <!-- Section 5 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Cookies and Similar Technologies
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              This website may use cookies and similar technologies for the
              following purposes:
            </p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Essential cookies required for the website to function properly
                (for example, remembering form state or session preferences).
              </li>
              <li>
                Analytics cookies (if enabled) to collect anonymized information
                about how visitors use the site, such as page views and
                navigation paths.
              </li>
            </ul>

            <p class="mt-4">
              You can disable or delete cookies through your browser settings.
              However, disabling essential cookies may affect how certain parts
              of the website function.
            </p>
          </div>
        </section>

        <!-- Section 6 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Data Security
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              Reasonable technical and organizational measures are used to
              protect information submitted through this website, including:
            </p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>Secure HTTPS connections for data transmission.</li>
              <li>
                Restricted access to any stored form submissions or
                demonstration order data.
              </li>
              <li>
                No unnecessary retention of personal information beyond the
                purposes described in this policy.
              </li>
            </ul>

            <p class="mt-4">
              Please note that no method of transmission over the internet is
              completely secure, and absolute security cannot be guaranteed.
            </p>
          </div>
        </section>

        <!-- Section 7 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Data Retention
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              Information is retained only for as long as necessary for the
              purposes described in this policy:
            </p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Contact form submissions: retained for up to 12 months after the
                inquiry is resolved, unless a longer period is required for
                demonstration or record-keeping purposes.
              </li>
              <li>
                Simulated order information: retained for the duration of the
                demonstration project or until no longer needed for showcase
                purposes.
              </li>
              <li>
                Newsletter subscriptions (if applicable): retained until you
                unsubscribe or request removal.
              </li>
            </ul>
          </div>
        </section>

        <!-- Section 8 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Your Privacy Rights
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>Depending on your jurisdiction, you may have the right to:</p>

            <ul class="list-disc pl-5 sm:pl-7 mt-2.5 space-y-2">
              <li>
                Access the personal information we hold about you.
              </li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>
                Request deletion of your information, subject to any legal
                retention obligations.
              </li>
              <li>
                Withdraw consent for optional communications (such as a
                newsletter) at any time.
              </li>
            </ul>
          </div>
        </section>

        <!-- Section 9 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Bee Farm–Specific Disclaimers
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <h3 class="text-honey-light font-bold text-base sm:text-lg mt-4">
              About our products
            </h3>
            <p class="mt-2">
              Golden Comb is a demonstration project. Any honey, beeswax,
              pollen, or other bee-related products shown on this website are
              presented for illustrative purposes only. They are not intended
              for real purchase or consumption. If real products were offered,
              customers would be responsible for reviewing ingredient and
              allergen information before use.
            </p>

            <h3 class="text-honey-light font-bold text-base sm:text-lg mt-6">
              About hive visits and workshops
            </h3>
            <p class="mt-2">
              Any hive visit, apiary tour, or beekeeping workshop described on
              this website is simulated. In a real setting, visiting a bee farm
              may involve exposure to bees, natural terrain, and potential
              allergens. Visitors would be expected to follow all safety
              instructions provided by the farm and to acknowledge the inherent
              risks associated with outdoor and apiary environments.
            </p>
          </div>
        </section>

        <!-- Section 10 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Links to Other Websites
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              This website may contain links to external platforms (for example,
              social media or portfolio pages). This Privacy Policy applies only
              to
              <strong class="text-honey-glow font-semibold">Golden Comb</strong>.
              Once you leave this website, the privacy policies of the
              destination sites apply, and we are not responsible for their
              content or data practices.
            </p>
          </div>
        </section>

        <!-- Section 11 -->
        <section class="py-8 sm:py-10">
          <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-white">
            Changes to This Policy
          </h2>
          <div class="mt-3 sm:mt-4 text-left sm:text-justify">
            <p>
              This Privacy Policy may be updated from time to time to reflect
              changes in the website or applicable practices. The “Last updated”
              date at the top of this page will be revised accordingly.
              Continued use of the website after an update constitutes
              acceptance of the revised policy.
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
