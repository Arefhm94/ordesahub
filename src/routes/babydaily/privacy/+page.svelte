<script lang="ts">
  import { Shield, Lock, Trash2, Mail, Globe, Eye, UserCheck } from "lucide-svelte";
</script>

<svelte:head>
  <title>Privacy Policy | BabyDaily</title>
  <meta name="description" content="BabyDaily Privacy Policy. Learn how we collect, use, and protect your data." />
</svelte:head>

<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4 max-w-4xl">
    <div class="space-y-4 mb-12">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p class="text-muted-foreground italic">Effective Date: March 29, 2026 &nbsp;·&nbsp; Last Updated: March 29, 2026</p>
    </div>

    <div class="space-y-12 bg-background border rounded-3xl p-8 md:p-12 shadow-sm">

      <!-- Intro banner -->
      <div class="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4 items-start">
        <Shield class="h-6 w-6 text-primary shrink-0 mt-1" />
        <p class="text-sm leading-relaxed">
          This Privacy Policy describes how BabyDaily ("we," "us," or "our") collects, uses, and
          shares information about you when you use the BabyDaily – Tracker &amp; Routine mobile
          application (the "App"). By using the App, you agree to the collection and use of
          information in accordance with this policy. We fully comply with the Apple App Store
          Guidelines, GDPR, and CCPA.
        </p>
      </div>

      <!-- Section 1 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">1. Information We Collect</h2>

        <h3 class="font-semibold text-lg">1.1 Information You Provide Directly</h3>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Account information:</strong> When you create an account we collect your email address and display name, either entered directly or provided by a third-party login provider (Apple or Google).</li>
          <li><strong>Baby profile:</strong> Name and date of birth of the infant(s) you add to the App.</li>
          <li><strong>Activity logs:</strong> Records of activities you log, including type (sleep, feed, diaper, bath, play, medicine, custom), timestamp, duration, and any optional notes you attach.</li>
          <li><strong>Growth measurements:</strong> Weight, height, and head circumference data you enter manually.</li>
          <li><strong>Planner events:</strong> Scheduled events and reminders you create within the App.</li>
          <li><strong>Profile photo:</strong> An optional photo you choose to upload for your baby's profile.</li>
        </ul>

        <h3 class="font-semibold text-lg pt-2">1.2 Information Collected Automatically</h3>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Usage data:</strong> Anonymous, aggregated information about features used, session length, and navigation patterns.</li>
          <li><strong>Device information:</strong> Device type, OS version, and app version, used for compatibility and crash diagnostics.</li>
          <li><strong>Crash reports:</strong> Diagnostic information that does not include your baby's personal information.</li>
        </ul>

        <h3 class="font-semibold text-lg pt-2">1.3 Information from Third Parties</h3>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Sign in with Apple / Google Sign-In:</strong> We receive your name and email address. We never receive your password. Apple may provide a private relay email at your discretion.</li>
          <li><strong>RevenueCat:</strong> When you purchase a subscription, RevenueCat handles the transaction through Apple's in-app purchase system. We receive subscription status only — never your payment card details.</li>
        </ul>

        <h3 class="font-semibold text-lg pt-2">1.4 Location Information</h3>
        <p class="text-muted-foreground leading-relaxed">
          With your permission the App accesses your device's location <strong>once per session</strong> to calculate local sunrise and sunset times for display on the activity clock. Location data is never stored, transmitted, or used for any other purpose, and never leaves your device for this feature.
        </p>
      </section>

      <!-- Section 2 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">2. How We Use Your Information</h2>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Provide and operate the App</strong> — store and display your baby's activity logs, growth data, and planner events.</li>
          <li><strong>Enable partner synchronization</strong> — share your baby's data in real time with partners you explicitly invite by email.</li>
          <li><strong>Generate predictions and insights</strong> — analyze logged patterns to produce sleep and feeding predictions and trend analytics.</li>
          <li><strong>Send notifications</strong> — deliver push notifications for sleep reminders, event reminders, and prediction alerts if you enable them in Settings.</li>
          <li><strong>Process payments</strong> — verify and manage your premium subscription status via RevenueCat and Apple's App Store.</li>
          <li><strong>Improve the App</strong> — use anonymized, aggregated usage data to understand how features are used.</li>
          <li><strong>Ensure security</strong> — detect and prevent fraudulent activity and unauthorized access.</li>
          <li><strong>Respond to support requests</strong> — use your contact information to reply to questions or bug reports.</li>
        </ul>
      </section>

      <!-- Section 3 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 flex items-center gap-2">
          <Lock class="h-5 w-5 text-primary" />
          3. Data Storage, Security, and Protection
        </h2>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Secure Hosting:</strong> Your data is hosted by Supabase, an enterprise-grade, compliant database infrastructure provider.</li>
          <li><strong>Encryption in Transit and at Rest:</strong> All data transmitted between the App and our servers is encrypted using HTTPS/TLS. Data stored in the database is encrypted at rest.</li>
          <li><strong>Row Level Security (RLS):</strong> Database-level RLS policies ensure your data can <strong>only</strong> be read or modified by you, or by a specific user who has actively accepted your invitation to share the profile.</li>
          <li><strong>Secure Token Storage:</strong> Authentication tokens are stored using encrypted on-device secure storage. Passwords are never stored by us.</li>
        </ul>
      </section>

      <!-- Section 4 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">4. How We Share Your Information</h2>
        <p class="font-semibold text-foreground">We do not, and will never, sell your personal data or your baby's data to advertisers, data brokers, or any other third parties.</p>
        <p class="text-muted-foreground">We share limited data only with the following trusted providers:</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-muted-foreground border rounded-xl overflow-hidden">
            <thead class="bg-muted/50 text-foreground font-semibold">
              <tr>
                <th class="text-left p-3">Recipient</th>
                <th class="text-left p-3">Purpose</th>
                <th class="text-left p-3">Data Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t">
                <td class="p-3">Your invited partner/caregiver</td>
                <td class="p-3">Real-time activity sync</td>
                <td class="p-3">Baby profile, activity logs, growth data</td>
              </tr>
              <tr class="border-t bg-muted/20">
                <td class="p-3">Supabase</td>
                <td class="p-3">Cloud storage &amp; real-time sync</td>
                <td class="p-3">All app data (encrypted)</td>
              </tr>
              <tr class="border-t">
                <td class="p-3">RevenueCat</td>
                <td class="p-3">Subscription management</td>
                <td class="p-3">User ID, subscription status</td>
              </tr>
              <tr class="border-t bg-muted/20">
                <td class="p-3">Apple / Google</td>
                <td class="p-3">Authentication</td>
                <td class="p-3">Email, name (sign-in only)</td>
              </tr>
              <tr class="border-t">
                <td class="p-3">Law enforcement</td>
                <td class="p-3">Legal obligation</td>
                <td class="p-3">Only if required by valid legal process</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section 5 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">5. Data Retention</h2>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Active account:</strong> We retain your data for as long as your account is active.</li>
          <li><strong>Account deletion:</strong> When you delete your account (Settings → Account → Delete Account), all associated data is permanently deleted from our servers within 30 days.</li>
          <li><strong>Local cache:</strong> The App stores a local cache on your device. This is cleared when you delete the App or log out.</li>
          <li><strong>Anonymized analytics:</strong> Aggregated, anonymized statistics that cannot be linked back to you may be retained indefinitely for product improvement.</li>
        </ul>
      </section>

      <!-- Section 6 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 flex items-center gap-2">
          <UserCheck class="h-5 w-5 text-primary" />
          6. Your Rights and Choices
        </h2>
        <ul class="space-y-3 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information directly within the App or by contacting us.</li>
          <li><strong>Deletion:</strong> Delete your account and all associated data through Settings → Account → Delete Account, or by contacting us.</li>
          <li><strong>Portability:</strong> Export your activity log data in CSV or PDF format from the Insights tab.</li>
          <li><strong>Withdraw consent:</strong> Revoke location or notification permissions at any time through your device's Settings app.</li>
          <li><strong>Opt out of analytics:</strong> Contact us to request exclusion from anonymized usage analytics.</li>
        </ul>
        <div class="space-y-3 pt-2">
          <p class="text-sm text-muted-foreground"><strong class="text-foreground">California residents (CCPA):</strong> You have the right to know what personal information we collect, to delete it, and to opt out of its sale. We do not sell personal information.</p>
          <p class="text-sm text-muted-foreground"><strong class="text-foreground">European residents (GDPR):</strong> You have the right to access, rectify, erase, restrict, and port your data, and to lodge a complaint with your local data protection authority. Our legal basis for processing is performance of the contract (providing the App service) and, for optional features such as location and notifications, your explicit consent.</p>
        </div>
      </section>

      <!-- Section 7 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">7. Children's Privacy</h2>
        <p class="text-muted-foreground leading-relaxed">
          The App is designed for use <strong>by parents and caregivers</strong> — not by children. The App records information <em>about</em> infants as entered by their parent or guardian, but the user-facing account system is intended for adults only. We do not knowingly collect personal information directly from children under the age of 13. If you believe a child under 13 has created an account without parental consent, please contact us immediately and we will delete the account.
        </p>
      </section>

      <!-- Section 8 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">8. Third-Party Services</h2>
        <p class="text-muted-foreground">The App integrates the following third-party services, each governed by their own privacy policies:</p>
        <ul class="space-y-2 list-disc pl-6 text-sm text-muted-foreground">
          <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Supabase Privacy Policy</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Google Privacy Policy</a></li>
          <li><a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Apple Privacy Policy</a></li>
          <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">RevenueCat Privacy Policy</a></li>
        </ul>
      </section>

      <!-- Section 9 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 flex items-center gap-2">
          <Trash2 class="h-5 w-5 text-destructive" />
          9. Account Deletion
        </h2>
        <p class="text-muted-foreground leading-relaxed">
          You own your data and maintain total control over it. You can delete any individual log or event directly from within the App at any time. For full account deletion, navigate to <strong>Settings → Account → Delete Account</strong>. All associated data — including baby profiles, activity logs, growth measurements, planner events, and media — will be permanently erased within 30 days.
        </p>
      </section>

      <!-- Section 10 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2">10. Changes to This Policy</h2>
        <p class="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. When we make material changes we will notify you through a notice within the App or by email prior to the change taking effect. The "Last Updated" date at the top reflects the most recent revision. Continued use of the App after changes take effect constitutes your acceptance.
        </p>
      </section>

      <!-- Contact -->
      <section class="space-y-4 pt-8 border-t">
        <h2 class="text-2xl font-bold">11. Contact Us</h2>
        <p class="text-muted-foreground">
          If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
        </p>
        <div class="flex items-center gap-2 p-4 rounded-xl bg-muted/50 w-fit">
          <Mail class="h-5 w-5 text-primary" />
          <a href="mailto:arefsn89@gmail.com" class="font-mono font-semibold hover:text-primary transition-colors">arefsn89@gmail.com</a>
        </div>
        <p class="text-sm text-muted-foreground">OrdesaHub · arefsn89@gmail.com</p>
      </section>

    </div>
  </div>
</section>
