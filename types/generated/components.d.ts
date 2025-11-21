import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
    icon: 'archive';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContactForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    address: Schema.Attribute.Text;
    anchor: Schema.Attribute.String;
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorBackgroundBtn: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'SECONDARY',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorBackgroundLeft: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorBackgroundRight: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorTextBtn: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    colorTextLeft: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    colorTextRight: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    contactMail: Schema.Attribute.String;
    hoverBackgroundBtn: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    hoverTextBtn: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'PRIMARY-ALT', 'SECONDARY', 'SECONDARY-ALT']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    leftDescription: Schema.Attribute.Text;
    leftHeading: Schema.Attribute.Component<'shared.heading-small', false>;
    name: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    rightHeading: Schema.Attribute.Component<'shared.heading-small', false>;
  };
}

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    cardDescription: Schema.Attribute.Text;
    cardTitle: Schema.Attribute.String;
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorCardBg: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'WHITE'>;
    colorCardBorder: Schema.Attribute.Enumeration<
      ['TRANSPARENT', 'WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorCardTitle: Schema.Attribute.Enumeration<
      ['BLACK', 'WHITE', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    image: Schema.Attribute.Media<'images'>;
    isReversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    type: Schema.Attribute.Enumeration<['Regular Image', 'Card Image']> &
      Schema.Attribute.DefaultTo<'Regular Image'>;
  };
}

export interface BlocksFaqs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    faq: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
  };
}

export interface BlocksFeaturedNews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_news';
  info: {
    displayName: 'Featured News';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    cta: Schema.Attribute.Component<'shared.link', false>;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    newsPosts: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-post.news-post'
    >;
    postBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
  };
}

export interface BlocksFeaturedPartners extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_partners';
  info: {
    displayName: 'Featured Partners';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    partners: Schema.Attribute.Component<'shared.logo-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedProjects extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_projects';
  info: {
    displayName: 'Featured Projects';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    projectPosts: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-post.project-post'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'archive';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    image: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksHeroWithAchievements extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_with_achievements';
  info: {
    displayName: 'Hero With Achievements';
  };
  attributes: {
    achievements: Schema.Attribute.Component<'shared.achievement-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    heroLinks: Schema.Attribute.Component<'shared.link', true>;
    image: Schema.Attribute.Media<'images'>;
    overTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMapbox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mapboxes';
  info: {
    displayName: 'Mapbox';
  };
  attributes: {
    colorMarker: Schema.Attribute.Enumeration<
      [
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-ALT',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
  };
}

export interface BlocksMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdowns';
  info: {
    displayName: 'Markdown';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    formId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksPersonCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_person_cards';
  info: {
    displayName: 'Person Card';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    personName: Schema.Attribute.String;
    personTitle: Schema.Attribute.String;
  };
}

export interface BlocksQuoteGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_grids';
  info: {
    displayName: 'Quote Grid';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    quotes: Schema.Attribute.Component<'shared.quote', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    alignHeading: Schema.Attribute.Enumeration<['LEFT', 'CENTER', 'RIGHT']> &
      Schema.Attribute.DefaultTo<'LEFT'>;
    anchorLink: Schema.Attribute.String;
    colorHeading: Schema.Attribute.Enumeration<
      ['PRIMARY', 'SECONDARY', 'BLACK', 'WHITE']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
    teamMembers: Schema.Attribute.Component<'blocks.person-card', true>;
    text: Schema.Attribute.String;
  };
}

export interface BlocksTranscribathonProgress extends Struct.ComponentSchema {
  collectionName: 'components_blocks_transcribathon_progresses';
  info: {
    displayName: 'Transcribathon Progress';
  };
  attributes: {
    achievements: Schema.Attribute.Component<'shared.achievement-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    backgroundColor: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.Component<'shared.heading-large', false>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'rocket';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    >;
    legalLinks: Schema.Attribute.Component<'shared.link', true>;
    legalLinksHeading: Schema.Attribute.Component<
      'shared.heading-small',
      false
    >;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    navItemsHeading: Schema.Attribute.Component<'shared.heading-small', false>;
    platformLinks: Schema.Attribute.Component<'shared.link', true>;
    platformLinksHeading: Schema.Attribute.Component<
      'shared.heading-small',
      false
    >;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'rocket';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    >;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedAchievementCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_achievement_cards';
  info: {
    displayName: 'Achievement Card';
  };
  attributes: {
    achievementNumber: Schema.Attribute.String;
    achievementUnit: Schema.Attribute.String;
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
      ]
    >;
    colorBorder: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
      ]
    >;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    >;
    hoverBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'SECONDARY',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    hoverBorder: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
      ]
    >;
    hoverText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'PRIMARY-ALT', 'SECONDARY', 'SECONDARY-ALT']
    >;
    label: Schema.Attribute.String;
    opacityBackground: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 10;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    colorHeading: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    >;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    overHeading: Schema.Attribute.String;
  };
}

