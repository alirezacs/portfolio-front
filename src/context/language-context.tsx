
import React, { createContext, useState, useContext, useEffect } from "react";

type Language = "fa" | "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  dir: string;
};

const translations = {
  en: {
    "name": "Alireza Mardani",
    "role": "Fullstack Web Developer",
    "about": "About Me",
    "skills": "Skills",
    "experience": "Experience",
    "portfolio": "Portfolio",
    "achievements": "Achievements",
    "contact": "Contact",
    "aboutText": `
      Hi, I’m a 21-year-old Full Stack Developer with over 5 years of hands-on experience building web applications. My main stack includes PHP and Laravel for the backend and Next.js for the frontend. I’m passionate about creating clean, scalable, and user-friendly web solutions.

        Over the years, I’ve worked with several companies such as Fanavaran, Khoshbin, and others, contributing to a variety of real-world projects. I’ve also built and launched my own projects, including:

        Sinaquf – an e-commerce store

        Shikopik – a stylish online shop

        Tarzan – a pet shop web platform

        Shenobook – an online bookstore
        …and many more.

        I was born in Tehran, Iran, and I’m currently studying at Islamic Azad University of Karaj. One of my proudest achievements is earning a Silver Medal in the World Skills National Competitions, which reflects my dedication and skill in web development.

        Let’s build something amazing together!
    `,
    "nationalMedal": "National Silver Medal in Web Programming",
    "nationalMedalDescription": "Awarded the Silver Medal at the WorldSkills National Competitions, recognizing outstanding technical skill, creativity, and performance in web development. This achievement reflects a high level of dedication, precision, and real-world problem-solving ability in a competitive, high-pressure environment.",
    "dotnetSkills": ".NET Development",
    "viewResume": "View Resume",
    "contactMe": "Contact Me",
    "language": "Language",
    "work1Title": "FrontEnd Developer",
    "work1Company": "Fanavaran",
    "work1Date": "2025 - Present",
    "work1Desc": "Senior Front End Developer",
    "work2Title": "Freelancer",
    "work2Company": "-",
    "work2Date": "2025 - before",
    "work2Desc": "I Was Work As Freelancer And Make Websites Such As Store, Personal, News Site, Corporate and etc.",
    "portfolio1Title": "AI Chatbot Assistant",
    "portfolio1Desc": "Developed an intelligent chatbot using NLP techniques that achieved 95% accuracy in understanding user queries.",
    "portfolio2Title": "Predictive Analysis System",
    "portfolio2Desc": "Built a machine learning system that predicts customer behavior with 87% accuracy using historical data.",
    "portfolio3Title": "Sentiment Analysis Tool",
    "portfolio3Desc": "Created a sentiment analysis tool for social media monitoring that processes millions of posts daily."
  },
  fa: {
    "name": "علیرضا مردانی",
    "role": "Fullstack Web Developer",
    "about": "درباره من",
    "skills": "مهارت‌ها",
    "experience": "تجربیات",
    "portfolio": "نمونه کارها",
    "achievements": "دستاوردها",
    "contact": "ارتباط با من",
    "aboutText": `
      درباره من
      سلام! من یک توسعه‌دهنده فول‌استک ۲۱ ساله هستم با بیش از ۵ سال تجربه عملی در ساخت اپلیکیشن‌های وب. تخصص اصلی من استفاده از PHP و Laravel در بک‌اند و Next.js در فرانت‌اند است. به ساخت راهکارهای تمیز، مقیاس‌پذیر و کاربرپسند علاقه‌مندم.

      در این سال‌ها با شرکت‌هایی مانند فن‌آوران، خوشبین و دیگران همکاری داشته‌ام و در پروژه‌های متنوعی مشارکت کرده‌ام. همچنین چند پروژه شخصی راه‌اندازی کرده‌ام، از جمله:

      Sinaquf – فروشگاه اینترنتی

      Shikopik – فروشگاه مد و پوشاک آنلاین

      Tarzan – پت‌شاپ آنلاین

      Shenobook – فروشگاه کتاب آنلاین
      و پروژه‌های دیگر.

      من در تهران، ایران متولد شده‌ام و هم‌اکنون دانشجوی دانشگاه آزاد اسلامی واحد کرج هستم. یکی از افتخارات من کسب مدال نقره در مسابقات ملی مهارت‌های جهانی است که نشان‌دهنده تعهد و مهارتم در توسعه وب است.

      بیایید با هم چیزهای فوق‌العاده‌ای بسازیم!
    `,
    "nationalMedal": "مدال نقره برنامه نویسی وب",
    "nationalMedalDescription": "برنده مدال نقره در مسابقات ملی مهارت‌های جهانی؛ این افتخار نشان‌دهنده مهارت فنی برجسته، خلاقیت و عملکرد عالی در حوزه توسعه وب است. این دستاورد بیانگر تعهد بالا، دقت و توانایی حل مسئله در شرایط رقابتی و پر‌فشار می‌باشد.",
    "viewResume": "مشاهده رزومه",
    "contactMe": "تماس با من",
    "language": "زبان",
    "work1Title": "توسعه دهنده فرانت اند",
    "work1Company": "فناوران",
    "work1Date": "۲۰۲۵ - تاکنون",
    "work1Desc": "Senior Front End Developer",
    "work2Title": "فریلنسر",
    "work2Company": "-",
    "work2Date": "۲۰۲۵ - قبل",
    "work2Desc": "بصورت فریلنسر فعالیت میکردم و سایت ها فروشگاهی، شخصی، شرکتی و... میساختم.",
    "portfolio1Title": "دستیار چت‌بات هوشمند",
    "portfolio1Desc": "توسعه یک چت‌بات هوشمند با استفاده از تکنیک‌های پردازش زبان طبیعی که به دقت ۹۵٪ در درک پرسش‌های کاربران دست یافته است.",
    "portfolio2Title": "سیستم تحلیل پیش‌بینی",
    "portfolio2Desc": "ساخت سیستم یادگیری ماشین که رفتار مشتریان را با دقت ۸۷٪ با استفاده از داده‌های تاریخی پیش‌بینی می‌کند.",
    "portfolio3Title": "ابزار تحلیل احساسات",
    "portfolio3Desc": "ایجاد یک ابزار تحلیل احساسات برای نظارت بر رسانه‌های اجتماعی که روزانه میلیون‌ها پست را پردازش می‌کند."
  },
  fr: {
    "name": "Alireza Mardani",
    "role": "Fullstack Web Developer",
    "about": "À propos de moi",
    "skills": "Compétences",
    "experience": "Expérience",
    "portfolio": "Portfolio",
    "achievements": "Réalisations",
    "contact": "Contact",
    "aboutText": `
      À propos de moi
      Bonjour ! Je suis un développeur Full Stack de 21 ans avec plus de 5 ans d'expérience pratique dans la création d'applications web. Mon stack principal comprend PHP et Laravel côté backend, et Next.js côté frontend. Je suis passionné par la création de solutions web propres, évolutives et conviviales.

      Au fil des années, j’ai travaillé avec plusieurs entreprises telles que Fanavaran, Khoshbin, et d'autres, en contribuant à divers projets réels. J’ai aussi développé mes propres projets, notamment :

      Sinaquf – une boutique en ligne

      Shikopik – une boutique de mode en ligne

      Tarzan – une plateforme de petshop

      Shenobook – une librairie en ligne
      …et bien plus encore.

      Je suis né à Téhéran, Iran, et je poursuis actuellement mes études à l’Université Islamique Azad de Karaj. Je suis fier d’avoir remporté une médaille d’argent aux compétitions nationales WorldSkills, ce qui reflète mon engagement et mes compétences en développement web.

      Créons ensemble quelque chose d’exceptionnel !
    `,
    "nationalMedal": "Médaille d'argent nationale en programmation web",
    "nationalMedalDescription": "Médaille d'argent remportée aux compétitions nationales WorldSkills, récompensant des compétences techniques exceptionnelles, de la créativité et une performance remarquable en développement web. Cette distinction reflète un haut niveau d'engagement, de précision et de capacité à résoudre des problèmes dans un environnement compétitif et exigeant.",
    "viewResume": "Voir CV",
    "contactMe": "Me Contacter",
    "language": "Langue",
    "work1Title": "Développeur FrontEnd",
    "work1Company": "Fanavaran",
    "work1Date": "2025 - présent",
    "work1Desc": "Développeur Front-End Sénior",
    "work2Title": "Freelance",
    "work2Company": "-",
    "work2Date": "2025 - avant",
    "work2Desc": "Je travaille en tant que pigiste et crée des sites Web tels que des magasins, des sites personnels, des sites d'actualités, des entreprises, etc.",
    "portfolio1Title": "Assistant Chatbot IA",
    "portfolio1Desc": "Développement d'un chatbot intelligent utilisant des techniques de NLP qui a atteint une précision de 95% dans la compréhension des requêtes des utilisateurs.",
    "portfolio2Title": "Système d'Analyse Prédictive",
    "portfolio2Desc": "Construction d'un système d'apprentissage automatique qui prédit le comportement des clients avec une précision de 87% en utilisant des données historiques.",
    "portfolio3Title": "Outil d'Analyse des Sentiments",
    "portfolio3Desc": "Création d'un outil d'analyse des sentiments pour la surveillance des médias sociaux qui traite des millions de publications quotidiennement."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    // Set the direction based on the language
    const newDir = language === "fa" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.setAttribute("dir", newDir);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
