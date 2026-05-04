const windowsData = {
    id: 'windows',
    name: 'Windows',
    brand: 'Microsoft',
    description: 'The world\'s most popular desktop operating system.',
    category: 'Desktop',
    icon: 'https://img.icons8.com/color/512/windows-10.png',
    iconColor: '#00A4EF',
    verified: true,
    rating: 4.5,
    downloads: '2B+',
    lastUpdated: '2024-12-01',
    types: {
        'Consumer': {
            editions: {
                'Windows 11': {
                    architectures: {
                        'x64': {
                            'Official': { file: 'Windows11_English_x64v2.iso', size: '6.2 GB', url: 'https://www.microsoft.com/software-download/windows11' }
                        }
                    }
                },
                'Windows 10': {
                    architectures: {
                        'x64': {
                            'Official': { file: 'Windows10_22H2_English_x64.iso', size: '5.7 GB', url: 'https://www.microsoft.com/software-download/windows10' }
                        }
                    }
                }
            }
        },
        'Server': {
            editions: {
                'Windows Server 2022': {
                    architectures: {
                        'x64': {
                            'Evaluation': { file: 'WindowsServer2022.iso', size: '4.9 GB', url: 'https://www.microsoft.com/en-us/evalcenter/download-windows-server-2022' }
                        }
                    }
                }
            }
        }
    }
};

export default windowsData;
