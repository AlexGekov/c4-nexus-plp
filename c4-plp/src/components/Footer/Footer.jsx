import "./Footer.css";


export default function Footer() {
  return (
    <div className="footer">
      <section className="column">
        <h3>About Us</h3>
        <p>
          Nexus PLP is your one-stop online shop for the latest fashion trends.
          We offer a wide range of clothing, shoes, bags, and accessories for
          men and women. Our mission is to provide high-quality products at
          affordable prices, while delivering exceptional customer service.
        </p>
      </section>
      <section className="column">
        <h3>FAQ</h3>
        <a href="#">Shipping</a>
        <a href="#">Returns & Exchanges</a>
        <a href="#">Payment Methods</a>
        <a href="#">Size Guide</a>
      </section>
      <section className="column">
        <h3>Contact Us</h3>
        <p>Email: support@nexus.plp.com</p>
        <p>Instagram: @nexusplp</p>
        <p>Tiktok: @nexusplp</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Fashion St, Style City, USA</p>
      </section>
    </div>
  );
}
