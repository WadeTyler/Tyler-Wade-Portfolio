import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Tyler</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Full-Stack Software Engineer</Highlight> that loves{" "}
        building products and web apps that can impact
        millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate software engineer with{" "}
        experience in developing high performance <Highlight>Front-End and Back-End</Highlight> applications, delivering seamless functionality paired with visually engaging interfaces.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
