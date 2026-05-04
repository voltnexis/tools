const mintData = {
    id: 'linux-mint',
    name: 'Linux Mint',
    brand: 'Linux Mint Team',
    description: 'Elegant, easy to use, up to date and comfortable desktop operating system.',
    category: 'Linux',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/960px-Linux_Mint_logo_without_wordmark.svg.png',
    iconColor: '#FFFFFF',
    verified: true,
    rating: 4.8,
    downloads: '5.4M',
    lastUpdated: '2024-12-15',
    screenshots: [
        'https://voltnexis.github.io/data/os/scnshots/1.jpg',
        'https://voltnexis.github.io/data/os/scrnshots/2.jpg'
    ],
    types: {
        'Cinnamon': {
            editions: {
                'Standard': {
                    architectures: {
                        'amd64': { 'ISO': { file: 'linuxmint-22.1-cinnamon-64bit.iso', size: '3.1 GB', url: 'https://www.linuxmint.com/edition.php?id=311' } }
                    }
                }
            }
        },
        'MATE': {
            editions: {
                'Standard': {
                    architectures: {
                        'amd64': { 'ISO': { file: 'linuxmint-22.1-mate-64bit.iso', size: '2.9 GB', url: 'https://www.linuxmint.com/edition.php?id=312' } }
                    }
                }
            }
        },
        'XFCE': {
            editions: {
                'Standard': {
                    architectures: {
                        'amd64': { 'ISO': { file: 'linuxmint-22.1-xfce-64bit.iso', size: '2.7 GB', url: 'https://www.linuxmint.com/edition.php?id=313' } }
                    }
                }
            }
        }
    }
};

export default mintData;
