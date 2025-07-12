import Header from "../../components/Header"
import SkillCard from "../../components/SkillCard"

const HeroSection = () =>{
    return(
        <>
        <Header/>
       <SkillCard
  name="Krati"
  profilePhoto="https://example.com/krati.jpg"
  skillsOffered={['React', 'Python']}
  skillsWanted={['DevOps', 'System Design']}
  rating={4.8}
  isLoggedIn={true}
  onRequest={() => alert('Requested')}
/>

        </>
    )
}

export default HeroSection