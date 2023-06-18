import React, {PropsWithChildren} from 'react'

interface ILanguageProps extends PropsWithChildren{
    isSpanish : boolean
};

const LastesWorkSection : React.FC<ILanguageProps> = ({isSpanish}) => {
 
    return (
       <section className="section is-medium">
          <h2 className='has-text-centered subtitle is-5'>
            {isSpanish ? "Algunos de mi últimos proyectos:".toUpperCase() : "Some of my lastest works:".toUpperCase() }
          </h2>
          
          <hr className='navbar-divider'></hr>
        

       </section>
    );

}

export default LastesWorkSection