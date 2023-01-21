import React from 'react';
import img16 from '../assets/media/img16.jpg';

const Recommendation = () => {
  return (
    <div className='reccomendationsContainer'>
      <div className="reccomendationsItems">
        <div className="reccomendations">
          <h4>Reccomendations</h4>
          <p>Exercise is associated with decreased mortality.  Absolutely no disputing this. As well as reduction in major age-related diseases and conditions such as dementia, cardiovascular disease, type 2 diabetes, cancer and frailty.  Studies investigating the impact of exercise on cancer often show reduced risk of developing cancer and enhanced outcome during remission.</p>
          <p>Exercise also improves metabolic flexibility and insulin sensitivity, lower glucose levels and improve blood flow with the formation of new blood vessels.</p>
          <p>It is crucial to strengthen muscles to prevent bone breaks in when you are older.  Muscle deterioration is also steady the older you get so it is important to build up the muscle now so that in our later years that will be there for us.  We need to think now about what we want to be physically at age 70, 80 and so forth.</p>
          <p>Consider the totality of your caloric intake.  Don’t overcomplicate your diet.  It’s not that you can’t have carbohydrates, fruit… Avoid processed foods.  Fibre is important.  Adequate nutrition.  Need proper protein intake everyday (1.6 grams of protein intake per kilogram of bodyweight per day for active individuals).  Need for muscle mass and muscle recovery.  In the case of osteoarthritis we need certain nutrients for our cartilage. </p>
          <p>Hormesis:  New emerging sciences are finding that embracing extreme cold and extreme heat could force your body to upgrade its defences and power up its microscopic repair systems which could cut the risks of disease and add years to your life.</p>
        </div>
        {/* <div className="reccomendationsQuotes">
          <h4>Quotes</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus.</p>
        </div> */}
        <div className="reccomendationsImage">
          <img src={img16} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Recommendation