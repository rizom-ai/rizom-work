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
        id: "bridge",
        template: "landing-page:bridge",
        content: {},
      },
      {
        id: "ownership",
        template: "landing-page:ownership",
        content: {
          kicker: "Who We Are",
          headline: "A commercial practice with a non-profit research arm.",
          cards: [
            {
              badge: "JH",
              title: "Jan Hein Hoogstad — founder",
              body:
                "Philosopher and ecosystem architect. Founded rizom.work as the commercial face so the research at rizom.foundation could stay independent and openly funded. The two sides feed each other.",
            },
            {
              badge: "N",
              title: "Natalie — workshop lead",
              body:
                "Runs the TMS sessions, owns delivery, and makes sure every workshop produces something a team can act on the same week.",
            },
            {
              badge: "+",
              title: "A network of practitioners",
              body:
                "Co-facilitators, researchers, and operators across Amsterdam, Rotterdam, and Berlin.",
            },
          ],
        },
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
              title: "The workshops",
              body:
                "TMS workshops and team coordination practice. The commercial face that funds the research.",
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
