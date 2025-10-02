---
title: Home
subtitle: "Political Watch is a plataform of politic innovation that promotes the monitoring, surveillance and citizen participation through developments based on civic technologies to promote the sustainable development."

featuredItems:
  - title: "Qué Hacen Los Diputados"
    subtitle: "This website is our flagship tool for keeping track of what your political representatives get up to."
    description: "It simplifies and clearly lays out the work done in Congress, and is invaluable for journalists, researchers and NGOs pursuing legislative change. It includes trackers for 41 social issues, as well as an index of parliamentary activity."
    button: "View activity"
    link: "https://qhld.es"
    image: /images/featured-qhld.jpg
  - title: "Expanding Democracy"
    subtitle: "A growing platform that seeks to renew democratic practices"
    description: "By drawing on processes of public deliberation and collective intelligence, we generate innovative ideas that can be upscaled to improve methods of governance. Our work transforms dialogue into public policy proposals and long-term democratic infrastructures. Investing in this initiative means supporting a new democratic ecosystem – one that is resilient, participatory and ready to tackle the global challenges of today."
    button: "I want to know more"
    link: "https://ampliandodemocracia.org"
    image: /images/featured-ad.jpg

alliances:
  - image: '/images/alliances/cfall-logo.svg'
    link: 'http://www.codeforall.org/'
    title: 'Code for All'
  - image: '/images/alliances/gdc.png'
    link: 'https://globaldemocracycoalition.org/'
    title: 'Global Democracy Coalition'
  - image: '/images/alliances/logooecd_en.png'
    link: 'http://www.oecd.org'
    title: 'OCDE - Red de innovación sobre participación ciudadana'
  - image: '/images/alliances/iaciudadana.png'
    link: 'https://iaciudadana.org/'
    title: 'IA Ciudadana'
  - image: '/images/alliances/dnc.png'
    link: 'https://www.peoplepowered.org/news-content/introducing-the-democracy-narratives-campaign'
    title: 'Democracy Narratives Campaign'
  - image: '/images/alliances/CPA_logo_small1.jpg'
    link: 'https://www.proacceso.org/'
    title: 'Coalición Proacceso'
---

<hero></hero>

<newsletter light></newsletter>

<banner
  bg="/images/bgbanner.jpg"
  title="The democracy we deserve"
  description="We strive for a fairer world, and we believe the best way to make this happen is by renewing the modern democracy that has become so detached from the people it’s supposed to represent.">
</banner>


<featured
  title="Featured projects"
  :featured="featuredItems">
</featured>

<alliances :alliances="alliances"></alliances>

::BlogLatest
---
postLimit: 2
---
::
