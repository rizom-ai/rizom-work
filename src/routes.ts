export const workRoutes = [
  {
    id: "home",
    path: "/",
    layout: "default",
    navigation: {
      show: false,
      slot: "secondary",
      priority: 10,
    },
    sections: [
      {
        id: "hero",
        template: "landing-page:hero",
        content: {},
      },
      {
        id: "problem",
        template: "landing-page:problem",
        content: {},
      },
      {
        id: "workshop",
        template: "landing-page:workshop",
        content: {},
      },
      {
        id: "credibility",
        template: "landing-page:credibility",
        content: {},
      },
      {
        id: "personas",
        template: "landing-page:personas",
        content: {},
      },
      {
        id: "proof",
        template: "landing-page:proof",
        content: {},
      },
      {
        id: "ownership",
        template: "landing-page:ownership",
        content: {},
      },
      {
        id: "mission",
        template: "landing-page:closer",
        content: {},
      },
      {
        id: "ecosystem",
        template: "landing-page:ecosystem",
        content: {
          eyebrow: "The Ecosystem",
          headline: "One ecosystem. The platform, the vision, the network.",
          cards: [
            {
              suffix: "work",
              title: "The consultancy",
              body:
                "Organizational consultancy and team coordination practice. The commercial face that funds the research.",
              linkLabel: "You are here",
              linkHref: "/",
            },
            {
              suffix: "foundation",
              title: "The research",
              body:
                "Essays, events, and public infrastructure. The non-profit research arm where the ideas come from.",
              linkLabel: "Read the manifesto →",
              linkHref: "https://rizom.foundation",
            },
            {
              suffix: "ai",
              title: "The platform",
              body:
                "Open-source AI agents built from your own knowledge — the technical layer behind the coordination methodology.",
              linkLabel: "See the platform →",
              linkHref: "https://rizom.ai",
            },
          ],
        },
      },
    ],
  },
];
