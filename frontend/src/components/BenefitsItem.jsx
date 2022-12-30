import React, {useState} from 'react';
import bioTrackingIcon from '../assets/icons-logos/bio-tracking-icon.png';
import fitnessIcon from '../assets/icons-logos/fitness-icon.png';
import healthIcon from '../assets/icons-logos/health-icon.png';
import longevityLivingIcon from '../assets/icons-logos/longevity-living-icon.png';
import musculationIcon from '../assets/icons-logos/musculation-icon.png';
import nutritionIcon from '../assets/icons-logos/nutrition-icon.png';

const BenefitsItem = ({itemValue = 0}) => {
  let [openMore, setOpenMore] = useState(false);

  const toggleOpen = () => {
    setOpenMore(openMore => !openMore);
    console.log(openMore);
  };

  const items = [
    {
      image: <img src={longevityLivingIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />,
      text: "Increasing our health span is a combination of balance, physical exercise and movement, nutrition, reducing stress, meaningful, connection, mindfulness, a sense or purpose and emerging biohacking modalities.",
      long: false,
      longText: ''
    },
    {
      image: (
        <img src={musculationIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />
      ),
      text: "Muscularity and looking fit enhance your attractiveness and are positive byproducts of increased physical performance, injury prevention and reducing disease risk and/or progression.",
      long: false,
      longText: ''
    },
    {
      image: <img src={fitnessIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />,
      text: "Exercise is the cornerstone of health and looking great.  Physical activity, resistance training and optimum protein intake is critical for men between the ages of 45 and 65.",
      long: true,
      longText: ' Strategies to bolster muscular strength and lean body muscle mass as you age are vital to your quality of life and longevity.'
    },
    {
      image: (
        <img src={nutritionIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />
      ),
      text: "Everyone has their own bio-chemical individuality.  What is optimum nutrition differs from person to person.  How much protein, carbohydrates and fat you should eat, which supplements you need and which you don’t, and how many daily calories you should consume varies wildly.",
      long: true,
      longText: "There is no such thing as an average person and/or a perfect diet. Your nutritional needs should be calibrated specifically to you. No matter how much exercise you do, your health and longevity results are maximized or limited by your diet."
    },
    {
      image: <img src={bioTrackingIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />,
      text: "Tracking your fitness and health development and implementing reliable indictors to gauge your progress is essential.  To live your healthiest and longest life possible, your physical activity levels, your diet, health history, and many other factors must be taken into account.",
      long: true,
      longText: " Monitoring your biomarkers are necessary to advance your health and exercise goals forward."
    },
    {
      image: (
        <img src={healthIcon} alt='bioTracking icon' style={{width: '4rem', height: '4rem', marginRight: "1rem" }} />
      ),
      text: "Objective measures of health status shift in response to what you eat, how you move, how you respond to stress and the quality of your sleep.",
      long: false,
      longText: ""
    },
  ];

  return (
    <div style={{ display: "flex", margin: "2rem 0rem", alignItems: 'center' }}>
      {items[itemValue].image}
      <p style={{ width: "100%", marginTop: "1rem", fontFamily: "'CMU Serif', sans-serif" }}>
        {items[itemValue].text}
        {openMore && items[itemValue].longText}
        {
          items[itemValue].long ? (
            <button className="moreAboutBtn" onClick={toggleOpen} >
              {openMore ? ('Less About') : ('More About')}
            </button>
          ) : ('')
        }
      </p>
    </div>
  );
}

export default BenefitsItem