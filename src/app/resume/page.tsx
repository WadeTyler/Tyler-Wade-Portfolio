import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Tyler Wade</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Full-Stack Software Engineer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate software engineer with{" "}
        experience building <Highlight>Front-End and Back-End</Highlight> technologies that are performance optimized and good looking.
      </Paragraph>

      <div className="my-4">
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mb-4"
      >
        Education
      </Heading>
        <Paragraph className="">
          <p className="font-semibold">University of Maryland, Global Campus</p>
          <p className="italic">Bachelor of Science in Computer Science; Minor in Web & Digital Design</p>
        </Paragraph>
        <Paragraph className="">
          <p className="font-semibold">College of Southern Maryland</p>
          <p className="italic">Associate of Science in Computer Science</p>
        </Paragraph>
      </div>

      <WorkHistory />
      <TechStack />
    </Container>
  );
}
