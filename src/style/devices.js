const sizes = {
  mobile: "320px",
  tablet: "460px",
  laptop: "768px",
  desktop: "1024px",
  desktopL: "1440px",
  desktopXL: "2560px",
};

const device = {
  /** Mobile => `320px` */
  mobile: `min-width: ${sizes.mobile}`,
  /** Tablet => `460px` */
  tablet: `min-width: ${sizes.tablet}`,
  /** Laptop => `768px` */
  laptop: `min-width: ${sizes.laptop}`,
  /** Desktop => `1024px` */
  desktop: `min-width: ${sizes.desktop}`,
  /** Desktop Large => `1440px` */
  desktopL: `min-width: ${sizes.desktopL}`,
  /** Desktop Extra Large => `2560px` */
  desktopXL: `min-width: ${sizes.desktopXL}`,
};

export default device;
