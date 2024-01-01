import './AboutPage.css';
import uasdLogo from '../assets/img/Institutions/logo_uasd.svg';
import ondpLogo from '../assets/img/Institutions/logo_ondp.png';
import itfamLogo from '../assets/img/Institutions/logo_itfam.jpg';
import rwCertificate from '../assets/img/badges/remote-work-certification.png';
import sfCertificate from '../assets/img/badges/scrum-certification.png';
import itCertificate from '../assets/img/badges/it-essential-cisco-certification.png';
import curriculumSource from '../assets/pdf/International Base CV - Edwin Roman.pdf';
import meTalkingImage from '../assets/img/me-talking-in-public.jpg';

import { IExperice } from '../types/experices';
import { IoIosDocument } from "react-icons/io";
import { useEffect, useRef } from 'react';
import IBadgeInfo from '../components/types/IBadgeInfo';
import BadgeComponent from '../components/badge/BadgeComponent';



let experices : IExperice[] = [
  {
      companyLogoURL : uasdLogo,
      role: 'Help Desk / IT Support',
      startDate: new Date(2019,9,1),
      endDate: new Date(2020,2,13),
      description: 'Estuve como soporte TI en el centro de COMPU-CIENCIAS en donde bajo el mando del un Soporte Técnico Senior estuvimos llevando a cabo mantenimientos preventivos de los equipos de cómputos existentes en el área de la facultad de ciencias, reportes y translado de un nuevo centros de computo.'
  },
  {
    companyLogoURL : itfamLogo,
    role: 'Professor Assistant',
    startDate: new Date(2022,3,1),
    endDate: new Date(2022,3,30),
    description: "Estuve a cargo de un grupo de 4 secciones cada una con un total de 20 a 18 estudiantes, a las cuales impartía la asignatura de “Introducción a las Bases de Datos”, sirviendo de apoyo y guía para la realización de prácticas y explicación de tópicos referentes a las BD y Microsoft Access."
  },
  {
    companyLogoURL : ondpLogo,
    role: 'Software Engineer',
    startDate: new Date(2023,1,1),
    endDate: new Date(2023,12,30),
    description: "Desarrollo de proyectos web y móvil basados en requerimientos técnicos y no técnicos. Aspectos: Análisis de los requerimientos dados, redacción de documentación técnica, desarrollo de servicios web, autenticación y autorización de acceso a recursos, desarrollo multiplataformas. Adaptación de los proyectos existente en base a las normas dictada por la OGTIC: NORTIC: A6 y NORTIC: A4 y más."
  },
];

experices = experices.sort((x, y) => x.endDate > y.endDate ? -1 : 1);

function AboutPage() {
  
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    
    const badgeRef = useRef<IBadgeInfo[]>([
        {
        certificateImageUrl: rwCertificate,
        certificateName: "Remote Work Professional Certification - RWPC™",
        issuerName: "CertiProf"
        },
        {
            certificateImageUrl: sfCertificate,
            certificateName: "Scrum Foundation Professional Certification - SFPC™ (v2020)",
            issuerName: "CertiProf"
        },
        {
            certificateImageUrl: itCertificate,
            certificateName: "IT Essentials - Networking Academy",
            issuerName: "Cisco"
        }
    ]);

    return (
        <section className='container'>
            
            <article className="section">
                <h1 className='title is-1 text-right'>Hola 👋🏻</h1>
                <hr></hr>
                <div className="columns">

                    <div className="column">
                        <figure className="image started-image is-5by3 v-centered">
                            <img className='image-border' src={meTalkingImage} alt="Edwin Roman into the computer science faculty" />
                        </figure>
                    </div>

                    <div className="column">
                        <div className="content is-medium">
                            <p>Desde 2018 cuenta con experiencia en el desarrollo de aplicaciones y sistemas de información. Edwin Roman, desarrollador de software que disfruta transformar las operaciones industriales y de nuestro diario vivir, en soluciones adaptativas y confiables.</p>
                            <p>Él mismo se considera una persona curiosa, proactiva y analítica, cuyos intereses estan en el constante flujo de aprender y compartir experiencias adquiridas con aquellos interesados.</p>
                        </div>
                    </div>
                    
                </div>
            </article>
            
            <article className="section">
                <h1 className='title is-3 text-left mt-3'>🏆 Lugares donde he aportado valor:</h1>
                <hr></hr>

                <div className='section'>

                    {experices.map((data, idx) => (
                        <div className="grid-container mb-4" key={`${idx}-${data.companyName}`}>
                            <figure>
                                <img src={data.companyLogoURL} style={{maxWidth:'100%', maxHeight:'150px'}}></img>
                            </figure>
                            <div>
                                <h2 className='is-size-5'>
                                    <b>{data.role}</b> <span className='is-size-6'> ({data.startDate.getFullYear()} - {data.endDate.getFullYear()}) </span>
                                </h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
                
                <div className="text-center">
                    <a href={curriculumSource} target="_blank" className="button is-medium is-info">
                        <IoIosDocument></IoIosDocument>
                        Currilucum (CV)
                    </a>
                </div>

            </article>

            <article className="section">
                <h1 className='title is-3 text-right mt-3'>🏆 Conocimientos validados por:</h1>
                <hr></hr>

                <div className="columns is-multiline is-mobile" >
                    {
                        badgeRef.current.map((data, index) => (
                        <div className="column is-full-mobile is-half-tablet is-half-desktop" key={`${data.issuerName}-${index}`}>
                            <BadgeComponent badge={data}></BadgeComponent>
                        </div>
                        ))
                    }                         
                </div>
                <p className='text-center'>
                    Entre otros diplomas y certificado...
                </p>
            </article>

            <article className="section">
                <h1 className='title is-3 text-left mt-3'>🎢 Mas allá del trabajo:</h1>
                <hr></hr>

                <div className="columns" style={{textAlign:"center"}}>
                    <div className="column content is-large">
                        <h1>🏀</h1>
                        <p>¡Me gusta el baloncesto!</p>
                    </div>
                    <div className="column content is-large">
                        <h1>🔭⚙</h1>
                        <p>¡Las series de Ingeniería y ciencias!</p>
                    </div>
                    <div className="column content is-large">
                        <h1>🗿</h1>
                        <p>¡Estudiar idiomas y culturas!</p>
                    </div>
                </div>
            </article>

            <article className='section'>

                <h1 className='title is-3 text-right mt-3'>📹 Sobre mi You Tube Channel:</h1>
                
                <div className="columns">
                    <div className="column content is-large">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TFZWamWmhEk?si=YjxKpXB-KBBIhEYG&amp;start=27" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
                    </div>
                    <div className="column">
                        <div className="content is-medium">
                            <p>
                                Mi pasión por la tecnología se ha fusionado con mi deseo de compartir conocimiento y fomentar el aprendizaje en la comunidad de TI. Cada línea de código que escribo y video que comparto en YouTube, son pensado con el fin de seguir aportando a la expansion del conocimiento. 
                            </p>
                            <p className='text-center'>
                                Creo fervientemente que el conocimiento compartido es un faro que guía a la innovación y el progreso. Aspiro a inspirar a otros a abrazar la curiosidad, a desafiar límites y a contribuir cosas ingreibles con la tecnológia!"                     
                            </p>
                        </div>
                    </div>
                </div>

            </article> 

        </section>
    );

}

export default AboutPage;