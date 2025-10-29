import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
    icon: 'archive';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
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
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
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
    faq: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksFeaturedNews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_news';
  info: {
    displayName: 'Featured News';
  };
  attributes: {
    newsPosts: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-post.news-post'
    >;
  };
}

export interface BlocksFeaturedPartners extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_partners';
  info: {
    displayName: 'Featured Partners';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    description: Schema.Attribute.Text;
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
    heading: Schema.Attribute.String;
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
    heroLinks: Schema.Attribute.Component<'shared.link', true>;
    image: Schema.Attribute.Media<'images'>;
    overTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
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
    description: Schema.Attribute.Text;
    teamMembers: Schema.Attribute.Component<'blocks.person-card', true>;
    text: Schema.Attribute.String;
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
    legalLinks: Schema.Attribute.Component<'shared.link', true>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    newsletter: Schema.Attribute.Component<'blocks.newsletter', false>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<
      ['BG-Background-Primary-Color', 'BG-Primary-Color', 'BG-Secondary-Color']
    > &
      Schema.Attribute.DefaultTo<'BG-Primary-Color'>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'rocket';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    type: Schema.Attribute.Enumeration<
      ['BG-Background-Primary-Color', 'BG-Primary-Color', 'BG-Secondary-Color']
    > &
      Schema.Attribute.DefaultTo<'BG-Background-Primary-Color'>;
  };
}

export interface SharedAchievementCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_achievement_cards';
  info: {
    displayName: 'Achievement Card';
  };
  attributes: {
    achievement: Schema.Attribute.String;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    overHeading: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'BG-Primary-Color',
        'BG-Background-Primary-Color',
        'BG-Secondary-Color',
        'BG-Transparent-Color',
      ]
    >;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
    icon: 'picture';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.faqs': BlocksFaqs;
      'blocks.featured-news': BlocksFeaturedNews;
      'blocks.featured-partners': BlocksFeaturedPartners;
      'blocks.featured-projects': BlocksFeaturedProjects;
      'blocks.hero': BlocksHero;
      'blocks.hero-with-achievements': BlocksHeroWithAchievements;
      'blocks.markdown': BlocksMarkdown;
      'blocks.newsletter': BlocksNewsletter;
      'blocks.person-card': BlocksPersonCard;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.team': BlocksTeam;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.achievement-card': SharedAchievementCard;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
