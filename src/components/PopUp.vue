<template>
  <div class="popup" id="popup" @click="listen()">
    <div class="popup__body">
      <svg @click="closePopup()"
           class="popup__closeBtn" xmlns="http://www.w3.org/2000/svg"
           height="24" viewBox="0 0 24 24"
           width="24"><path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41
        17.59 19 19 17.59 13.41 12z"/>
      </svg>
      <form action="#" class="popup__form" @submit="validateForm()" id="form">
        <p class="popup__emailError" v-if="this.errors > 0">Заполните верно: example@mail.com</p>
        <input type="email"
               class="popup__form_email"
               placeholder="Email"
               required
        >
        <input type="submit" value="Отправить" class="popup__form_submit" >
      </form>
      <img class="popup__form_sending" src="../assets/images/loading.gif" alt="loader">
      <p class="popup__thanks">Спасибо!</p>
    </div>
  </div>
</template>

<script>
//  eslint-disable-next-line
const emailCheckRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
export default {
  name: 'PopUp',
  data() {
    return {
      errors: 0,
    };
  },
  methods: {
    closePopup() {
      const popup = document.getElementById('popup');
      // const popupBody = document.querySelector('.popup__body')
      //  eslint-disable-next-line
      const body = document.body;

      popup.classList.remove('popup-active');
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    },
    listen() {
      const popup = document.getElementById('popup');
      // const popupBody = document.querySelector('.popup__body')
      //  eslint-disable-next-line
      const body = document.body;
      popup.addEventListener('click', (el) => {
        if (el.target.classList.contains('popup')) {
          this.closePopup();
        }
      });
    },
    validateForm() {
      const email = document.querySelector('.popup__form_email');
      const form = document.getElementById('form');
      const loading = document.querySelector('.popup__form_sending');
      const thanks = document.querySelector('.popup__thanks');
      if (emailCheckRegex.test(email.value)) {
        this.errors = 0;
        form.classList.add('popup__form-sended');
        loading.classList.add('popup__form_sending-active');
        //  eslint-disable-next-line
        console.log(email.value)
        setTimeout(() => {
          loading.classList.remove('popup__form_sending-active');
          thanks.classList.add('popup__thanks-active');
          setTimeout(() => {
            this.closePopup();
            form.reset();
            thanks.classList.remove('popup__thanks-active');
            form.classList.remove('popup__form-sended');
          }, 3000);
        }, 5000);
      } else {
        //  eslint-disable-next-line
        this.errors++;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';
  .popup {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    background: rgba($black, .6);
    &__emailError {
      text-align: left;
      font-size: 12px;
      color: red;
    }
    &__closeBtn {
      cursor: pointer;
      margin: 20px;
    }
    &__body {
      border-radius: 10px;
      background: $white;
      text-align: right;
    }
    &__form {
      margin: 100px;
      &_email {
        width: 100%;
        margin-bottom: 20px;
        padding: 10px 20px;
        border-radius: 10px;
        border: 1px solid $grey;
        &:focus, &:active {
          border-color: darken($grey, 50%);
        }
      }
      &_submit {
        margin: 0 auto;
        padding: 10px;
        border: 1px solid $grey;
        border-radius: 10px;
        background: $grey;
        text-align: center;
        color: $black;
        cursor: pointer;
        &:hover {
          background: darken($grey, 10%);
        }
      }
      &-sended {
        display: none;
      }
      &_sending {
        display: none;
        justify-content: center;
        align-items: center;
        margin: 100px;
        &-active {
          display: flex;
        }
      }
    }
    &__thanks {
      display: none;
      &-active {
        display: flex;
        margin: 100px;
      }
    }
    &-active {
      display: flex;
    }
  }
</style>
