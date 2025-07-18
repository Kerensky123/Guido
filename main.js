
const products = [
  {
    name: "Rolex Submariner",
    description: "Luxury diving watch in stainless steel.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rolex_Submariner_%28No_Date%29.jpg/800px-Rolex_Submariner_%28No_Date%29.jpg",
    type: "image",
  },
  {
    name: "Hermès Birkin 30",
    description: "Classic Birkin handbag in Togo leather.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hermes_Birkin_Bag.jpg/800px-Hermes_Birkin_Bag.jpg",
    type: "image",
  },
  {
    name: "Cartier Love Bracelet",
    description: "18k gold bracelet with iconic screw motif.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cartier_Love_Bracelet.jpg/800px-Cartier_Love_Bracelet.jpg",
    type: "image",
  },
  {
    name: "Cartier Juste un Clou",
    description: "Nail-shaped bracelet in rose gold.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cartier_Juste_un_Clou_Bracelet.jpg/800px-Cartier_Juste_un_Clou_Bracelet.jpg",
    type: "image",
  },
  {
    name: "Rolex Daytona",
    description: "Chronograph watch with racing heritage.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Rolex_Daytona_116500LN.jpg/800px-Rolex_Daytona_116500LN.jpg",
    type: "image",
  },
  {
    name: "Hermès Kelly 25",
    description: "Elegant handbag in premium leather.",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hermes_Kelly_Bag.jpg/800px-Hermes_Kelly_Bag.jpg",
    type: "image",
  },
  {
    name: "Cartier Diamond Ring",
    description: "Solitaire ring with brilliant-cut diamond.",
    source: "https://cdn.pixabay.com/photo/2016/11/29/02/01/diamond-1866911_1280.jpg",
    type: "image",
  },
  {
    name: "Van Cleef & Arpels Alhambra",
    description: "White mother-of-pearl and gold pendant.",
    source: "https://cdn.pixabay.com/photo/2014/10/23/18/05/pendant-500189_1280.jpg",
    type: "image",
  },
  {
    name: "Luxury Earring Set",
    description: "Gold and sapphire drop earrings.",
    source: "https://cdn.pixabay.com/photo/2016/11/18/16/16/jewelry-1835957_1280.jpg",
    type: "image",
  },
  {
    name: "Cartier Showcase Video",
    description: "Close-up rotating video of a Cartier piece.",
    source: "https://cdn.coverr.co/videos/coverr-luxury-diamond-bracelet-6625/1080p.mp4",
    type: "video",
  },
  {
    name: "Diamond Watch Spin",
    description: "Rotating display of a diamond-encrusted watch.",
    source: "https://cdn.coverr.co/videos/coverr-spinning-watch-4626/1080p.mp4",
    type: "video",
  },
];

document.getElementById('root').innerHTML = `
  <main class='min-h-screen bg-black text-white font-sans'>
    <section class='py-12 text-center'>
      <h1 class='text-5xl font-bold tracking-widest uppercase'>Guido Zenitalia</h1>
      <p class='mt-2 text-gray-400 text-lg'>Exclusive Luxury Collection</p>
    </section>
    <section class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-16'>
      ${products.map(item => `
        <div class='bg-neutral-900 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'>
          ${item.type === 'image'
            ? `<img src='${item.source}' alt='${item.name}' class='w-full h-64 object-cover' />`
            : `<video src='${item.source}' autoplay loop muted playsinline class='w-full h-64 object-cover'></video>`
          }
          <div class='p-4'>
            <h2 class='text-xl font-semibold mb-1'>${item.name}</h2>
            <p class='text-sm text-gray-400'>${item.description}</p>
          </div>
        </div>
      `).join('')}
    </section>
  </main>
`;
