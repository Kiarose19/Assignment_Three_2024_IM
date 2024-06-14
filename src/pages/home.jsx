import React from "react";
import VideoBackground from "../components/VideoBackground";
import MyImageGallery from '../components/ImageGallery';
import "./home.css";
import sainz2 from "./image/sainz2.jpg";
import leclerc2 from "./image/leclerc2.jpg";
import SoundPlayer from './SoundPlayer';
import SoundPlayer2 from "./SoundPlayer2";



function Home() {
    return(
       
        <div className="home">
             <VideoBackground/>
             
             <header> 

             <img src="https://media2.giphy.com/media/4YxbWc42GOIN7YHjG7/giphy.gif" id="pirelli" alt="" />
             <img src="https://media2.giphy.com/media/4YxbWc42GOIN7YHjG7/giphy.gif" id="pirelli" alt="" />
             <img src="https://media2.giphy.com/media/4YxbWc42GOIN7YHjG7/giphy.gif" id="pirelli" alt="" />
             <img src="https://media2.giphy.com/media/4YxbWc42GOIN7YHjG7/giphy.gif" id="pirelli" alt="" />
             

             <span className="origin">
                <h3>HISTORY OF FORMULA 1</h3>
             </span>
             
             <span className="origins">
                <h3>HISTORY OF FORMULA 1</h3>
             </span>
             </header>

            <h3>F1 Origins</h3>
            <p>Formula 1 originated in the <span>1950s</span> and was first known as <span>grand prix racing</span>.</p>
            <p>The <span>first World Championship</span> race was held at <span>Silverton</span> in the <span>United Kingdom.</span></p>
            <p>The <span>championship</span> was <span>created</span> by the <span>Fédération Internationale de l'Automobile.</span></p>
            <p>The <span>early years</span> of <span>F1</span> saw <span>dominance</span> by <span>Alfa Romeo</span>, with Italian driver <span>Giuseppe</span> </p>
            <p><span>Farina winning</span> the <span>first championship</span> in 1950, and Argentine driver <span>Juan Manuel</span> </p>
            <p><span>Fangio</span> becoming a significant figure, <span>winning five championships</span> in the <span>1950s</span>.</p>
            <p>This <span>decade</span> was also marked by rapid <span>technical developments</span>, including the</p>
            <p>shift from <span>front-engined</span> to <span>rear-engined</span> cars towards the end of the 1950s.</p>
            <p>The <span>image alongside</span> shows one of the <span>first f1</span> racing <span>cars</span> from the 1950s known</p>
            <p>as the <span>Alfa Romeo 158</span>, which <span>won every race</span> it <span>entered</span> in the <span>1950s</span>.</p>
            <img src="https://www.ultimatecarpage.com/images/car/127/Ferrari-246-F1-Dino-1829.jpg" alt="" />

            <div className="info">
                <img src="https://media.formula1.com/content/dam/fom-website/manual/Misc/1950%20Britain/779_40.jpg.img.640.medium.jpg/1431505132317.jpg" alt="" />
            </div>

            <div className="history">
            <p>The <span>first world championship race</span> had <span>two titles</span>. Officially it was the 
                 <span> Grand Prix</span></p>
                 <p><span>d’Europe</span> - the first time that title had ever gone to a race outside Italy or France -</p>
                 <p>but as the race was <span>held on UK soil</span> it 
                 incorporated the <span>British Grand Prix</span>.</p> 
                <p>From 1952 until 2011 Woodcote was Silverstone’s final bend, but for the inaugural</p>
                <p>world championship event the sweeping right hander was the 4.6km circuit’s first corner -</p>
                <p>and thus the first corner tackled in the history of F1 racing. From there the drivers </p>
                <p>would take on six other turns - Copse, Maggots, Becketts, Chapel, Stowe and Club -</p>
                <p> before arriving at the final corner, Abbey. The <span>pit lane</span> and <span>starting grid</span> were</p>
                <p>situated <span>between Abbey</span> and <span>Woodcote</span>, with the <span>cars lining</span> up for the start in <span>4-3-4</span> formation.</p>
            </div>

            <div className="sound1">   
                <SoundPlayer/>
            </div>

            <span className="ferrari1">
                <h3>HISTORY OF FERRARI</h3>
             </span>
             
             <span className="ferrari2">
                <h3>HISTORY OF FERRARI</h3>
             </span>

            <div className="ferrari">
                <h3>Scuderia Ferrari</h3>
                <h4>The Origins of Scuderia Ferrari</h4>
                <p><span>Scuderia Ferrari</span> was <span>one</span> of the <span>first teams</span> to <span>join formula one</span> when it started.</p>
                <p>It was <span>founded</span> by <span>Enzo Ferrari</span> on <span>November 16, 1929</span>, in Modena, <span>Italy</span>.</p>
                <p>Initially, it wasn't a car manufacturer but rather a team that prepared and</p>
                <p>raced Alfa Romeo cars. The team began competing in various racing events,</p>
                <p>quickly establishing a reputation for success. In <span>1947</span>, <span>Ferrari transitioned</span> from a</p>
                <p><span>racing team</span> to a <span>car manufacturer</span>, producing its first car, the 125 S. Later, <span>Ferrari</span> </p>
                <p><span>entered</span> the <span>newly established Formula 1 World Championship</span> in 1950. The team</p>
                <p>debuted at the Monaco Grand Prix with drivers Alberto Ascari and Luigi Villoresi.</p>
                <p><span>Ferrari's first Formula 1 victory</span> came in <span>1951</span> at the British Grand Prix with Froilán</p>
                <p> González behind the wheel. The <span>team won</span> its <span>first drivers' championship</span> in <span>1952</span>.</p>
                <img src="https://images.squarespace-cdn.com/content/v1/65296fd6785a5942a57d22e7/1697214578019-3VLL25P45R41DHSSNDS4/ferrari-125-f1-03.jpg" alt=""  />
            </div>

            <div className="scuderia">
               <img src="https://e0.365dm.com/24/02/768x432/skysports-ferrari-sf24-launch_6454000.png?20240213110836" alt=""  />
            </div>

            <div className="scuderiaF">
                <h4>The Present Day Ferrari - SF-24</h4>
            <p>The <span>image on the left</span> displays the <span>current Scuderia Ferrari</span> F1 racing car. It is</p>
                <p><span>known</span> as the <span>SF-24</span>, because it was the car launched this year. Ferrari’s F1 cars</p>
                <p>known for their advanced aerodynamics and lightweight yet strong chassis, </p>
                <p>primarily constructed from carbon fiber composites. The <span>power unit</span> consists of a</p>
                <p><span>1.6-liter V6 turbocharged engine</span> coupled with an <span>Energy Recovery System</span> (ERS) that </p>
                <p><span>recovers energy</span> from <span>braking</span> (MGU-K) and from the <span>turbocharger</span> (MGU-H).The</p>
                <p>car's design is constantly evolving to comply with and take advantage of the latest </p>
                <p> FIA regulations, which include aerodynamics, weight, power unit efficiency, and safety standards.</p>
            </div>

            <div className="sound2">
                <SoundPlayer2/>
            </div>

            <span className="drivers">
                <h3>THE FERRARI DRIVERS</h3>
            </span>

            <span className="drive">
                <h3>THE FERRARI DRIVERS</h3>
            </span>

            <div className="team">
                <h4>Ferrari Driver - Carlos Sainz</h4>
                <p>Each team in Formula 1 is made up of two drivers. One of <span>Scuderia Ferrari's drivers</span> </p>
                <p>is <span>Carlos Sainz</span>. Born in Madrid, Spain, <span>Sainz</span> has <span>21 podiums</span> with <span>1075,5 points</span>.</p>
                <p>After entering F1’s Bull Ring paired alongside Max Verstappen at Toro Rosso in 2015,  </p>
                <p>Sainz quickly showed his fighting spirit. A <span>tenacious racer</span>, he puts the <span>car on the edge</span> </p>
                <p>as he <span>hustles</span> his way <span>through the pack</span>. He is <span>intelligent</span> as well as <span>instinctive</span>, thinking </p>
                <p>his way through a race and into the points.This <span>calm temperament</span> follows him <span>off track </span> </p>
                <p>where he remains unfazed by the pressures of forging a Grand Prix career with a </p>
                <p>famous name. Sainz is the son of double World Rally champion, also his namesake, </p>
                <p>and has brought some of Dad’s driving skills to the F1 circuit.</p>
                <img src= {sainz2} alt="Pic of ferrari driver, Carlos Sainz"  />
            </div>

          
           <span className="driver">
             <img src= {leclerc2} alt="Pic of ferrari driver, Charles Leclerc" />
           </span>
           
           <div className="driver2">
                <h4>Ferrari Driver - Charles Leclerc</h4>
                <p><span>Scuderia Ferrari's</span> other <span>driver</span> is <span>Charles Leclerc</span>. Born in Monte Carlo, Monaco,</p>
                <p><span>Leclerc</span> has <span>35 podiums</span> with <span>1212 points</span>. Stepping up to F1 in 2018, <span>Leclerc</span> showed </p>
                <p>flashes of <span>ballistic pace</span> on Saturdays and <span>racing brilliance</span> on Sundays, dragging</p>
                <p> his Sauber beyond its limits – and earning himself a money-can’t-buy race seat at</p>
                <p> Ferrari for 2019,stepping into the shoes of the Scuderia’s last world champion,</p>
                <p>Kimi Raikkonen. A maiden <span>F1 victory</span> at <span>Spa</span> was <span>followed by another</span> a <span>week later</span> on </p>
                <p><span>Ferrari’s</span> hallowed <span>home turf</span> of <span>Monza</span>. The 2020 and ’21 seasons bore little fruit</p>
                <p>for Ferrari, but Leclerc maintained his resolve to emerge a true title contender in 2022.</p>
                <p>With <span>three wins, 11 podiums</span> and <span>nine pole positions</span>, he was the only man able to </p>
                <p>consistently take the fight to champion Max Verstappen.</p>
            </div>
            
            <span className="italy">
                <h3>THE HOME CIRCUIT</h3>
            </span>

            <span className="italy2">
            <h3>THE HOME CIRCUIT</h3>
            </span>

            <div className="monza">
                <h4>The Italian Grand Prix - Monza</h4>
                <p><span>Constructed</span> in just <span>110 days</span> in <span>1922</span>, the <span>Autodromo Nazionale Monza</span> was the world’s </p>
                <p><span>third purpose-built</span> race track,coming after Brooklands in the UK and Indianapolis in the US.</p>
                <p><span>Monza opened</span> its doors on <span>September 3 1922</span>, just a week before it hosted that year’s  </p>
                <p>Italian Grand Prix.  It was then part of the <span>original Formula 1 calendar</span> in <span>1950</span>, and</p>
                <p>has held the Italian Grand Prix every year but one since then. Formula 1’s  </p>
                <p><span>fastest ever lap</span> was set at <span>Monza</span> – Williams driver Juan Pablo Montoya’s 260.6km/h effort</p>
                <p>during practice for the 2004 Grand Prix - which should give you some idea of the nature of </p>
                <p>the track. It is <span>situated</span> near <span>Ferrari headquarters</span>.</p>
                <img src="https://assets-global.website-files.com/62b19deb792118ef558a329d/65c94fea3533e4d1e829ef03_monza-trackmap.png" alt="" />
            </div>

            <span className="monza1">
                <h3>THE FERRARI'S EVOLUTION</h3>
            </span>

            <span className="monz">
            <h3>THE FERRARI'S EVOLUTION</h3>
            </span>

            <div className="monza2">
              <img src="https://i.gifer.com/2dU9.gif" alt="" />
            </div>

            <footer className="footer">
                created in 2024 by Kiara Mohun
            </footer>

          
        </div>

       

        
    )
}

export default Home;

/*used https://react.dev/learn */