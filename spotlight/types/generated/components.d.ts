import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeoComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_components';
  info: {
    displayName: 'SEO Component';
  };
  attributes: {
    meta_description: Schema.Attribute.Text & Schema.Attribute.Required;
    meta_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Spotlight'>;
    share_image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo-component': SharedSeoComponent;
    }
  }
}
