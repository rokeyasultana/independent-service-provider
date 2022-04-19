import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div>
            <h1 id="banner-title" className='text-center mt-5'>Customers Reviews</h1>
           <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 ms-5 me-5">
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Refrigerator Repair for Michell</h5>
        <p class="card-text">Highly highly recommended this person!! He have excellent customer service,very knowledge,very accommodating and friendly! know there are lots of companies and person but this is the one person you should use. Very reasonable, professional and honest!!!</p>
        <p>Rating: 5</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Dishwasher Repair for Lilya Kay</h5>
        <p class="card-text">This guy is the absolute best!! I have now used him on 2 separate occasion, and each time was great.Always on time and great communication.This man was extremely professional and knowledgeable. Would recommend 10 times out of 10</p>
        <p>Rating: 5</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Microwave Oven Repair for W.christopher</h5>
        <p class="card-text">Cool,friendly service was extremely professional :)</p>
        <p>Rating: 5</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Ice Maker Repair for Kang</h5>
        <p class="card-text">This person was extremely professional.Highly recommended this person</p>
        <p>Rating: 5</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reviews;