export interface SharedHeadingLarge extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_larges';
  info: {
    displayName: 'Heading Large';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingStyle: Schema.Attribute.Component<'shared.text-style', false>;
    overHeading: Schema.Attribute.String;
    overHeadingStyle: Schema.Attribute.Component<'shared.text-style', false>;
    subHeading: Schema.Attribute.String;
    subHeadingStyle: Schema.Attribute.Component<'shared.text-style', false>;
  };
}

export interface SharedHeadingSmall extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_smalls';
  info: {
    displayName: 'Heading Small';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingStyle: Schema.Attribute.Component<'shared.text-style', false>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'BG-PRIMARY'>;
    colorBorder: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'SECONDARY',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    hoverBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'BG-SECONDARY'>;
    hoverBorder: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    hoverText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'PRIMARY-ALT', 'SECONDARY', 'SECONDARY-ALT']
    > &
      Schema.Attribute.DefaultTo<'SECONDARY'>;
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
    icon: 'picture';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    hoverBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    >;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    colorBackground: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-HALF',
        'SECONDARY',
        'SECONDARY-HALF',
        'BG-PRIMARY',
        'BG-SECONDARY',
      ]
    > &
      Schema.Attribute.DefaultTo<'TRANSPARENT'>;
    colorBorder: Schema.Attribute.Enumeration<
      [
        'TRANSPARENT',
        'WHITE',
        'BLACK',
        'PRIMARY',
        'PRIMARY-ALT',
        'SECONDARY',
        'SECONDARY-ALT',
      ]
    > &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
    colorText: Schema.Attribute.Enumeration<
      ['WHITE', 'BLACK', 'PRIMARY', 'SECONDARY']
    > &
      Schema.Attribute.DefaultTo<'BLACK'>;
    source: Schema.Attribute.String;
    sourceImage: Schema.Attribute.Media<'images'>;
    sourceInstitution: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedTextStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_styles';
  info: {
    displayName: 'Text Style';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['LEFT', 'CENTER', 'RIGHT']> &
      Schema.Attribute.DefaultTo<'LEFT'>;
    color: Schema.Attribute.Enumeration<
      ['BLACK', 'WHITE', 'GRAY', 'PRIMARY', 'SECONDARY']
    >;
    italic: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<
      ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    > &
      Schema.Attribute.DefaultTo<'M'>;
    weight: Schema.Attribute.Enumeration<
      ['EXTRA LIGHT', 'LIGHT', 'NORMAL', 'SEMIBOLD', 'BOLD', 'EXTRABOLD']
    > &
      Schema.Attribute.DefaultTo<'NORMAL'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.contact-form': BlocksContactForm;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.faqs': BlocksFaqs;
      'blocks.featured-news': BlocksFeaturedNews;
      'blocks.featured-partners': BlocksFeaturedPartners;
      'blocks.featured-projects': BlocksFeaturedProjects;
      'blocks.hero': BlocksHero;
      'blocks.hero-with-achievements': BlocksHeroWithAchievements;
      'blocks.mapbox': BlocksMapbox;
      'blocks.markdown': BlocksMarkdown;
      'blocks.newsletter': BlocksNewsletter;
      'blocks.person-card': BlocksPersonCard;
      'blocks.quote-grid': BlocksQuoteGrid;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.team': BlocksTeam;
      'blocks.transcribathon-progress': BlocksTranscribathonProgress;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.achievement-card': SharedAchievementCard;
      'shared.card': SharedCard;
      'shared.heading-large': SharedHeadingLarge;
      'shared.heading-small': SharedHeadingSmall;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.quote': SharedQuote;
      'shared.text-style': SharedTextStyle;
    }
  }
}
