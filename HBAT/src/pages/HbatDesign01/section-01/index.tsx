import useWindowSize from '@rehooks/window-size';
import { gsap } from "gsap/all";
import { useEffect, useRef, useState } from 'react';


export function Section01(props) {

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".text1", { y: 50, duration: 3, opacity: 0, ease: "power3.inOut" });

  }, [])

  const bgRef: any = useRef(null);
  const isSmall = useWindowSize().innerWidth < 900;
  // get height of background image
  const [bgHeight, setBgHeight] = useState(0);

  function setSectionHeightOfBackground() {
    const bgHeight = bgRef?.current?.clientHeight;
    if (bgHeight) {
      setBgHeight(bgHeight + 80);
    } else {
      setTimeout(() => {
        setSectionHeightOfBackground();
      }, 50);
    }
  }


  useEffect(() => {
    // sleep for 1 second

    setSectionHeightOfBackground();

  }, [])

  useEffect(() => {
    if (bgRef?.current) {
      window.getComputedStyle(bgRef.current);
      setBgHeight(bgRef.current?.offsetHeight);
    }
  }, [useWindowSize().innerWidth])

  return (

    <>
  <div id="siteWrapper" className="clearfix site-wrapper">
    <div id="floatingCart" className="floating-cart hidden">
      <a href="/cart" className="icon icon--stroke icon--fill icon--cart sqs-custom-cart"><span className="Cart-inner"><svg className="icon icon--cart" viewBox="0 0 31 24">
            <g className="svg-icon cart-icon--odd">
              <circle fill="none" strokeMiterlimit={10} cx="22.5" cy="21.5" r={1} />
              <circle fill="none" strokeMiterlimit={10} cx="9.5" cy="21.5" r={1} />
              <path fill="none" strokeMiterlimit={10} d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13 c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12">
              </path>
            </g>
          </svg></span>
        <div className="legacy-cart icon-cart-quantity">
          <span className="Cart-inner"><span className="sqs-cart-quantity">0</span></span>
        </div>
      </a>
    </div>
    <header data-test="header" id="header" className="black-bold header theme-col--primary" data-controller="Header" data-current-styles="{ &quot;layout&quot;: &quot;navRight&quot;, &quot;action&quot;: { &quot;href&quot;: &quot;/&quot;, &quot;buttonText&quot;: &quot;CONTACT&quot;, &quot;newWindow&quot;: false }, &quot;showSocial&quot;: false, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;menuOverlayAnimation&quot;: &quot;fade&quot;, &quot;cartStyle&quot;: &quot;cart&quot;, &quot;cartText&quot;: &quot;Cart&quot;, &quot;showEmptyCartState&quot;: true, &quot;cartOptions&quot;: { &quot;iconType&quot;: &quot;stroke-1&quot;, &quot;cartBorderShape&quot;: &quot;none&quot;, &quot;cartBorderStyle&quot;: &quot;outline&quot;, &quot;cartBorderThickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 1.0 } }, &quot;showButton&quot;: false, &quot;showCart&quot;: false, &quot;showAccountLogin&quot;: true, &quot;headerStyle&quot;: &quot;dynamic&quot;, &quot;languagePicker&quot;: { &quot;enabled&quot;: true, &quot;iconEnabled&quot;: true, &quot;iconType&quot;: &quot;globe&quot;, &quot;flagShape&quot;: &quot;shiny&quot;, &quot;languageFlags&quot;: [ ] }, &quot;mobileOptions&quot;: { &quot;layout&quot;: &quot;logoLeftNavRight&quot;, &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;, &quot;menuIconOptions&quot;: { &quot;style&quot;: &quot;tripleLineHamburger&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 3.0 } } }, &quot;dynamicOptions&quot;: { &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } } }, &quot;solidOptions&quot;: { &quot;headerOpacity&quot;: { &quot;unit&quot;: &quot;%&quot;, &quot;value&quot;: 100.0 }, &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } }, &quot;dropShadow&quot;: { &quot;enabled&quot;: false, &quot;blur&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 30.0 }, &quot;spread&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 }, &quot;distance&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 } }, &quot;blurBackground&quot;: { &quot;enabled&quot;: false, &quot;blurRadius&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 12.0 } } }, &quot;gradientOptions&quot;: { &quot;gradientType&quot;: &quot;faded&quot;, &quot;headerOpacity&quot;: { &quot;unit&quot;: &quot;%&quot;, &quot;value&quot;: 90.0 }, &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } }, &quot;dropShadow&quot;: { &quot;enabled&quot;: false, &quot;blur&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 30.0 }, &quot;spread&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 }, &quot;distance&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 } }, &quot;blurBackground&quot;: { &quot;enabled&quot;: false, &quot;blurRadius&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 12.0 } } }, &quot;showPromotedElement&quot;: false }" data-section-id="header" data-header-theme="black-bold" data-menu-overlay-theme data-header-style="dynamic" data-language-picker="{ &quot;enabled&quot;: true, &quot;iconEnabled&quot;: true, &quot;iconType&quot;: &quot;globe&quot;, &quot;flagShape&quot;: &quot;shiny&quot;, &quot;languageFlags&quot;: [ ] }" data-first-focusable-element tabIndex={-1} data-controllers-bound="Header">
      <div className="sqs-announcement-bar-dropzone" />
      <div className="header-announcement-bar-wrapper">
        <a href="#page" tabIndex={1} className="header-skip-link sqs-button-element--primary">Skip to Content</a>
        <div className="header-border" data-header-style="dynamic" data-test="header-border" style={{borderWidth: '0px !important'}} />
        <div className="header-dropshadow" data-header-style="dynamic" data-test="header-dropshadow" style={{}} />
        <div className="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-right" style={{padding: 0}} data-test="header-inner">
          {/* Background */}
          <div className="header-background theme-bg--primary" />
          <div className="header-display-desktop" data-content-field="site-title">
            {/* Social */}
            {/* Title and nav wrapper */}
            <div className="header-title-nav-wrapper">
              {/* Title */}
              <div className="header-title preSlide slideIn" data-animation-role="header-element" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0s'}}>
                <div className="header-title-logo">
                  <a href="/" data-animation-role="header-element" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.00545455s'}}><img src="//images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/0404931a-4adf-4306-9db0-e86742a62150/logo_Hbat_logo.png?format=1500w" alt="HBAT" /></a>
                </div>
              </div>{/* Nav */}
              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list">
                    <div className="header-nav-item header-nav-item--collection">
                      <a href="/white-papers" data-animation-role="header-element" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0109091s'}}>White
                        Papers</a>
                    </div>
                    <div className="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                      <a href="/" data-animation-role="header-element" aria-current="page" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0163636s'}}>Home</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>{/* Actions */}
            {/* <div className="header-actions header-actions--right">
              <div className="language-picker language-picker-desktop" id="multilingual-language-picker-desktop">
                <div className="current-language">
                  <span className="icon icon--fill">
                    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 18.833C14.4706 18.833 18.5 14.8036 18.5 9.83301C18.5 4.86244 14.4706 0.833008 9.5 0.833008C4.52944 0.833008 0.5 4.86244 0.5 9.83301C0.5 14.8036 4.52944 18.833 9.5 18.833ZM9.91948 16.5409C9.66958 16.8228 9.52553 16.833 9.5 16.833C9.47447 16.833 9.33042 16.8228 9.08052 16.5409C8.83166 16.2602 8.56185 15.797 8.31501 15.1387C7.9028 14.0395 7.60822 12.5409 7.52435 10.833H11.4757C11.3918 12.5409 11.0972 14.0395 10.685 15.1387C10.4381 15.797 10.1683 16.2602 9.91948 16.5409ZM11.4757 8.83301H7.52435C7.60822 7.12511 7.9028 5.62649 8.31501 4.52728C8.56185 3.86902 8.83166 3.40579 9.08052 3.12509C9.33042 2.84323 9.47447 2.83301 9.5 2.83301C9.52553 2.83301 9.66958 2.84323 9.91948 3.12509C10.1683 3.40579 10.4381 3.86902 10.685 4.52728C11.0972 5.62649 11.3918 7.12511 11.4757 8.83301ZM13.4778 10.833C13.3926 12.7428 13.0651 14.4877 12.5576 15.841C12.5122 15.9623 12.4647 16.0817 12.4154 16.1989C14.5362 15.226 16.087 13.2245 16.4291 10.833H13.4778ZM16.4291 8.83301H13.4778C13.3926 6.92322 13.0651 5.17832 12.5576 3.82503C12.5122 3.7037 12.4647 3.58428 12.4154 3.46714C14.5362 4.44001 16.087 6.44155 16.4291 8.83301ZM5.52218 8.83301C5.60742 6.92322 5.93487 5.17832 6.44235 3.82503C6.48785 3.7037 6.53525 3.58428 6.5846 3.46714C4.46378 4.44001 2.91296 6.44155 2.57089 8.83301H5.52218ZM2.57089 10.833C2.91296 13.2245 4.46378 15.226 6.5846 16.1989C6.53525 16.0817 6.48785 15.9623 6.44235 15.841C5.93487 14.4877 5.60742 12.7428 5.52218 10.833H2.57089Z">
                      </path>
                    </svg></span> <span data-wg-notranslate className="current-language-name">English</span>
                </div>
                <div className="language-picker-content" style={{color: 'white'}}>
                </div>
              </div>
              <div className="showOnMobile" />
              <div className="showOnDesktop" />
            </div> */}
            <style dangerouslySetInnerHTML={{__html: "\n                  .top-bun,\n                  .patty,\n                  .bottom-bun {\n                    height: 3px;\n                }\n                " }} />{/* Burger */}
            <div className="header-burger menu-overlay-has-visible-non-navigation-items no-actions preSlide slideIn" data-animation-role="header-element" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0218182s'}}>
              <button className="header-burger-btn burger" data-test="header-burger"><span className="js-header-burger-open-title visually-hidden">Open Menu</span> <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                <div className="burger-box">
                  <div className="burger-inner header-menu-icon-tripleLineHamburger">
                    <div className="top-bun" />
                    <div className="patty" />
                    <div className="bottom-bun" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="header-display-mobile" data-content-field="site-title">
            {/* Social */}
            {/* Title and nav wrapper */}
            <div className="header-title-nav-wrapper">
              {/* Title */}
              <div className="header-title preSlide slideIn" data-animation-role="header-element" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0272727s'}}>
                <div className="header-title-logo">
                  <a href="/" data-animation-role="header-element" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0327273s'}}><img src="//images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/0404931a-4adf-4306-9db0-e86742a62150/logo_Hbat_logo.png?format=1500w" alt="HBAT" /></a>
                </div>
              </div>{/* Nav */}
              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list">
                    <div className="header-nav-item header-nav-item--collection">
                      <a href="/white-papers" data-animation-role="header-element" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0381818s'}}>White
                        Papers</a>
                    </div>
                    <div className="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                      <a href="/" data-animation-role="header-element" aria-current="page" className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0436364s'}}>Home</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>{/* Actions */}
            {/* <div className="header-actions header-actions--right">
              <div className="language-picker language-picker-desktop" id="multilingual-language-picker-desktop">
                <div className="current-language">
                  <span className="icon icon--fill"><svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 18.833C14.4706 18.833 18.5 14.8036 18.5 9.83301C18.5 4.86244 14.4706 0.833008 9.5 0.833008C4.52944 0.833008 0.5 4.86244 0.5 9.83301C0.5 14.8036 4.52944 18.833 9.5 18.833ZM9.91948 16.5409C9.66958 16.8228 9.52553 16.833 9.5 16.833C9.47447 16.833 9.33042 16.8228 9.08052 16.5409C8.83166 16.2602 8.56185 15.797 8.31501 15.1387C7.9028 14.0395 7.60822 12.5409 7.52435 10.833H11.4757C11.3918 12.5409 11.0972 14.0395 10.685 15.1387C10.4381 15.797 10.1683 16.2602 9.91948 16.5409ZM11.4757 8.83301H7.52435C7.60822 7.12511 7.9028 5.62649 8.31501 4.52728C8.56185 3.86902 8.83166 3.40579 9.08052 3.12509C9.33042 2.84323 9.47447 2.83301 9.5 2.83301C9.52553 2.83301 9.66958 2.84323 9.91948 3.12509C10.1683 3.40579 10.4381 3.86902 10.685 4.52728C11.0972 5.62649 11.3918 7.12511 11.4757 8.83301ZM13.4778 10.833C13.3926 12.7428 13.0651 14.4877 12.5576 15.841C12.5122 15.9623 12.4647 16.0817 12.4154 16.1989C14.5362 15.226 16.087 13.2245 16.4291 10.833H13.4778ZM16.4291 8.83301H13.4778C13.3926 6.92322 13.0651 5.17832 12.5576 3.82503C12.5122 3.7037 12.4647 3.58428 12.4154 3.46714C14.5362 4.44001 16.087 6.44155 16.4291 8.83301ZM5.52218 8.83301C5.60742 6.92322 5.93487 5.17832 6.44235 3.82503C6.48785 3.7037 6.53525 3.58428 6.5846 3.46714C4.46378 4.44001 2.91296 6.44155 2.57089 8.83301H5.52218ZM2.57089 10.833C2.91296 13.2245 4.46378 15.226 6.5846 16.1989C6.53525 16.0817 6.48785 15.9623 6.44235 15.841C5.93487 14.4877 5.60742 12.7428 5.52218 10.833H2.57089Z">
                      </path>
                    </svg></span> <span data-wg-notranslate className="current-language-name">English</span>
                </div>
                <div className="language-picker-content" />
              </div>
              <div className="showOnMobile" />
              <div className="showOnDesktop" />
            </div> */}
            <style dangerouslySetInnerHTML={{__html: "\n                  .top-bun,\n                  .patty,\n                  .bottom-bun {\n                    height: 3px;\n                }\n                " }} />{/* Burger */}
            <div className="header-burger menu-overlay-has-visible-non-navigation-items no-actions preSlide slideIn" data-animation-role="header-element" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0490909s'}}>
              <button className="header-burger-btn burger" data-test="header-burger"><span className="js-header-burger-open-title visually-hidden">Open Menu</span> <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                <div className="burger-box">
                  <div className="burger-inner header-menu-icon-tripleLineHamburger">
                    <div className="top-bun" />
                    <div className="patty" />
                    <div className="bottom-bun" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>{/* (Mobile) Menu Navigation */}
      <div className="header-menu header-menu--folder-list" data-current-styles="{ &quot;layout&quot;: &quot;navRight&quot;, &quot;action&quot;: { &quot;href&quot;: &quot;/&quot;, &quot;buttonText&quot;: &quot;CONTACT&quot;, &quot;newWindow&quot;: false }, &quot;showSocial&quot;: false, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;menuOverlayAnimation&quot;: &quot;fade&quot;, &quot;cartStyle&quot;: &quot;cart&quot;, &quot;cartText&quot;: &quot;Cart&quot;, &quot;showEmptyCartState&quot;: true, &quot;cartOptions&quot;: { &quot;iconType&quot;: &quot;stroke-1&quot;, &quot;cartBorderShape&quot;: &quot;none&quot;, &quot;cartBorderStyle&quot;: &quot;outline&quot;, &quot;cartBorderThickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 1.0 } }, &quot;showButton&quot;: false, &quot;showCart&quot;: false, &quot;showAccountLogin&quot;: true, &quot;headerStyle&quot;: &quot;dynamic&quot;, &quot;languagePicker&quot;: { &quot;enabled&quot;: true, &quot;iconEnabled&quot;: true, &quot;iconType&quot;: &quot;globe&quot;, &quot;flagShape&quot;: &quot;shiny&quot;, &quot;languageFlags&quot;: [ ] }, &quot;mobileOptions&quot;: { &quot;layout&quot;: &quot;logoLeftNavRight&quot;, &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;, &quot;menuIconOptions&quot;: { &quot;style&quot;: &quot;tripleLineHamburger&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 3.0 } } }, &quot;dynamicOptions&quot;: { &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } } }, &quot;solidOptions&quot;: { &quot;headerOpacity&quot;: { &quot;unit&quot;: &quot;%&quot;, &quot;value&quot;: 100.0 }, &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } }, &quot;dropShadow&quot;: { &quot;enabled&quot;: false, &quot;blur&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 30.0 }, &quot;spread&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 }, &quot;distance&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 } }, &quot;blurBackground&quot;: { &quot;enabled&quot;: false, &quot;blurRadius&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 12.0 } } }, &quot;gradientOptions&quot;: { &quot;gradientType&quot;: &quot;faded&quot;, &quot;headerOpacity&quot;: { &quot;unit&quot;: &quot;%&quot;, &quot;value&quot;: 90.0 }, &quot;border&quot;: { &quot;enabled&quot;: false, &quot;position&quot;: &quot;allSides&quot;, &quot;thickness&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 4.0 } }, &quot;dropShadow&quot;: { &quot;enabled&quot;: false, &quot;blur&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 30.0 }, &quot;spread&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 }, &quot;distance&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 0.0 } }, &quot;blurBackground&quot;: { &quot;enabled&quot;: false, &quot;blurRadius&quot;: { &quot;unit&quot;: &quot;px&quot;, &quot;value&quot;: 12.0 } } }, &quot;showPromotedElement&quot;: false }" data-section-id="overlay-nav" data-show-account-login="true" data-test="header-menu" style={{paddingTop: '196.922px'}}>
        <div className="header-menu-bg theme-bg--primary" />
        <div className="header-menu-nav">
          <nav className="header-menu-nav-list">
            <div data-folder="root" className="header-menu-nav-folder header-menu-nav-folder--active">
              {/* Menu Navigation */}
              <div className="header-menu-nav-folder-content">
                <div className="container header-menu-nav-item header-menu-nav-item--collection">
                  <a href="/white-papers">
                    <div className="header-menu-nav-item-content">
                      White Papers
                    </div>
                  </a>
                </div>
                <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active header-menu-nav-item--homepage">
                  <a href="/" aria-current="page">
                    <div className="header-menu-nav-item-content">
                      Home
                    </div>
                  </a>
                </div>
              </div>
              <div className="header-menu-actions" />
              {/* <div className="header-menu-actions language-picker language-picker-mobile">
                <a data-folder-id="language-picker" href="#">
                  <div className="header-menu-nav-item-content current-language">
                    <span className="icon icon--lg icon--fill"><svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 18.833C14.4706 18.833 18.5 14.8036 18.5 9.83301C18.5 4.86244 14.4706 0.833008 9.5 0.833008C4.52944 0.833008 0.5 4.86244 0.5 9.83301C0.5 14.8036 4.52944 18.833 9.5 18.833ZM9.91948 16.5409C9.66958 16.8228 9.52553 16.833 9.5 16.833C9.47447 16.833 9.33042 16.8228 9.08052 16.5409C8.83166 16.2602 8.56185 15.797 8.31501 15.1387C7.9028 14.0395 7.60822 12.5409 7.52435 10.833H11.4757C11.3918 12.5409 11.0972 14.0395 10.685 15.1387C10.4381 15.797 10.1683 16.2602 9.91948 16.5409ZM11.4757 8.83301H7.52435C7.60822 7.12511 7.9028 5.62649 8.31501 4.52728C8.56185 3.86902 8.83166 3.40579 9.08052 3.12509C9.33042 2.84323 9.47447 2.83301 9.5 2.83301C9.52553 2.83301 9.66958 2.84323 9.91948 3.12509C10.1683 3.40579 10.4381 3.86902 10.685 4.52728C11.0972 5.62649 11.3918 7.12511 11.4757 8.83301ZM13.4778 10.833C13.3926 12.7428 13.0651 14.4877 12.5576 15.841C12.5122 15.9623 12.4647 16.0817 12.4154 16.1989C14.5362 15.226 16.087 13.2245 16.4291 10.833H13.4778ZM16.4291 8.83301H13.4778C13.3926 6.92322 13.0651 5.17832 12.5576 3.82503C12.5122 3.7037 12.4647 3.58428 12.4154 3.46714C14.5362 4.44001 16.087 6.44155 16.4291 8.83301ZM5.52218 8.83301C5.60742 6.92322 5.93487 5.17832 6.44235 3.82503C6.48785 3.7037 6.53525 3.58428 6.5846 3.46714C4.46378 4.44001 2.91296 6.44155 2.57089 8.83301H5.52218ZM2.57089 10.833C2.91296 13.2245 4.46378 15.226 6.5846 16.1989C6.53525 16.0817 6.48785 15.9623 6.44235 15.841C5.93487 14.4877 5.60742 12.7428 5.52218 10.833H2.57089Z">
                        </path>
                      </svg></span> <span data-wg-notranslate className="current-language-name">English</span>
                  </div>
                </a>
              </div> */}
            </div>
            <div id="multilingual-language-picker-mobile" className="header-menu-nav-folder" data-folder="language-picker">
              <div className="header-menu-nav-folder-content">
                <div className="header-menu-controls header-menu-nav-item">
                  <a className="header-menu-controls-control header-menu-controls-control--active" data-action="back" href="/" tabIndex={-1}><span>Back</span></a>
                </div>
                <div className="language-picker-content">
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main id="page" className="container" role="main">
      <article className="sections" data-page-sections="613f32525e18f97349cfc9de" id="sections">
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--large content-width--wide horizontal-alignment--left vertical-alignment--middle black-bold" data-section-id="615db7f6edf48d173e9a1399" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--large&quot;, &quot;customSectionHeight&quot;: 85, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--left&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;customContentWidth&quot;: 100, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;video&quot;, &quot;generative&quot;: { &quot;type&quot;: &quot;images&quot;, &quot;seed&quot;: 0, &quot;count&quot;: 0, &quot;size&quot;: 0, &quot;speed&quot;: 0, &quot;backgroundColor&quot;: { &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;, &quot;sitePaletteColor&quot;: { &quot;id&quot;: &quot;accent&quot;, &quot;alpha&quot;: 1.0 } }, &quot;invertColors&quot;: false, &quot;noiseIntensity&quot;: 0, &quot;noiseScale&quot;: 0, &quot;distortionScaleX&quot;: 0, &quot;distortionScaleY&quot;: 0, &quot;distortionSpeed&quot;: 0, &quot;distortionIntensity&quot;: 0, &quot;lightIntensity&quot;: 0, &quot;lightX&quot;: 0, &quot;bevelRotation&quot;: 0, &quot;bevelSize&quot;: 0, &quot;bevelStrength&quot;: 0, &quot;complexity&quot;: 0, &quot;cutoff&quot;: 0, &quot;isBevelEnabled&quot;: false, &quot;isBlurEnabled&quot;: false, &quot;scale&quot;: 0, &quot;speedMorph&quot;: 0, &quot;speedTravel&quot;: 0, &quot;steps&quot;: 0, &quot;travelDirection&quot;: 0, &quot;noiseBias&quot;: 0, &quot;animateNoise&quot;: false, &quot;distortionComplexity&quot;: 0, &quot;distortionDirection&quot;: 0, &quot;distortionMorphSpeed&quot;: 0, &quot;distortionSeed&quot;: 0, &quot;distortionSmoothness&quot;: 0, &quot;linearGradientStartColorDistance&quot;: 0, &quot;linearGradientEndColorDistance&quot;: 0, &quot;linearGradientAngle&quot;: 0, &quot;linearGradientAngleMotion&quot;: 0, &quot;linearGradientRepeat&quot;: 0, &quot;radialGradientRadius&quot;: 0, &quot;radialGradientPositionX&quot;: 0, &quot;radialGradientPositionY&quot;: 0, &quot;radialGradientFollowCursor&quot;: false, &quot;radialGradientFollowSpeed&quot;: 0, &quot;presetImageKey&quot;: &quot;blob2&quot;, &quot;imageTint&quot;: { &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;, &quot;sitePaletteColor&quot;: { &quot;id&quot;: &quot;lightAccent&quot;, &quot;alpha&quot;: 1.0 } }, &quot;imageScale&quot;: 3, &quot;imageCount&quot;: 35, &quot;patternEnabled&quot;: false, &quot;patternColor&quot;: { &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;, &quot;sitePaletteColor&quot;: { &quot;id&quot;: &quot;black&quot;, &quot;alpha&quot;: 1.0 } }, &quot;patternSize&quot;: 16, &quot;patternImageKey&quot;: &quot;&quot;, &quot;patternOffsetX&quot;: 0, &quot;patternOffsetY&quot;: 0, &quot;patternSpaceX&quot;: 1, &quot;patternSpaceY&quot;: 1, &quot;waveEnabled&quot;: false, &quot;waveSpeed&quot;: 0, &quot;waveComplexity&quot;: 0, &quot;waveDepth&quot;: 0, &quot;waveShadowDepth&quot;: 0, &quot;boxSize&quot;: 0.0, &quot;scaleX&quot;: 0, &quot;scaleY&quot;: 0, &quot;scaleZ&quot;: 0, &quot;isMorphEnabled&quot;: false, &quot;lightY&quot;: 0, &quot;lightZ&quot;: 0, &quot;noiseRange&quot;: 0, &quot;positionFactor&quot;: 0, &quot;scaleFactor&quot;: 0, &quot;colorFactor&quot;: 0, &quot;sizeVariance&quot;: 0, &quot;wobble&quot;: 0, &quot;morph&quot;: 0, &quot;scrollMovement&quot;: 0, &quot;patternScaleX&quot;: 0, &quot;patternScaleY&quot;: 0, &quot;patternPowerX&quot;: 0, &quot;patternPowerY&quot;: 0, &quot;patternAmount&quot;: 0, &quot;surfaceHeight&quot;: 0, &quot;colorStop1&quot;: 0, &quot;colorStop2&quot;: 0, &quot;colorStop3&quot;: 0, &quot;colorStop4&quot;: 0, &quot;gradientDistortionX&quot;: 0, &quot;gradientDistortionY&quot;: 0, &quot;curveX&quot;: 0, &quot;curveY&quot;: 0, &quot;curveFunnel&quot;: 0, &quot;fogIntensity&quot;: 0, &quot;repeat&quot;: 0, &quot;rotation&quot;: 0, &quot;rotationSpeed&quot;: 0, &quot;blur&quot;: 0, &quot;complexityY&quot;: 0, &quot;complexityZ&quot;: 0, &quot;amplitudeY&quot;: 0, &quot;amplitudeZ&quot;: 0, &quot;offset&quot;: 0, &quot;lightAngle&quot;: 0, &quot;alpha&quot;: 0 } }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;native&quot;, &quot;nativeVideoContentItem&quot;: { &quot;id&quot;: &quot;6166cfc1ae12f80798d24209&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1634127809568, &quot;updatedOn&quot;: 1634127809568, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;c4ec0a87-4dc9-4cc4-918a-31c036068fc7&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;Markets_Web_V2_02.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 12.245567 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 12.245567, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; } }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" style={{paddingTop: '196.922px'}} data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background">
            <div data-controller="VideoBackgroundNative" data-controllers-bound="VideoBackgroundNative">
              <div className="sqs-video-background-native content-fill" data-config-native-video="{ &quot;id&quot;: &quot;6166cfc1ae12f80798d24209&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1634127809568, &quot;updatedOn&quot;: 1634127809568, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;c4ec0a87-4dc9-4cc4-918a-31c036068fc7&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;Markets_Web_V2_02.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 12.245567 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 12.245567, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; }" data-config-playback-speed="0.5" data-config-filter={1} data-config-filter-strength={0}>
                <div className="sqs-video-background-native__video-player video-player video-player--medium video-player--large">
                  <div tabIndex={0} className="plyr plyr--full-ui plyr--video plyr--html5 plyr--pip-supported plyr--playing plyr--hide-controls">
                    <div className="plyr__controls" style={{}} />
                    <div className="plyr__video-wrapper">
                          <video autoPlay loop muted playsInline src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/mp4-h264-1920:1080" >
                        <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/mp4-h264-1920:1080" />
                        <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/c4ec0a87-4dc9-4cc4-918a-31c036068fc7/mp4-h264-640:360" />
                      </video>
                      <div className="plyr__poster" />
                    </div>
                    <div className="plyr__captions" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-615db7f6edf48d173e9a1399">
                <div className="row sqs-row">
                  <div className="col sqs-col-7 span-7">
                    <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-72fb252b4e5ea0c6b0d3">
                      <div className="sqs-block-content">
                        <h1 className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0545455s'}}>
                          First fuel cell with Solid State integrated Hydrogen Storage. Using water mist for <span style={{color: '#FAFF00'}}>clean energy.</span></h1>
                      </div>
                    </div>
                    <div className="sqs-block button-block sqs-block-button" data-block-type={53} id="block-1dab2c523df7953b4c63">
                      <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_244">
                        <div className="sqs-block-button-container sqs-block-button-container--left preSlide slideIn" data-animation-role="button" data-alignment="left" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1664274854727_243" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.06s'}}>
                          <a href="#page-section-613f32525e18f97349cfc9e9" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">CONTACT</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-5 span-5">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-478850bee1ea6913b135">
                      <div className="sqs-block-content">
                        &nbsp;
                      </div>
                    </div>
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-a15b630450a0d6592b6a">
                      <div className="sqs-block-content">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="white-bold" className="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--left vertical-alignment--middle white-bold" data-section-id="61658b0c073f423893f75b29" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--medium&quot;, &quot;customSectionHeight&quot;: 30, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--left&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;sectionTheme&quot;: &quot;white-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;video&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 2, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" id="yui_3_17_2_1_1664274854727_75" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}} id="yui_3_17_2_1_1664274854727_74">
            <div className="content" id="yui_3_17_2_1_1664274854727_73">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-61658b0c073f423893f75b29">
                <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_72">
                  <div className="col sqs-col-0 span-0" />
                  <div className="col sqs-col-6 span-6">
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1634043034645_104410">
                      <div className="sqs-block-content">
                        <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0654545s'}}>
                          Our Idea</p>
                      </div>
                    </div>
                    <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1634043034645_36780">
                      <div className="sqs-block-content">
                        <h2 className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0709091s'}}>
                          Innovating the hydrogen economy by reinventing fuel cell <span style={{color: '#4684FF'}}>architecture and chemistry.</span><br /></h2>
                      </div>
                    </div>
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-820017e57a366f8eda7a">
                      <div className="sqs-block-content">
                        <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0763636s'}}>
                          Energy demand is surging and current batteries are not sustainable. With a low lifecycle,
                          most chemistries can not keep up with new technology energy demands. Therefore we want to
                          create a battery solution that can be recycled, has a lifespan of +15 years, and grows with
                          your energy needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1664274854727_71">
                    <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-yui_3_17_2_1_1634043034645_122911">
                      <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_70">
                        <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_69">
                          <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 1920}} id="yui_3_17_2_1_1664274854727_68">
                            <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_67" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0818182s'}}>
                              <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '56.25%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_66"><noscript>&lt;img
                                  src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634046069131-O4VLZSB0AXKBA8GQNJ04/Frame-000+%28199%29.png"
                                  alt="Frame-000 (199).png"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634046069131-O4VLZSB0AXKBA8GQNJ04/Frame-000+%28199%29.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634046069131-O4VLZSB0AXKBA8GQNJ04/Frame-000+%28199%29.png" data-image-dimensions="1920x1080" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="61659073c5c508467d696c38" data-type="image" style={{left: '-0.0360282%', top: '0%', width: '100.072%', height: '100%', position: 'absolute'}} alt="Frame-000 (199).png" data-image-resolution="2500w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634046069131-O4VLZSB0AXKBA8GQNJ04/Frame-000+%28199%29.png?format=2500w" />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black" className="page-section layout-engine-section background-width--full-bleed section-height--large content-width--medium horizontal-alignment--center vertical-alignment--middle black" data-section-id="6168453eaa142e077862ccc8" data-controller="SectionWrapperController" data-current-styles="{ &quot;backgroundImage&quot;: { &quot;id&quot;: &quot;61850d043b117e44249a3fda&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1636109572658, &quot;updatedOn&quot;: 1636109572684, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1636109572658, &quot;authorId&quot;: &quot;617ab393b49a9d769760fc22&quot;, &quot;systemDataId&quot;: &quot;5044210b-efda-481f-8f66-41afb131c44e&quot;, &quot;systemDataVariants&quot;: &quot;1600x900,100w,300w,500w,750w,1000w,1500w&quot;, &quot;systemDataSourceType&quot;: &quot;GIF&quot;, &quot;filename&quot;: &quot;Comp-1.gif&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;000000&quot;, &quot;topRightAverage&quot;: &quot;000000&quot;, &quot;bottomLeftAverage&quot;: &quot;000000&quot;, &quot;bottomRightAverage&quot;: &quot;000000&quot;, &quot;centerAverage&quot;: &quot;909088&quot;, &quot;suggestedBgColor&quot;: &quot;000000&quot; }, &quot;urlId&quot;: &quot;0mkrw3oo5rxnxvnovv92d046a124gc&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;617ab393b49a9d769760fc22&quot;, &quot;displayName&quot;: &quot;Zacariah Heim&quot;, &quot;firstName&quot;: &quot;Zacariah&quot;, &quot;lastName&quot;: &quot;Heim&quot;, &quot;bio&quot;: &quot;&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/5044210b-efda-481f-8f66-41afb131c44e/Comp-1.gif&quot;, &quot;contentType&quot;: &quot;image/gif&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;1600x900&quot; }, &quot;imageOverlayOpacity&quot;: 0.71, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--large&quot;, &quot;customSectionHeight&quot;: 85, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--medium&quot;, &quot;sectionTheme&quot;: &quot;black&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;video&quot;, &quot;imageEffect&quot;: &quot;tilt&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 1.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 100, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;native&quot;, &quot;nativeVideoContentItem&quot;: { &quot;id&quot;: &quot;617a6e61e2b9eb73556be4b2&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1635413601938, &quot;updatedOn&quot;: 1635413601938, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;Comp 1.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;audioCodec&quot;: &quot;aac&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 30.058667 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;audioCodec&quot;: &quot;aac&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 30.058667, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; } }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background">
            <div data-controller="VideoBackgroundNative" data-controllers-bound="VideoBackgroundNative">
              <div className="sqs-video-background-native content-fill" data-config-native-video="{ &quot;id&quot;: &quot;617a6e61e2b9eb73556be4b2&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1635413601938, &quot;updatedOn&quot;: 1635413601938, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;Comp 1.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;audioCodec&quot;: &quot;aac&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 30.058667 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;audioCodec&quot;: &quot;aac&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 30.058667, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; }" data-config-playback-speed="1.5" data-config-filter={1} data-config-filter-strength={100}>
                <div className="sqs-video-background-native__video-player video-player video-player--medium video-player--large">
                  <div tabIndex={0} className="plyr plyr--full-ui plyr--video plyr--html5 plyr--pip-supported plyr--playing plyr--hide-controls">
                    <div className="plyr__controls" style={{}} />
                    <div className="plyr__video-wrapper">
                          <video autoPlay loop muted playsInline src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/mp4-h264-aac-1920:1080" >
                        <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/mp4-h264-aac-1920:1080" />
                        <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/efc7c6cd-844e-4ba3-a0a0-30bf6f7519e1/mp4-h264-aac-640:360" />
                      </video>
                      <div className="plyr__poster" />
                    </div>
                    <div className="plyr__captions" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="sqs-layout sqs-grid-12 columns-12 empty" data-type="page-section" data-updated-on={1664199239723} id="page-section-6168453eaa142e077862ccc8" />
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="615191bf0e64f47eb70306a5" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--small&quot;, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;image&quot;, &quot;imageEffect&quot;: &quot;tilt&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" id="yui_3_17_2_1_1664274854727_101" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}} id="yui_3_17_2_1_1664274854727_100">
            <div className="content" id="yui_3_17_2_1_1664274854727_99">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-615191bf0e64f47eb70306a5">
                <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_98">
                  <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1664274854727_97">
                    <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_96">
                      <div className="col sqs-col-4 span-4">
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1632755459522_20489">
                          <div className="sqs-block-content">
                            <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0872727s'}}>
                              Our Solution</p>
                            <h2 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0927273s'}} className="preSlide slideIn">Reinventing fuel cell architecture and chemistry.</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-5 span-5" id="yui_3_17_2_1_1664274854727_95">
                        <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-yui_3_17_2_1_1632490907388_49121">
                          <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_94">
                            <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-custom individual-animation-slide-down individual-text-animation-site-default animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_93">
                              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 811}} id="yui_3_17_2_1_1664274854727_92">
                                <div className="image-block-wrapper" data-animation-role="image" data-animation-override id="yui_3_17_2_1_1664274854727_91">
                                  <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '133.04562377929688%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_90"><noscript>&lt;img
                                      src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039201470-BMVCJA72SEN07MPMN7RY/export+SQ.png"
                                      alt="export SQ.png"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039201470-BMVCJA72SEN07MPMN7RY/export+SQ.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039201470-BMVCJA72SEN07MPMN7RY/export+SQ.png" data-image-dimensions="811x1079" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="616575a15854f17539c2ac48" data-type="image" style={{left: '-0.0294621%', top: '0%', width: '100.059%', height: '100%', position: 'absolute'}} alt="export SQ.png" data-image-resolution="1500w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039201470-BMVCJA72SEN07MPMN7RY/export+SQ.png?format=1500w" />
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-3 span-3">
                        <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1633346127540_37704">
                          <div className="sqs-block-content">
                            <h4 className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.0981818s'}}>
                              <span style={{color: '#4684FF'}}>01.</span> fueled with<br />
                              hyperfine water mist
                            </h4>
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1633346127540_45819">
                          <div className="sqs-block-content">
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.103636s'}}>
                              Clean.&nbsp; Metal free.&nbsp; Eco-friendly.&nbsp;&nbsp;Water electrolyte.</p>
                          </div>
                        </div>
                        <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type={47} id="block-yui_3_17_2_1_1633504683995_29217">
                          <div className="sqs-block-content">
                            <hr />
                          </div>
                        </div>
                        <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1632754960359_31279">
                          <div className="sqs-block-content">
                            <h4 className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.109091s'}}>
                              <span style={{color: '#FBFF32'}}>02.</span> safe storage material
                            </h4>
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1632754960359_34811">
                          <div className="sqs-block-content">
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.114545s'}}>
                              HBAT hydrogen-based energy storage is non-gaseous, therefore completely safe</p>
                          </div>
                        </div>
                        <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type={47} id="block-yui_3_17_2_1_1633504683995_44842">
                          <div className="sqs-block-content">
                            <hr />
                          </div>
                        </div>
                        <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1632754960359_38550">
                          <div className="sqs-block-content">
                            <h4 style={{color: 'rgb(255, 255, 255)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.12s'}} className="preFade fadeIn">03. environmentally friendly catalysts</h4>
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1632754960359_40053">
                          <div className="sqs-block-content">
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.125455s'}}>
                              Non-toxic. Non-platinum group metals. 80% recyclable and 100% possible.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--large content-width--narrow horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="615d9158e6e7b1308e987468" data-controller="SectionWrapperController" data-current-styles="{ &quot;backgroundImage&quot;: { &quot;id&quot;: &quot;61850a559ee172551ed98a3c&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1636108885542, &quot;updatedOn&quot;: 1636108885573, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1636108885542, &quot;authorId&quot;: &quot;617ab393b49a9d769760fc22&quot;, &quot;systemDataId&quot;: &quot;a9f9eb01-5706-4b1d-9158-beae665df700&quot;, &quot;systemDataVariants&quot;: &quot;1920x1080,100w,300w,500w,750w,1000w,1500w&quot;, &quot;systemDataSourceType&quot;: &quot;GIF&quot;, &quot;filename&quot;: &quot;HBAT_Mist.gif&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;000000&quot;, &quot;topRightAverage&quot;: &quot;000000&quot;, &quot;bottomLeftAverage&quot;: &quot;000000&quot;, &quot;bottomRightAverage&quot;: &quot;000000&quot;, &quot;centerAverage&quot;: &quot;4d4d55&quot;, &quot;suggestedBgColor&quot;: &quot;000000&quot; }, &quot;urlId&quot;: &quot;5gzw4buro643vmra88olhohsgffwm8&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;617ab393b49a9d769760fc22&quot;, &quot;displayName&quot;: &quot;Zacariah Heim&quot;, &quot;firstName&quot;: &quot;Zacariah&quot;, &quot;lastName&quot;: &quot;Heim&quot;, &quot;bio&quot;: &quot;&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/a9f9eb01-5706-4b1d-9158-beae665df700/HBAT_Mist.gif&quot;, &quot;contentType&quot;: &quot;image/gif&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;1920x1080&quot; }, &quot;imageOverlayOpacity&quot;: 0.19, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--large&quot;, &quot;customSectionHeight&quot;: 85, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--narrow&quot;, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;video&quot;, &quot;imageEffect&quot;: &quot;none&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;native&quot;, &quot;nativeVideoContentItem&quot;: { &quot;id&quot;: &quot;616571b0b534bb7a74df2fba&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1634038192954, &quot;updatedOn&quot;: 1634038192954, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;d94cc48a-cf21-4c29-a32c-fd42e5bb800b&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;HBAT mist.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 7.540867 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 7.540867, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; } }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background">
            <div data-controller="VideoBackgroundNative" data-controllers-bound="VideoBackgroundNative">
              <div className="sqs-video-background-native content-fill" data-config-native-video="{ &quot;id&quot;: &quot;616571b0b534bb7a74df2fba&quot;, &quot;recordType&quot;: 61, &quot;addedOn&quot;: 1634038192954, &quot;updatedOn&quot;: 1634038192954, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;d94cc48a-cf21-4c29-a32c-fd42e5bb800b&quot;, &quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;, &quot;systemDataSourceType&quot;: &quot;mp4&quot;, &quot;filename&quot;: &quot;HBAT mist.mp4&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 1, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;contentType&quot;: &quot;video/mp4&quot;, &quot;structuredContent&quot;: { &quot;_type&quot;: &quot;SqspHostedVideo&quot;, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 7.540867 }, &quot;videoCodec&quot;: &quot;h264&quot;, &quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/{variant}&quot;, &quot;alexandriaLibraryId&quot;: &quot;613f323315e7c403d0d6c265&quot;, &quot;aspectRatio&quot;: 1.7777777777777777, &quot;durationSeconds&quot;: 7.540867, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;, &quot;originalSize&quot;: &quot;1920:1080&quot; }" data-config-playback-speed="0.5" data-config-filter={1} data-config-filter-strength={0}>
                <div className="sqs-video-background-native__video-player video-player video-player--medium video-player--large">
                  <div tabIndex={0} className="plyr plyr--full-ui plyr--video plyr--html5 plyr--pip-supported plyr--playing plyr--hide-controls">
                    <div className="plyr__controls" style={{}} />
                    <div className="plyr__video-wrapper">
                          <video autoPlay loop muted playsInline src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/mp4-h264-1920:1080" >
                            <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/mp4-h264-1920:1080" type={"video/mp4"} />
                            <source src="https://video.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/d94cc48a-cf21-4c29-a32c-fd42e5bb800b/mp4-h264-640:360" type={"video/mp4"} />
                      </video>
                      <div className="plyr__poster" />
                    </div>
                    <div className="plyr__captions" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-615d9158e6e7b1308e987468">
                <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12">
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1634115085045_18409">
                      <div className="sqs-block-content">
                        <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.130909s'}}>
                          Bringing space technologies down to earth</p>
                        <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.136364s'}}>
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1633504683995_186348">
                      <div className="sqs-block-content">
                        <h2 className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.141818s'}}>
                          “[...] <span style={{color: '#FAFF00'}}>nickel-hydrogen batteries have become the primary energy
                            storage system</span> used for geosynchrounous- orbit communication satellites."</h2>
                      </div>
                    </div>
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-9aee549960d69123f272">
                      <div className="sqs-block-content">
                        <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.147273s'}}>
                          NASA Handbook for Nickel-Hydrogen Batteries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed content-width--wide horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="61408c33990742119e26d43a" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--custom&quot;, &quot;customSectionHeight&quot;: 60, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;customContentWidth&quot;: 60, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;image&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" style={{minHeight: '60vh'}} data-controllers-bound="SectionWrapperController" id="yui_3_17_2_1_1664274854727_126" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{paddingTop: 'calc(60vmax / 10)', paddingBottom: 'calc(60vmax / 10)'}} id="yui_3_17_2_1_1664274854727_125">
            <div className="content" id="yui_3_17_2_1_1664274854727_124">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-61408c33990742119e26d43a">
                <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_123">
                  <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1664274854727_122">
                    <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_121">
                      <div className="col sqs-col-5 span-5">
                        <div className="row sqs-row">
                          <div className="col sqs-col-4 span-4">
                            <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1632737681202_7898">
                              <div className="sqs-block-content">
                                <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.152727s'}}>
                                  Performance</p>
                                <h2 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.158182s'}} className="preSlide slideIn">Comparing HBAT to a common Lithium-Ion battery.</h2>
                              </div>
                            </div>
                          </div>
                          <div className="col sqs-col-1 span-1">
                            <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-yui_3_17_2_1_1632755967850_18853">
                              <div className="sqs-block-content">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-7 span-7" id="yui_3_17_2_1_1664274854727_120">
                        <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-yui_3_17_2_1_1631619351902_24411">
                          <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_119">
                            <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_118">
                              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 1316}} id="yui_3_17_2_1_1664274854727_117">
                                <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_116" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.163636s'}}>
                                  <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '66.10942840576172%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_115"><noscript>&lt;img
                                      src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634042204423-XF6168S7CQ8FIF6T6A5Q/Frame+1.png"
                                      alt="Frame 1.png"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634042204423-XF6168S7CQ8FIF6T6A5Q/Frame+1.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634042204423-XF6168S7CQ8FIF6T6A5Q/Frame+1.png" data-image-dimensions="1316x870" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="6165815c75f89d75cc102ee2" data-type="image" style={{left: '-0.00405978%', top: '0%', width: '100.008%', height: '100%', position: 'absolute'}} alt="Frame 1.png" data-image-resolution="2500w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634042204423-XF6168S7CQ8FIF6T6A5Q/Frame+1.png?format=2500w" />
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="white" className="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--top white" data-section-id="613f53e722c62f660b67d0c8" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--small&quot;, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--top&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;sectionTheme&quot;: &quot;white&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;image&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-613f53e722c62f660b67d0c8">
                <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12">
                    <div className="row sqs-row">
                      <div className="col sqs-col-4 span-4">
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1633072461536_11742">
                          <div className="sqs-block-content">
                            <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.169091s'}}>
                              Benefits</p>
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-1e3df5737e8704396617">
                          <div className="sqs-block-content">
                            <h2 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.174545s'}} className="preSlide slideIn">Innovative features providing the opportunity to succeed in
                              several markets.</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-1 span-1">
                        <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-5b30893471c6e3a772ac">
                          <div className="sqs-block-content">
                            &nbsp;
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-3 span-3">
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-65f26430839ff06c7aa9">
                          <div className="sqs-block-content">
                            <h4 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.18s'}} className="preFade fadeIn">Adaptable to user needs</h4>
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.185455s'}}>
                              The HMS system built into every stack uses a state of the art Battery Managment system.
                              Keeping track of the system usage profile and adapting the charge and discharge states
                              to maintain the ideal efficiency.<br /></p>
                          </div>
                        </div>
                        <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-yui_3_17_2_1_1631621690953_33290">
                          <div className="sqs-block-content">
                            &nbsp;
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-2c14cbd8b5f0e845519a">
                          <div className="sqs-block-content">
                            <h4 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.190909s'}} className="preFade fadeIn">Non toxic, fire retardant</h4>
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.196364s'}}>
                              No toxic chemicals, harmful metals, or flammable materials are used in manufacturing or
                              recycling of our H-Bat system. We strive to maintain and develope a circular life-cycle
                              for our products.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-1 span-1">
                        <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-2ba5dbf87e113556b9cb">
                          <div className="sqs-block-content">
                            &nbsp;
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-3 span-3">
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-1042f4a76fa0dc35c1f6">
                          <div className="sqs-block-content">
                            <h4 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.201818s'}} className="preFade fadeIn">Modular architecture</h4>
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.207273s'}}>
                              Our H-Bat system is constructed using a modular approach. Designed to increase voltage
                              or amperage per the clients needs. Allowing our company to load-match the energy storage
                              system to your load profile.</p>
                          </div>
                        </div>
                        <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-f393730bf15138af51eb">
                          <div className="sqs-block-content">
                            &nbsp;
                          </div>
                        </div>
                        <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-9f9194db82cd47fc4a81">
                          <div className="sqs-block-content">
                            <h4 style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.212727s'}} className="preFade fadeIn">Sustainable</h4>
                            <p className="sqsrte-small preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.218182s'}}>
                              The materials within oour battery do not degrade from electrochemical usage, no cell
                              memory or dendrite growth. What does this mean? Our system will last a long time,
                              without cell fatuige.<br />
                              <br />
                              However, due to the nature of how H-Bat stores hydrogen, the cells capcity decreases
                              over-time. This is due to an accumulation of Deuterium inside of the Hydrogen Storage
                              material.<br />
                              <br />
                              While the user can not replenish the cells, we can! If a cell fails, or the system
                              begins lose performance, simply let us know. We can discharge the accumulated deuterium
                              and have your cells as good as new. Cell cleaning will need to be done once every 15 -
                              20 years.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="619c0aea09561253a65e217f" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--medium&quot;, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--medium&quot;, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;image&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" id="yui_3_17_2_1_1664274854727_151" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}} id="yui_3_17_2_1_1664274854727_150">
            <div className="content" id="yui_3_17_2_1_1664274854727_149">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-619c0aea09561253a65e217f">
                <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_148">
                  <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1664274854727_147">
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-06269746739a3b340655">
                      <div className="sqs-block-content">
                        <h2 style={{textAlign: 'center', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.223636s'}} className="preSlide slideIn">Support</h2>
                        <p style={{textAlign: 'center', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.229091s'}} className="preFade fadeIn">Advisors and Collaborations</p>
                      </div>
                    </div>
                    <div className="row sqs-row" id="yui_3_17_2_1_1664274854727_146">
                      <div className="col sqs-col-4 span-4" id="yui_3_17_2_1_1664274854727_145">
                        <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-a8d0f93f7d4689dab0f5">
                          <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_144">
                            <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none sqs-narrow-width" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_143">
                              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 175}} id="yui_3_17_2_1_1664274854727_142">
                                <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_141" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.234545s'}}>
                                  <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '102.85714721679688%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_140"><noscript>&lt;img
                                      src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1b8053eb-cc32-41a4-9849-381c83f8a4bb/OIP.jfif"
                                      alt="OIP"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1b8053eb-cc32-41a4-9849-381c83f8a4bb/OIP.jfif" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1b8053eb-cc32-41a4-9849-381c83f8a4bb/OIP.jfif" data-image-dimensions="175x180" data-image-focal-point="0.5,0.5" alt="OIP" data-load="false" data-image-id="619c0c5146c7427e032e7a1c" data-type="image" style={{left: '0%', top: '0%', width: '100%', height: '100%', position: 'absolute'}} data-image-resolution="500w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1b8053eb-cc32-41a4-9849-381c83f8a4bb/OIP.jfif?format=500w" />
                                  </div>
                                </div>
                                <figcaption className="image-caption-wrapper">
                                  <div className="image-caption">
                                    <p style={{textAlign: 'center', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.24s'}} className="preFade fadeIn">Have It Made</p>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-4 span-4" id="yui_3_17_2_1_1664274854727_170">
                        <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-yui_3_17_2_1_1637614241427_53695">
                          <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_169">
                            <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_168">
                              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 200}} id="yui_3_17_2_1_1664274854727_167">
                                <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_166" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.245455s'}}>
                                  <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '100%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_165"><noscript>&lt;img
                                      src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/cf2564d4-87f0-4445-9817-68df85ab5133/1582794156042.jfif"
                                      alt="1582794156042"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/cf2564d4-87f0-4445-9817-68df85ab5133/1582794156042.jfif" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/cf2564d4-87f0-4445-9817-68df85ab5133/1582794156042.jfif" data-image-dimensions="200x200" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="619c0d9983835c2453e27ffb" data-type="image" style={{left: '0%', top: '0%', width: '100%', height: '100%', position: 'absolute'}} data-image-resolution="500w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/cf2564d4-87f0-4445-9817-68df85ab5133/1582794156042.jfif?format=500w" />
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col sqs-col-4 span-4" id="yui_3_17_2_1_1664274854727_189">
                        <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-020b0f95690e6ec36314">
                          <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_188">
                            <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none sqs-narrow-width" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_187">
                              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 3543}} id="yui_3_17_2_1_1664274854727_186">
                                <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_185" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.250909s'}}>
                                  <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '80.01693725585938%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_184"><noscript>&lt;img
                                      src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/ee19c53c-32b0-42da-98fc-561a246a94f7/UGent_EN-white.png"
                                      alt="UGent_EN-white"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/ee19c53c-32b0-42da-98fc-561a246a94f7/UGent_EN-white.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/ee19c53c-32b0-42da-98fc-561a246a94f7/UGent_EN-white.png" data-image-dimensions="3543x2835" data-image-focal-point="0.5,0.5" alt="UGent_EN-white" data-load="false" data-image-id="619c0cebb646ab50493e0a7f" data-type="image" style={{left: '0%', top: '-0.111616%', width: '100%', height: '100.223%', position: 'absolute'}} data-image-resolution="750w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/ee19c53c-32b0-42da-98fc-561a246a94f7/UGent_EN-white.png?format=750w" />
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-1ed3ad8721ca2e5a3f72">
                      <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_207">
                        <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_206">
                          <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 450}} id="yui_3_17_2_1_1664274854727_205">
                            <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_204" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.256364s'}}>
                              <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '23.77777862548828%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_203"><noscript>&lt;img
                                  src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/470b10e2-fada-491c-8d98-905f9440be81/voxdale_logo-1.png"
                                  alt="voxdale_logo-1"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/470b10e2-fada-491c-8d98-905f9440be81/voxdale_logo-1.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/470b10e2-fada-491c-8d98-905f9440be81/voxdale_logo-1.png" data-image-dimensions="450x107" data-image-focal-point="0.5,0.5" alt="voxdale_logo-1" data-load="false" data-image-id="619c0c95a65ad6304c3907c2" data-type="image" style={{left: '0%', top: '0%', width: '100%', height: '100%', position: 'absolute'}} data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/470b10e2-fada-491c-8d98-905f9440be81/voxdale_logo-1.png?format=1000w" />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type={5} id="block-c6474af3ee92d237e60c">
                      <div className="sqs-block-content" id="yui_3_17_2_1_1664274854727_225">
                        <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1664274854727_224">
                          <figure className="sqs-block-image-figure intrinsic" style={{maxWidth: 295}} id="yui_3_17_2_1_1664274854727_223">
                            <div className="image-block-wrapper preSlide slideIn" data-animation-role="image" id="yui_3_17_2_1_1664274854727_222" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.261818s'}}>
                              <div className="sqs-image-shape-container-element has-aspect-ratio" style={{position: 'relative', paddingBottom: '65.08474731445312%', overflow: 'hidden'}} id="yui_3_17_2_1_1664274854727_221"><noscript>&lt;img
                                  src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/8ba0f48c-b81e-4b6c-a821-a4eeb9c9d59c/Screenshot+2021-11-22+222818.png"
                                  alt="Screenshot+2021-11-22+222818"&gt;</noscript><img className="thumb-image loaded" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/8ba0f48c-b81e-4b6c-a821-a4eeb9c9d59c/Screenshot+2021-11-22+222818.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/8ba0f48c-b81e-4b6c-a821-a4eeb9c9d59c/Screenshot+2021-11-22+222818.png" data-image-dimensions="295x192" data-image-focal-point="0.5,0.5" alt="Screenshot+2021-11-22+222818" data-load="false" data-image-id="619c0cd33af2966f604c03a2" data-type="image" style={{left: '0%', top: '0%', width: '100%', height: '100%', position: 'absolute'}} data-image-resolution="750w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/8ba0f48c-b81e-4b6c-a821-a4eeb9c9d59c/Screenshot+2021-11-22+222818.png?format=750w" />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="white" className="page-section user-items-list-section full-bleed-section white" data-section-id="613f3dfc7fa9111f8df74d22" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;imageOverlayOpacity&quot;: 0.3, &quot;backgroundColor&quot;: &quot;white&quot;, &quot;sectionTheme&quot;: &quot;white&quot;, &quot;imageEffect&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;generative&quot;, &quot;backgroundImage&quot;: null }" data-current-context="{ &quot;video&quot;: { &quot;filter&quot;: 1, &quot;videoFallbackContentItem&quot;: null, &quot;nativeVideoContentItem&quot;: null, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: { &quot;type&quot;: &quot;none&quot; }, &quot;typeName&quot;: &quot;page&quot; }" data-animation data-json-schema-section data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="user-items-list" style={{minHeight: 100, paddingTop: '6.6vmax', paddingBottom: '6.6vmax'}} data-card-theme data-section-id="user-items-list" data-section-title-enabled="false" data-space-below-section-title-value={70} data-space-below-section-title-unit="px" data-layout-width="full">
                <style dangerouslySetInnerHTML={{__html: "\n.user-items-list-item-container[data-section-id=\"613f3dfc7fa9111f8df74d22\"] .list-item-content__title {\n                              font - size: 2.2rem;\n                    }\n\n                            .user-items-list-item-container[data-section-id=\"613f3dfc7fa9111f8df74d22\"] .list-item-content__description {\n                              font - size: 1.2rem;\n                    }\n\n                            .user-items-list-item-container[data-section-id=\"613f3dfc7fa9111f8df74d22\"] .list-item-content__button {\n                              font - size: 1rem;\n                    }\n\n                            @supports (--test-custom-property: true) {\n                      .user - items - list - item - container[data - section - id=\"613f3dfc7fa9111f8df74d22\"] {\n                              --title - font - size - value: 2.2;\n                            --body-font-size-value: 1.2;\n                            --button-font-size-value: 1;\n                      }\n                    }\n                          " }} />
                <div className="user-items-list-item-container user-items-list-carousel" data-controller="UserItemsListCarousel" data-max-columns={4} data-show-adjacent-slides="true" data-space-between-slides-value={0} data-space-between-slides-unit="px" data-media-aspect-ratio="2:3" data-is-infinite-enabled="true" data-navigation-controls="arrows" data-navigation-placement="center" data-navigation-alignment="center" data-alignment-vertical="top" data-section-id="613f3dfc7fa9111f8df74d22" data-current-context="{ &quot;userItems&quot;: [ { &quot;title&quot;: &quot;Electric Cars&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>low weight, power<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Click Here&quot;, &quot;buttonLink&quot;: &quot;/&quot; }, &quot;imageId&quot;: &quot;616577abddd4d97f9f5fc0a8&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;616577abddd4d97f9f5fc0a8&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634039723084, &quot;updatedOn&quot;: 1634039735232, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634039723084, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634039725468-H44I8D4SQUZ6ONK32JY2&quot;, &quot;systemDataVariants&quot;: &quot;771x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 5.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;b5b3ac&quot;, &quot;topRightAverage&quot;: &quot;131d1f&quot;, &quot;bottomLeftAverage&quot;: &quot;aeaba3&quot;, &quot;bottomRightAverage&quot;: &quot;0b0f16&quot;, &quot;centerAverage&quot;: &quot;646c71&quot;, &quot;suggestedBgColor&quot;: &quot;b9b8b2&quot; }, &quot;urlId&quot;: &quot;wf77d9oxclpqgmp08wkcxw7xefaefa&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;771x1120&quot; } }, { &quot;title&quot;: &quot;Electric bikes&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>high performance<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Make It&quot; }, &quot;imageId&quot;: &quot;6165655736ccfb430f802800&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;6165655736ccfb430f802800&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634035031818, &quot;updatedOn&quot;: 1634035074795, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634035031818, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634035057033-EUFDFWKLA02GJ2BAUN69&quot;, &quot;systemDataVariants&quot;: &quot;771x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 2.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;c8d3d7&quot;, &quot;topRightAverage&quot;: &quot;cbd3d7&quot;, &quot;bottomLeftAverage&quot;: &quot;b3b7b7&quot;, &quot;bottomRightAverage&quot;: &quot;697172&quot;, &quot;centerAverage&quot;: &quot;868584&quot;, &quot;suggestedBgColor&quot;: &quot;c7d3d7&quot; }, &quot;urlId&quot;: &quot;djg3pidg832c1o2nkfplj15pxy0jzf&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;771x1120&quot; } }, { &quot;title&quot;: &quot;Drones&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>low weight, power<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Make It&quot;, &quot;buttonLink&quot;: &quot;#&quot; }, &quot;imageId&quot;: &quot;6165659527d3a0332c72b21c&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;6165659527d3a0332c72b21c&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634035093355, &quot;updatedOn&quot;: 1634035109559, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634035093355, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634035102964-STPUCV657Q4ILAWM5ID2&quot;, &quot;systemDataVariants&quot;: &quot;771x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 1.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;d2d5d7&quot;, &quot;topRightAverage&quot;: &quot;d3d6d8&quot;, &quot;bottomLeftAverage&quot;: &quot;5d5958&quot;, &quot;bottomRightAverage&quot;: &quot;7b7778&quot;, &quot;centerAverage&quot;: &quot;9ca3a7&quot;, &quot;suggestedBgColor&quot;: &quot;d2d5d7&quot; }, &quot;urlId&quot;: &quot;s9addbukq81qky1gs2mc9sxixzh14j&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;771x1120&quot; } }, { &quot;title&quot;: &quot;Industrial vehicles&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>longevity, sustainability<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Make It&quot; }, &quot;imageId&quot;: &quot;616565b2cde0d42abf1b51f1&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;616565b2cde0d42abf1b51f1&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634035122440, &quot;updatedOn&quot;: 1634035145545, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634035122440, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634035138932-DPVUF3IME3MFOXW79XC0&quot;, &quot;systemDataVariants&quot;: &quot;771x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 4.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;a0a19e&quot;, &quot;topRightAverage&quot;: &quot;9ea3a9&quot;, &quot;bottomLeftAverage&quot;: &quot;959795&quot;, &quot;bottomRightAverage&quot;: &quot;a2a6a4&quot;, &quot;centerAverage&quot;: &quot;838993&quot;, &quot;suggestedBgColor&quot;: &quot;c3c7c8&quot; }, &quot;urlId&quot;: &quot;0tov44gqjhm0e36blkd8s3sumv3mup&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;771x1120&quot; } }, { &quot;title&quot;: &quot;Grid Stability&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>longevity, heat &amp; power<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Click Here&quot;, &quot;buttonLink&quot;: &quot;/&quot; }, &quot;imageId&quot;: &quot;616577e7bfb94d5705e662e2&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;616577e7bfb94d5705e662e2&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634039783122, &quot;updatedOn&quot;: 1634039790212, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634039783122, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634039785060-CIKMULMME5DNQ3CJXJ25&quot;, &quot;systemDataVariants&quot;: &quot;771x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 6.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;a1c2c8&quot;, &quot;topRightAverage&quot;: &quot;c3d4d8&quot;, &quot;bottomLeftAverage&quot;: &quot;6a7473&quot;, &quot;bottomRightAverage&quot;: &quot;79746e&quot;, &quot;centerAverage&quot;: &quot;cfd3d5&quot;, &quot;suggestedBgColor&quot;: &quot;9cbfc6&quot; }, &quot;urlId&quot;: &quot;79opd0kked64l2jafknyvubjoa58ak&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;771x1120&quot; } }, { &quot;title&quot;: &quot;Residential&quot;, &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>longevity, heat &amp; power<\/p>&quot;, &quot;button&quot;: { &quot;buttonText&quot;: &quot;Make It&quot; }, &quot;imageId&quot;: &quot;6165653075f89d75cc0ea488&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;image&quot;: { &quot;id&quot;: &quot;6165653075f89d75cc0ea488&quot;, &quot;recordType&quot;: 2, &quot;addedOn&quot;: 1634034992677, &quot;updatedOn&quot;: 1634035011851, &quot;workflowState&quot;: 1, &quot;publishOn&quot;: 1634034992677, &quot;authorId&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;systemDataId&quot;: &quot;1634035006817-XZJXEIMWJ3C9480187UC&quot;, &quot;systemDataVariants&quot;: &quot;772x1120,100w,300w,500w,750w&quot;, &quot;systemDataSourceType&quot;: &quot;PNG&quot;, &quot;filename&quot;: &quot;Frame 3.png&quot;, &quot;mediaFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5, &quot;source&quot;: 3 }, &quot;colorData&quot;: { &quot;topLeftAverage&quot;: &quot;dee9f1&quot;, &quot;topRightAverage&quot;: &quot;dde8f1&quot;, &quot;bottomLeftAverage&quot;: &quot;2e2d24&quot;, &quot;bottomRightAverage&quot;: &quot;24231d&quot;, &quot;centerAverage&quot;: &quot;8a8c93&quot;, &quot;suggestedBgColor&quot;: &quot;dee9f1&quot; }, &quot;urlId&quot;: &quot;fhgz5enylhqrdu0fzzawc80oneqjxf&quot;, &quot;title&quot;: &quot;&quot;, &quot;body&quot;: null, &quot;likeCount&quot;: 0, &quot;commentCount&quot;: 0, &quot;publicCommentCount&quot;: 0, &quot;commentState&quot;: 2, &quot;unsaved&quot;: false, &quot;author&quot;: { &quot;id&quot;: &quot;6141c52ef3ca133b0aa7bb6f&quot;, &quot;displayName&quot;: &quot;Laura Lang&quot;, &quot;firstName&quot;: &quot;Laura&quot;, &quot;lastName&quot;: &quot;Lang&quot;, &quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot;, &quot;bio&quot;: &quot;&quot;, &quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/6141c52ff30eda74acf2a221&quot; }, &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png&quot;, &quot;contentType&quot;: &quot;image/png&quot;, &quot;items&quot;: [ ], &quot;pushedServices&quot;: { }, &quot;pendingPushedServices&quot;: { }, &quot;recordTypeLabel&quot;: &quot;image&quot;, &quot;originalSize&quot;: &quot;772x1120&quot; } } ], &quot;styles&quot;: { &quot;imageFocalPoint&quot;: { &quot;x&quot;: 0.5, &quot;y&quot;: 0.5 }, &quot;imageOverlayOpacity&quot;: 0.3, &quot;backgroundColor&quot;: &quot;white&quot;, &quot;sectionTheme&quot;: &quot;white&quot;, &quot;imageEffect&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;generative&quot;, &quot;backgroundImage&quot;: null }, &quot;video&quot;: { &quot;filter&quot;: 1, &quot;videoFallbackContentItem&quot;: null, &quot;nativeVideoContentItem&quot;: null, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageFocalPoint&quot;: null, &quot;backgroundImageId&quot;: null, &quot;options&quot;: { &quot;maxColumns&quot;: 4, &quot;isCardEnabled&quot;: true, &quot;isMediaEnabled&quot;: true, &quot;isTitleEnabled&quot;: true, &quot;isBodyEnabled&quot;: true, &quot;isButtonEnabled&quot;: false, &quot;isShowAdjacentSlides&quot;: true, &quot;isInfiniteEnabled&quot;: true, &quot;isAutoplayEnabled&quot;: false, &quot;slideDurationMs&quot;: 1000, &quot;mediaAspectRatio&quot;: &quot;2:3&quot;, &quot;layoutWidth&quot;: &quot;full&quot;, &quot;mediaWidth&quot;: { &quot;value&quot;: 100, &quot;unit&quot;: &quot;%&quot; }, &quot;mediaAlignment&quot;: &quot;center&quot;, &quot;contentWidth&quot;: { &quot;value&quot;: 100, &quot;unit&quot;: &quot;%&quot; }, &quot;titleAlignment&quot;: &quot;left&quot;, &quot;bodyAlignment&quot;: &quot;left&quot;, &quot;buttonAlignment&quot;: &quot;left&quot;, &quot;titlePlacement&quot;: &quot;center&quot;, &quot;bodyPlacement&quot;: &quot;center&quot;, &quot;buttonPlacement&quot;: &quot;center&quot;, &quot;cardVerticalAlignment&quot;: &quot;top&quot;, &quot;contentOrder&quot;: &quot;media-first&quot;, &quot;titleFontSize&quot;: &quot;heading-2&quot;, &quot;bodyFontSize&quot;: &quot;paragraph-2&quot;, &quot;buttonFontSize&quot;: &quot;button-medium&quot;, &quot;customOptions&quot;: { &quot;customTitleFontSize&quot;: { &quot;value&quot;: 2.2, &quot;unit&quot;: &quot;rem&quot; }, &quot;customBodyFontSize&quot;: { &quot;value&quot;: 1.2, &quot;unit&quot;: &quot;rem&quot; }, &quot;customButtonFontSize&quot;: { &quot;value&quot;: 1, &quot;unit&quot;: &quot;rem&quot; } }, &quot;verticalPaddingTop&quot;: { &quot;value&quot;: 6.6, &quot;unit&quot;: &quot;vmax&quot; }, &quot;verticalPaddingBottom&quot;: { &quot;value&quot;: 6.6, &quot;unit&quot;: &quot;vmax&quot; }, &quot;spaceBetweenSlides&quot;: { &quot;value&quot;: 0, &quot;unit&quot;: &quot;px&quot; }, &quot;spaceBetweenContentAndMedia&quot;: { &quot;value&quot;: 8, &quot;unit&quot;: &quot;%&quot; }, &quot;spaceBelowTitle&quot;: { &quot;value&quot;: 4, &quot;unit&quot;: &quot;%&quot; }, &quot;spaceBelowBody&quot;: { &quot;value&quot;: 8, &quot;unit&quot;: &quot;%&quot; }, &quot;cardPaddingTop&quot;: { &quot;value&quot;: 0, &quot;unit&quot;: &quot;px&quot; }, &quot;cardPaddingRight&quot;: { &quot;value&quot;: 10, &quot;unit&quot;: &quot;px&quot; }, &quot;cardPaddingBottom&quot;: { &quot;value&quot;: 10, &quot;unit&quot;: &quot;px&quot; }, &quot;cardPaddingLeft&quot;: { &quot;value&quot;: 10, &quot;unit&quot;: &quot;px&quot; }, &quot;navigationOffset&quot;: { &quot;value&quot;: 3, &quot;unit&quot;: &quot;vw&quot; }, &quot;navigationControls&quot;: &quot;arrows&quot;, &quot;navigationPlacement&quot;: &quot;center&quot;, &quot;navigationAlignment&quot;: &quot;center&quot;, &quot;spaceAboveNavigation&quot;: { &quot;value&quot;: 30, &quot;unit&quot;: &quot;px&quot; }, &quot;progressIndicators&quot;: &quot;bars&quot; }, &quot;layout&quot;: &quot;carousel&quot;, &quot;isSectionTitleEnabled&quot;: false, &quot;sectionTitle&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>Vast market potential by focusing on our strengths<\/p>&quot;, &quot;spaceBelowSectionTitle&quot;: { &quot;value&quot;: 70, &quot;unit&quot;: &quot;px&quot; }, &quot;sectionTitleAlignment&quot;: &quot;center&quot;, &quot;isSectionButtonEnabled&quot;: false, &quot;sectionButton&quot;: { &quot;buttonText&quot;: &quot;Make It&quot;, &quot;buttonLink&quot;: &quot;#&quot;, &quot;buttonNewWindow&quot;: false }, &quot;sectionButtonSize&quot;: &quot;medium&quot;, &quot;sectionButtonAlignment&quot;: &quot;center&quot;, &quot;spaceAboveSectionButton&quot;: { &quot;value&quot;: 70, &quot;unit&quot;: &quot;px&quot; } }" data-media-alignment="center" data-title-alignment="left" data-body-alignment="left" data-button-alignment="left" data-title-placement="center" data-body-placement="center" data-button-placement="center" data-layout-width="full" data-title-font-unit="rem" data-description-font-unit="rem" data-button-font-unit="rem" data-is-media-enabled="true" data-is-card-enabled="true" data-media-width-value={100} data-media-width-unit="%" data-content-order="media-first" data-space-between-columns data-vertical-padding-top-value="6.6" data-vertical-padding-bottom-value="6.6" data-vertical-padding-top-unit="vmax" data-vertical-padding-bottom-unit="vmax" data-controllers-bound="UserItemsListCarousel">
                      <div style={{ overflowX: 'scroll' }} className="user-items-list-carousel__gutter" role="region" aria-label="Carousel" tabIndex={0} style={{}}>
                        <div style={{ overflowX: 'scroll' }}  className="user-items-list-carousel__slideshow-holder">
                          <div className="user-items-list-carousel__slides-revealer">
                        <ul className="user-items-list-carousel__slides user-items-list-carousel__slides--initialized" style={{gridGap: 0}}>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.267273s'}} data-is-card-enabled="true" aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.272727s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+5" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.278182s'}}>
                                  Electric Cars</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.283636s'}}>
                                    low weight, power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.289091s'}} data-is-card-enabled="true" aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.294545s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+2" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.3s'}}>
                                  Electric bikes</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.305455s'}}>
                                    high performance</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(-384px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.310909s'}} data-is-card-enabled="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.316364s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+1" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.321818s'}}>
                                  Drones</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.327273s'}}>
                                    low weight, power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(0px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.332727s'}} data-is-card-enabled="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.338182s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+4" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.343636s'}}>
                                  Industrial vehicles</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.349091s'}}>
                                    longevity, sustainability</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(384px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.354545s'}} data-is-card-enabled="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.36s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+6" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.365455s'}}>
                                  Grid Stability</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.370909s'}}>
                                    longevity, heat &amp; power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation preFade fadeIn" style={{padding: '0px 10px 10px', transform: 'translate3d(768px, 0px, 0px)', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.376364s'}} data-is-card-enabled="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner preSlide slideIn" data-media-aspect-ratio="2:3" data-animation-role="image" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.381818s'}}>
                                <img data-image-focal-point="0.5,0.5" alt="Frame+3" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png" data-image-dimensions="772x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png?format=1000w" data-loaded="true" />
                              </div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title preSlide slideIn" style={{maxWidth: '100%', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.387273s'}}>
                                  Residential</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.392727s'}}>
                                    longevity, heat &amp; power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(1152px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={0}>
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+5" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Electric Cars</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p style={{}}>low weight, power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(1536px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={1}>
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+2" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Electric bikes</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p style={{}}>high performance</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={2} aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+1" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Drones</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p style={{}}>low weight, power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={3} aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+4" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Industrial vehicles</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p style={{}}>longevity, sustainability</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={4} aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+6" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png" data-image-dimensions="771x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Grid Stability</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p  style={{}}>longevity, heat &amp; power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="user-items-list-carousel__slide list-item list-item-basic-animation" style={{padding: '0px 10px 10px', transform: 'translate3d(-9999px, 0px, 0px)'}} data-is-card-enabled="true" data-original-item-index={5} aria-hidden="true">
                            <div className="user-items-list-carousel__media-container" style={{marginBottom: '8%', width: '100%'}}>
                              <div className="user-items-list-carousel__media-inner" data-media-aspect-ratio="2:3" data-animation-role="image" style={{}}><img data-image-focal-point="0.5,0.5" alt="Frame+3" data-src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png" data-image="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png" data-image-dimensions="772x1120" className="user-items-list-carousel__media" data-load="false" data-mode="cover" data-use-advanced-positioning="true" style={{width: '100%', height: '100%', objectPosition: '50% 50%', objectFit: 'cover'}} data-parent-ratio="0.7" data-image-resolution="1000w" src="https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035006817-XZJXEIMWJ3C9480187UC/Frame+3.png?format=1000w" data-loaded="true" /></div>
                            </div>
                            <div className="list-item-content">
                              <div className="list-item-content__text-wrapper">
                                <h2 className="list-item-content__title" style={{maxWidth: '100%'}}>Residential</h2>
                                <div className="list-item-content__description" style={{marginTop: '4%', maxWidth: '100%'}}>
                                  <p style={{}}>longevity, heat &amp; power</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="desktop-arrows user-items-list-carousel__arrow-wrapper user-items-list-carousel__arrow-wrapper--left" style={{gridGap: 0, marginLeft: '3vw'}}>
                      <div className="user-items-list-carousel__arrow-container" style={{padding: '0px calc(10px + 10px) 10px 0'}}>
                        <div className="user-items-list-carousel__arrow-positioner" data-media-aspect-ratio="2:3">
                          <div className="user-items-list-carousel__arrow-icon-holder">
                                <button id="slideLeft" className="user-items-list-carousel__arrow-button user-items-list-carousel__arrow-button--left preSlide slideIn" aria-label="Previous" data-animation-role="button" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.529091s'}}>
                              <div className="user-items-list-carousel__arrow-icon-background user-items-list-carousel__arrow-icon-background-area">
                              </div><svg className="user-items-list-carousel__arrow-icon" viewBox="0 0 44 18" xmlns="http://www.w3.org/2000/svg">
                                <path className="user-items-list-carousel__arrow-icon-foreground user-items-list-carousel__arrow-icon-path" d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                                <path className="user-items-list-carousel__arrow-icon-foreground user-items-list-carousel__arrow-icon-path" d="M42.8633 9.18125L3.37868 9.18125" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="desktop-arrows user-items-list-carousel__arrow-wrapper user-items-list-carousel__arrow-wrapper--right" style={{gridGap: 0, marginRight: '3vw'}}>
                      <div className="user-items-list-carousel__arrow-container" style={{padding: '0px 0 10px calc(10px + 10px)'}}>
                        <div className="user-items-list-carousel__arrow-positioner" data-media-aspect-ratio="2:3">
                          <div className="user-items-list-carousel__arrow-icon-holder">
                            <button id="slideRight" className="user-items-list-carousel__arrow-button user-items-list-carousel__arrow-button--right preSlide slideIn" aria-label="Next" data-animation-role="button" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.534545s'}}>
                              <div className="user-items-list-carousel__arrow-icon-background user-items-list-carousel__arrow-icon-background-area">
                              </div><svg className="user-items-list-carousel__arrow-icon" viewBox="0 0 44 18" xmlns="http://www.w3.org/2000/svg">
                                <path className="user-items-list-carousel__arrow-icon-foreground user-items-list-carousel__arrow-icon-path" d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                                <path className="user-items-list-carousel__arrow-icon-foreground user-items-list-carousel__arrow-icon-path" d="M1.19088 9.16982H40.6755" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-arrows">
                      <button id="mobileSlideRight" className="mobile-arrow-button mobile-arrow-button--left preSlide slideIn" aria-label="Previous" data-animation-role="button" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.54s'}}>
                        <div className="user-items-list-carousel__arrow-icon-background mobile-arrow-icon-background-area">
                        </div><svg className="mobile-arrow-icon" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                          <path className="user-items-list-carousel__arrow-icon-foreground mobile-arrow-icon-path" d="M7.87012 13L2.00021 7L7.87012 1" strokeWidth={2} fill="none" />
                          <path className="user-items-list-carousel__arrow-icon-foreground mobile-arrow-icon-path" d="M22.9653 7L3.03948 7" strokeWidth={2} strokeLinecap="square" fill="none" />
                        </svg>
                      </button>
                          <button id="mobileSlideLeft" className="mobile-arrow-button mobile-arrow-button--right preSlide slideIn" aria-label="Next" data-animation-role="button" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.545455s'}}>
                        <div className="user-items-list-carousel__arrow-icon-background mobile-arrow-icon-background-area">
                        </div><svg className="mobile-arrow-icon" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                          <path className="user-items-list-carousel__arrow-icon-foreground mobile-arrow-icon-path" d="M16.1299 1L21.9998 7L16.1299 13" strokeWidth={2} fill="none" />
                          <path className="user-items-list-carousel__arrow-icon-foreground mobile-arrow-icon-path" d="M1.03472 7H20.9605" strokeWidth={2} strokeLinecap="square" fill="none" />
                        </svg>
                      </button>
                    </div>
                    <div aria-live="polite" aria-atomic="true" style={{position: 'absolute', pointerEvents: 'none', opacity: 0}}>
                      Item 10 of 12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="613f32525e18f97349cfc9e9" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--medium&quot;, &quot;customSectionHeight&quot;: 85, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;video&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" data-active="true">
          <div className="section-background" />
          <div className="content-wrapper" style={{}}>
            <div className="content">
              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-613f32525e18f97349cfc9e9">
                <div className="row sqs-row">
                  <div className="col sqs-col-4 span-4">
                    <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-yui_3_17_2_1_1633531729316_28804">
                      <div className="sqs-block-content">
                        <p className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.550909s'}}>
                          Contact</p>
                      </div>
                    </div>
                    <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1633076979246_17404">
                      <div className="sqs-block-content">
                        <h2 className="preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.556364s'}}>
                          For questions or more information, connect with us via <span style={{color: '#FBFF32'}}>info@h-bat.com</span> or our contact form.</h2>
                      </div>
                    </div>
                    <div className="sqs-block code-block sqs-block-code" data-block-type={23} id="block-yui_3_17_2_1_1633619406010_18556">
                      <div className="sqs-block-content">
                        <p id="contact-sec" className="preFade fadeIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.561818s'}}>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-2 span-2">
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type={21} id="block-77c1209ed50b3769feff">
                      <div className="sqs-block-content">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                  <div className="col sqs-col-6 span-6">
                    <div className="sqs-block form-block sqs-block-form" data-block-type={9} id="block-2466a66d682347393dc2">
                      <div className="sqs-block-content">
                        <div className="form-wrapper">
                          <div className="form-inner-wrapper">
                            <form data-form-id="613f32525e18f97349cfc9cb" data-success-redirect data-dynamic-strings autoComplete="on" method="post" action="https://hbat.squarespace.com" noValidate >
                              <div className="field-list clear">
                                <fieldset id="name-yui_3_17_2_1_1596051534885_15441" className="form-item fields name required">
                                  <legend className="title">Name <span className="required" aria-hidden="true">*</span>
                                  </legend>
                                  <div className="field first-name">
                                    <label className="caption"><input className="field-element field-control" name="fname" x-autocompletetype="given-name" type="text" spellCheck="false" maxLength={30} data-title="First" aria-required="true" /> <span className="caption-text">First
                                        Name</span></label>
                                  </div>
                                  <div className="field last-name">
                                    <label className="caption"><input className="field-element field-control" name="lname" x-autocompletetype="surname" type="text" spellCheck="false" maxLength={30} data-title="Last" aria-required="true" /> <span className="caption-text">Last
                                        Name</span></label>
                                  </div>
                                </fieldset>
                                <div id="email-yui_3_17_2_1_1596051534885_15442" className="form-item field email required">
                                  <label className="title" htmlFor="email-yui_3_17_2_1_1596051534885_15442-field">Email <span className="required" aria-hidden="true">*</span></label> <input className="field-element" id="email-yui_3_17_2_1_1596051534885_15442-field" name="email" type="email" autoComplete="email" spellCheck="false" aria-required="true" />
                                </div>
                                <div id="textarea-05b7e13a-04ca-4ef1-a88b-2da13bb7395a" className="form-item field textarea">
                                  <label className="title" htmlFor="textarea-05b7e13a-04ca-4ef1-a88b-2da13bb7395a-field">Message</label>
                                  <textarea className="field-element" id="textarea-05b7e13a-04ca-4ef1-a88b-2da13bb7395a-field" defaultValue={""} />
                                </div>
                              </div>
                              <div data-animation-role="button" className="form-button-wrapper form-button-wrapper--align-left preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.567273s'}}>
                                <input className="button sqs-system-button sqs-editable-button sqs-button-element--primary" type="submit" defaultValue="SEND" />
                              </div>
                              <div className="hidden form-submission-text">
                                Thank you!
                              </div>
                              <div className="hidden form-submission-html" data-submission-html />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <footer className="sections" id="footer-sections" data-footer-sections>
      <section data-test="page-section" data-section-theme="black-bold" className="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle black-bold" data-section-id="61c1d397e4c2a52ebc9fb555" data-controller="SectionWrapperController" data-current-styles="{ &quot;imageOverlayOpacity&quot;: 0.15, &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;, &quot;sectionHeight&quot;: &quot;section-height--small&quot;, &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;, &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;, &quot;contentWidth&quot;: &quot;content-width--wide&quot;, &quot;customContentWidth&quot;: 90, &quot;sectionTheme&quot;: &quot;black-bold&quot;, &quot;sectionAnimation&quot;: &quot;none&quot;, &quot;backgroundMode&quot;: &quot;image&quot; }" data-current-context="{ &quot;video&quot;: { &quot;playbackSpeed&quot;: 0.5, &quot;filter&quot;: 1, &quot;filterStrength&quot;: 0, &quot;zoom&quot;: 0, &quot;videoSourceProvider&quot;: &quot;none&quot; }, &quot;backgroundImageId&quot;: null, &quot;backgroundMediaEffect&quot;: null, &quot;typeName&quot;: &quot;page&quot; }" data-animation="none" data-controllers-bound="SectionWrapperController" data-active="true">
        <div className="section-background" />
        <div className="content-wrapper" style={{}}>
          <div className="content">
            <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-61c1d397e4c2a52ebc9fb555">
              <div className="row sqs-row">
                <div className="col sqs-col-12 span-12">
                  <div className="row sqs-row">
                    <div className="col sqs-col-4 span-4">
                      <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-0536b5e1619eaf1f9229">
                        <div className="sqs-block-content preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.572727s'}}>
                          <h4 style={{textAlign: 'center', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.578182s'}} className="preFade fadeIn">H-BAT</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col sqs-col-8 span-8">
                      <div className="row sqs-row">
                        <div className="col sqs-col-4 span-4">
                          <div className="sqs-block socialaccountlinks-v2-block sqs-block-socialaccountlinks-v2" data-block-type={54} id="block-5c3f605a151c09eff3c4">
                            <div className="sqs-block-content preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.583636s'}}>
                              <div className="sqs-svg-icon--outer social-icon-alignment-center social-icons-color- social-icons-size-medium social-icons-style-regular">
                                <nav className="sqs-svg-icon--list">
                                  <a href="https://facebook.com/hbatproject" target="_blank" className="sqs-svg-icon--wrapper facebook-unauth" aria-label="Facebook">
                                    <div>
                                      <svg className="sqs-svg-icon--social" viewBox="0 0 64 64">
                                        <use className="sqs-use--icon" xlinkHref="#facebook-unauth-icon" />
                                        <use className="sqs-use--mask" xlinkHref="#facebook-unauth-mask" />
                                      </svg>
                                    </div>
                                  </a> <a href="https://www.linkedin.com/company/hbat/" target="_blank" className="sqs-svg-icon--wrapper linkedin-unauth" aria-label="LinkedIn">
                                    <div>
                                      <svg className="sqs-svg-icon--social" viewBox="0 0 64 64">
                                        <use className="sqs-use--icon" xlinkHref="#linkedin-unauth-icon" />
                                        <use className="sqs-use--mask" xlinkHref="#linkedin-unauth-mask" />
                                      </svg>
                                    </div>
                                  </a> <a href="https://twitter.com/HBATProject" target="_blank" className="sqs-svg-icon--wrapper twitter-unauth" aria-label="Twitter">
                                    <div>
                                      <svg className="sqs-svg-icon--social" viewBox="0 0 64 64">
                                        <use className="sqs-use--icon" xlinkHref="#twitter-unauth-icon" />
                                        <use className="sqs-use--mask" xlinkHref="#twitter-unauth-mask" />
                                      </svg>
                                    </div>
                                  </a>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col sqs-col-4 span-4">
                          <div className="sqs-block html-block sqs-block-html" data-block-type={2} id="block-d2272f2281541b5169d0">
                            <div className="sqs-block-content preSlide slideIn" style={{transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.589091s'}}>
                              <h4 style={{textAlign: 'center', transitionTimingFunction: 'ease', transitionDuration: '0.8s', transitionDelay: '0.594545s'}} className="preFade fadeIn">info@h-bat.com</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'none'}} data-usage="social-icons-svg">
    <symbol id="facebook-unauth-icon" viewBox="0 0 64 64">
      <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z">
      </path>
    </symbol>
    <symbol id="facebook-unauth-mask" viewBox="0 0 64 64">
      <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z">
      </path>
    </symbol>
    <symbol id="linkedin-unauth-icon" viewBox="0 0 64 64">
      <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z">
      </path>
    </symbol>
    <symbol id="linkedin-unauth-mask" viewBox="0 0 64 64">
      <path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z">
      </path>
    </symbol>
    <symbol id="twitter-unauth-icon" viewBox="0 0 64 64">
      <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z">
      </path>
    </symbol>
    <symbol id="twitter-unauth-mask" viewBox="0 0 64 64">
      <path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z">
      </path>
    </symbol>
  </svg>
</>

  );
}