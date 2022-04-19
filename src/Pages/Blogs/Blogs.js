import React from 'react';

const Blogs = () => {
    return (
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 ms-5 me-5">
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Difference between authorization and authentication?</h5>
        <p class="card-text">Authentication is the process of verifying who you are. Authorization is the process of verifying that you have access to something Gaining access to a resource. Authorization decides if the individual is user or not on the on the hand authentication figures out What consent do user have? Authentication manages passwords, once sticks, biometric data, and other data gave or entered by the user. Authorization deals with settings that are carried out and kept up with by the organization.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
        <p class="card-text">Firebase Authentication build secure authentication systems easy, while improving the sign-in and on boarding experience for end users. It’s very good complete back-end solution. With firebase you can do all sort of authentication most common ones are by username email and password. But you can of course use log in with twitter login with Facebook login, GitHub login and all the things that you can imagine which are most popular. There are lots of firebase alternative to implement authentication. Like: Pares, Supabase, Kuzzle, Back4pp.They also provide authentication systems.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">What other services does firebase provide other than authentication?</h5>
        <p class="card-text">Firebase not only provide you authentication system but also it has lots of sevarel system. Firebase Real-time Database and Cloud Firestore provide database services. Cloud Storage provides massively scalable file storage. Test Lab is an assistance that gives virtual and actual gadget admittance to test your application in genuine climate. Cloud Messaging is a messaging service that allows you to send notifications between the server and user-devices. Cloud Messaging is an informing administration that permits you to send warnings between the server and user gadgets.</p>
      </div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Blogs;