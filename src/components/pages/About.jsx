import Timeline from "../Aboutus";
export default function Aboutus(){
    const events = [
        {
          title: "SEOUL AFFAIRS 3.0",
          date: "04-12-2022",
          description: "NosoloTribe was invited to Seoul Affairs 3.0, agala for K-pop and Korean culture addicts intown. The tribe ensured the audience'sentertainment via immersive  games anddance performances. Later, the audience leftwith smiling faces and gifts hampers, given away by the tribe",
          imgUrl: "/images/SEOUL AFFAIRS.JPG",
        },
        {
          title: "VR CHRISTMAS EVE",
          date: "24-12-2022",
          description: "Jinglefest was an event orchestrated by VR mall with Popsugarr, where NosoloTribe was invited to organize a Pop culture cosplay contest for all the fans, ranging from bollywood, Hollywood, Anime, K-pop and everything in between. This eve celebration captured the spirit and joy of Christmas gift giving through giveaways and prize distribution for the participants as well as the audience",
          imgUrl: "/images/christmasEve.png",
        },
        {
          title: "OHAYO JAPAN",
          date: "21-01-2023",
          description: "Asahigs, in collaboration with Japan Airlines and the Japanese embassy, organized a Japanese cultural fest in Somalwar high school, where the tribe put together a workshop about anime and cosplay culture in Japan and its influence in India. Later to demonstrate the same, a small cosplay extravaganza was presented for the students and the spectators by the tribe members.",
          imgUrl: "/images/ohayoJapan.png",
        },
        {
          title: "COSCARNIVAL",
          date: "29-01-2023",
          description: " Coscarnival is NosoloTribe's pièce de résistance, a part of Flavor fest organized by Popsugarr. A massive cosplay competition by the tribe attracted hundreds of participants and a crowd of over five thousand people. Prizes worth more than 15k were given by the courtesy of brands like Upgrad, Mama's merch, and palms merch. All the cosplayers were given custom hampers for their participation. The stage was entirely managed by the tribe, including hosting, backstage management, photography, sound design, and other coordinating.",
          imgUrl: "/images/cosCarnival.png",
        },
        {
            title: "MEME PARTY",
            date: "05-03-2023",
            description: " The tribe was invited to Meme party hosted by Awara Banjara productions. The tribe members dressed up impersonating popular viral memes. NosoloTribe set a different vibe to the entire event, making sure every other participant enjoyed the different activities set at the event, while the members did the same.",
            imgUrl: "/images/memeParty.png",
          },
          {
            title: "BAND BAJA BAZAAR",
            date: "07-04-2023 TO 10-04-2023",
            description: " An event organised by Twam events collaborating with NosoloTribe as entertainment partners, was a 4 days bash which included a variety of performances ranging from solo singers, bands, dances, poetry, stand up comedy, fashion show, Dj night and much more. The tribe brought together all the artists and provided them with a stage to showcase their talents and grow their supporters. Felicitations with gifts and prizes for the artists and the audience were provided by the tribe. The tribe served its audience with enjoyable and emmersive fun nights, putting a bright smile on everyone's faces",
            imgUrl: "/images/bandBajaBazaar.png",
          },
          {
            title: "SUZUME PREMIER",
            date: "20-04-2023",
            description: "Legendary anime director Makoto Shinkai came to to promote his new movie Suzume. The event organized by PVR Mumbai invited representatives from all major anime clubs of the country, NosoloTribe being one of them. Press conference and a one on one session with the man were the highlight of the day. The tribe's representative presented sir Shinkai with a goody bag to show appreciation to his legacy. Impressed by the unique name and motto of NØSOLO, the tribe was given a personalized autographed poster by sir Makoto Shinkai",
            imgUrl: "/images/suzume.png",
          },
          {
            title: "Halloween 3.0",
            date: "28-10-2023",
            description: "Dia de Muertos got a spooktacular twist at Halloween 3.0!  Over 2 thrilling days, 9,000 attendees descended upon our event for a unique mashup.  Witness jaw-dropping costumes from passionate cosplayers, lose yourself in electrifying live music and heart pumping DJ sets, and dive into a whirlwind of festive surprises. Halloween 3.0 wasn't just a party, it was a celebration of chills, culture, and community",
            imgUrl: "/images/halloween3.0.png",
          }
      ];
    
      return (
        <>
        <div className="aboutUsHero"> 
            <h1>OUR MISSON</h1>
            
            <div className="aboutUsReto">
            <p>At NosoloTribe, our mission is to create a space where Anime and Pop culture fans can come together to express themselves, learn, and grow through their shared love for the culture. We aim to foster a sense of community, creativity,and inclusivity while celebrating the diverse characters and stories that make the anime world so enchanting</p>
            </div>
            </div>
        <div className="App">
          <Timeline events={events} />
        </div>
        <div className="lastEvent">  
        <div className="timeline-event lastElement">
            <h2>Current Event</h2>
            <p> 31-10-2023</p>
            <img src="/images/poster.jpg" alt="Current Event" />
            <p>Halloween - Glitch Night, the most anticipated neon-lit, futuristic dystopian party of the year! This cyberpunk-themed extravaganza promises a night like no other with a massive cosplay competition boasting a hefty prize pool, electrifying performances by bands, singers, dancers, and top DJs. Explore the diverse stalls featuring small businesses and indulge in delicious food and snacks. With last year's 9k attendees already buzzing in excitement, this year’s event is set to be even bigger and better.</p>
          </div>
          </div>
        </>
)}