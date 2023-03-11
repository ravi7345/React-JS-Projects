import React from 'react'
//import '../styles/home.scss'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
        <div className='home'id='home'>
            <main>
                <h1>ONE PROJECT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>

            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ducimus accusantium reprehenderit.
                necessitatibus doloribus modi dolores. 
                Ex vero voluptate hic a, illo placeat totam obcaecati soluta consequuntur nobis dolor quia?</p>
            </div>

        </div>
        <div className="home3" id ="about">
            <div>
                <h1>  WHO WE ARE ?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, reiciendis! Praesentium in sed perspiciatis vel suscipit saepe consequatur quam enim ipsam cumque error odio repellat provident expedita magni, ipsa optio.
                    Modi dolorem porro voluptas consequuntur architecto? Voluptas accusantium ullam corporis sit dolore dolorum alias atque aut, optio provident fuga labore sequi obcaecati ipsam maiores ipsa voluptatibus qui ad dolor consectetur!
                    Esse cum, harum a dignissimos illum velit eum id quisquam repellat praesentium distinctio veniam non corrupti dolore assumenda tempora minima at vitae, nesciunt soluta. Debitis ipsa perferendis molestiae officiis modi!
                    Fugiat molestiae illum perspiciatis officiis similique sapiente incidunt quaerat id, provident corporis labore sed ex minima tempore placeat temporibus laudantium velit aliquam possimus accusantium quia architecto cumque! Ratione, autem quasi.
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style ={{animationDelay:"0.3s"}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style ={{animationDelay:"0.5s"}}>
                        <AiFillAmazonCircle/>
                        <p>Amazone</p>
                    </div>
                    <div style ={{animationDelay:"0.7s"}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>                        
                    </div>
                    <div style ={{animationDelay:"1.0s"}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>                        
                    </div>
                </article>
            </div>
        </div>
    
    </>

  )
}

export default Home
