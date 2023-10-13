import { useEffect, useState } from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from 'contentful';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from '../GlobalStyle/GlobalStyle.module.scss'


export const CategoryPage = () => {

   const [articles, setArticles] = useState({})
   const { category } = useParams()
   const client = contentful.createClient({

      space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
      environment: "master",
      accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`
   })

   console.log(category);

   useEffect(() => {
      client.getEntries({ content_type: 'article' })
         .then((entries) => setArticles(entries))
         .catch(console.error);

   }, []);

   const dataArray = articles?.items?.filter((item) => {

      if (item.fields.category === category || category === `alle`) {

         return item;
      } else {

         return null;
      }
   });


   // console.log(dataArray);
   // console.log(articles);

   // console.log(text);
   return (
      <>
         {dataArray &&
            <section className={style.sectionStyle}>
               {
                  dataArray.map((item, index) => {
                     return (
                        <div className={style.divStyle} style={{ gridArea: 'article' + (index + 1) }} key={index}>
                           <h2 className={style.headlineStyle}>{item.fields.headline}</h2>


                           <Link style={{ color: 'black' }} to={`/details/${item.sys.id}`}>Læs mere</Link>

                           <p className={style.dateStyle}>
                              {`D.${(new Date(item.fields.date).getDate() < 10 ? '0' : '') + new Date(item.fields.date).getDate()}/${(new Date(item.fields.date).getMonth() < 9 ? '0' : '') + (new Date(item.fields.date).getMonth() + 1)}-${new Date(item.fields.date).getFullYear()}-af:AIM`}
                           </p>
                           <figure>
                              {item.fields.gallery && (
                                 <img src={item.fields.gallery.fields.file.url} alt={item.fields.gallery.fields.title} />
                              )}
                           </figure>
                        </div >
                     )
                  })
               }
            </section >}


      </>
   )
}
