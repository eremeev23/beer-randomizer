<template>
  <v-container>
    <div v-if="getUser" class="account">
      <div class="account__information">
        <div class="account__image-wrapper">
          <img :src="getUser.avatar" alt="" >
        </div>

        <div class="account__info">
          <h2>
            {{getUser.first_name}} {{getUser.last_name}}
          </h2>
          <p>
            Employment: {{ getUser.employment.title }}
          </p>
          <p>
            Age: {{ getUser.age }}
          </p>
        </div>
      </div>

      <div class="account__recommended">
        <p>And we recommend you "{{ getBeer.name }}" ({{ getBeer.alcohol }}) by <strong>{{ getBeer.brand }}</strong></p>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'HomeView',

  computed: {
    ...mapGetters(['getUser', 'getBeer'])
  },
}
</script>

<style lang="scss" scoped>
.account {
  display: flex;

  &__information, &__recommended {
    flex: 1;
  }

  &__image-wrapper {
    margin: 24px 0;
    width: 180px;
    height: 180px;
    background-color: rgba(28, 30, 38, 0.8);
    border: 1px solid rgba(246, 246, 246, 0.2);
    border-radius: 50%;
    box-shadow: 1px 4px 14px 2px rgba(139, 152, 176, 0.2), inset 1px 4px 14px 2px rgba(139, 152, 176, 0.2);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    h2 {
      margin-bottom: 32px;
    }
  }

  &__recommended {
    height: 220px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    &__info {
      h2 {
        margin-bottom: 22px;
      }
    }

    &__recommended, &__information {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
}
</style>