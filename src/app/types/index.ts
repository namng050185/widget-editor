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
      image: '/widgets/banner.png',
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
    categories: {
      type: 'categories',
      title: 'CATEGORIES',
      image: '/widgets/category.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          type: 'support',
          root: '',
        },
      },
    },
    news: {
      type: 'news',
      title: 'NEWS',
      image: '/widgets/news.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          pageSize: 3,
          topicEN: '',
          topicDE: '',
        },
      },
    },
    topArticles: {
      type: 'topArticles',
      title: 'TOPARTICLES',
      image: '/widgets/topatc.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          items: [
            {
              title: 'Invoice',
              iconUrl: '/icons/invoiceAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
            {
              title: 'Login',
              iconUrl: '/icons/loginAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
            {
              title: 'Services',
              iconUrl: '/icons/serviceAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
            {
              title: 'Payment',
              iconUrl: '/icons/walletAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
            {
              title: 'Delivery Status',
              iconUrl: '/icons/deliveryAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
            {
              title: 'Ticket Status',
              iconUrl: '/icons/tiketAtc.svg',
              link: '',
              description: capitalize(faker.lorem.words(20)),
            },
          ],
        },
      },
    },
    support: {
      type: 'support',
      title: 'SUPPORT',
      image: '/widgets/support.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          background: '#F7F7F7',
          items: [
            {
              title: '+49 30 7612 3400',
              link: '',
              iconUrl: '/icons/sp1.svg',
              backgroundUrl: '/icons/bgsp1.svg',
            },
            {
              title: 'Contact Formular',
              link: '',
              iconUrl: '/icons/sp2.svg',
              backgroundUrl: '/icons/bgsp2.svg',
            },
          ],
        },
      },
    },
    helpTopics: {
      type: 'helpTopics',
      title: 'HELPTOPICS',
      image: '/widgets/help.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          items: [
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
            {
              title: capitalize(faker.lorem.words(3)),
              children: [],
            },
          ],
        },
      },
    },
    faq: {
      type: 'faq',
      title: 'FAQ',
      image: '/widgets/accordion.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(5)),
          items: [
            {
              answer: capitalize(faker.lorem.words(50)),
              question: capitalize(faker.lorem.words(15)),
            },
            {
              answer: capitalize(faker.lorem.words(50)),
              question: capitalize(faker.lorem.words(15)),
            },
            {
              answer: capitalize(faker.lorem.words(50)),
              question: capitalize(faker.lorem.words(15)),
            },
          ],
        },
      },
    },
    download: {
      type: 'download',
      title: 'DOWNLOAD',
      image: '/widgets/download.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          description: capitalize(faker.lorem.words(40)),
          items: [
            {
              document: capitalize(faker.lorem.words(3)),
              title: '',
              link: '',
              size: '',
            },
            {
              document: capitalize(faker.lorem.words(3)),
              title: '',
              link: '',
              size: '',
            },
            {
              document: capitalize(faker.lorem.words(3)),
              title: '',
              link: '',
              size: '',
            },
            {
              document: capitalize(faker.lorem.words(3)),
              subtitle: capitalize(faker.lorem.words(3)),
              link: '',
              size: '',
            },
          ],
        },
      },
    },
    stepByStep: {
      type: 'stepByStep',
      title: 'STEPBYSTEP',
      image: '/widgets/step.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          description: capitalize(faker.lorem.words(40)),
          items: [
            {
              title: capitalize(faker.lorem.words(10)),
              content: capitalize(faker.lorem.words(60)),
            },
            {
              title: capitalize(faker.lorem.words(10)),
              content: capitalize(faker.lorem.words(60)),
            },
            {
              title: capitalize(faker.lorem.words(10)),
              content: capitalize(faker.lorem.words(60)),
            },
          ],
        },
      },
    },
    feedback: {
      type: 'feedback',
      title: 'FEEDBACK',
      image: '/widgets/feedback.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          thank: capitalize(faker.lorem.words(5)),
          note: capitalize(faker.lorem.words(7)),
        },
      },
    },
    productComparison: {
      type: 'productComparison',
      title: 'PRODUCTCOMPARISON',
      image: '/widgets/comparison.png',
      example: {
        styles: {},
        value: {
          items: [
            // createproductComparison(),
            // createproductComparison(true),
            // createproductComparison(),
            // createproductComparison(),
          ],
          title: 'Überblick',
          spaceColumn: 10,
          activateDetails: true,
          activateIncluded: true,
        },
      },
    }, 
    productFeature: {
      type: 'productFeature',
      title: 'PRODUCTFEATURE',
      image: '/widgets/table.png',
      example: {
        styles: {},
        value: {
          title: capitalize(faker.lorem.words(4)),
          productFeature: [faker.lorem.words(6), faker.lorem.words(6), faker.lorem.words(6)],
          productVersion: [
            {
              title: faker.lorem.words(2),
              desc: faker.lorem.words(2),
              enableButton: false,
              label: '',
              supported: [true, false, true],
              link: null,
            },
            {
              title: faker.lorem.words(2),
              desc: faker.lorem.words(2),
              enableButton: false,
              label: '',
              supported: [false, false, faker.lorem.words(2)],
              link: null,
            },
            {
              title: faker.lorem.words(2),
              desc: faker.lorem.words(2),
              enableButton: false,
              label: '',
              supported: [true, true, false],
              link: null,
            },
          ],
        },
      },
    },
    image: {
      type: 'image',
      title: 'IMAGE',
      image: '/widgets/image.png',
      example: {
        styles: {},
        value: {
          image: LIST_IMAGE[faker.number.int({ min: 0, max: LIST_IMAGE.length - 1 })].path,
          html:
            '<p><b style="font-size: 1.5em;">' +
            capitalize(faker.lorem.words(12)) +
            '</b></p><p>' +
            capitalize(faker.lorem.words(150)) +
            '</p>',
          option: {
            align: ['start', 'end'][faker.number.int({ min: 0, max: 1 })], // start (left), end (right), none (not view html)
            width: ['4', '6', '8'][faker.number.int({ min: 0, max: 2 })], // 4 (1/3) , 6 (1/2), 8 (2/3)
          },
        },
      },
    },
    webForm: {
      type: 'webForm',
      title: 'WEBFORM',
      image: '/widgets/webform.png',
      example: {
        styles: {},
        value: {
          headline: capitalize(faker.lorem.words(4)),
          form: 'contact_form',
          processId: '',
        },
      },
    },
    embededView: {
        type: 'embededView',
        title: 'TEMPLATE',
        image: '/widgets/template.png',
        example: { styles: {}, value: { itemId: '', title: '' } },
      },
  };
};
