const kaliData = {
    id: 'kali-linux',
    name: 'Kali Linux',
    brand: 'OffSec',
    description: 'Advanced penetration testing and security auditing distribution.',
    category: 'Security',
    icon: 'https://img.icons8.com/color/512/kali-linux.png',
    iconColor: '#557C94',
    verified: true,
    rating: 4.8,
    downloads: '5.7M',
    lastUpdated: '2025-01-10',
    screenshots: [
        'https://voltnexis.github.io/data/os/screenshots/kali-1.jpg',
        'https://voltnexis.github.io/data/os/screenshots/kali-2.jpg',
        'https://voltnexis.github.io/data/os/screenshots/kali-3.jpg',
        'https://voltnexis.github.io/data/os/screenshots/kali-4.jpg'
    ],
    types: {
        'Installer': {
            editions: {
                'Standard': {
                    architectures: {
                        'amd64': {
                            'ISO': { file: 'kali-linux-2025.3-installer-amd64.iso', size: '4.2 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-amd64.iso' },
                            'Weekly': { file: 'kali-linux-2025-W39-installer-amd64.iso', size: '4.2 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-amd64.iso' }
                        },
                        'arm64': {
                            'ISO': { file: 'kali-linux-2025.3-installer-arm64.iso', size: '3.8 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-arm64.iso' },
                            'Weekly': { file: 'kali-linux-2025-W39-installer-arm64.iso', size: '3.8 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-arm64.iso' }
                        }
                    }
                },
                'Netinstall': {
                    architectures: {
                        'amd64': { 'ISO': { file: 'kali-linux-2025.3-installer-netinst-amd64.iso', size: '600 MB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-netinst-amd64.iso' } },
                        'arm64': { 'ISO': { file: 'kali-linux-2025.3-installer-netinst-arm64.iso', size: '550 MB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-netinst-arm64.iso' } }
                    }
                },
                'Purple': {
                    architectures: {
                        'amd64': {
                            'ISO': { file: 'kali-linux-2025.3-installer-purple-amd64.iso', size: '4.5 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-purple-amd64.iso' },
                            'Weekly': { file: 'kali-linux-2025-W39-installer-purple-amd64.iso', size: '4.5 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-purple-amd64.iso' }
                        }
                    }
                }
            }
        },
        'Virtual': {
            editions: {
                'VMware': {
                    architectures: {
                        'amd64': {
                            '7Z': { file: 'kali-linux-2025.3-vmware-amd64.7z', size: '3.2 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-vmware-amd64.7z' },
                            'Weekly': { file: 'kali-linux-2025-W39-vmware-amd64.7z', size: '3.2 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-vmware-amd64.7z' }
                        }
                    }
                },
                'VirtualBox': {
                    architectures: {
                        'amd64': {
                            '7Z': { file: 'kali-linux-2025.3-virtualbox-amd64.7z', size: '3.1 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-virtualbox-amd64.7z' },
                            'Weekly': { file: 'kali-linux-2025-W39-virtualbox-amd64.7z', size: '3.1 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-virtualbox-amd64.7z' }
                        }
                    }
                }
            }
        },
        'ARM': {
            editions: {
                'Raspberry Pi': {
                    architectures: {
                        'armhf': { 'IMG': { file: 'kali-linux-2025.3-raspberry-pi-armhf.img.xz', size: '1.2 GB', url: 'https://kali.download/arm-images/kali-2025.3/kali-linux-2025.3-raspberry-pi-armhf.img.xz' } },
                        'arm64': { 'IMG': { file: 'kali-linux-2025.3-raspberry-pi-arm64.img.xz', size: '1.4 GB', url: 'https://kali.download/arm-images/kali-2025.3/kali-linux-2025.3-raspberry-pi-arm64.img.xz' } }
                    }
                }
            }
        }
    }
};

export default kaliData;
