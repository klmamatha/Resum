document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');
    const professionalSummary = document.getElementById('professional-summary');
    const mTech = document.getElementById('m-tech');
    const bTech = document.getElementById('b-tech');
    const classx = document.getElementById('Class-X');
    const Diploma = document.getElementById('Diploma');
    const tcs = document.getElementById('tcs');
    const ProjectExperience = document.getElementById('Project Experience');
    const PersonalDetails = document.getElementById('Personal Details');
    const Reference = document.getElementById('Reference');
    let Declaration = document.getElementById('Declaration');

    Reference.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Personal Details</h3>
        <p>Reference:<br> 
         Kian kumar software engineer in Capgemini .+919381660629 <br> <br> 
         K.sai kumar software engineer TCS .+91 6303160844.
        </p>
      `;
    });
    Declaration.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Personal Details</h3>
        <p> I am confident that I shall strive and succeed in the position applied to the satisfaction of my superiors and 
        justify the assignments entrusted on me. The above said information is true and authentic to the best of my 
        knowledge. 
        </p>
      `;
    });
    PersonalDetails.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Personal Details</h3>
        <p>Personal Details:<br>
        Full Name : Kadinti Kranthi Kumar<br> 
        Mother Name : K.Lakshminarayanamma<br> 
        Father Name : K.Narendranath<br>
        Date of Birth : 13-11-1997 <br>
        Marital Status : married<br>
        Permanent Address : H.No:12B, Chukkaluru, Tadipatri (m), Anantapur (DST), Andhrapradesh, 515415.<br> 
        Nationality : INDIAN<br> 
        Hobbies : Yoga, meditation, Reading books.<br>
         Language known : Telugu, English, Hindi.<br>
         
        </p>
      `;
    });

    ProjectExperience.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Project Experience</h3>
        <p> Project Name: Pella Oracle T&M engagement    ReactJS, Redux, HTML, CSS3 <br>
        Client: Pella Oracle T&M engagement  July -2023 to Till date <br>
       Responsibilities: <br> 
       • Developed and tested Cisco DNX components that meets accessibility of web browser standards 
       for the website. <br> • Maintained states in the stores and dispatched the actions using redux. <br>
       • In Phase Two, worked closely with the Back-End team to display data using the Custom 
       Components, library Components, and Redux. <br>
       • Interacted with Testing Team, Scrum Masters, and Business Analysts for fixing of Issues.<br> 
       • Participated in writing code at the application level for interaction with APIs using AJAX & JSON<br> 
<br>             <br>                 <br>
       Project Name: DBS - MOT - Umbrellas JavaScript,HTML, CSS3<br>
Client: DBS - MOT - Engagement Feb -2022 to july-2023 <br>
Responsibilities:<br>
• Created a custom responsive web application to replace a legacy line-of-business web 
application using JavaScript, CSS, and HTML <br>
•  Worked on Cross-Browser Compatibility and tested each & every web application on 
popular web browsers such as Chrome, Internet Explorer, Firefox, and Safari.<br>
• Used Media Queries to deal with different CSS related issues on different devices.<br>
• Involved in write application-level code to interact with APIs, Web Services using AJAX, 
JSON, and XML.
        </p>
      `;
    });
    tcs.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Professional Summary</h3>
        <p> Tata Consultancy Services, Hyderabad July -2024 -  Till now.<br>
        Tata Consultancy Services, Hyderabad July -2023 - july 2024. 
        <br>Tata Consultancy Services, Bangalore Feb -2022 - July -2023 </p>
      `;
    });

    professionalSummary.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h3>Professional Summary</h3>
        <p>Experienced IT Frontend with 2.5 years of experience, including around 2+ years in React JS. Skilled in
        developing high-quality, user-friendly web applications with problem-solving abilities. Up-to-date with emerging
        technologies and dedicated to delivering projects on time and within budget.</p>
      `;
    });

    mTech.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h2>M-Tech Details</h2>
        <table>
          <tr>
            <th>Course</th>
            <th>Institute/School</th>
            <th>University/Board</th>
            <th>Pass Out Year</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td>M-Tech</td>
            <td>JNTUA</td>
            <td>JNTUA</td>
            <td>2023</td>
            <td>8.4/10</td>
          </tr>
        </table>
      `;
    });
    bTech.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h2>M-Tech Details</h2>
        <table>
          <tr>
            <th>Course</th>
            <th>Institute/School</th>
            <th>University/Board</th>
            <th>Pass Out Year</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td>B-Tech</td>
            <td>Audisankara college of egineering and technology gudur </td>
            <td>JNTUA</td>
            <td>2019</td>
            <td>79</td>
          </tr>
        </table>
      `;
    });
    classx.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h2>M-Tech Details</h2>
        <table>
          <tr>
            <th>Course</th>
            <th>Institute/School</th>
            <th>University/Board</th>
            <th>Pass Out Year</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td>SSC</td>
            <td>Padmavani school Tadipatri</td>
            <td>SSC</td>
            <td>2013</td>
            <td>92</td>
          </tr>
        </table>
      `;
    });
    Diploma.addEventListener('click', function () {
        mainContent.innerHTML = `
        <h2>M-Tech Details</h2>
        <table>
          <tr>
            <th>Course</th>
            <th>Institute/School</th>
            <th>University/Board</th>
            <th>Pass Out Year</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td>Diploma</td>
            <td>Govt.polytechnic Anantapur</td>
            <td>JNTUA</td>
            <td>2016</td>
            <td>87.63</td>
          </tr>
        </table>
      `;
    });
});
