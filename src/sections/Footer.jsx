import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constents";
const Footer = () => {
  return (
    <footer className="px-10 text-white">
      <div className="flex flex-col items-start gap-5">
        <img src={footerLogo} alt="" width={139} height={29} />
        <p className="font-montserrat text-lg md:max-w-[35%] text-start sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike Store. Find your
          perfect Size in Store get Rewards
        </p>
        <div className="flex justify-start gap-3 ">
          {socialMedia.map((media) => (
            <div
              key={media.alt}
              className="w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1]"
            >
              <img
                src={media.src}
                alt={media.alt}
                className=" "
                width={25}
                height={25}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex max-md:flex-col gap-10">
        {footerLinks.map((section) => (
          <div key={section.title} className="mt-10">
            <h3 className="font-palanquin font-bold text-2xl ">
              {section.title}
            </h3>
            <ul className="mt-5 flex flex-col items-start gap-2 font-montserrat text-xl">
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="leading-normal text-base hover:text-gray-300"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-24 flex justify-between text-white-400 max-md:flex-col max-md:items-center">
        <div className="flex gap-1 font-montserrat text-md cursor-pointer">
          <img src={copyrightSign} alt="copyrightsign" />
          <p>Copyright. All rights reserved</p>
        </div>
        <div className="font-montserrat cursor-pointer">
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
