<template>
  <div class="contact">
    <div class="contact-title">Contact Me</div>
    <form
      class="contact-form"
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      @submit.prevent="handleSubmit()"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        name="name"
        type="text"
        class="form-control single-input"
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        class="form-control single-input"
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        class="form-control large-input"
        placeholder="Message"
        rows="10"
        required
      ></textarea>

      <button type="submit" class="form-control submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  width: 90%;
  margin: 0 auto;
}

.contact-title {
  font-size: 50px;
  color: #f0f5f9;
  font-family: "Fjalla One", sans-serif;
  margin-top: 25px;
}

form {
  margin-top: 30px;
}

.form-control {
  display: block;
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
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .contact-title {
    font-size: 36px;
    text-align: center;
    margin: 25px 0;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .single-input {
    width: 90%;
  }

  .large-input {
    width: 90%;
  }
  .submit {
    width: 95%;
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        contact: "",
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios.post(
        "/contact",
        this.encode({
          "form-name": "contact",
          ...this.form,
        })
          .then(() => {
            this.$router.push("thanks");
          })
          .catch(() => {
            this.$router.push("404");
          }),
        axiosConfig
      );
    },
  },
};
</script>
