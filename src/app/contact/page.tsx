import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tyler Wade - Software Engineer",
  description:
    "Tyler Wade is Software Engineer that loves building products and web apps that can impact millions of lives.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-2xl">
        Reach out to me over email or fill up this contact form.{" "} You can contact me via email at <Highlight>contact@tylerwade.net</Highlight>
      </Paragraph>
      <Contact />
    </Container>
  );
}
