const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Condition</p>
        <p>|</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="social-icon flex justify-center items-center">
          <a
            href="https://github.com/Waziri666"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>

        <div className="social-icon flex justify-center items-center">
          <a
            href="https://x.com/waziridev?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/twitter.svg" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>

      <p className="text-white-500">2024 Waziri, All rights reserved.</p>
    </section>
  );
};
export default Footer;
