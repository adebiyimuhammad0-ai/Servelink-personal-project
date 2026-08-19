const posts = [
  {
    id: 1,
    providerId: 1,
    category: "plumbing",

    content:
      "Completed a bathroom plumbing installation today. Clean finishing and reliable fittings for a residential client in Ikeja.",

    media: [
      {
        type: "image",
        url:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      },
    ],

    likes: 84,
    comments: 12,
    shares: 4,
    createdAt: "2h",
    liked: false,
    saved: false,
  },

  {
    id: 2,
    providerId: 3,
    category: "design",

    content:
      "New brand identity project completed for a growing local business. Logo, colour system and social media assets delivered.",

    media: [
      {
        type: "image",
        url:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      },
    ],

    likes: 126,
    comments: 19,
    shares: 8,
    createdAt: "5h",
    liked: false,
    saved: false,
  },
];

export default posts;