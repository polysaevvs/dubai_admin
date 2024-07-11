import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerConfigBannerWithoutText extends Schema.Component {
  collectionName: 'components_banner_config_banner_without_texts';
  info: {
    displayName: 'banner_without_text';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface BannerConfigBanners extends Schema.Component {
  collectionName: 'components_banner_config_banners';
  info: {
    displayName: 'banners';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String;
  };
}

export interface BannerConfigBrandBanner extends Schema.Component {
  collectionName: 'components_banner_config_brand_banners';
  info: {
    displayName: 'BrandBanner';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface CharacteriscticsCharacterisctics extends Schema.Component {
  collectionName: 'components_characterisctics_characterisctics';
  info: {
    displayName: 'characterisctics';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface ColorColor extends Schema.Component {
  collectionName: 'components_color_colors';
  info: {
    displayName: 'color';
    description: '';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    border: Attribute.String;
    name: Attribute.String & Attribute.Required;
  };
}

export interface PartnerPartner extends Schema.Component {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'partner';
    description: '';
  };
  attributes: {
    partners: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner-config.banner-without-text': BannerConfigBannerWithoutText;
      'banner-config.banners': BannerConfigBanners;
      'banner-config.brand-banner': BannerConfigBrandBanner;
      'characterisctics.characterisctics': CharacteriscticsCharacterisctics;
      'color.color': ColorColor;
      'partner.partner': PartnerPartner;
    }
  }
}
