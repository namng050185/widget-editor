import { faker } from '@faker-js/faker';
import { TypeWidget } from './widget.interface';

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
                    ]
                }
            },
        },
        html: {
            type: 'html',
            title: 'HTML',
            image: '/widgets/html.png',
            example: {
                styles: {},
                value: '<p><b>' + capitalize(faker.lorem.words(50)) + '</b></p>' + capitalize(faker.lorem.words(150))
            },
        },
    }
}