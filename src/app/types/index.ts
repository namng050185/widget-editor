import { faker } from '@faker-js/faker';
import { TypeWidget } from './widget.interface';
import { BANNER_DATA } from './banner';
import { LIST_IMAGE } from './image';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getWidgetTypes = (): Record<string, TypeWidget> => {
  return {
    title: {
      type: 'title',
      title: 'TITLE',
      image: '/widgets/headline.png',
      example: {
        value: faker.lorem.words(5),
        color: '#000',
        headline: 'heading3',
        align: 'center',
      },
    },
    tile: {
      type: 'tile',
      title: 'TILE',
      image: '/widgets/tile.png',
      example: {
        value: {
          title: capitalize(faker.lorem.words(5)),
          align: 'center',
          numberView: 4,
          widthImage: null,
          heightImage: null,
          items: [
            {
              title: capitalize(faker.lorem.words(3)),
              titleColor: '#000',
              iconUrl: '/icons/invoiceAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
              descriptionColor: '#000',
              haveBackground: false,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              enableLink: true,
              linkType: 'internal',
              openInNewTab: false,
              isPaddingTop: true,
            },
            {
              title: capitalize(faker.lorem.words(3)),
              titleColor: '#000',
              iconUrl: '/icons/loginAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
              descriptionColor: '#000',
              haveBackground: false,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              enableLink: true,
              linkType: 'internal',
              openInNewTab: false,
              isPaddingTop: true,
            },
            {
              title: capitalize(faker.lorem.words(3)),
              titleColor: '#000',
              iconUrl: '/icons/serviceAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
              descriptionColor: '#000',
              haveBackground: false,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              enableLink: true,
              linkType: 'external',
              openInNewTab: false,
              isPaddingTop: true,
            },
            {
              title: capitalize(faker.lorem.words(3)),
              titleColor: '#000',
              iconUrl: '/icons/deliveryAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
              descriptionColor: '#000',
              haveBackground: false,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              enableLink: true,
              linkType: 'external',
              openInNewTab: false,
              isPaddingTop: true,
            },
          ],
        },
      },
    },
    html: {
      type: 'html',
      title: 'HTML',
      image: '/widgets/html.png',
      example: {
        styles: {},
        value:
          '<p><b>' +
          capitalize(faker.lorem.words(50)) +
          '</b></p>' +
          capitalize(faker.lorem.words(150)),
      },
    },
    highlight: {
      type: 'highlight',
      title: 'HIGHLIGHT',
      image: '/widgets/highlight.png',
      example: {
        styles: { wrapAll: {} },
        value: {
          title: capitalize(faker.lorem.words(5)),
          background: '#F7F7F7',
          items: [
            {
              title: capitalize(faker.lorem.words(5)),
              imageUrl: LIST_IMAGE[faker.number.int({ min: 0, max: LIST_IMAGE.length - 1 })].path,
              description: capitalize(faker.lorem.words(50)),
              hasActionButton: false,
              actionButtonLabel: '',
              actionButtonUrl: '',
            },
            {
              title: capitalize(faker.lorem.words(5)),
              imageUrl: LIST_IMAGE[faker.number.int({ min: 0, max: LIST_IMAGE.length - 1 })].path,
              description: capitalize(faker.lorem.words(50)),
              hasActionButton: false,
              actionButtonLabel: '',
              actionButtonUrl: '',
            },
            {
              title: capitalize(faker.lorem.words(5)),
              imageUrl: LIST_IMAGE[faker.number.int({ min: 0, max: LIST_IMAGE.length - 1 })].path,
              description: capitalize(faker.lorem.words(50)),
              hasActionButton: false,
              actionButtonLabel: '',
              actionButtonUrl: '',
            },
          ],
        },
      },
    },
    searchBar: {
      type: 'searchBar',
      title: 'SEARCHBAR',
      image: '/widgets/search.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          background: '/images/def_search.jpg',
          color: '#000',
        },
      },
    },
    banner: {
      type: 'banner',
      title: 'BANNER',
      image: 'assets/widgets/banner.png',
      example: {
        styles: {},
        value: {
          items: [
            {
              label: faker.lorem.words(2),
              description: faker.lorem.words(20),
              title: faker.lorem.words(6),
              enableButton: false,
              enableText: false,
              useAnimation: false,
              link: null,
              template: BANNER_DATA[faker.number.int({ min: 0, max: BANNER_DATA.length - 1 })],
            },
            {
              label: faker.lorem.words(2),
              description: faker.lorem.words(20),
              title: faker.lorem.words(6),
              enableButton: false,
              enableText: false,
              useAnimation: false,
              link: null,
              template: BANNER_DATA[faker.number.int({ min: 0, max: BANNER_DATA.length - 1 })],
            },
            {
              label: faker.lorem.words(2),
              description: faker.lorem.words(20),
              title: faker.lorem.words(6),
              enableButton: false,
              enableText: false,
              useAnimation: false,
              link: null,
              template: BANNER_DATA[faker.number.int({ min: 0, max: BANNER_DATA.length - 1 })],
            },
          ],
        },
      },
    },
  };
};
