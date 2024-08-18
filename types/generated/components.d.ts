import type { Schema, Attribute } from '@strapi/strapi';

export interface ArtisteReseauxSocial extends Schema.Component {
  collectionName: 'components_content_reseaux_socials';
  info: {
    displayName: 'R\u00E9seau social';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    URL: Attribute.String & Attribute.Required & Attribute.Unique;
    Platforme: Attribute.Enumeration<
      ['Facebook', 'Spotify', 'Twitter', 'Instagram']
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'artiste.reseaux-social': ArtisteReseauxSocial;
    }
  }
}
