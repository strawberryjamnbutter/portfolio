/*
    Qualities:
    MOBILE: 80% JPG quality from sketch
    MOBILE-FULL: 90%
    FULL: 100%
*/
const portfolioData = {
    '/portfolio': [
        {
            id: 1,
            title: 'BARTification',
            size: '30”x28”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/subway-love-lo.jpg',
            hiResImg: 'static/raw-media/subway-love-hi.jpg',
            description: 'BARTification, 2019, acrylic on canvas, 30”x28”.',
        },
        {
            id: 2,
            title: 'under these lights',
            size: '22”x34”.',
            medium: 'acrylic and ink on canvas.',
            lowResImg: 'static/raw-media/under-these-lights-lo.jpg',
            hiResImg: 'static/raw-media/under-these-lights-hi.jpg',
            description:
                'under these lights, 2019, acrylic and ink on canvas, 22”x34”.',
        },
        {
            id: 3,
            title: 'feet study 2',
            size: '21”x32”.',
            medium: 'oil, house paint and ink on wood panels and wood boards.',
            lowResImg: 'static/raw-media/feet-study-2-lo.jpg',
            hiResImg: 'static/raw-media/feet-study-2-hi.jpg',
            description:
                'feet study 2, 2019, oil, house paint and ink on wood panels and wood boards, 21”x32”.',
        },
        {
            id: 4,
            title: 'scene',
            size: '24”x36”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/scene-lo.jpg',
            hiResImg: 'static/raw-media/scene-hi.jpg',
            description: 'scene, 2018, oil on canvas, 24”x36”.',
        },
        {
            id: 5,
            title: 'feet study',
            size: '24”x36”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/feet-study-lo.jpg',
            hiResImg: 'static/raw-media/feet-study-hi.jpg',
            description: 'feet study, 2018, oil on canvas, 24”x36”.',
        },
        {
            id: 6,
            title: 'left down right up',
            size: '36”x24”.',
            medium: 'acrylic and colored pencil on canvas.',
            lowResImg: 'static/raw-media/subcultures-lo.jpg',
            hiResImg: 'static/raw-media/subcultures-hi.jpg',
            description:
                'left down right up, 2019, acrylic and colored pencil on canvas, 36”x24”.',
        },
        {
            id: 7,
            title: 'luo river, 2018, oil on canvas, 40”x30”.',
            size: '40”x30”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/ballerina-lo.jpg',
            hiResImg: 'static/raw-media/ballerina-hi.jpg',
            description: 'luo river, 2018, oil on canvas, 40”x30”.',
        },
        {
            id: 8,
            title: 'become, 2018, oil on canvas, 30”x40”.',
            size: '30”x40”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/intruders-lo.jpg',
            hiResImg: 'static/raw-media/intruders-hi.jpg',
            description: 'become, 2018, oil on canvas, 30”x40”.',
        },
        {
            id: 9,
            title: 'dear my little',
            size: '72”x18”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/dear-my-little-lo.jpg',
            hiResImg: 'static/raw-media/dear-my-little-hi.jpg',
            description:
                'dear my little, 2018, oil on canvas, two panels, each panel 36”x18”.',
            lowResImgWidth: '40%',
        },
        {
            id: 10,
            title:
                'folktales, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
            size: '12”x72”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/white-snake-lo.jpg',
            hiResImg: 'static/raw-media/white-snake-hi.jpg',
            description:
                'folktales, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
        },
        {
            id: 11,
            title: 'letting go',
            size: '30”x40”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/letting-go-lo.jpg',
            hiResImg: 'static/raw-media/letting-go-hi.jpg',
            description: 'letting go, 2018, acrylic on canvas, 30”x40”.',
        },
        {
            id: 12,
            title: 'i learned everything i know from RPGs',
            size: '23”x14”.',
            medium:
                'cut-and-pasted illustrations from storybook, tape, ink, graphite on rice paper.',
            lowResImg: 'static/raw-media/rpgs-lo.jpg',
            hiResImg: 'static/raw-media/rpgs-hi.jpg',
            description:
                'i learned everything i know from RPGs, 2019, cut-and-pasted illustrations from storybook, tape, ink, graphite on rice paper, 23”x14”.',
        },
    ],
    '/not-good-enough-for-a-story': [
        {
            id: 1,
            title: '',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/was-it-really-worth-it-lo.jpg',
            hiResImg: 'static/raw-media/was-it-really-worth-it-hi.jpg',
            description: '',
        },
        {
            id: 2,
            title: '',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/family-dinner-lo.jpg',
            hiResImg: 'static/raw-media/family-dinner-hi.jpg',
            description: '',
        },
        {
            id: 3,
            title: '',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/hi-nice-to-meet-you-lo.jpg',
            hiResImg: 'static/raw-media/hi-nice-to-meet-you-hi.jpg',
            description: '',
        },
        {
            id: 4,
            title: '',
            size: '12”x24”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/night-loops-lo.jpg',
            hiResImg: 'static/raw-media/night-loops-hi.jpg',
            description: '',
        },
        {
            id: 5,
            title: '',
            size: '12”x24”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/good-day-lo.jpg',
            hiResImg: 'static/raw-media/good-day-hi.jpg',
            description: '',
        },
    ],
    '/misc': [
        {
            id: 'deal',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs_deal.gif',
            hiResImg: 'static/raw-media/diary-gifs_deal.gif',
            description: '',
        },
        {
            id: 'breakup',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs_breakup.gif',
            hiResImg: 'static/raw-media/diary-gifs_breakup.gif',
            description: '',
        },
        {
            id: 'real-train',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs_real-train.gif',
            hiResImg: 'static/raw-media/diary-gifs_real-train.gif',
            description: '',
        },
        {
            id: 'club-lonely',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs_club-lonely.gif',
            hiResImg: 'static/raw-media/diary-gifs_club-lonely.gif',
            description: '',
        },
        {
            id: 'pcl',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs-pcl.gif',
            hiResImg: 'static/raw-media/diary-gifs-pcl.gif',
            description: '',
        },
        {
            id: 'club',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs-club.gif',
            hiResImg: 'static/raw-media/diary-gifs-club.gif',
            description: '',
        },
        {
            id: 'taphouse',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs-taphouse.gif',
            hiResImg: 'static/raw-media/diary-gifs-taphouse.gif',
            description: '',
        },
        {
            id: 'train',
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs-train.gif',
            hiResImg: 'static/raw-media/diary-gifs-train.gif',
            description: '',
        },
    ],
};

const getPortfolioData = portfolioKey =>
    Promise.resolve({
        portfolio: portfolioData[portfolioKey],
        activePortfolio: portfolioKey,
    });

export default getPortfolioData;
