<template>
  <div class="contact">
    <div class="contact-title">Contact Me</div>
    <div class="contact-form">
      <form id="contact-form" method="post" data-netlify="true">
        <input
          name="name"
          type="text"
          class="form-control single-input"
          placeholder="Name"
          required
        />
        <br />
        <input
          name="email"
          type="email"
          class="form-control single-input"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          name="subject"
          type="text"
          class="form-control single-input"
          placeholder="Subject"
          required
        />
        <br />
        <textarea
          name="message"
          class="form-control large-input"
          placeholder="Message"
          rows="10"
          required
        ></textarea>
        <br />

        <input type="submit" class="form-control submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-title {
  font-size: 50px;
  color: #1e2022;
  font-family: "Fjalla One", sans-serif;
  margin: 25px 0 0 50px;
}

form {
  margin: 30px 0 0 50px;
}

.form-control {
  margin-bottom: 15px;
  padding: 10px;
  font-family: "Source Sans Pro", sans-serif;
}

.single-input {
  width: 30%;
}

.large-input {
  width: 80%;
}

.submit {
  background-color: #52616b;
  color: #fff;
  border: none;
  font-size: 16px;
  padding: 10px 80px;
}

@media only screen and (max-width: 767px) {
  .contact {
    height: calc(100vh - 175px);
  }
  .form-control {
    width: 85%;
    margin: 0 auto 15px auto;
  }
}
</style>


