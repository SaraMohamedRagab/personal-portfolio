import { Card, CardContent } from "./ui/card";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactCard
              icon={<Mail className="w-7 h-7" />}
              title="Email"
              content="sara.m.ragab@hotmail.com"
              href="mailto:sara.m.ragab@hotmail.com"
            />
            <ContactCard
              icon={<Linkedin className="w-7 h-7" />}
              title="LinkedIn"
              content="sara-mohamed-903298179"
              href="https://www.linkedin.com/in/sara-mohamed-903298179/"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactCard = ({ icon, title, content, href }: ContactCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 rounded-lg bg-purple-50/70 hover:bg-purple-200/70 transition-colors shadow-sm hover:shadow-md group"
  >
    <div className="bg-primary/20 text-primary p-3 rounded-full mb-4 group-hover:bg-primary/40 group-hover:text-primary-dark transition-colors">
      {icon}
    </div>
    <h3 className="font-semibold text-primary text-lg mb-2">{title}</h3>
    <p className="text-center text-purple-700/90 hover:underline cursor-pointer break-all max-w-xs">
      {content}
    </p>
  </a>
);
