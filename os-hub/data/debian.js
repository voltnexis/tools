const debianData = {
    "id": "debian",
    "name": "Debian",
    "brand": "Debian Project",
    "description": "The universal operating system - stable, secure, and completely free.",
    "category": "Linux",
    "icon": "https://img.icons8.com/color/512/debian.png",
    "iconColor": "#FFFFFF",
    "verified": true,
    "rating": 4.6,
    "downloads": "8.2M",
    "lastUpdated": "2024-11-30",
    "screenshots": [
        "https://upload.wikimedia.org/wikipedia/commons/f/f8/Screenshot_of_Debian_12_%28Bookworm%29_GNOME_43.9%E2%80%94English.png",
        "https://b1490832.smushcdn.com/1490832/wp-content/uploads/2022/02/Xfce-desktop.png",
        "https://b1490832.smushcdn.com/1490832/wp-content/uploads/2022/02/Cinnamon-themes.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20220124180816/dolphin.jpg"
    ],
    "types": {
        "NetInstall": {
            "editions": {
                "Minimal": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-13.2.0-amd64-netinst.iso", "size": "784 MB", "url": "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.2.0-amd64-netinst.iso" } },
                        "arm64": { "ISO": { "file": "debian-13.2.0-arm64-netinst.iso", "size": "736 MB", "url": "https://cdimage.debian.org/debian-cd/current/arm64/iso-cd/debian-13.2.0-arm64-netinst.iso" } },
                        "armhf": { "ISO": { "file": "debian-13.2.0-armhf-netinst.iso", "size": "896 MB", "url": "https://cdimage.debian.org/debian-cd/current/armhf/iso-cd/debian-13.2.0-armhf-netinst.iso" } },
                        "ppc64el": { "ISO": { "file": "debian-13.2.0-ppc64el-netinst.iso", "size": "621 MB", "url": "https://cdimage.debian.org/debian-cd/current/ppc64el/iso-cd/debian-13.2.0-ppc64el-netinst.iso" } },
                        "riscv64": { "ISO": { "file": "debian-13.2.0-riscv64-netinst.iso", "size": "626 MB", "url": "https://cdimage.debian.org/debian-cd/current/riscv64/iso-cd/debian-13.2.0-riscv64-netinst.iso" } },
                        "s390x": { "ISO": { "file": "debian-13.2.0-s390x-netinst.iso", "size": "427 MB", "url": "https://cdimage.debian.org/debian-cd/current/s390x/iso-cd/debian-13.2.0-s390x-netinst.iso" } }
                    }
                }
            }
        },
        "Live": {
            "editions": {
                "GNOME": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-gnome.iso", "size": "3.8 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-gnome.iso" } }
                    }
                },
                "KDE Plasma": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-kde.iso", "size": "3.9 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-kde.iso" } }
                    }
                },
                "Xfce": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-xfce.iso", "size": "3.6 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-xfce.iso" } }
                    }
                },
                "LXQt": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-lxqt.iso", "size": "3.7 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-lxqt.iso" } }
                    }
                },
                "LXDE": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-lxde.iso", "size": "3.5 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-lxde.iso" } }
                    }
                },
                "Cinnamon": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-cinnamon.iso", "size": "3.8 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-cinnamon.iso" } }
                    }
                },
                "MATE": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-mate.iso", "size": "3.7 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-mate.iso" } }
                    }
                },
                "Standard (No GUI)": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-live-13.2.0-amd64-standard.iso", "size": "1.9 GB", "url": "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.2.0-amd64-standard.iso" } }
                    }
                }
            }
        },
        "Installer DVD": {
            "editions": {
                "Complete (DVD-1)": {
                    "architectures": {
                        "amd64": { "ISO": { "file": "debian-13.2.0-amd64-DVD-1.iso", "size": "3.7 GB", "url": "https://cloudfront.debian.net/debian-cd/current/amd64/iso-dvd/debian-13.2.0-amd64-DVD-1.iso" } },
                        "arm64": { "ISO": { "file": "debian-13.2.0-arm64-DVD-1.iso", "size": "3.7 GB", "url": "https://cloudfront.debian.net/debian-cd/current/arm64/iso-dvd/debian-13.2.0-arm64-DVD-1.iso" } }
                    }
                }
            }
        }
    }
};

export default debianData;
