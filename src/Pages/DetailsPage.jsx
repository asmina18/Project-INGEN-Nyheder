
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as contentful from 'contentful';
import style from '../GlobalStyle/GlobalStyle.module.scss'

// Funktionen Details er en React-komponent, der håndterer visning af detaljer for en artikel baseret på id-parametret fra URL'en
export const Details = () => {
   // Hentning af id-parametret fra URL'en ved hjælp af React Router hook
   const { id } = useParams()

   // Initialisering af state-variabel til at opbevare artikeldata
   const [articles, setArticles] = useState({})

   // Oprettelse af Contentful-klient med de nødvendige autentificeringsoplysninger fra miljøvariabler
   const client = contentful.createClient({
      space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
      environment: "master",
      accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`
   })

   // Effekthåndterer, der kaldes, når komponenten monteres, for at hente artikeldata fra Contentful
   useEffect(() => {
      // Anmodning om at hente alle artikler af typen 'article' fra Contentful
      client.getEntries({ content_type: 'article' })
         // Håndtering af succes ved at opdatere state-variablen med hentede artikler
         .then((entries) => setArticles(entries))
         // Håndtering af fejl ved at logge fejlmeddelelsen til konsollen
         .catch(console.error);

   }, []);

   // Filtrering af artikler baseret på det modtagne id-parametre
   const dataArray = articles?.items?.filter((item) => {
      // Hvis id'et for den aktuelle artikel matcher det id, der er modtaget fra URL'en
      if (item.sys.id === id) {
         // Returner hele artikelobjektet
         return item;
      } else {
         // Hvis id'et ikke matcher, returneres null
         return null;
      }
   });
   // Udskrivning af det filtrerede datarray til konsollen
   // console.log(dataArray);

   // Rendere komponenten
   return (
      <>
         {dataArray &&
            <section className={style.sectionDetailsStyle}>
               {
                  // Mapping gennem det filtrerede datarray for at vise artikeloplysninger
                  dataArray.map((item, index) => {
                     return (
                        <article key={index}>
                           <figure>
                              {/* Visning af artikelens billede, hvis det findes */}
                              {item.fields.gallery && (
                                 <img src={item.fields.gallery.fields.file.url} alt={item.fields.gallery.fields.title} />
                              )}
                           </figure>
                           {/* Visning af artikelens overskrift */}
                           <h2>{item.fields.headline}</h2>
                           {/* Visning af artikelens dato */}
                           <p className={style.dateStyle}>{`D.${(new Date(item.fields.date).getDate() < 10 ? '0' : '') + new Date(item.fields.date).getDate()}/${(new Date(item.fields.date).getMonth() < 9 ? '0' : '') + (new Date(item.fields.date).getMonth() + 1)}-${new Date(item.fields.date).getFullYear()}-af:AIM`}</p>
                           {/* Mapping gennem indholdet af artikelens tekst */}
                           <div className={style.textDiv}>{item.fields.article.content.map((item, index) => {
                              return (
                                 <article key={index} >
                                    {item.content.map((item, index) => {
                                       return (
                                          // Visning af teksten i artiklen
                                          <p key={index}>{item.value}</p>
                                       )
                                    })}
                                 </article>
                              )
                           })}</div>
                        </ article>
                     )
                  })}
               {/* Link til at gå tilbage til startsiden */}
               <button >
                  <Link className={style.homeLinkStyle} to="/category/alle/"> Home</Link>
               </button>
            </section >}

      </>

   )
}
