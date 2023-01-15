import React from 'react';
import img1 from '../assets/media/img1.jpg';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Product from '../components/Product';
import Footer from '../components/Footer';


const Programs = () => {

  const programs = [
    {
      title: '67 Transformational Program',
      image: img1,
      price: 99,
      description: 'The 67 is a program to transform your health now… and for LIFE!. The 67 is a life altering curriculum and blueprint to reveal your unseen strengths and embed new skills that will serve you for the rest of your life.',
      topics: ['Get inspiring support, thoughtful guidance and expert instruction to craft and build the body that not only looks good, but serves you through your 50s, 60s, 70s and beyond.', 'Improve your musculation, energy, vitality, strength, stability, sleep, confidence and cardiovascular and cellular health.'],
      long: true,
      longTopics: ['Lay the foundation for not just a longer life, but a healthier quality of life, and avoid disease, muscle atrophy, brain fog and lack of energy.', 'Experience the success of having increased levels of fitness, enhanced musculature, improved vivacity and clarity and end the anxiety, frustration, doubt and confusion caused by the fad diets, magic bullet hype, and inexperienced, non-applicable and uneducated advice.', "Discover why incremental, day-by-day progress done regularly, over time, leads to outstanding results and why quick fix diets and supplements don’t work.", "Get fitness, nutritional and supplement direction and recommendations based on scientifically proven research.", "Personalized VIP access to the proprietary Andrew Kolasko Life Center app.  It will house your very own workout plan(s), diet plan(s) and exclusive access to tons of invaluable resources for longevity, musculation, fitness, nutrition, bio-tracking, and all things health. Get all your health, fitness and wellness training and tools in ONE PLACE!"]
    },
    {
      title: 'Annual One-On-One Training and Support',
      image: img1,
      price: 199,
      description: "Be the healthiest and fittest version of future you with the TURN BACK TIME. Get daily access to Andrew. Receive customized year-round training, nutrition and motivation to maximize your body’s potential and achieve your fitness and health goals.",
      topics: ["See consistent improvements every week and every month, building progressively throughout the year to build your ideal body and the foundation of health, creating your best future self.", "Be provided your personal blueprint for improved musculation, increased energy and vitality, greater stability and robust cardiovascular and metabolic health."],
      long: true,
      longTopics: ["Experience what it’s like to have your own personal trainer and resource for expert guidance whenever you need it.  Get the plan that is right for you and take the guesswork out of fitness, health and nutrition plan.", "Get a customized masterplan that’s perfect for you and avoid the stopping and starting of generic fitness programs that were never tailored to your specific needs.", "Reveal and establish your reason ‘why’.  Your ‘why’ will be constantly reinforced to you and keep you encouraged, motivated, and on the track to attaining your goals and give you your sustained long-term results.", "Personalized VIP access to the proprietary Andrew Kolasko Life Center app.  This app will hold your very own workout plan(s), diet plan(s) and exclusive access to tons of invaluable resources for longevity, musculation, fitness, nutrition, bio-tracking, and all things health. Get all your health, fitness and wellness training and tools in ONE PLACE!"]
    }
  ];

  return (
    <div style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider typeOfSlide="Programs"/>
      </div>
      <Subscribe color='#363d10'/>
      <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10'}}>Products and Programs</h2>
      {
        programs.map((item, index) => <Product item={item} index={index}/>)
      }
      <Footer/>
    </div>
  )
}

export default Programs