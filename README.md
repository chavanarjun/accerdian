# Accredian Enterprise Clone 🚀

A highly responsive, production-ready partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page. Built as a technical assignment.

![Hero Section Preview](./screenshot.png)

## 🎯 Approach & Architecture

The goal was to build a clean, structural, and semantic UI that perfectly captures the enterprise feel of the original website without blindly copying code. 

I adopted a **Component-Driven Architecture** using Next.js App Router:
1. **Global Styles**: Leveraged Tailwind CSS augmented with custom CSS variables for design tokens (gradients, brand colors) in `globals.css`.
2. **Modularity**: Split the massive landing page into 11+ distinct, single-responsibility components (`Hero`, `Stats`, `CATFramework`, etc.).
3. **Interactivity**: Added smooth scrolling, viewport-triggered animations (using `IntersectionObserver` in the `Stats` component), and a CSS-based infinite marquee for the `Clients` component.
4. **Lead Capture (⭐ Bonus)**: Built a fully functional `EnquireModal` that POSTs data to a Next.js API Route (`/api/enquire/route.ts`). For this demo, submissions append to a local JSON file to simulate database storage without external dependencies.

## 🤖 AI Usage Explanation
The AI tool that i used during development was claude i use it for code generation of the ui components and used it in css i also used ai to make the apis and make the readme file

## 🛠️ How to Run Locally

### Prerequisites
- Node.js 18.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd accerdian
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📈 Future Improvements (With More Time)

If given more than 48 hours, I would improve the following:
1. **CMS Integration**: Connect the content (programs, domains, FAQs) to Sanity.io or Contentful so the marketing team can edit content without touching code.
2. **Database & CRM**: Swap the local JSON file API approach with a real database (PostgreSQL via Prisma) and pipe successful enquiries directly into Salesforce or HubSpot.
3. **Real Assets**: Swap the text-fallback firm logos and emojis with high-resolution vector SVGs.
4. **A/B Testing Structure**: Implement framework hooks for Optimizely or VWO testing on the Hero CTA and Form fields.
5. **i18n Support**: Add multi-language routing for global enterprise reach.
