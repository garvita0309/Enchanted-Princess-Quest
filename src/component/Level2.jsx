import React, { Component } from 'react';
import "../styles/level2.css";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import Card from "./Card";
import queenimage from "../images/queen.jpg"
import Aladinimage from "../images/aladin.jpg";
import drizellaimage from "../images/drizella.jpg"

const Level2 =()=>{
    return(
        <>
         <div className='con-level2'>
             <div className='innercont-level2'>
                <h2>Welcome to Stage-2 of the game</h2>
                <hr />
                <br />
                  <p>Follow the given hints to reach your destination, and you'll get there with ease.</p>
                  <p>Sometimes you need to find the hidden meaning of the text.</p>
                  <p>Caution! Sometimes correct answer can even end your game.</p>
                  <center><p>Skill may increase your odds of winning, but luck ultimately determines the outcome of the game.</p></center>
                  
            </div>
            <div className='cards'>
                  <div className='cd'>
                  <Card ans="Grimhilde"
                  link="/level31"
                  message="Use your brain."
                  image={queenimage}
                  title="Guess who I am?"
                  content="More commonly known as the Evil Queen, she is one of the most iconic villains in the world of fairy tales. She is the stepmother of Snow White, the beloved princess who is the protagonist of the classic tale. She is depicted as a beautiful but vain and wicked queen who becomes jealous of Snow White's beauty and orders her death. She is often portrayed as an antagonist with a manipulative personality and a penchant for using dark magic and deception to achieve her nefarious goals. " />
                  </div>
                  <div className='cd'>
                  <Card ans="Aladdin"
                  link="/error"
                  message="Use your brain."
                  image={Aladinimage}
                  title="Guess who I am?"
                  content="He is a beloved Disney character known for his charming personality, quick wit, and daring adventures. He fell in love with Princess Jsmine.and sets out to win her heart while also battling the evil sorcerer Jafar. With his trusty sidekick Abu, a magic carpet, and a powerful genie at his disposal, he proves himself to be a true hero as he outsmarts his enemies and saves the day." />
                  </div>
                  <div className='cd'>
                  <Card ans="Drizella"
                  link="/level32"
                  message="Use your brain."
                  image={drizellaimage}
                  title="Guess who I am?"
                  content="She is one of Cinderella's two stepsisters in the classic fairy tale. She is often portrayed as cruel and vain, with a penchant for belittling and mistreating Cinderella. is typically depicted as having darker hair and a more severe demeanor. She is often seen wearing a red dress and a green hat with feathers. Despite her negative personality traits, she is a complex character who has been explored in various adaptations of the Cinderella story." />
                  </div>
            </div>
            
          </div>
          <Footer 
          content ="Get ready to enter the magical world of Disney, where imagination and adventure come to life! With a vast array of iconic characters, Disney has captured the hearts and imaginations of audiences around the globe for generations. From the adventurous Aladdin to the courageous Mulan, the fearless Elsa to the enchanting Belle, each Disney character is unique and special in their own way. Whether you're a fan of classic characters like Mickey Mouse and Donald Duck or newer favorites like Moana and Rapunzel, there is no shortage of excitement and wonder to be found in the world of Disney. So, join us on a journey filled with magic, romance, and unforgettable characters that will capture your heart and leave you enchanted." heading="Possible options" content1="Snow white" content2="Rapunzel" content3="Jasmine" content4="Aladdin" content5="Anastasia" content6="Drizella" content7="Grimhilde"
         />
        </>
    )
}

export default Level2;