import React,{createContext, PropsWithChildren, useState, ChangeEvent} from 'react';


/* Context TYPES */
type ContextValuesType = {
    handlerLanguage : (e : ChangeEvent<HTMLSelectElement>) => void;
    language: PageContentStructureType;
}

type PageContentStructureType = {
    menu : {
        home: string;
        about: string;
        porfolio:string;
        blog: string;
        contact:string;
    },
    home: {
        greatingTitle:string;
        initialDescription:string;
        aboutMeButtonText:string;
        bannerText:string;
        bannerTextAutor:string;
        callToActionButtonText:string;
        projectSectionTitle:string;
    },
    about:{
        entranceGreating:string;
        firstParagraphDescription:string;
        secondParagraphDescription:string;
        thirdParagraphDescription:string;
        workedPlacesTitle:string;
        hobbiesTitles: string;
    }
};

type AdmitedLanguagesType = {
    en: PageContentStructureType;
    es: PageContentStructureType;
};

/* Initial variables */
const initialLanguage : AdmitedLanguagesType = {
    es: {
        menu: {
            home: "Inicio",
            about: "Sobre mi",
            porfolio: "Portafolio",
            blog: "Blog",
            contact: "Contacto"
        },
        home : {
            greatingTitle: "Hi there😁👋, I’m Edwin.",
            initialDescription: "¡Desarrollador de software con aptitudes en el desarrollo de aplicaciones: visualmente amigable, escalables y adaptadas a sus necesidades!",
            aboutMeButtonText: "Conoceme +",
            bannerText: "“Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.”",
            bannerTextAutor: "Proverbio africano",
            callToActionButtonText: "💡 ¿Tienes una idea?",
            projectSectionTitle: "Algunos de mis últimos proyectos:"
        },
        about:{
            entranceGreating: "Hola 👋🏻",
            firstParagraphDescription : "Edwin Roman. Desarrollador de Software que disfruta transformar las operaciones industriales y de nuestro diario vivir, en soluciones adaptativas y confiables.",
            secondParagraphDescription: "Él mismo se considera una persona curiosa y analítica, el cual disfruta aprender y compartir experiencias adquiridas con aquellos interesados.",
            thirdParagraphDescription: "Desde 2017 cuenta con experiencia en el desarrollo de aplicaciones y sistemas de información. Participando también en proyectos y actividades docentes del área.",
            hobbiesTitles: "🎢 Mas allá del trabajo:",
            workedPlacesTitle: "🏆 Lugares donde he aportado valor:"
        }
    },
    en: {
        menu: {
            home: "Home",
            about: "About me",
            porfolio: "Porfolio",
            blog: "Blog",
            contact: "Contact"
        },
        home : {
            greatingTitle: "Hi there😁👋, I’m Edwin.",
            initialDescription: `A Backend Sofware Engineer/Developer with decents skills in front-end development, also a passionate of technologies world and how we used to solve real world situations.`,
            aboutMeButtonText: "More about me",
            bannerText: "“Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.”",
            bannerTextAutor: "Proverbio africano",
            callToActionButtonText: "Start a project!",
            projectSectionTitle: "Some of my lastest works:"
        },
        about:{
            entranceGreating: "Hola 👋🏻",
            firstParagraphDescription : "Edwin Roman. Desarrollador de Software que disfruta transformar las operaciones industriales y de nuestro diario vivir, en soluciones adaptativas y confiables.",
            secondParagraphDescription: "Él mismo se considera una persona curiosa y analítica, el cual disfruta aprender y compartir experiencias adquiridas con aquellos interesados.",
            thirdParagraphDescription: "Desde 2017 cuenta con experiencia en el desarrollo de aplicaciones y sistemas de información. Participando también en proyectos y actividades docentes del área.",
            hobbiesTitles: "🎢 Mas allá del trabajo:",
            workedPlacesTitle: "🏆 Lugares donde he aportado valor:"
        }
    },
}

/* THE CONTEXT */
const LanguageContext = createContext({} as ContextValuesType);

export const LanguageContextProvider : React.FC<PropsWithChildren> = ({children}) =>{
    const [language, setLanguage] = useState<PageContentStructureType>(initialLanguage.es);

    const handlerLanguage = (e : ChangeEvent<HTMLSelectElement>) => {
        
        switch(e.target.value){
            case "es":
                setLanguage(initialLanguage.es);
            break;
            case "en":
                setLanguage(initialLanguage.en);
            break;
            default:
                setLanguage(initialLanguage.es);
            break;
        }
    };

    const data : ContextValuesType = {
        handlerLanguage,
        language
    }

    return(<LanguageContext.Provider value={data}>
            {children}
           </LanguageContext.Provider>);
}

export default LanguageContext;