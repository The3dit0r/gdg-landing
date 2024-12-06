const base = window.location.origin + "/events/";

type EventObj = {
  name: string;
  location: {
    display: string;
  };
  description: string;
  tags: string[];
  externalUrls: {
    google: string;
  };
  visuals: {
    banner: string;
  };
  time: {
    display: string;
  };
};

const events: EventObj[] = [
  {
    name: "Road to Devfest & Google Developers Certification",
    location: {
      display: "FPT University HCMC, Đường D1, Thành Phố Thủ Đức, 700000 ",
    },

    description: `DevFest GDGoC FPT University HCMC on December 28th and Road to Google Developers Certification is one of the main goals that FPT University student community will achieve to start the journey to become Google Developer Experts in the future. This event marks the beginning of the journey towards that goal.`,
    tags: [
      "Certification Study Group",
      "Community Building",
      "Road to Google Developers Certification",
      "+ 34 more tags",
    ],
    externalUrls: {
      google:
        "https://gdg.community.dev/events/details/google-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam-presents-road-to-devfest-amp-google-developers-certification/",
    },

    visuals: {
      banner: base + "roadtodevfest.webp",
    },

    time: {
      display: "Nov 27, 8:00 AM - Dec 28, 6:00 PM (GMT+7)",
    },
  },

  {
    name: "RAIS Essay Competition Final Ceremony",
    location: {
      display:
        "International School Ho Chi Minh City - Secondary Campus, 1 Xuân Thủy, Quận 2, 10000",
    },
    description: `Our mission is to provide a playground for ideas and discussions about how we can build and use AI in a fair, ethical, and responsible way. The topic of playground today is a Responsible Artificial Intelligence Society Essay (RAISE) Competition that is run by RAIS. In this event series, GDGoC FPTU HCMC will help host one workshop for the RAIS Essay Competition final event for student participants`,
    tags: [
      "AI",
      "Accessibility",
      "Certification Study Group",
      "Gemini",
      "Google Analytics",
      "Google Workspace",
      "Networking",
      "TensorFlow",
      "Vertex AI",
    ],
    externalUrls: {
      google:
        "https://gdg.community.dev/events/details/google-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam-presents-rais-essay-competition-final-ceremony/cohost-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam",
    },

    visuals: {
      banner: base + "raisbanner.webp",
    },

    time: {
      display: "Nov 26, 4:00 - 6:45 PM (GMT+7)",
    },
  },

  {
    name: "🔥🔥 GDGoC FPTU HCMC CORE MEMBERS RECRUITMENT GEN 2.0 🔥🔥",
    location: {
      display:
        "Trường Đại học FPT TP. HCM, Đường D1, Thành Phố Thủ Đức, 700000 ",
    },

    description: `GDGoC FPTU HCMC - Google Developer Group on Campus FPT University HCMC is aiming to become a place to nurture future Google Developer Experts. To build a human resource framework according to the above orientation, GDGoC FPTU is currently recruiting Core Members for the Club.`,
    tags: [],
    externalUrls: {
      google:
        "https://gdg.community.dev/events/details/google-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam-presents-gdgoc-fptu-hcmc-core-members-recruitment-gen-20/",
    },

    visuals: {
      banner: base + "coremm.webp",
    },

    time: {
      display: "Nov 20, 11:45 PM - Dec 8, 11:00 PM (GMT+7)",
    },
  },

  {
    name: "Google Developer Groups on Campus FPT University - HCMC Welcome New Students 2024 - 2025.",
    location: {
      display: "Nhà Văn hóa Sinh viên TP.HCM, Lưu Hữu Phước, Dĩ An, 75300",
    },

    description:
      "FPT University's K20 New Student Welcome Event. Introducing the Club's achievements and invite to become new members of GDGoC FPTU HCMC.",
    tags: ["Accessibility", "Community Building"],
    externalUrls: {
      google:
        "https://gdg.community.dev/events/details/google-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam-presents-google-developer-groups-on-campus-fpt-university-hcmc-welcome-new-students-2024-2025/",
    },

    visuals: {
      banner: base + "gdg-01_SRGJKFw.webp",
    },

    time: {
      display: "Nov 1, 7:00 AM - 6:00 PM (GMT+7)",
    },
  },

  {
    name: "Welcome Google Developer Groups on Campus (GDGoC) FPT University - HCMC, Vietnam  2024 - 2025",
    location: {
      display:
        "Trường Đại học FPT TP. HCM, Đường D1, Thành Phố Thủ Đức, 700000",
    },

    description: `Announcement of renaming "Google Developer Student Club FPT University - Ho Chi Minh City, Vietnam" to "Google Developer Groups on Campus FPT University - HCMC, Vietnam, And introducing the next generation of organizers of GDGoC FPTU - HCMC, Vietnam. Determine the GDGoC FPTU - HCMC's vision, mission, goals, and plans for the 2024-2025 term.`,
    tags: ["Accessibility", "Community Building", "Google Workspace"],
    externalUrls: {
      google:
        "https://gdg.community.dev/events/details/google-gdg-on-campus-fpt-university-ho-chi-minh-city-vietnam-presents-welcome-google-developer-groups-on-campus-gdgoc-fpt-university-hcmc-vietnam-2024-2025/",
    },

    visuals: {
      banner: base + "thefuckisthis.webp",
    },

    time: {
      display: "Oct 26, 5:30 - 7:00 PM (GMT+7)",
    },
  },
];

export { events as Events };
export type { EventObj };
