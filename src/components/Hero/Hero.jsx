import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Bu fırsat kaçmaz  🔥</span>
        <h2>Kişiye özel koleksiyon</h2>
        <a href="/">Şimdi Keşfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
