import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  return (
    <main className="main-contact">
      <div className="rounded-square">
        <h1 className="mptext">talk to me</h1>
        <ul className="hplist" style={{ marginBottom: "30px" }}>
          <li className="btext">
            <a href="https://www.linkedin.com/in/tyjkim/">linkedin</a>
          </li>
          <li className="btext">
            <a href="mailto:tylerjsook@gmail.com">tylerjsook@gmail.com</a>
          </li>
        </ul>
        <ContactForm />
      </div>
    </main>
  );
}
