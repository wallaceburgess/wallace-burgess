<template>
  <div class="about">
    <div class="about-header">About Me</div>
    <div class="about-text">
      <div class="image-container">
        <img src="../assets/wallace-headshot.jpeg" />
      </div>
      Thanks for visiting wallaceburgess.com! Here you'll find a sampling of my
      writing over the last four years, including blog posts, sociology papers,
      Op-Ed pieces, research projects, and essay writing.
      <br />
      <br />
      Having double majored in Sociology and Writing and Rhetoric at Syracuse
      University, most of my time was spent researching and writing about social
      issues, learning new writing techniques, and building my skills as a
      writer and researcher. I was able to gain experience in data collection
      (through interviews, observations, and data sets), and learn how to turn
      that data into real world conclusions, to bring it from abstract to
      applicable. Not only that, but the Sociological portion of my education
      helped foster a stronger sense of social responsibility, and a heightened
      awareness of the social world we function in.
      <br />
      <br />
      My writing courses in the latter years of my education helped improve my
      writing skills on a technical level, but also in more intangible ways.
      Things like learning about a writer's rights and responsibilities, how to
      better visualize data for a target audience, and improving my editing and
      collaborative writing skills through my work in the Syracuse University
      Writing Center. I came away from this education with a new appreciation
      for the work that goes on behind the scenes, before pen ever touches
      paper, and a desire to continue improving my skills, and helping others do
      the same through collaboration and editing.
    </div>
  </div>
</template>
<style scoped>
.about {
  width: 90%;
  margin: 0 auto;
}
.about-header {
  font-size: 50px;
  color: #f0f5f9;
  font-family: "Fjalla One", sans-serif;
  margin-top: 25px;
}

.image-container img {
  float: right;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 10px;
}

.about-text {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #fff;
  margin: 25px auto;
  padding: 20px;
  font-size: 18px;
  box-shadow: #000 10px 10px 25px;
}

@media only screen and (max-width: 767px) {
  .about-header {
    font-size: 36px;
    text-align: center;
    margin: 25px 0;
  }
  .about-text {
    width: auto;
    margin: 25px 15px 50px 15px;
  }
}

@media only screen and (max-width: 640px) {
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .about-text {
    font-size: 16px;
  }
}
</style>