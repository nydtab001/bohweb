// Declare the TemplateWrap component
declare module 'alps-react/dist/esm/TemplateWrap' {
    import * as React from 'react';
  
    interface TemplateWrapProps {
      children?: React.ReactNode;
      footer?: object;
      header?: object;
      sabbath?: object;
    }
  
    const TemplateWrap: React.ComponentType<TemplateWrapProps>;
    export default TemplateWrap;
  }
  
  // Declare the Header component
  declare module 'alps-react/dist/esm/organisms/global/Header' {
    import * as React from 'react';
  
    interface HeaderProps {
      title?: string;
      logo?: string;
    }
  
    const Header: React.ComponentType<HeaderProps>;
    export default Header;
  }
  
  // Declare the Footer component
  declare module 'alps-react/dist/esm/organisms/global/Footer' {
    import * as React from 'react';
  
    interface FooterProps {
      copyright?: string;
    }
  
    const Footer: React.ComponentType<FooterProps>;
    export default Footer;
  }
  
  // Declare the Sabbath component
  declare module 'alps-react/dist/esm/organisms/asides/Sabbath' {
    import * as React from 'react';
  
    interface SabbathProps {
      isOpen?: boolean;
    }
  
    const Sabbath: React.ComponentType<SabbathProps>;
    export default Sabbath;
  }

declare module 'alps-react';
declare module './AlpsContextProvider.js';
declare module 'alps-react/dist/esm/Body.js';
declare module 'alps-react/dist/esm/helpers/Element.js';
declare module 'alps-react/dist/esm/atoms/buttons/Button.js';
declare module 'alps-react/dist/esm/atoms/texts/Blockquote.js';
declare module 'alps-react/dist/esm/molecules/blocks/MediaBlock.js';
declare module 'alps-react/dist/esm/organisms/asides/Sabbath.js';
declare module 'alps-react/dist/esm/templates/TemplateWrap.js';
declare module 'alps-react/dist/esm/atoms/images/Image.js';