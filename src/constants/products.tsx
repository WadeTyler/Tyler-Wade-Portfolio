import guidedGospelThumbnail from "/public/images/products/guided-thumbnail.png";
import guidedGospelImage1 from "/public/images/products/guided1.png";
import guidedGospelImage2 from "/public/images/products/guided2.png";
import guidedGospelImage3 from "/public/images/products/guided3.png";

import haydenThumbnail from "/public/images/products/hayden-thumbnail.png";
import haydenImage1 from "/public/images/products/hayden1.png";
import haydenImage2 from "/public/images/products/hayden2.png";
import haydenImage3 from "/public/images/products/hayden3.png";


export const products = [
  {
    href: "https://guidedgospel.net",
    title: "Guided Gospel",
    description:
      "A Christian AI Based Resource Hub that provides users with Faith-Based guidance. AI ChatBot, Christian Social Media, Mobile Bible all in one!",
    thumbnail: guidedGospelThumbnail,
    images: [guidedGospelImage1, guidedGospelImage2, guidedGospelImage3],
    stack: ["TypeScript", "React", "Node", "Express", "MySQL", "Tailwind"],
    slug: "guidedgospel",
    content: (
      <div>
        <p>
        Guided Gospel is your AI companion for exploring the Christian Bible. Whether you&apos;re seeking answers to life&apos;s questions or simply looking to deepen your understanding of Scripture, Guided is here to help you with biblical insights, any time of the day.{" "}
        </p>
        <p>
          With Faith Guidance at your fingertips, Get answers to your biggest questions within seconds. Guided delivers relevant Bible verses and interpretations instantly, helping you find clarity and guidance without delay. Receive responses crafted to your specific queries and spiritual needs, ensuring that the guidance you get is meaningful and relevant.
        </p>{" "}
        <p>
          Share your testimony to others with Guided Together, coming to release soon!
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://haydenhester.tylerwade.net/",
    title: "Hayden Hester - Musician",
    description:
      "A Frontend website for the musical artist, Hayden Hester.",
    thumbnail: haydenThumbnail,
    images: [haydenImage1, haydenImage2, haydenImage3],
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "haydenhester",
    content: (
      <div>
        <p>
          This project serves as an example design for the artist Hayden Hester. <em>The music playback functionality is not intended to function</em>.{" "}
        </p>
        <p>
          A rising star from the heart of Nashville, Hayden Hester combines soulful melodies with raw, heartfelt lyrics that captivate audiences everywhere. With a style rooted in pop and infused with modern flair, Hayden’s music tells stories of life, love, and resilience. Whether on stage or in the studio, Hayden’s passion for music shines through every note, making him one to watch in the music scene.
        </p>{" "}
      </div>
    ),
  },
];
