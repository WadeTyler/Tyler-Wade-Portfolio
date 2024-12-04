import guidedGospelThumbnail from "/public/images/guidedThumbnail.png";
import guidedGospelImage1 from "/public/images/guidedImage1.png";
import guidedGospelImage2 from "/public/images/guidedImage2.png";


export const products = [
  {
    href: "https://guidedgospel.net",
    title: "Guided Gospel",
    description:
      "A Christian AI Based Resource Hub that provides users with Faith-Based guidance.",
    thumbnail: guidedGospelThumbnail,
    images: [guidedGospelImage1, guidedGospelThumbnail, guidedGospelImage2],
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
      </div>
    ),
  },
];
