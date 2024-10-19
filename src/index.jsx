<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="./vansh_photo.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
  <title>Vansh's Profile Page</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: "Montserrat", sans-serif;\n      background: rgba(255, 255, 255, 0.699);\n      height: 100vh;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .profile-card {\n      width: 350px;\n      padding: 20px;\n      border-radius: 15px;\n      background: linear-gradient(to bottom right, #ffe8cc, #f4bbd3);\n      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n      text-align: center;\n    }\n    .profile-card img {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      object-fit: cover;\n      margin-bottom: 10px;\n    }\n    .profile-card h1 {\n      font-size: 1.5rem;\n      margin-bottom: 5px;\n    }\n    .profile-card p {\n      font-size: 0.9rem;\n      color: #666;\n      margin-bottom: 20px;\n    }\n    .social-icons {\n      display: flex;\n      justify-content: center;\n      gap: 15px;\n      margin-bottom: 20px;\n    }\n    .social-icons a {\n      font-size: 1.2rem;\n      color: #333;\n      text-decoration: none;\n    }\n    .social-icons img{\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      object-fit: cover;\n      margin-bottom: 10px;\n    }\n    .profile-card .stats {\n      font-size: 1.2rem;\n      margin-bottom: 20px;\n    }\n    .profile-card .stats p {\n      margin: 5px 0;\n    }\n    .links {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n    .links a {\n      padding: 10px;\n      background-color: #000;\n      color: #fff;\n      text-decoration: none;\n      border-radius: 25px;\n      transition: background 0.3s ease;\n    }\n    .links a:hover {\n      background-color: #444;\n    }\n  '
    }}
  />
  <div className="profile-card">
    <img src="./vansh_photo.jpg" />
    <h1>Vansh Srivastava</h1>
    <p>Full Stack Web Developer</p>
    <div className="social-icons">
      <a href="https://www.instagram.com/vanshsrivastava49/" target="_blank">
        <img src="./insta.png" />
      </a>
      <a href="https://www.linkedin.com/in/vansh-srivastava49/" target="_blank">
        <img src="./linkedin.png" />
      </a>
      <a href="https://x.com/Vansh_49" target="_blank">
        <img src="./twitter.png" />
      </a>
      <a href="https://github.com/vanshsrivastava49" target="_blank">
        <img src="./github.webp" />
      </a>
    </div>
    <div className="stats">
      <h3>2+</h3>
      <p>years of experience</p>
      <h3>100+</h3>
      <p>customers worldwide</p>
    </div>
    <div className="links">
      <a href="https://ghapla-in-mausam.vercel.app/" target="_blank">
        Weather App
      </a>
      <a href="https://campusbuzz.vercel.app/" target="_blank">
        CampusBuzz
      </a>
      <a href="https://github.com/vanshsrivastava49/Sahayak" target="_blank">
        Sahayak
      </a>
    </div>
  </div>
</>
